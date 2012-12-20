define(['can', 'jquery', 'app/control/rotation'], function(can, $, Rotation) {
    var Rotations = can.Control({
        init: function(element, options) {
            var self = this;
            self.element = element;
            self.options = options;
            self.options.rotations = new can.Observe.List();
            self.element.append(can.view('js/app/view/rotations.ejs', self.options));
            return;
        },
        '#btn_new_rotation click': function(el, ev) { $('#new_rotation').show(); },
        '#btn_create click': function(el, ev) {
            var val = $(el).siblings('select').val();
            var options = {
                    nick: $(el).siblings('input[type=input]').val(),
                    spec: this.options.specs[val-1],
                },
                new_el = $('<li style="position: relative"></li>').appendTo($('ul', this.element));
            this.options.rotations.push((new Rotation(new_el, options)).options.rotation);
            $(el).parent().hide();
        },
        '.btn_remove_rotation click': function(el, ev) {
            var li = $(el).closest('li'),
                rotation = li.data('rotation'),
                rotations = this.options.rotations,
                ind = rotations.indexOf(rotation);
            rotations.splice(ind, 1);
            li.remove();
        }
        // Need to add: functionality for the other buttons
    });
    return Rotations;
});