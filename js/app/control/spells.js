define(['can', 'app/util/sorter'], function(can, _sort) {
    var Spells = can.Control({
        init: function(element, options) {
            var self = this;
            var spells = self.options.spells;
            var specs = self.options.specs;
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
            self.element.html(can.view('js/app/view/spells.ejs', {spells: spells}));
        },
        sort: function(ev) {
            var batchNum = this.options.batchNum;
            if( !ev || !ev.batchNum || ev.batchNum !== batchNum ) {
                if (ev) {this.options.batchNum = ev.batchNum};
                var attr = this.options.sort.attr
                var comp_fun = (this.options.sort.dir == 'desc') ? 
                    function(a,b) {return a[attr] >= b[attr] } : 
                    function(a,b) {return a[attr] <= b[attr] };
                var spells = this.options.spells;
                setTimeout(function() {
                    _sort(spells, comp_fun);
                    spells.push(spells[0]);
                    spells.pop();
                }, 30);
            }
        },
        '{specs} change': function(_, ev) {
            this.options.spells.val_update(ev.target);
            console.log(ev);
            this.sort(ev);
            // $(this.element).trigger('ready');
        },
        'thead th click': function(el, ev) {
            var newAttr = el.attr('id').replace('th_', '');
            var sort_info = this.options.sort;
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