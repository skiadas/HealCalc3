define(['can', 'jquery', 'app/model/rotation'], function(can, $, RotModel) {
   var RotationStorage = can.Control({
       init: function(element, options) {
           this.element = element;
           var ls = localStorage['rotations'];
           this.options.storage = new can.Observe.List($.map(ls ? ls.split('|') : [], function(str) {return RotModel.decode(str)}));
           this.element.html(can.view('js/app/view/rotation_storage.ejs', this.options));
       },
       save: function() {
           localStorage['rotations'] = $.map(this.options.storage, function(rotation) {return(RotModel.encode(rotation))}).join("|");
           return this;
       },
       indexOf: function(rotation) {
           // Two rotations are considered "the same" if they have the same name and spec
           var storage = this.options.storage,
               i = storage.length;
           while (i--) {
               if ((storage[i].nick === rotation.nick) && (storage[i].spec.name === rotation.spec.name)) {
                   return i;
               }
           }
           return -1;
       },
       update_rotation: function(rotation) {
           var storage = this.options.storage,
               i = this.indexOf(rotation);
           if (i === -1) {
               storage.push(rotation);
           } else {
               storage[i] = rotation;
           }
           return this.save();
       },
       'li click': function(el, ev) {
           $(this).trigger('load_rotation', el.closest('li').data('rotation'));
           this.element.hide();
       },
       'mouseleave': function(el, ev) {
           this.element.hide();
       },
       '.destroy click': function(el, ev) {
           ev.stopImmediatePropagation();
           var storage = this.options.storage,
               rotation = el.closest('li').data('rotation'),
               ind = storage.indexOf(rotation);
           storage.splice(ind, 1);
           this.save();
       },
   });
   
   return RotationStorage;
});
