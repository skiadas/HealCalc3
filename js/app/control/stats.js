define(['can'], function(can) {
    var Stats = can.Control({
        init: function(element, options) {
            var self = this,
                stats = options.stats;
                self.element.html(can.view('js/app/view/stats.ejs', {stats: stats}));
        },
        'input change': function(el, ev) {
            var attr = el.attr('id');
            var val = (el.attr('type') == 'checkbox') ? (el.attr('checked') ? true : false) : el.attr('value');
            $(this.element.children('div')[0]).data('stat').attr(attr, val);
        },
    });
    return Stats;
});
