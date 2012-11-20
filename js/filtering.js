(function() {
Filtering = can.Control({
    init: function(element, options) {
        var self = this;
        self.options.table = options.table;
        self.options.fullmask = (1 << 10) -1;
        self.options.mask = self.options.fullmask;
        var view = options.view;
        console.log('filtering called');
        $.when(self.element.append(can.view(view))).then(function() {
            $('input', self.element).attr('checked', true);
        });
    },
    'input click': function(el, ev) {
        var input = el.closest('input');
        var settings = $(input).data('filter');
        var imask = 1 << settings.shift;
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
    },
    'a click': function(el,ev) {
        $('div', el.closest('div')).toggle();
    }
});
})();