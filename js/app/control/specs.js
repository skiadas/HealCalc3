define(['can'], function(can) {
    var Specs = can.Control({
        init: function(element, options) {
            var self = this;
            var specs = options.specs;
            var buffs = options.buffs;
            var stats = options.stats;
            specs.each(function(spec) {
                spec.attr('buffs', buffs);
                spec.attr('stats', stats);
            });
            specs.val_update();
            self.element.html(can.view('js/app/view/specs.ejs', {specs: specs, buffs: buffs, stats: stats}));
            $('li', self.element).addClass('expand').children('a').click();
        },
        'select change': function(el, ev) {
           var spec = el.closest('div.spec').data('spec');
           spec.attr('inner_fire', spec.attr('inner_fire') ? false : true);
           this.options.specs.val_update();
        },
        'input change': function(el, ev) {
            var attr = el.attr('name');
            var val = (el.attr('type') == 'checkbox') ? (el.attr('checked') ? true : false) : el.attr('value');
            el.closest('div.spec').data('spec').attr(attr, val);
            this.options.specs.val_update();
        },
        '{buffs} change': function() { this.options.specs.val_update(); },
        '{stats} change': function() { this.options.specs.val_update(); }
    });
   return Specs;
});