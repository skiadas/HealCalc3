define(['can'], function(can) {
    SPECS = [
        {id: 1 , name: 'Disc', icon: 'spell_holy_powerwordshield_large.jpg', active: true, bcrit: 1.235, bpoints_info: [
            { name: 'Renew', img: 'spell_holy_renew', nticks: 4, time_tick: 3, hfactor: 1 },
            { name: 'Renew BT', img: 'spell_holy_renew', nticks: 4, time_tick: 3, hfactor: 1.15 },
            { name: 'Glyphed Renew', img: 'spell_holy_renew', nticks: 3, time_tick: 3, hfactor: 1 },
            { name: 'Glyphed Renew BT', img: 'spell_holy_renew', nticks: 3, time_tick: 3, hfactor: 1.15 },
            { name: 'Holy Fire', img: 'spell_holy_searinglight', nticks: 7, time_tick: 1, hfactor: 1 },
            { name: 'Holy Fire BT', img: 'spell_holy_searinglight', nticks: 7, time_tick: 1, hfactor: 1.15 }]},
        {id: 2 , name: 'Holy', icon: 'spell_holy_guardianspirit_large.jpg', active: false, bcrit: 1.235, bpoints_info: [
            { name: 'Renew', img: 'spell_holy_renew', nticks: 4, time_tick: 3 },
            { name: 'Glyphed Renew', img: 'spell_holy_renew', nticks: 3, time_tick: 3 },
            { name: 'HW:Sanc', img: 'spell_holy_divineprovidence', nticks: 15, time_tick: 2 },
            { name: 'LW/LS', img: 'spell_holy_summonlightwell', nticks: 3, time_tick: 2 },
        ]},
        {id: 3 , name: 'Pally', icon: 'spell_holy_holybolt_large.jpg', active: false, bcrit: 3.335, bpoints_info: [
            { name: 'EF', img: 'inv_torch_thrown', nticks: 10, time_tick: 3 },
            { name: 'SS', img: 'ability_paladin_blessedmending', nticks: 5, time_tick: 6 },
        ]},
        {id: 4 , name: 'Druid', icon: 'spell_nature_healingtouch_large.jpg', active: false, bcrit: 1.85, bpoints_info: [
            { name: 'LB', img: 'inv_misc_herb_felblossom', nticks: 15, time_tick: 1 },
            { name: 'Glyphed LB', img: 'inv_misc_herb_felblossom', nticks: 10, time_tick: 1},
            { name: 'WG/SM', img: 'ability_druid_flourish', nticks: 7, time_tick: 1},
            { name: 'Rejuv', img: 'spell_nature_rejuvenation', nticks: 4, time_tick: 3 },
            { name: 'Tranq', img: 'spell_nature_rejuvenation', nticks: 4, time_tick: 2 },
            { name: 'Regrowth', img: 'spell_nature_resistnature', nticks: 3, time_tick: 2 },
        ]},
        {id: 5 , name: 'Shaman', icon: 'spell_nature_healingwavegreater_large.jpg', active: false, bcrit: 1.235, bpoints_info: [
            { name: 'Riptide', img: 'spell_nature_riptide', nticks: 6, time_tick: 3 },
            { name: 'Healing Rain', img: 'spell_nature_giftofthewaterspirit', nticks: 5, time_tick: 2 },
            { name: 'Earthliving', img: 'spell_shaman_giftearthmother', nticks: 4, time_tick: 4 },
            { name: 'HTT', img: 'ability_shaman_healingtide', nticks: 11/2, time_tick: 2 },
            { name: 'HST', img: 'inv_spear_04', nticks: 15/2, time_tick: 2 },
        ]},
        {id: 6 , name: 'Monk', icon: 'spell_monk_mistweaver_spec_large.jpg', active: false, bcrit: 2.19, bpoints_info: [
            { name: 'Surging Mist, Renewing Mist', img: 'ability_monk_surgingmist', nticks: 6 }]}
    ];
    $.each(SPECS, function(_, spec) {
       spec.breakpoints = [];
       $.each(spec.bpoints_info, function(_, bpoint) {
           var max_haste_p = 0.5;
           var max_new_points = Math.ceil(bpoint.nticks*max_haste_p+0.5);
           for (i=1; i<max_new_points; i++) {
               var count = [i, ['st','nd','rd','th','th','th'][i-1]].join('');
               spec.breakpoints.push({name: bpoint.name, img: bpoint.img, no: count, 
                   hastep: bpoint.time_tick/((bpoint.hfactor || 1) * Math.ceil((bpoint.time_tick*bpoint.nticks)/(bpoint.nticks+i-0.5) * 1000)/1000 - 0.0005)
               });
           }
       });
       // Sort the breakpoints
       var flag;
       var n=0;
       var l = spec.breakpoints.length;
       do {
           n++;
           flag = 0;
           for (var i=0; i < l-1; i++) {
               val1 = spec.breakpoints[i].hastep;
               val2 = spec.breakpoints[i+1].hastep;
                   // alert("here")
               if (val1 > val2) {
                   flag = 1;
                   var temp = spec.breakpoints[i];
                   spec.breakpoints[i] = spec.breakpoints[i+1];
                   spec.breakpoints[i+1] = temp;
               }
           }
       } while (flag == 1 && n<200);
    });
    
    spec_generic = {
        mastery_factor: 2.5,
        fint: function(delta) { 
            return (Math.round( 1.05 * (this.attr('buffs.stats') ? 1.05 : 1)*
                                (this.attr('stats.bint')*1 + ((delta && delta.int) || 0) +
                                 (this.attr('buffs.intfood') ? 275 : 0) +
                                 (this.attr('buffs.intflask') ? 1000 : 0) )));
        },
        fcrit: function(delta) {
            return (Math.round((((this.attr('stats.bcrit')*1 + ((delta && delta.crit) || 0)) /600 +
                     this.fint(delta) * 0.0003951) +
                     + this.attr('bcrit') +
                     (this.attr('buffs.crit') ? 5 : 0))*100 )/100  );
        },
        fcritp: function(delta) {
            return(0.01*this.fcrit(delta));
        },
        fmast: function(delta) {
            return (Math.round((((1* this.attr('stats.bmast') +((delta && delta.mast) || 0) +
                                (this.attr('buffs.mastery') ? 3000 : 0) )/600 +8)  *
                        this.mastery_factor) * 100) /100);
        },
        fmastp: function(delta) {
            return(0.01*this.fmast(delta));
        },
        fhaste_mul: function() {
            return((this.attr('buffs.haste') ? 1.05 : 1));
        },
        fhaste: function(delta) {
            return ( (((1+ (this.attr('stats.bhaste')*1 +((delta && delta.haste) || 0)) /425 / 100) *
                                (this.fhaste_mul())) -1) * 100 
                    );
        },
        fhastep: function(delta) {
            return(0.01*this.fhaste(delta));
        },
        fsp: function(delta) {
            return (Math.round(((1*this.fint(delta)-10 + 1*this.attr('stats.bweapon') +
                                ((delta && delta.sp) || 0))) * 
                                (this.attr('buffs.sp') ? 1.05 : 1)));
        },
        fmast_heal_factor: function(delta) {
            return(1+0.01*this.fmast(delta));  // Specs need to override this
        },
        val_update: function() {
            can.Observe.startBatch();
            this.attr({
                'int': this.fint(),
                'crit': this.fcrit(),
                'critp': this.fcritp(),
                'mast': this.fmast(),
                'mastp': this.fmastp(),
                'mast_heal_factor': this.fmast_heal_factor(),
                'haste': Math.round(this.fhaste()*100)/100,
                'hastep': this.fhastep(),
                'sp': this.fsp(),
                'critmeta': this.attr('buffs.critmeta')
            });
            can.Observe.stopBatch();
        }
    };
    var len = SPECS.length;
    spcs = new can.Observe.List([]);
    for (i=0; i< len; i++) {
        can.extend(SPECS[i], spec_generic);
        // var spec = new can.Observe(SPECS[i]);
        // spcs.push(spec);
        spcs.push(SPECS[i]);
    }
    spcs[0].attr({
        mastery_factor: 2.5, 
        fsp: function(delta) {
            return (Math.round((1*this.fint(delta)-10 + 1*this.attr('stats.bweapon') +
                                ((delta && delta.sp) || 0)) * 
                                (this.attr('buffs.sp') ? 1.05 : 1) *
                                (this.attr('inner_fire') ? 1.1 : 1))
            );
        },
        'inner_fire': true, 'grace': true, 'evang_stacks': 5, 'archangel': false,
        'cascade_targets_disc': 10, 'cascade_range_disc': 25, 'poh_targets_disc': 5, 'glyph_pom_disc': true,
        'glyph_renew_disc': false, 'glyph_penance': false, 't4_2p_disc': false });
    // HOLY
    spcs[1].attr({
        mastery_factor: 1.25,
        fsp: function(delta) {
            return (Math.round((1*this.fint(delta)-10 + 1*this.attr('stats.bweapon') +
                                ((delta && delta.sp) || 0)) * 
                                (this.attr('buffs.sp') ? 1.05 : 1) *
                                (this.attr('inner_fire') ? 1.1 : 1))
            );
        },
        'serenity': true, 'sanctuary': true, 'inner_fire': true,
        'cascade_targets_holy': 10, 'cascade_range_holy': 25, 'poh_targets_holy': 5, 'lw_charges': 15,
        'glyph_coh': false, 'glyph_pom_holy': true, 'glyph_renew_holy': false, 't4_2p_holy': false }
    );
    // PALLY
    spcs[2].attr({
        mastery_factor: 1.5,
        fhaste_mul: function() {
            return (1.1* (this.attr('buffs.haste') ? 1.05 : 1));
        },
        'daybreak': false, 'bol': false, 'glyph_lod': false, 't4_2p_pally': false , 'cs_to_hp': false, 'one_hp': false});
    // DRUID
    spcs[3].attr({
        mastery_factor: 1.25,
        fint: function(delta) {
            return (Math.round(1.05*(this.attr('buffs.stats') ? 1.1 : 1)*
                           (1*this.attr('stats.bint') + ((delta && delta.int) || 0) +
                           (this.attr('buffs.intfood') ? 275 : 0) +
                           (this.attr('buffs.intflask') ? 1000 : 0)) *
                           (this.attr('hotw') ? 1.06 : 1)));
        },
        'incarnation': false, 'hotw': false, glyph_wild_growth: true, glyph_blooming: false, glyph_regrowth: true, glyph_rejuv: false, 't4_2p_druid': false });
    // Lifebloom option for 1 or 3 stacks
    // SHAMAN
    spcs[4].attr({
        mastery_factor: 3,
        fhaste_mul: function() {
            return ((this.attr('ancestral_swiftness') ? 1.05 : 1) *
                    (this.attr('buffs.haste') ? 1.05 : 1));
        },
        fsp: function(delta) {
            return (Math.round((1*this.fint(delta)-10 + 1*this.attr('stats.bweapon') +
                                (delta && delta.sp || 0) + 2873) * 
                                (this.attr('buffs.sp') ? 1.05 : 1)));
        },
        fmast_factor: function(delta) {
            return((1+(this.attr('health_deficit')/100)*this.fmastp(delta)));
        },
        'resurgence': true, 'tidal_waves': true, 'conductivity': false, 'echo_elements': false, 'ancestral_swiftness': false, 'glyph_riptide': false, 'health_deficit': 20, 'chain_heal_riptide': true, 'earth_shield_buff': true, 't4_2p_shaman': false });
    // MONK
    //
    spcs[5].attr({
        mastery_factor: 0,
        'uplift_targets': 8, 'revival_targets': 10, 't4_2p_monk': false});

    spcs.val_update = function() {
         can.Observe.startBatch();
         this.each(function(spec) {
             spec.val_update();
         })
         can.Observe.stopBatch();
    };

    return spcs;
});
