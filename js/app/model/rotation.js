define(['can'], function(can) {
    var Rotation = can.Construct({
        init: function(spec, nick) {
            this.nick = nick || 'foo';
            this.spec = spec;
            this.specid = spec.id;
            this.spells = new can.Observe.List([]); // Meant to extend spells with a 'no:' property
            this.results = new can.Observe({}); // Contains statistics on the rotation
            this.val_update();
        },
        contains_not: function(spell) {
            // Needs to return true for those spells that should be included in a list
            // for spells to add to the spec.
            // Exclude other specs, and spells already in this.spells
            if (spell.specid !== this.specid) {
                return false;   // Wrong spec
            } else {
                var spells = this.spells,
                    i = spells.length;
                while (i--) {
                    if (spells[i].sp === spell) { return false; }  // spell exists
                }
            }
            return true;
        },
        add: function(spell) {
            // Adds the spell to the rotation
            // In the future, this part should decide the count for new spells
            // console.log({no: 1, sp: spell})
            this.spells.push({no: 1, sp: spell});
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
                'mps': Math.round(this.results.mana/this.results.ct *100)/100,
                'toom': 'NA',
            });
        }
    });
    return Rotation;
});