define(['can', 'jquery', 'app/model/rotation', 'app/control/spell_lister'], function(can, $, RotModel, lister) {

    var Rotation = can.Control({
        init: function(element, options) {
            this.element = element;
            this.options = options;
            this.options.lister = lister;
            this.options.rotation = new RotModel(options.spec, options.nick);
            this.element.data('rotation', this.options.rotation);
            this.element.html(can.view('js/app/view/rotation.ejs', this.options));
        },
        'input.btn_add_spell click': function(el, ev) {
            var rotation = this.options.rotation;
            this.options.lister.attach(el, rotation);
        },
        '.rotation input change': function(el, ev) {
            var spell = $(el).closest('tr').data('spell'),
                rotation = $(el).closest('li').data('rotation');
            spell.attr('no', parseInt($(el).val()));
            rotation.val_update();
        },
        '{specs} change': function() {
            this.options.rotation.val_update();
        },
    })
    return Rotation;
});