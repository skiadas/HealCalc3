$(document).ready(function() {
    $.when(Buff.findAll({}), Stat.findAll({}), Spell.findAll({}), Spec.findAll({})).then(function(buffsResp, statsResp, spellsResp, specsResp) {
        var buffs = buffsResp[0];
        var stats = statsResp[0];
        var spells = spellsResp[0];
        var specs = specsResp[0];
        // Need to add here the details for the specs. Lots of extra attributes to each.
        // DISC
        specs[0].mastery_factor = 2.5;
        specs[0].fsp = function() {
            return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon')) * 
                                (this.attr('buffs.buff_sp') ? 1.05 : 1)) *
                                (this.attr('inner_fire') ? 1.1 : 1)
            ));
        };
        specs[0].attr({'inner_fire': true, 'grace': true, 'archangel': false,
            'cascade_range_disc': 25, 'poh_targets_disc': 5, 'glyph_pom_disc': true,
            'glyph_renew_disc': false, 'glyph_penance': false}
        ).save();
        // HOLY
        specs[1].mastery_factor = 1.25;
        specs[1].fsp = function() {
            return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon')) * 
                                (this.attr('buffs.buff_sp') ? 1.05 : 1)) *
                                (this.attr('inner_fire') ? 1.1 : 1)
            ));
        };
        specs[1].attr({'serenity': true, 'sanctuary': true, 'inner_fire': true,
            'cascade_range_holy': 25, 'poh_targets_holy': 5,
            'glyph_coh': false, 'glyph_pom_holy': true, 'glyph_renew_holy': false}
        ).save();
        // PALLY
        // Need to add: 10% casting speed, 5% Healing improvement
        // 25% healing improvement from being holy
        // DRUID
        specs[3].mastery_factor = 1.25;
        specs[3].fint = function() {
            return (Math.round((this.attr('buffs.buff_stats') ? 1.1 : 1)*
                                this.attr('stats.bint') * (this.attr('hotw') ? 1.06 : 1)));
        };
        specs[3].attr({'incarnation': false, 'hotw': false, glyph_wild_growth: true, glyph_blooming: false, glyph_regrowth: true, glyph_rejuv: false}).save();
        // Lifebloom option for 1 or 3 stacks
        
        $.when(new Stats('#stats', {stats: stats}),
        new Buffs('#buffs', {buffs: buffs}),
        new Specs('#specs', {specs: specs, stats: stats, buffs: buffs}), 
        new Spells('#spells', {spells: spells, specs: specs})).then(function() {
            new Sorter('#spellTable', {spells: spells});
            new Filtering('#filters', {table: $('#spellTable'), view: 'views/filtering.ejs'});
        });
    });
});