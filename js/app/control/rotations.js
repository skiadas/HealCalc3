define(['can', 'jquery', 'app/control/rotation', 'app/model/spec', 'app/util/rotation_storage'], function(can, $, Rotation, specs, RotStorage) {
    var Rotations = can.Control({
        init: function(element, options) {
            var self = this;
            self.element = element;
            self.options = options;
            self.options.rotations = new can.Observe.List();
            self.element.append(can.view('js/app/view/rotations.ejs', self.options));
            self.options.rotation_storage = new RotStorage('#rotation_storage');
            $(self.options.rotation_storage).bind('load_rotation', function(ev, rotation) {
                self.add_rotation(rotation);
            });
            return;
        },
        '#btn_new_rotation click': function(el, ev) { $('#new_rotation').show(); },
        'add_rotation': function(options) {
            var new_el = $('<li style="position: relative"></li>').appendTo($('ul#rotations_list', this.element));
            this.options.rotations.push((new Rotation(new_el, options)).options.rotation);
            return this;
        },
        '#btn_create click': function(el, ev) {
            var val = $(el).siblings('select').val();
            var options = {
                    nick: $(el).siblings('input[type=input]').val(),
                    spec: this.options.specs[val-1],
                };
            this.add_rotation(options);
            $(el).parent().hide();
        },
        '#btn_import_rotation click': function() {
            var str = (prompt('Please paste the exported rotation string:', '') || '').trim();
            if (str === '') { return false };
            this.add_rotation({str: str});
        },
        '.btn_remove_rotation click': function(el, ev) {
            var li = $(el).closest('li'),
                rotation = li.data('rotation'),
                rotations = this.options.rotations,
                ind = rotations.indexOf(rotation);
            rotations.splice(ind, 1);
            li.remove();
        },
        '#btn_load_rotation click': function(el, ev) {
            $('#rotation_storage').toggle();
        },
        '.btn_save_rotation click': function(el, ev) {
            ev.stopImmediatePropagation();
            this.options.rotation_storage.update_rotation($(el).closest('li').data('rotation'));
        },
        '{specs} change': function() {
            $('li', this.element).each(function(i, li) {$(li).data('rotation').val_update();});
        },
    });
    return Rotations;
});