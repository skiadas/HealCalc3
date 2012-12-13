define(['jquery', 'can/view/ejs', 'can/control', 
            'app/model/stat', 'app/control/stats', 
            'app/model/buff', 'app/control/buffs',
            'app/model/spec', 'app/control/specs',
            'app/model/spell', 'app/control/spells',
            'app/util/filtering', 'app/util/delta_viewer',
            'app/util/armory', 'app/util/haste_bar'
            ], function($, can, _, stats, Stats, buffs, Buffs, specs, Specs, spells, Spells, Filter, Delta, Armory, HasteBar) {
    $(document).ready(function() {
        // var stats = Stat.findAll({});
        new Stats('#stats', {stats: stats});
        new Buffs('#buffs', {buffs: buffs});
        new Specs('#specs', {specs: specs, stats: stats, buffs: buffs});
        new Spells('#spells', {spells: spells, specs: specs});
        new Filter('#filters', {table: $('#spellTable'), specs: $('#specs'), view: 'js/app/view/filtering.ejs'})
        new Delta("#deltaView", {source: $("#spellTable")});
        new Armory("#armory");
        specs.each(function(spec) {
            var name = "haste_bar_" + spec.name;
            new HasteBar("#"+name, {spec: spec});
        });
    });
    return;
});
