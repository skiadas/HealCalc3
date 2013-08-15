define(['can', 'text!view/filtering.ejs'], function(can, view) {
    can.view.ejs('filterView', view);
    var ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
    var FILTERS = ALLSPECS.concat(['aoe', 'single', 'instant', 'casttime']);
    var Filtering = can.Control({
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
        self.options.curr_mask = 0;
        self.element.data('filters', self.options.filters);
        self.element.append(can.view('filterView', self.options));
        setInterval(function() {self.update(self);}, 200);
    },
    'update': function(self) {
        var imask = self.options.curr_mask;
        var filters = self.options.filters;
        $('tr.spell', self.options.table).each(function(i, el) {
            (($(el).data('spell').mask & imask) == 0) ? $(el).show() : $(el).hide();
        });
        $('div.spec', self.options.specs).each(function(i, el) {
            filters[$(el).data('spec').name.toLowerCase()] ? $(el).show() : $(el).hide();
        });
    },
    'input change': function(el, ev) {
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
        imask = 0;
        var filters = this.options.filters;
        $.each(FILTERS, function(i, filter) {
            if (filters.attr(filter)) { imask += (1 << i); }
        });
        imask = ~imask & this.options.fullmask;
        this.options.curr_mask = imask;
        // this.update(this);
    },
});
return Filtering;
});