define(['can', 'text!view/buffs.ejs'], function(can, view) {
    can.view.ejs('buffsView', view);
    var Buffs = can.Control({
        init: function(element, options) {
            this.options.buffs = this.options.buffs || buffs;
            var self = this,
                buffs = this.options.buffs;
            self.element.html(can.view('buffsView', {buffs: buffs}));
        },
        'input[type=checkbox] click': function(el, ev) {
            var buffs = this.options.buffs,
                attr = el.attr('id').replace('buff_', '');
            buffs.attr(attr, !buffs.attr(attr));
        },
        'input[type=input] change': function(el, ev) {
            var attr = el.attr('id').replace('buff_', ''),
                val = el.val();
            this.options.buffs.attr(attr, val*1);
        },
        'select change': function(el, ev) {
            var val = $(el).val(),
                key = el.attr('name'),
                buffs = this.options.buffs;
            if (key == 'weapon_enchant') {
                this.options.buffs.attr(key, val);
            } else {
                this.options.buffs.attr(key, buffs.trinkets[val]);
            }
        },
    })
    return Buffs;
});
