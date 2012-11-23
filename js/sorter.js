(function() {
PERFORM_SORT = function(dom, sort_attr, dir) {
    var flag;
    var n=0;
    do {
        n++;
        var flag = 0;
        var doms = $('tr', dom).toArray();
        doms.shift();
        for (var i=0; i < doms.length-1; i++) {
            val1 = $(doms[i]).data('spell').attr(sort_attr);
            val2 = $(doms[i+1]).data('spell').attr(sort_attr);
            // console.log($(doms[i]).data('spell').name, isNaN(val1));
            // FIXME Find way for it to treat NaN properly
            if ((dir == 'desc' && val1 > val2) || (dir == 'asc' && val1 < val2)) {
                flag = 1;
                var ith = doms[i];
                var next = doms[i+1];
                $(next).after(ith);
            }
        }
    } while (flag == 1 && n<200);
}

Sorter = can.Control({
    init: function(element, options) {
        var self = this;
        var spells = options.spells;
        // Look for existing sort info in either options or the table headers.
        if (!options.sort) {
            var sort_col = $('th.sort_asc, th.sort_desc', this.element);
            options.sort = {attr: sort_col.data('sort_attr'), dir: (sort_col.hasClass('sort_asc') ? 'asc' : 'desc'), col: sort_col};
        }
        $(spells).bind('ready', function() {self.sort()});
    },
    sort: function() {
        PERFORM_SORT(this.element, this.options.sort.attr, this.options.sort.dir);
    },
    'thead th click': function(el, ev) {
        var newAttr = el.data('sort_attr');
        if (newAttr == this.options.sort.attr) {
            // Simply toggle direction
            this.options.sort.dir = (this.options.sort.dir=='asc') ? 'desc' : 'asc';
            el.toggleClass('sort_asc sort_desc');
        } else {
            // The currently sorting column is elsewhere
            var cname = ['sort', this.options.sort.dir].join('_');
            this.options.sort.col.toggleClass(cname);
            this.options.sort.attr = newAttr;
            this.options.sort.col = el;
            this.options.sort.col.toggleClass(cname);
        }
        this.sort();
    },
    '{Spell} ready': function(ev, a, spell) {
        this.sort();
    }
    
});


})();