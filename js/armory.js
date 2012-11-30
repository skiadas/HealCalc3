(function() {
    Armory = can.Control({
        init: function(element, options) {
            this.options.character = new can.Observe({armory_name: '', armory_realm: '', armory_region: 'us'});
            this.element = element;
            this.element.html(can.view('views/armory.ejs', this.options));
        },
        'a click': function(el,ev) {
            $('div', el.closest('div')).toggle();
        },
        'input[type="input"] change': function(el, ev) {
            this.options.character.attr($(el).attr('id'), $(el).attr('value'));
        },
        'input[type="button"] click': function(el, ev) {
            this.readArmory();
        },
        readArmory: function() {
            var character = this.options.character;
            var call = can.sub('cgi-bin/armory.cgi?region={armory_region}&server={armory_realm}&character={armory_name}', character);
            $.getJSON(call, function(json, a, b) { 
                var spec = {5: "disc", 2: "pally", 11: "druid", 7: "shaman", 1: "monk"}[json['class']];
                // Strictly speaking we should look to see if it is really holy
                // For now, holy priests will need to manually adjust
                var armory_stats = {
                    bint: Math.round(json.stats.int * (spec == "disc"? 1/1.05 : 1)),
                    bspi: json.stats.spr,
                    bmast: json.stats.masteryRating,
                    bcrit: json.stats.critRating,
                    bhaste: json.stats.hasteRating,
                    bweapon: json.stats.spellPower - json.stats.int + 10
                };
                $('div', $('#stats')).data('stat').attr(armory_stats).save();
                // Change filter to the appropriate spec
                var all = $('#filters').data('controls')[0].setSpec(spec);
            });
        }
    });
})();
