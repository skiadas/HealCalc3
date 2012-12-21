define(['can', 'jquery', 'app/model/rotation'], function(can, $, RotModel) {
   var RotationStorage = can.Control({
       init: function(element, options) {
           this.element = element;
           var ls = localStorage['rotations'];
           this.options.storage = $.map(ls ? ls.split('|') : [], function(str) {return RotModel.decode(str)});
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
               if ((storage[i].name === rotation.name) && (storage[i].spec.name === rotation.spec.name)) {
                   return i;
               }
           }
           return -1;
       },
       update_rotation: function(rotation) {
           var storage = this.options.storage,
               i = storage.indexOf(rotation);
           if (i === -1) {
               storage.push(rotation);
           } else {
               storage[i] = rotation;
           }
           return this.save();
       },
       '.rotation click': function(el, ev) {
           console.log('Selected one!');
       }
   });
   
   return RotationStorage;
});
