define(['can'], function(can) {
    var Rotation = can.Construct({
        init: function(spec, nick) {
            this.nick = nick || 'foo';
            this.spec = spec;
            this.specid = spec.id;
            this.spells = new can.Observe.List([]); // List of objects {no: , spell: }
            this.results = new can.Observe({});
            this.val_update();
        },
        _looper : function(fname, delta) {
            var val = 0, spells = this.spells, i;
            for (i=spells.length; i--;) { val += spells[i].no * spells[i][fname].call(spells[i], delta); }
            return val;
        },
        fheal: function(delta) { return(this._looper('fheal', delta)); },
        fct: function(delta) { return(this._looper('fct', delta)); },
        fmana: function(delta) { return(this._looper('fmana', delta)); },
        val_update: function(delta) {
            this.results.attr({
                'heal': this.fheal(delta),
                'ct': this.fct(delta),
                'mana': this.fmana(delta)
            }).attr({
                'hps': this.heal/this.ct,
                'hpm': this.heal/this.mana,
                'mps': this.mana/this.mps
            });
        }
    });
    return Rotation;
});