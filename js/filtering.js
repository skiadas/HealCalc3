(function() {
ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
FILTERS = ALLSPECS.concat(['aoe', 'single', 'instant', 'casttime']);
Filtering = can.Control({
    init: function(element, options) {
        var self = this;
        self.options = options;
        self.options.filters = new can.Observe({
            allspecs: true,
            disc: true, holy: true, pally: true, druid: true,
            shaman: true, monk: true, aoe: true, single: true, 
            instant: true, casttime: true
        });
        self.options.fullmask = (1 << 10) -1;
        self.element.data('filters', self.options.filters);
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
    setSpec: function(spec) {
        var filters = this.options.filters;
        filters.attr('allspecs', false);
        $.each(ALLSPECS, function(_, sp) {
            filters.attr(sp, sp == spec);
        });
        $(['#filter', spec].join('_')).click().click();
    },
    'change': function() {
        var imask = 0;
        var filters = this.options.filters;
        $.each(FILTERS, function(i, filter) {
            if (filters.attr(filter)) { imask += (1 << i); }
        });
        imask = ~imask & this.options.fullmask;
        $('tr.spell', this.options.table).each(function(i, el) {
            (($(el).data('spell').mask & imask) == 0) ? $(el).show() : $(el).hide();
        });
        $('div.spec', this.options.specs).each(function(i, el) {
            filters[$(el).data('spec').name.toLowerCase()] ? $(el).show() : $(el).hide();
        });
    },
    'a click': function(el,ev) {
        $('div', el.closest('div')).toggle();
    }
});
})();