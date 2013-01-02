define(['can', 'text!view/buffs.ejs'], function(can, view) {
    can.view.ejs('buffsView', view);
    var Buffs = can.Control({
        init: function(element, options) {
            this.options.buffs = this.options.buffs || buffs;
            var self = this,
                buffs = this.options.buffs;
            self.element.html(can.view('buffsView', {buffs: buffs}));
        },
        'input click': function(el, ev) {
            var buffs = this.options.buffs,
                attr = el.attr('id').replace('buff_', '');
            buffs.attr(attr, !buffs.attr(attr));
        },
        'select change': function(el, ev) {
            var val = $(el).val(),
                key = el.attr('name'), 
                buffs = this.options.buffs;
            this.options.buffs.attr(key, buffs.trinkets[val]);
            console.log(key, val, this.options.buffs);
        },
    })
    return Buffs;
});
