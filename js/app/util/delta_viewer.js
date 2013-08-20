define(['can', 'text!view/delta_view.ejs'], function(can, view) {
    can.view.ejs('deltaViewerView', view);
    var DeltaViewer = can.Control({
        init: function(element, options) {
            var self = this;
            options.delta = options.delta || 1000;
            options.double_secondary = options.double_secondary || false;
            var source = options.source;  // The source table where spells are looked up at
        },
        '{source} tr td mouseover': function(el, ev) {
            if (!$(el).data('colinfo')) { return; }
            var sp = $(el).closest('tr').data('spell') || $(el).closest('tr').data('rotation');
            var del = this.options.delta;
            var secondary_stats = { 'int': false, 'sp': false, 'crit': true, 'haste': true, 'mast': true, 'spi': true };
            this.options.measure = $(el).data('colinfo').name;
            var colfun = $(el).data('colinfo').fun;
            var base = sp[colfun]();
            this.options.base = base;
            var secondary = this.options.double_secondary;
            var results = {};
            $.each(['int','sp','crit','haste','mast', 'spi'], function(_, stat) {
                var delta = {};
                delta[stat] = del * ( secondary ? (secondary_stats[stat] ? 2 : 1): 1);
                results[stat] = Math.roundn((sp[colfun](delta) - base)/base * 100, 2);
            });
            $.each(['int-crit', 'int-mast', 'int-haste', 'crit-int', 'crit-mast', 'crit-haste', 'mast-int', 'mast-crit', 'mast-haste', 'haste-int', 'haste-crit', 'haste-mast'], function(_, stats) {
                var delta = {};
                $.each(stats.split('-'), function(ind, stat) {
                    delta[stat] = (ind > 0 ? -1 : 1) * del * (secondary_stats[stat] ? 2 : 1);
                });
                results[stats] = Math.roundn((sp[colfun](delta) - base)/base * 100, 2);
            });
            this.options.results = results;
            this.element.html(can.view('deltaViewerView', this.options));
        },
        'input#input_delta change': function(el, ev) {
            this.options.delta = $(el).attr('value') * 1;
        },
        'input#chk_secondary change': function(el, ev) {
            this.options.double_secondary = ($(el).attr('checked') == 'checked');
        }
    });
    return DeltaViewer;
});