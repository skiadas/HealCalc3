define(['can', 'text!view/columns.ejs'], function(can, view) {
    can.view.ejs('columnsView', view);
    // var ALLSPECS = ['disc', 'holy', 'pally', 'druid', 'shaman', 'monk'];
    // var FILTERS = ALLSPECS.concat(['aoe', 'single', 'instant', 'casttime', 'cdlong', 'cdshort', 'cdnone']);
    var Columns = can.Control({
    init: function(element, options) {
        var self = this;
        var spells = options.spells;
        self.options = options;
        self.options.columns = new can.Observe({
            'ct': true, 'mana': true,
            'basedirect': false, 'basehot': false,
            'baseshield': false, 'baseother': false,
            'baseheal': true,
            'mixeddirect': false, 'mixedhot': false,
            'mixedshield': false, 'mixedother': false,
            'mixedheal': false,
            'critdirect': false, 'crithot': false,
            'critshield': false, 'critother': false,
            'critheal': false,
            'avgdirect': false, 'avghot': false,
            'avgshield': false, 'avgother': false,
            'avgheal': true,
            'directps': false, 'hotps': false,
            'shieldps': false, 'otherps': false,
            'healps': true,
            'directpm': false, 'hotpm': false,
            'shieldpm': false, 'otherpm': false,
            'healpm': true,
            'mps': true
        });
        self.element.data('columns', self.options.filters);
        self.element.append(can.view('columnsView', self.options));
        setInterval(function() { self.update(self);}, 200);
    },
    'update': function(self) {
        var columns = self.options.columns;
        $('th, td', self.options.table).each(function() {
            var type = $(this).data('type');
            if (type) {
                self.options.columns.attr(type) ?
                    $(this).removeClass('hidden') :
                    $(this).addClass('hidden');
            }
        });
    },
    'input[type=checkbox] click': function(el, ev) {
        var columns = this.options.columns,
            attr = el.attr('id').replace('set_', '');
        columns.attr(attr, !columns.attr(attr));
        this.update(this);
    }
});
return Columns;
});
