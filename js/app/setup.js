define(['jquery', 'can',
            'app/model/stat', 'app/control/stats',
            'app/model/buff', 'app/control/buffs',
            'app/model/spec', 'app/control/specs',
            'app/model/spell', 'app/control/spells',
            'app/util/filtering', 'app/util/delta_viewer',
            'app/util/armory', 'app/util/haste_bar', 'app/control/rotations',
            'app/util/image_loader'
            ], function($, can,
            stats, Stats,
            buffs, Buffs,
            specs, Specs,
            spells, Spells,
            Filter, Delta,
            Armory, HasteBar, Rotations,
            ImageLoader) {
    $(document).ready(function() {
        can.EJS.Helpers.prototype.ImageLoader = ImageLoader;
        new Stats('#stats', {stats: stats});
        new Buffs('#buffs', {buffs: buffs});
        new Specs('#specs', {specs: specs, stats: stats, buffs: buffs});
        new Spells('#spells', {spells: spells, specs: specs, buffs: buffs});
        new Filter('#filters', {table: $('#spellTable'), specs: $('#specs')})
        // new Delta('#deltaView', {source: $('#spellTable')});
        new Delta('#deltaView', {source: $('body')});
        new Armory('#armory');
        // specs.each(function(spec) {
        //     var name = 'haste_bar_' + spec.name;
        //     new HasteBar('#'+name, {spec: spec});
        // });
        new Rotations('#rotations', {specs: specs});
    });
    return;
});
