define(['can', 'app/model/spec', 'app/model/spell'], function(can, specs, spells) {
    var Rotation = can.Construct({

        // Turns a rotation string into a rotation object
        decode: function(str) {
            var arr = str.split('&'),
                options = {
                    nick: decodeURIComponent(arr.shift()),
                    spec: specs.find(arr.shift()),
                    results: {
                        target_time: parseInt(arr.shift().replace('time:',''))
                    },
                    spells: [],
                },
                splt, spell,
                i = arr.length;

            while (i--) {
                splt = arr[i].split(':');
                options.spells.push({
                    no: splt[0],
                    sp: spells.find(parseInt(splt[1]))
                });
            }
            return options;
        },
        
        // Creates a string from a rotation object
        encode: function(rotation) {
            var arr = [];
            
            arr.push(encodeURIComponent(rotation.nick));
            arr.push(rotation.spec.name);
            arr.push('time:' + rotation.results.target_time)
            $.each(rotation.spells, function(_, spell) {
                arr.push(can.sub('{no}:{sp.id}', spell));
            });
            return( arr.join("&") );
        },
        import: function(str) {
            return new this(this.decode(str));
        },
    }, {
        init: function(options) {
            this.nick = options.nick || 'foo';
            this.spec = options.spec;
            this.specid = options.spec.id;
            // Each spell is an object { no: , sp: spell }
            this.spells = new can.Observe.List(options.spells || []); 
            this.results = new can.Observe({}); // Contains statistics on the rotation
            this.results.attr('target_time', 
                    (options.results && options.results.target_time) || 120);
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
                    if (spells[i].sp === spell) {
                        return false; // spell exists
                    }
                }
            }
            return true;
        },
        add: function(spell) {
            // Adds the spell to the rotation
            // In the future, this part should decide the count for new spells
            this.spells.push({
                no: 1,
                sp: spell
            });
            this.val_update();
        },
        export: function() {
            return Rotation.encode(this);
        },
        // Helper function acting like inject
        _looper : function(fname, delta) {
            var val = 0, spells = this.spells, i;
            for (i=spells.length; i--;) { val += spells[i].no * spells[i].sp[fname].call(spells[i].sp, delta); }
            return val;
        },
        fheal: function(delta) {
            return(this._looper('fheal', delta));
        },
        fct: function(delta) {
            return(this._looper('fct', delta));
        },
        fctp: function(delta) {
            return(this.fct(delta) / this.results.target_time);
        },
        fmana: function(delta) {
            return(this._looper('fmana', delta));
        },
        fhps: function(delta) {
            return(this.fheal(delta) / this.fct(delta));
        },
        fehps: function(delta) {
            return(this.fheal(delta ) /this.results.target_time);
        },
        fhpm: function(delta) {
            return(this.fheal(delta) / this.fmana(delta));
        },
        fmps: function(delta) {
            return(this.fmana(delta) / this.fct(delta));
        },
        femps: function(delta) {
            return(this.fmana(delta) / this.results.target_time);
        },
        fidle: function(delta) {
            return(this.results.target_time - this.fct(delta));
        },
        fidlep: function(delta) {
            return(this.fidle(delta) / this.results.target_time);
        },
        ftoom: function(delta) {
            return(this.spec.ftotal_mana(delta) / 
                    Math.max(this.femps(delta) - this.spec.fregen_mps(delta), 0)
            );
        },
        val_update: function(delta) {
            this.results.attr({
                'heal': Math.roundn(this.fheal(delta)),
                'ct': Math.roundn(this.fct(delta), 2),
                'mana': Math.roundn(this.fmana(delta)),
                'hps': Math.roundn(this.fhps(), 1),
                'ehps': Math.roundn(this.fehps(), 1),
                'hpm': Math.roundn(this.fhpm()),
                'mps': Math.roundn(this.fmps(), 2),
                'emps': Math.roundn(this.femps(), 2),
                'idle': Math.roundn(this.fidle(), 2),
                'idlep': Math.roundn(this.fidlep()*100, 1),
                'ctp': Math.roundn(this.fctp()*100, 1),
                'toom': Math.roundn(this.ftoom(), 1),
            });
        }
    });
    return Rotation;
});