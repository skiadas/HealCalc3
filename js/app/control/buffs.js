define(['can', 'text!view/buffs.ejs'], function(can, view) {
    can.view.ejs('buffsView', view);
    var Buffs = can.Control({
        init: function(element, options) {
            var self = this,
                buffs = this.options.buffs || buffs;
            self.element.html(can.view('buffsView', {buffs: buffs}));
        },
        'input click': function(el, ev) {
            var buffs = this.options.buffs,
                attr = el.attr('id').replace('buff_', '');
            buffs.attr(attr, !buffs.attr(attr));
        },
    })
    return Buffs;
});
