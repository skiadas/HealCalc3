define(['can', 'jquery', 'app/model/rotation', 'app/control/spell_lister', 'app/model/spec'], function(can, $, RotModel, lister, specs) {

    var Rotation = can.Control({
        init: function(element, options) {
            console.log(element)
            this.element = element;
            this.options = {};
            this.options.lister = lister;
            this.options.rotation = (options.hasOwnProperty('str')) ?
                        RotModel.import(options.str) : // This is an imported string
                        new RotModel(options);  // New model
            this.element.data('rotation', this.options.rotation);
            this.element.html(can.view('js/app/view/rotation.ejs', this.options));
        },
        'input.btn_add_spell click': function(el, ev) {
            var rotation = this.options.rotation;
            this.options.lister.attach(el, rotation);
        },
        '.rotation input change': function(el, ev) {
            var spell = $(el).closest('tr').data('spell');
            spell.attr('no', parseInt($(el).val()));
            this.options.rotation.val_update();
        },
        '.destroy click': function(el, ev) {
            var spell = $(el).closest('tr').data('spell'),
                spells = this.options.rotation.spells,
                ind = spells.indexOf(spell);
            spells.splice(ind, 1);
        },
        '.btn_export_rotation click': function(el, ev) {
            console.log("HERE")
            ev.stopImmediatePropagation();
            prompt('The following string represents your rotation. Use it with "Import  Rotation:"', this.options.rotation.export());
        },
    })
    return Rotation;
});