define(['can', 'app/model/spec', 'app/model/spell'], function(can, specs, spells) {
    var Rotation = can.Construct({
        import: function(str) {
            console.log('In import', str)
            var arr = str.split('&'),
                options = {
                    nick: decodeURIComponent(arr.shift()),
                    spec: specs.find(arr.shift()),
                    spells: [],
                },
                splt, spell,
                i = arr.length;
            while (i--) {
                splt = arr[i].split(':');
                options.spells.push({no: splt[0], sp: spells.find(parseInt(splt[1]))});
            }
            // console.log(new this(options));
            return new this(options);
        },
    }, {
        init: function(options) {
            this.nick = options.nick || 'foo';
            this.spec = options.spec;
            console.log("In init", options)
            this.specid = options.spec.id;
            // Each spell is an object { no: , sp: spell }
            this.spells = new can.Observe.List(options.spells || []); 
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
        export: function() {
            var arr = [];
            arr.push(encodeURIComponent(this.nick));
            arr.push(this.spec.name);
            this.spells.each(function(spell) { arr.push(can.sub('{no}:{sp.id}', spell));});
            return(arr.join("&"));
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