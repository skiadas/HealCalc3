define(['can', 'jquery', 'app/model/rotation', 'jquerypp/dom/cookie', 'jquerypp/event/drag', 'jquerypp/event/drop'], function(can, $, Rotation) {
    var Rotations = can.Control({
        init: function(element, options) {
            var self = this;
            self.element = element;
            self.options = options;
            self.options.rotations = new can.Observe.List();
            self.element.append(can.view('js/app/view/rotations.ejs', self.options));
            return;
        },
        '#btn_new_rotation click': function(el, ev) {
            $(el).hide().next().show();
        },
        '#btn_create click': function(el, ev) {
            var val = $(el).siblings('select').val();
            var nick = $(el).siblings('input[type=input]').val();
            var spec = this.options.specs[val-1];
            console.log(spec)
            console.log(new Rotation(spec, nick))
            this.options.rotations.push(new Rotation(spec, nick));
            $('#btn_new_rotation').show();
            $(el).parent().hide();
        }
    });
    return Rotations;
});