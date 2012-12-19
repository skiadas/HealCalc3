define(['can'], function(can) {
    var Rotation = can.Construct({
        init: function(spec, nick, spells) {
            this.nick = nick || 'foo';
            this.spec = spec;
            this.specid = spec.id;
            this.spells = new can.Observe.List([]); // Meant to extend spells with a 'no:' property
            var possibles = [];
            can.each(spells, function(spell) { possibles.push(new can.Observe({no: 1, sp: spell}))});
            this.possibles = possibles;
            this.results = new can.Observe({});
            this.val_update();
        },
        _looper : function(fname, delta) {
            var val = 0, spells = this.spells, i;
            for (i=spells.length; i--;) { val += spells[i].no * spells[i].sp[fname].call(spells[i].sp, delta); }
            return val;
        },
        fheal: function(delta) { return(this._looper('fheal', delta)); },
        fct: function(delta) { return(this._looper('fct', delta)); },
        fmana: function(delta) { return(this._looper('fmana', delta)); },
        val_update: function(delta) {
            this.results.attr({
                'heal': Math.round(this.fheal(delta)),
                'ct': Math.round(this.fct(delta)*100)/100,
                'mana': Math.round(this.fmana(delta))
            });
            this.results.attr({
                'hps': Math.round(this.results.heal/this.results.ct * 10)/10,
                'hpm': Math.round(this.results.heal/this.results.mana),
                'mps': Math.round(this.results.mana/this.results.ct *100)/100
            });
        }
    });
    return Rotation;
});