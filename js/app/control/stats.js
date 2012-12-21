define(['can', 'text!view/stats.ejs'], function(can, view) {
    can.view.ejs('statsView', view);
    var Stats = can.Control({
        init: function(element, options) {
            this.element = element;
            this.options.stats = options.stats;
            console.log(this.options.stats);
            this.element.html(can.view('statsView', this.options));
            console.log(this.options.stats === $('div', $('#stats')).data('stat'));
        },
        'input change': function(el, ev) {
            var attr = el.attr('id'),
                val = el.val();
            this.options.stats.attr(attr, val*1);
        },
    });
    return Stats;
});
