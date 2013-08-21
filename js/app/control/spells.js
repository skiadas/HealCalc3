define(['can', 'app/util/sorter', 'text!view/spells.ejs'], function(can, _sort, view) {
    can.view.ejs('spellsView', view);
    var Spells = can.Control({
        init: function(element, options) {
            var self = this,
                spells = self.options.spells,
                specs = self.options.specs,
                buffs = self.options.buffs;
            spells.each(function(spell) {
                specs.each(function(spec) {
                    if (spec.id == spell.specid) {
                        spell.attr('spec', spec);
                    }
                });
            });
            self.options.sort = {attr: 'hps', dir: 'desc'};
            this.options.spells.val_update();
            this.sort();
            // Call View
            self.element.html(can.view('spellsView', {spells: spells}));
        },
        sorter: function() {
            var spells = this.options.spells,
                attr = this.options.sort.attr,
                comp_fun = (this.options.sort.dir == 'desc') ? 
                    function(a,b) {return a[attr] >= b[attr] } : 
                    function(a,b) {return a[attr] <= b[attr] };
            _sort(spells, comp_fun);
            // spells = spells.slice();
            can.Observe.startBatch();
            spells.push(spells[0]);
            spells.pop();
            can.Observe.stopBatch();
            this.sort_scheduled = false;
        },
        sort: function(ev) {
            if (!this.sort_scheduled) {
                this.sort_scheduled = true;
                setTimeout(this.sorter.bind(this), 40);
            }
        },
        '{specs} change': function(_, ev) {
            this.options.spells.val_update(ev.target);
            this.sort(ev);
        },
        '{buffs} change': function() { this.options.spells.val_update(); },
        '{stats} change': function() { this.options.spells.val_update(); },
        'thead th click': function(el, ev) {
            var newAttr = el.attr('id').replace('th_', ''),
                sort_info = this.options.sort;
            if (newAttr == sort_info.attr) {
                // Simply toggle direction
                sort_info.dir = (sort_info.dir=='asc') ? 'desc' : 'asc';
                el.toggleClass('sort_asc sort_desc');
            } else {
                // The currently sorting column is elsewhere
                $(el).add("#th_" + sort_info.attr).toggleClass('sort_' + sort_info.dir);
                sort_info.attr = newAttr;
            }
            this.sort(ev);
        },
    });
    return Spells;
});