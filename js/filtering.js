(function() {
ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
FILTERS = ALLSPECS.concat(['aoe', 'single', 'instant', 'casttime']);
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
        var imask = 0;
        var filters = this.options.filters;
        $.each(FILTERS, function(i, filter) {
            if (filters.attr(filter)) {
                imask += (1 << i);
            }
        });
        imask = ~imask & this.options.fullmask;
        $('tr.spell', this.options.table).each(function(i, el) {
            var m = $(el).data('spell').mask & imask;
            if (m == 0) { $(el).show(); } else { $(el).hide(); };
        });
        var specs = this.options.specs;
        $('div.spec', specs).each(function(i, el) {
            var specmask = 1 << $(el).data('spec').id >> 1;
            if ((specmask & imask) ==0) { $(el).show(); } else { $(el).hide(); }
        });
    },
    'a click': function(el,ev) {
        $('div', el.closest('div')).toggle();
    }
});
})();