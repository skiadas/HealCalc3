define(['can'], function(can) {
    Buffs = can.Control({
        init: function(element, options) {
            var self = this;
            var buffs = this.options.buffs || buffs;
            self.element.html(can.view('js/app/view/buffs.ejs', {buffs: buffs}));
        },
        'input click': function(el, ev) {
            var buffs = this.options.buffs;
            var attr = el.attr('id').split('_')[1];
            buffs.attr(attr, !buffs.attr(attr));
        },
    })
    return Buffs;
});
