define(['can', 'jquery', 'app/model/spell'], function(can, $, spells) {
    var SpellLister = can.Control({
        init: function(element) {
            this.options.spells = spells;
            this.options.view = 'js/app/view/spell_lister.ejs';
            this.options.rendered_spells = [];
            this.element = element;
        },
        attach: function(el, rotation) {
            // filter_fun would be passed each spell, needs to return boolean true for using the spell
            var opt = this.options,
                spells = opt.spells,
                _filter_fun = function(i) { return rotation.contains_not.call(rotation, spells[i]) };
            this.options.rendered_spells = [];
            $(this.options.spells).filter(_filter_fun).each(function(i, spell) {opt.rendered_spells.push(spell)});
            this.options.callback = function(spell) {rotation.add.call(rotation, spell)};
            $(this.element).html(can.view(this.options.view, this.options)).
                css({ position: 'absolute' }).
                css({top: 0, left: 0}).
                insertAfter(el).
                show();
        },
        '.spell_item click': function(el, ev) {
            $(el).parent().hide();
            this.options.callback($(el).data('spell'));
        },
        'mouseleave': function(el, ev) { $(el).hide(); },
    });
    var the_lister = new SpellLister($('<div class="spell_lister"></div>'));
    return the_lister;
});
