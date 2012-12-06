(function() {

buffs = new can.Observe({
    'stats': true, 'mastery': true, 'haste': true, 
    'crit': true, 'sp': true, 'armor': true, 
    'spelldam': false, 'intfood': true, 'intflask': true, 'critmeta': true
});

Buffs = can.Control({
    init: function(element, options) {
        var self = this;
        var buffs = this.options.buffs || buffs;
        self.element.html(can.view('views/buffs.ejs', {buffs: buffs}));
    },
    'a click': function(el,ev) {
        $('div', el.closest('div')).toggle();
    },
    'input click': function(el, ev) {
        var buffs = this.options.buffs;
        var attr = el.attr('id').split('_')[1];
        buffs.attr(attr, !buffs.attr(attr));
    },
})
})();