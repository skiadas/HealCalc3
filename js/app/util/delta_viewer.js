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
            this.el = el;
            this.sp = $(el).closest('tr').data('spell') || $(el).closest('tr').data('rotation');
            if (!this.scheduled) {
                // Need to create event
                window.setTimeout(this.delta_updater.bind(this), 300);
            }
        },
        'input#input_delta change': function(el, ev) {
            this.options.delta = $(el).attr('value') * 1;
        },
        'input#chk_secondary change': function(el, ev) {
            this.options.double_secondary = ($(el).attr('checked') == 'checked');
        },
        delta_updater: function() {
            this.scheduled = false;
            var el = this.el;
            var sp = this.sp;
            var del = this.options.delta;
            var secondary_stats = { 'int': false, 'sp': false, 'crit': true, 'haste': true, 'mast': true, 'spi': true };
            this.options.measure = $(el).data('colinfo').name;
            var colfun = $(el).data('colinfo').fun;
            var base = sp[colfun]();
            this.options.base = base;
            var secondary = this.options.double_secondary;
            var results = {};
            var pairOptimizer = function(stats) {
                var delta = {},
                    stat1, stat2, oldRes, newRes, improvement,
                    stat1base, stat2base,
                    direction = 1,
                    deltaF = del;
                getstats = stats.split('-');
                stat1 = getstats[1], stat2 = getstats[2];
                stat1base = sp.spec.stats['b' + stat1];
                stat2base = sp.spec.stats['b' + stat2];
                delta[stat1] = 0, delta[stat2] = 0;
                newRes = sp[colfun](delta);
                while (oldRes = newRes) {
                    delta[stat1] = delta[stat1] + direction * deltaF * (secondary_stats[stat1] ? 2 : 1);
                    delta[stat2] = delta[stat2] - direction * deltaF * (secondary_stats[stat2] ? 2 : 1);
                    newRes = sp[colfun](delta);
                    improvement = newRes / oldRes - 1;
                    if (
                        improvement < 0 ||
                        ((direction > 0) && (delta[stat2] + stat2base < 0)) ||
                        ((direction < 0) && (delta[stat1] + stat1base < 0))
                    ) {
                        // Wrong direction
                        direction = -direction;
                        deltaF = Math.floor(deltaF / 2);
                    }
                    if (deltaF === 0) { break; }
                }
                delta['res'] = Math.roundn((newRes - base)/base * 100, 2);
                return delta;
            };
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
            // Pair optimizer:
            $.each(['comp-int-crit', 'comp-int-mast', 'comp-int-haste', 'comp-crit-mast', 'comp-crit-haste', 'comp-mast-haste'], function(_, stats) {
                results[stats] = pairOptimizer(stats);
            });
            this.options.results = results;
            this.element.html(can.view('deltaViewerView', this.options));
        }
    });
    return DeltaViewer;
});