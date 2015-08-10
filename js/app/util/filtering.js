define(['can', 'text!view/filtering.ejs'], function(can, view) {
    can.view.ejs('filterView', view);
    var ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
    var FILTERS = ALLSPECS.concat(['aoe', 'single', 'instant', 'casttime', 'cdlong', 'cdshort', 'cdnone']);
    var Filtering = can.Control({
    init: function(element, options) {
        var self = this;
        var spells = options.spells;
        self.options = options;
        self.options.filters = new can.Observe({
            allspecs: true,
            disc: true, holy: true, pally: true, druid: true,
            shaman: true, monk: true, aoe: true, single: true,
            instant: true, casttime: true,
            cdlong: true, cdshort: true, cdnone: true
        });
        self.options.fullmask = (1 << 13) -1;
        self.options.curr_mask = 0;
        self.element.data('filters', self.options.filters);
        self.element.append(can.view('filterView', self.options));
        $('body').on('spellsChanged', function() {
            self.update(self);
        });
    },
    'update': function(self) {
        var imask = self.options.curr_mask;
        var filters = self.options.filters;
        var cname = 'hidden';
        $('tr.spell', self.options.table).each(function() {
            var elm = $(this);
            ((elm.data('spell').mask & imask) == 0) ?
                elm.removeClass(cname) :
                elm.addClass(cname);
        });
        $('.tab-bar .spec').each(function() {
            var elm = $(this);
            filters[elm.data('spec')] ?
                elm.show(500) :
                elm.hide(500);
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
        var self = this;
        $.each(FILTERS, function(i, filter) {
            if (filters.attr(filter)) { imask += (1 << i); }
        });
        imask = ~imask & this.options.fullmask;
        this.options.curr_mask = imask;
        setTimeout(function() { self.update(self); }, 40);
    },
});
return Filtering;
});
