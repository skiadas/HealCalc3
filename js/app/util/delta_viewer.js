define(['can'], function(can) {
    var DeltaViewer = can.Control({
        init: function(element, options) {
            var self = this;
            options.delta = options.delta || 1000;
            var source = options.source;  // The source table where spells are looked up at
        },
        '{source} tr.spell td mouseover': function(el, ev) {
            if (!$(el).data('colinfo')) { return; }
            var sp = $(el).closest('tr').data('spell');
            var del = this.options.delta;
            this.options.measure = $(el).data('colinfo').name;
            var colfun = $(el).data('colinfo').fun;
            var base = sp[colfun]();
            this.options.base = base;
            var results = {};
            $.each(['int','sp','crit','haste','mast'], function(_, stat) {
                var delta = {};
                delta[stat] = del;
                results[stat] = Math.round((sp[colfun](delta) - base)/base * 10000)/100;
            });
            this.options.results = results;
            this.element.html(can.view('js/app/view/delta_view.ejs', this.options));
        },
        'input change': function(el, ev) {
            // console.log($(el).value);
            this.options.delta = $(el).attr('value') * 1;
        },
    });
    return DeltaViewer;
});