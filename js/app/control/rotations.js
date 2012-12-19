define(['can', 'jquery', 'app/model/rotation'], function(can, $, Rotation) {
    var SpellLister = can.Control({
        init: function() {
            this.options.spells = new can.Observe.List();
            this.element = $('<div class="spell_lister"></div>');
            this.element.html(can.view('js/app/view/spell_lister.ejs', this.options));
        },
        attach: function(el, spells, callback) {
            can.Observe.startBatch();
            var list = this.options.spells,
                i = list.length;
            while (i--) { list.pop(); }
            i = spells.length;
            while (i--) { list.unshift(spells[i]); };
            can.Observe.stopBatch();
            $(el).after(this.element);
            $(this.element).css({ position: 'absolute' }).css({top: 0, left: 0}).show();
            // el.position()
        },
    });
    var Rotations = can.Control({
        init: function(element, options) {
            var self = this;
            self.element = element;
            self.options = options;
            self.options.rotations = new can.Observe.List();
            self.options.lister = new SpellLister();
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
            var spells = $($('#spellTable').data('spells')).
                         filter(function() { return(this.specid == val)}).
                         toArray();
            this.options.rotations.push(new Rotation(spec, nick, spells));
            $('#btn_new_rotation').show();
            $(el).parent().hide();
        },
        'input.add_spell click': function(el, ev) {
                var rotation = $(el).closest('li').data('rotation');
                this.options.lister.attach(el, rotation.possibles);
        },
        '.spell_item click': function(el, ev) {
            var spell = $(el).data('spell'),
                rotation = $(el).closest('li').data('rotation'),
                i = rotation.possibles.indexOf(spell);
            rotation.spells.push(spell);
            if (i > -1) { rotation.possibles.splice(i, 1) };
            $(el).parent().hide();
            rotation.val_update();
        },
        '.rotation input change': function(el, ev) {
            var spell = $(el).closest('tr').data('spell'),
                rotation = $(el).closest('li').data('rotation');
            spell.attr('no', parseInt($(el).val()));
            rotation.val_update();
        },
        '.spell_lister mouseleave': function(el, ev) { $(el).hide(); },
        '{specs} change': function() {
            this.options.rotations.each(function(rotation) {rotation.val_update()});
        }
    });
    return Rotations;
});