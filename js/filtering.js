(function() {
ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
Filtering = can.Control({
    init: function(element, options) {
        var self = this;
        self.options = options;
        // self.options.table = options.table;
        // self.options.specs = options.specs;
        self.options.filters = new can.Observe({
            allspecs: true,
            disc: true, holy: true, pally: true, druid: true,
            shaman: true, monk: true, aoe: true, single: true, 
            instant: true, casttime: true
        });
        self.options.fullmask = (1 << 10) -1;
        // self.options.mask = self.options.fullmask;
        // var view = options.view;
        self.element.append(can.view(options.view, self.options));
    },
    'input click': function(el, ev) {
        var filters = this.options.filters;
        var attr = el.attr('id').split('_')[1];
        filters.attr(attr, !filters.attr(attr));
        var onoff = filters.attr(attr);
        if (attr == 'allspecs') {
            $.each(ALLSPECS, function(_, sp) {filters.attr(sp, onoff)});
        }
    },
    'change': function() {
        console.log('A change!')
    },
    update_table: function() {
        var input = el.closest('input');
        var settings = $(input).data('filter');
        if (settings.attr == 'allspecs') {
            // Need to enable or disable all 6 specs;
            var newsetting = ($(input).attr('checked') || false);
            $(input).siblings('input').slice(0,6).attr('checked', newsetting);
            var imask = (1<< 6) -1;
        } else {
            var imask = 1 << settings.shift;
        }
        if ($(input).attr('checked')) {
            this.options.mask = this.options.mask | imask;
        } else {
            this.options.mask = this.options.mask & ~imask & this.options.fullmask;
        };
        var tbl = this.options.table;
        var mask = ~this.options.mask & this.options.fullmask;
        $('tr.spell', tbl).each(function(i, el) {
            var m = $(el).data('spell').mask & mask;
            if (m == 0) { $(el).show(); } else { $(el).hide(); };
        });
        var specs = this.options.specs;
        $('div.spec', specs).each(function(i, el) {
            var specmask = 1 << $(el).data('spec').id >> 1;
            if ((specmask & mask) ==0) { $(el).show(); } else { $(el).hide(); }
        });
    },
    'a click': function(el,ev) {
        $('div', el.closest('div')).toggle();
    }
});
})();