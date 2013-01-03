define(['can', 'text!view/stats.ejs'], function(can, view) {
    can.view.ejs('statsView', view);
    var Stats = can.Control({
        init: function(element, options) {
            this.element = element;
            this.options.stats = options.stats;
            this.element.html(can.view('statsView', this.options));
        },
        'input change': function(el, ev) {
            var attr = el.attr('id'),
                val = el.val();
            this.options.stats.attr(attr, val*1);
        },
    });
    return Stats;
});
