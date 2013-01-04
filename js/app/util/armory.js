define(['can', 'spin', 'jquery', 'text!view/armory.ejs', 'jquerypp/dom/cookie'], function(can, Spinner, $, view) {
    can.view.ejs('armoryView', view);
    var spin_opts = {
      lines: 13, length: 2, width: 3, radius: 4, corners: 1, 
      rotate: 34, color: '#000', speed: 0.9, trail: 50, 
      shadow: false, hwaccel: false, 
      className: 'spinner', zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '20', left: '30' // Left position relative to parent in px
    };
    var _from_str = function(str) {
        var s1 = str.split("@");
        var s2 = s1[1].split("-");
        return({'armory_name': s1[0], 'armory_realm': s2[0], 'armory_region': s2[1]});
    };
    var _to_str = function(character) {
        character.armory_region = character.armory_region.toUpperCase();
        return(can.sub("{armory_name}@{armory_realm}-{armory_region}", character));
    };
    var Armory = can.Control({
        init: function(element, options) {
            this.options.spinner = new Spinner(spin_opts);
            this.options.character = new can.Observe({armory_name: '', armory_realm: '', armory_region: 'US'});
            var searches = $.cookie('armory_searches');
            this.options.past_searches = (searches == null) ? [] : searches.split('&');
            if (this.options.past_searches.length > 0) {
                this.options.character.attr(_from_str(this.options.past_searches[0]));
            }
            this.element = element;
            this.element.html(can.view('armoryView', this.options));
        },
        'input[type="input"] change': function(el, ev) {
            this.options.character.attr($(el).attr('id'), $(el).attr('value'));
        },
        'input[type="button"] click': function(el, ev) {
            this.readArmory();
        },
        'select change': function(el,ev) {
            this.options.character.attr(_from_str($(el).val()));
        },
        readArmory: function() {
            var spinner = this.options.spinner;
            spinner.spin();
            $("#armory_btn").append(spinner.el).children('input').hide();
            var character = this.options.character;
            var past_searches = this.options.past_searches;
            var self=this
            var call = can.sub('cgi-bin/armory.cgi?region={armory_region}&server={armory_realm}&character={armory_name}', character);
            $.getJSON(call, function(json, a, b) { 
                // Add successful searches to the list
                var search = _to_str(character);
                var i = past_searches.indexOf(search);
                if (i != -1) { past_searches.splice(i, 1); }
                past_searches.unshift(search);
                // Keep search list to at most 20
                if (past_searches.length > 20) {
                    past_searches.pop();
                }
                $.cookie('armory_searches', past_searches.join('&'));
                var spec = {5: "disc", 2: "pally", 11: "druid", 7: "shaman", 1: "monk"}[json['class']];
                // Strictly speaking we should look to see if it is really holy
                // For now, holy priests will need to manually adjust
                var armory_stats = {
                    bint: Math.roundn(json.stats.int/1.05),
                    bspi: json.stats.spr,
                    bmast: json.stats.masteryRating,
                    bcrit: json.stats.critRating,
                    bhaste: json.stats.hasteRating,
                    bweapon: json.stats.spellPower - json.stats.int + 10
                };
                can.Observe.startBatch();
                $('#filters').data('controls')[0].setSpec(spec);
                $('div', $('#stats')).data('stat').attr(armory_stats);
                can.Observe.stopBatch();
                // Change filter to the appropriate spec
                self.element.html(can.view('armoryView', self.options));
            }).error(function(json, a, b) {
                spinner.stop();
                $("#armory_btn").children('input').show();
                alert("There was a problem accessing armory. Armory may be down, or the character name or realm are incorrect.")
            });
        }
    });
    return Armory;
});
