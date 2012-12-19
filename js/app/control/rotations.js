define(['can', 'jquery', 'app/model/rotation', 'jquerypp/dom/cookie', 'jquerypp/event/drag', 'jquerypp/event/drop'], function(can, $, Rotation) {
    var Rotations = can.Control({
        init: function(element, options) {
            var self = this;
            self.element = element;
            self.options = options;
            self.options.rotations = new can.Observe.List();
            self.element.append(can.view('js/app/view/rotations.ejs', {rotations: self.options.rotations}));
            return;
        },
        '#btn_new_rotation click': function(el, ev) {
            var spec = this.options.specs[0];
            this.options.rotations.push(new Rotation(spec));
        }
    });
    return Rotations;
});