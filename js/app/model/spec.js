define(['can'], function(can) {
    var SPECS = [
        {
            id: 1,
            name: 'Disc', 
            icon: 'spell_holy_powerwordshield',
            active: true,
            bcrit: 1.235,
            bint: 206,
            bpoints_info: [
                {
                    name: 'Renew',
                    img: 'spell_holy_renew',
                    nticks: 4,
                    time_tick: 3,
                    hfactor: 1
                },
                {
                    name: 'Renew BT',
                    img: 'spell_holy_renew',
                    nticks: 4,
                    time_tick: 3,
                    hfactor: 1.15
                },
                {
                    name: 'Glyphed Renew',
                    img: 'spell_holy_renew',
                    nticks: 3,
                    time_tick: 3,
                    hfactor: 1
                },
                {
                    name: 'Glyphed Renew BT',
                    img: 'spell_holy_renew',
                    nticks: 3,
                    time_tick: 3,
                    hfactor: 1.15
                },
                {
                    name: 'Holy Fire',
                    img: 'spell_holy_searinglight',
                    nticks: 7,
                    time_tick: 1,
                    hfactor: 1
                },
                {
                    name: 'Holy Fire BT',
                    img: 'spell_holy_searinglight',
                    nticks: 7,
                    time_tick: 1,
                    hfactor: 1.15
                }
            ],
            mana_sources: [
                { 
                    name: 'Passive Regen',
                    fmana: function(time, delta) { 
                        return( (1*this.spi + ((delta && delta.spi) || 0) *
                                 0.5 * 1.129 + 6000) / 5 * (time || 1) )
                    }
                },
                { 
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return( this.mana_pool * time/this.interval_time );
                    }
                },
                { 
                    name: 'Potion', fmana: function(time, delta) {
                        return( this.potmana * time/this.interval_time );
                    }
                },
                {
                    name: 'Rapture', 
                    fmana: function(time, delta) {
                        return( (this.spi * 1.5) * time / this.rapture_interval );
                    }
                },
                {
                    name: 'Mindbender',
                    fmana: function(time, delta) {
                        return( (this.mana_pool * 0.015 * 11) * time /60 );
                    }
                },
                {
                    name: 'Hymn of Hope',
                    fmana: function(time, delta) {
                        return( this.mana_pool * (1+3*1.15) * 0.02 * time /(60*6) );
                    }
                },
            ]
        },
        {
            id: 2,
            name: 'Holy',
            icon: 'spell_holy_guardianspirit',
            active: false,
            bcrit: 1.235,
            bint: 206,
            bpoints_info: [
                {
                    name: 'Renew',
                    img: 'spell_holy_renew',
                    nticks: 4,
                    time_tick: 3
                },
                {
                    name: 'Glyphed Renew',
                    img: 'spell_holy_renew',
                    nticks: 3,
                    time_tick: 3
                },
                {
                    name: 'HW:Sanc',
                    img: 'spell_holy_divineprovidence',
                    nticks: 15,
                    time_tick: 2
                },
                {
                    name: 'LW/LS',
                    img: 'spell_holy_summonlightwell',
                    nticks: 3,
                    time_tick: 2
                },
            ],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return( (1*this.spi + ((delta && delta.spi) || 0) * 
                                0.5 * 1.129 + 6000) / 5 * (time || 1) )
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return( this.mana_pool * time/this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return( this.potmana * time/this.interval_time );
                    }
                },
                {
                    name: 'Mindbender',
                    fmana: function(time, delta) {
                        return( (this.mana_pool * 0.015 * 11) * time /60 )
                    }
                },
                {
                    name: 'Hymn of Hope',
                    fmana: function(time, delta) {
                        return( this.mana_pool * (1+3*1.15) * 0.02 * time /(60*6) )
                    }
                },
            ]
        },
        {
            id: 3,
            name: 'Pally',
            icon: 'spell_holy_holybolt',
            active: false,
            bcrit: 3.335,
            bint: 108,
            bpoints_info: [
                {
                    name: 'EF',
                    img: 'inv_torch_thrown',
                    nticks: 10,
                    time_tick: 3
                },
                {
                    name: 'SS',
                    img: 'ability_paladin_blessedmending',
                    nticks: 5,
                    time_tick: 6
                },
            ],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return( ( 1*this.spi + ( ( delta && delta.spi ) || 0 ) * 
                                0.5 * 1.129 + 6000) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return( this.potmana * time / this.interval_time );
                    }
                },
                {
                    name: 'Divine Plea',
                    fmana: function(time, delta) {
                        return( this.mana_pool * 0.12 * time / (2*60) );
                    }
                },
                {
                    name: 'Seal of Insight', fmana: function(time, delta) {
                        return(this.mana_pool * 0.04 * this.soi_ppm * time / 60)
                    }
                },
            ]
        },
        {
            id: 4,
            name: 'Druid',
            icon: 'spell_nature_healingtouch',
            active: false,
            bcrit: 1.85,
            bint: 169,
            bpoints_info: [
                {
                    name: 'LB',
                    img: 'inv_misc_herb_felblossom',
                    nticks: 15,
                    time_tick: 1
                },
                {
                    name: 'Glyphed LB',
                    img: 'inv_misc_herb_felblossom',
                    nticks: 10,
                    time_tick: 1
                },
                {
                    name: 'WG/SM',
                    img: 'ability_druid_flourish',
                    nticks: 7,
                    time_tick: 1
                },
                {
                    name: 'Rejuv',
                    img: 'spell_nature_rejuvenation',
                    nticks: 4,
                    time_tick: 3
                },
                {
                    name: 'Tranq',
                    img: 'spell_nature_rejuvenation',
                    nticks: 4,
                    time_tick: 2
                },
                {
                    name: 'Regrowth',
                    img: 'spell_nature_resistnature',
                    nticks: 3,
                    time_tick: 2
                },
            ],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return( ( ( 1*this.spi + ( ( delta && delta.spi ) || 0 ) ) *
                                    0.5 * 1.129 + 6000 ) / 5 * ( time || 1 ) );
                    } 
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return( this.potmana * time / this.interval_time );
                    }
                },
                {
                    name: 'Innervate',
                    fmana: function(time, delta) {
                        return( this.mana_pool * 0.2 * time / ( 3*60 ) );
                    }
                },
            ]
        },
        {
            id: 5 ,
            name: 'Shaman',
            icon: 'spell_nature_healingwavegreater',
            active: false,
            bcrit: 1.235,
            bint: 138,
            bpoints_info: [
                { name: 'Riptide', img: 'spell_nature_riptide', nticks: 6, time_tick: 3 },
                { name: 'Healing Rain', img: 'spell_nature_giftofthewaterspirit', nticks: 5, time_tick: 2 },
                { name: 'Earthliving', img: 'spell_shaman_giftearthmother', nticks: 4, time_tick: 4 },
                { name: 'HTT', img: 'ability_shaman_healingtide', nticks: 11/2, time_tick: 2 },
                { name: 'HST', img: 'inv_spear_04', nticks: 15/2, time_tick: 2 },
            ],
            mana_sources: [
                { 
                    name: 'Spirit Based', 
                    fmana: function(time, delta) {
                        return( ( 1 * this.spi + ( ( delta && delta.spi ) || 0 ) * 
                                0.5 * 1.129 + 6000 ) / 5 * ( time || 1 ) );
                    } 
                },
                { 
                    name: 'Initial Mana', 
                    fmana: function(time, delta) { 
                        return( this.mana_pool * time / this.interval_time );
                    }
                },
                { 
                    name: 'Potion', 
                    fmana: function(time, delta) { 
                        return( this.potmana * time / this.interval_time );
                    }
                },
                {
                    name: 'Water Shield',
                    fmana: function(time, delta) {
                        return( 2138 * ( this.glyph_water_shield ? 0.85 : 1 ) * time / 5 );
                    }
                },
                {
                    name: 'Water Shield proc',
                    fmana: function(time, delta) {
                        return( 2928 * ( this.glyph_water_shield ? 1.5 : 1 ) * 
                                this.water_shield_ppm * time / 60 );
                    }
                },
            ]
        },
        {
            id: 6,
            name: 'Monk',
            icon: 'spell_monk_mistweaver_spec',
            active: false,
            bcrit: 2.19,
            bint: 143,
            bpoints_info: [
                {
                    name: 'Surging Mist, Renewing Mist',
                    img: 'ability_monk_surgingmist',
                    nticks: 6
                }
            ],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return( ( 1 * this.spi + ( ( delta && delta.spi ) || 0 ) *
                                0.5 * 1.129 + 6000) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return( this.potmana * time / this.interval_time );
                    }
                },
            ]
        }
    ];
    
    /* Set up breakpoints for the various specs.
     * Currently assumes that haste percent would not reasonably exceed 50%
     */
    $.each( SPECS, function(_, spec) {
        var max_haste_p = 0.5,
            max_new_points,
            i, count, flag,
            n=0, l;

        spec.breakpoints = [];
        $.each( spec.bpoints_info, function(_, bpoint) {
            max_new_points = Math.ceiln( bpoint.nticks * max_haste_p + 0.5 );
            for ( i = 1; i < max_new_points; i++ ) {
                count = [i, ['st','nd','rd','th','th','th'][i-1]].join('');
                spec.breakpoints.push({
                    name: bpoint.name,
                    img: bpoint.img,
                    no: count,
                    hastep: bpoint.time_tick /
                         (
                             ( bpoint.hfactor || 1 ) *
                                 Math.ceiln(
                                     ( bpoint.time_tick * bpoint.nticks ) / 
                                     ( bpoint.nticks + i - 0.5 ),
                                3 ) -
                             0.0005
                         )
                });
            }
        });
        // Sort the breakpoints
        n = 0;
        l = spec.breakpoints.length;
        do {
            n++;
            flag = 0;
            for (i=0; i < l-1; i++) {
                var val1 = spec.breakpoints[i].hastep,
                    val2 = spec.breakpoints[i+1].hastep;
                    // alert("here")
                if (val1 > val2) {
                    flag = 1;
                    var temp = spec.breakpoints[i];
                    spec.breakpoints[i] = spec.breakpoints[i+1];
                    spec.breakpoints[i+1] = temp;
                }
            }
        } while ( flag == 1 && n < 200 );
    });
    
    var spec_generic = {
        mastery_factor: 2.5,
        fint: function(delta) { 
            return(
                Math.roundn(
                    1.05 * 
                    (
                        this.attr('bint') +   // Got to take out the base int, buff.stats ignores it
                        (this.attr('buffs.stats') ? 1.05 : 1) *
                            (
                                this.attr('stats.bint') * 1 -
                                this.attr('bint') +
                                ( ( delta && delta.int ) || 0 ) +
                                ( this.attr('buffs.intfood') ? 275 : 0 ) +
                                ( this.attr('buffs.intflask') ? 1000 : 0 ) +
                                ( this.attr('buffs.trinket1.int') * 
                                        this.attr('buffs.trinket1.uptime') ) +
                                ( this.attr('buffs.trinket2.int') * 
                                        this.attr('buffs.trinket2.uptime') )
                            )
                    )
                )
            );
        },
        fspi: function(delta) {
            return(
                ( this.attr('stats.bspi') || delta ) + 
                ( this.attr('buffs.trinket1.spi') * 
                        this.attr('buffs.trinket1.uptime') ) +
                ( this.attr('buffs.trinket2.spi') * 
                        this.attr('buffs.trinket2.uptime') ) +
                ( this.attr('buffs.darkglow') ? 3000 * 15 / 60 : 0 )
            );
        },
        fcrit: function(delta) {
            return (
                Math.roundn(
                        this.attr('stats.bcrit') /600 +
                        ( (delta && delta.crit) || 0 ) /600 +
                        this.fint(delta) * 0.0003951 +
                        this.attr('bcrit') +
                        ( this.attr('buffs.crit') ? 5 : 0 ), 
                2 ) 
            );
        },
        fcritp: function(delta) {
            return( 0.01 * this.fcrit(delta) );
        },
        fmast: function(delta) {
            return(
                Math.roundn(
                        (
                            this.attr('stats.bmast') / 600 +
                            ( (delta && delta.mast) || 0 ) / 600 +
                            ( this.attr('buffs.mastery') ? 3000 : 0 ) / 600 +
                            8
                        ) *
                        this.mastery_factor,
                2 )
            );
        },
        fmastp: function(delta) {
            return( 0.01 * this.fmast(delta) );
        },
        fhaste_mul: function() {
            return( this.attr('buffs.haste') ? 1.05 : 1 );
        },
        fhaste: function(delta) {
            return( 
                (
                    (
                        ( 1 +
                            (
                                this.attr('stats.bhaste') * 1 +
                                ( (delta && delta.haste) || 0 )
                            ) / 425 / 100
                        ) *
                        this.fhaste_mul()
                    ) - 1
                ) * 100 
            );
        },
        fhastep: function(delta) {
            return( 0.01 * this.fhaste(delta) );
        },
        fsp: function(delta) {
            return(
                Math.roundn(
                    (
                        (
                            1 * this.fint(delta) -
                            10 + 
                            1 * this.attr('stats.bweapon') +
                            ( (delta && delta.sp) || 0 )
                        )
                    ) * 
                    ( this.attr('buffs.sp') ? 1.05 : 1 )
                )
            );
        },
        fmast_heal_factor: function(delta) {
            return( 1 + 0.01 * this.fmast(delta) );  // Specs need to override this
        },
        ftotal_mana: function(delta) {
            var total = 0,
                sources = this.mana_sources,
                i = this.mana_sources.length;
            while (i--) {
                if ( sources[i].name === 'Initial Mana' || sources[i].name === 'Potion' ) {
                    total += sources[i].fmana.call( this, this.interval_time * 1, delta );
                };
            };
            return total;
        },
        fregen_mps: function(delta) {
            var total = 0,
                sources = this.mana_sources,
                i = this.mana_sources.length;
            while (i--) {
                if ( sources[i].name !== 'Initial Mana' && sources[i].name !== 'Potion' ) {
                    total += sources[i].fmana.call( this, 1, delta );
                };
            };
            return total;
        },
        interval_time: 60,   // Seconds to consider for mana sources
        val_update: function() {
            can.Observe.startBatch();
            // Update basic stats first
            this.attr({
                'int': this.fint(),
                'spi': this.fspi(),
                'crit': this.fcrit(),
                'critp': this.fcritp(),
                'mast': this.fmast(),
                'mastp': this.fmastp(),
                'mast_heal_factor': this.fmast_heal_factor(),
                'haste': Math.roundn( this.fhaste(), 2),
                'hastep': this.fhastep(),
                'sp': this.fsp(),
                'critmeta': this.attr('buffs.crit_meta'),
                'manameta': this.attr('buffs.mana_meta'),
                'mana_pool': ( this.attr('buffs.mana_meta') ? 1.02 : 1 ) * 300000,
                'potmana':  this.attr('buffs.focus_pot') ? 45000 : 30000,
            });
            // Update mana sources
            var spec = this,
                regen_mana = 0,
                regen_mps = 0,
                total_mana = 0,
                mfun, mana, mps;
            
            spec.mana_sources.each(function(s) {
                mfun = can.proxy(s.fmana, spec);
                mana = Math.roundn( mfun( spec.interval_time * 1 ) );
                mps = Math.roundn( mfun(1), 1 );
                regen_mana += mana;
                if ( s.name !== 'Initial Mana' && s.name !== 'Potion' ) {
                    regen_mps += mps;
                } else {
                    total_mana += mana;
                }
                s.attr({ 'mana': mana, 'mps': mps });
            });
            spec.attr({
                'regen_mana': Math.roundn(regen_mana),
                'regen_mps': Math.roundn(regen_mps, 1),
                'total_mana': Math.roundn(total_mana),
            });
            can.Observe.stopBatch();
        }
    };
    
    // Creating the spcs object of the specs with required functions overwritten
    var len = SPECS.length,
        spcs = new can.Observe.List([]),
        i;
    for (i=0; i< len; i++) {
        can.extend(SPECS[i], spec_generic);
        spcs.push(SPECS[i]);
    }

    // Used to locate spec based on name
    spcs.find = function(str) {
        var i = this.length;
        while (i--) {
            if (this[i].name == str) {
                return this[i]
            };
        }
        return false;
    };
    // Updates each spec in order
    spcs.val_update = function() {
         can.Observe.startBatch();
         this.each( function(spec) {
             spec.val_update();
         });
         can.Observe.stopBatch();
    };
    
    // DISC
    spcs[0].attr({
        mastery_factor: 2.5, 
        fsp: function(delta) {
            return(
                Math.roundn(
                    (
                        1 * this.fint(delta) - 10 + 
                        1 * this.attr('stats.bweapon') +
                        ( ( delta && delta.sp ) || 0 )
                    ) * 
                    ( this.attr('buffs.sp') ? 1.05 : 1 ) *
                    ( this.attr('inner_fire') ? 1.1 : 1 )
                )
            );
        },
        inner_fire: true,
        grace: true,
        evang_stacks: 5,
        archangel: false,
        cascade_targets_disc: 10,
        cascade_range_disc: 25,
        poh_targets_disc: 5,
        glyph_pom_disc: true,
        glyph_renew_disc: false,
        glyph_penance: false,
        t4_2p_disc: false,
        rapture_interval: 15
    });
    
    // HOLY
    spcs[1].attr({
        mastery_factor: 1.25,
        fsp: function(delta) {
            return(
                Math.roundn(
                    (
                        1 * this.fint(delta) - 10 + 
                        1 * this.attr('stats.bweapon') +
                        ( ( delta && delta.sp ) || 0 )
                    ) * 
                    ( this.attr('buffs.sp') ? 1.05 : 1 ) *
                    ( this.attr('inner_fire') ? 1.1 : 1 )
                )
            );
        },
        serenity: true,
        sanctuary: true,
        inner_fire: true,
        cascade_targets_holy: 10,
        cascade_range_holy: 25,
        poh_targets_holy: 5,
        lw_charges: 15,
        glyph_coh: false,
        glyph_pom_holy: true,
        glyph_renew_holy: false,
        t4_2p_holy: false
    });
    
    // PALLY
    spcs[2].attr({
        mastery_factor: 1.5,
        fhaste_mul: function() {
            return( 1.1 * ( this.attr('buffs.haste') ? 1.05 : 1 ) );
        },
        daybreak: false,
        bol: false,
        glyph_lod: false,
        t4_2p_pally: false,
        cs_to_hp: false,
        one_hp: false,
        soi_ppm: 6
    });
    
    // DRUID
    spcs[3].attr({
        mastery_factor: 1.25,
        fint: function(delta) {
            return(
                Math.roundn(
                    (
                        this.attr('bint') + // The base int does not get multiplied
                        ( this.attr('buffs.stats') ? 1.1 : 1 ) *
                            (
                                1 * this.attr('stats.bint') -
                                this.attr('bint') +
                                ( ( delta && delta.int ) || 0 ) +
                                ( this.attr('buffs.intfood') ? 275 : 0 ) +
                                ( this.attr('buffs.intflask') ? 1000 : 0 ) + 
                                ( this.attr('buffs.trinket1.int') * 
                                        this.attr('buffs.trinket1.uptime') ) +
                                ( this.attr('buffs.trinket2.int') * 
                                        this.attr('buffs.trinket2.uptime') )
                            )
                    ) *
                    1.05 * 
                    ( this.attr('hotw') ? 1.06 : 1 )   // But HotW does affect it!
                )
            );
        },
        incarnation: false,
        hotw: false,
        glyph_wild_growth: true,
        glyph_blooming: false,
        glyph_regrowth: true,
        glyph_rejuv: false,
        t4_2p_druid: false
    });

    // Lifebloom option for 1 or 3 stacks
    // SHAMAN
    spcs[4].attr({
        mastery_factor: 3,
        fhaste_mul: function() {
            return(
                ( this.attr('ancestral_swiftness') ? 1.05 : 1 ) *
                ( this.attr('buffs.haste') ? 1.05 : 1 )
            );
        },
        fsp: function(delta) {
            return(
                Math.roundn(
                    (
                        1 * this.fint(delta) - 10 +
                        1 * this.attr('stats.bweapon') +
                        ( delta && delta.sp || 0 ) +
                        2873
                    ) * 
                    ( this.attr('buffs.sp') ? 1.05 : 1 )
                )
            );
        },
        fmast_factor: function(delta) {
            return( 1 + ( this.attr('health_deficit') / 100 ) * this.fmastp(delta) );
        },
        resurgence: true,
        tidal_waves: true,
        conductivity: false,
        echo_elements: false,
        ancestral_swiftness: false,
        glyph_riptide: false,
        health_deficit: 20,
        chain_heal_riptide: true,
        earth_shield_buff: true,
        t4_2p_shaman: false,
        glyph_water_shield: false,
        water_shield_ppm: 4
    });
    
    // MONK
    spcs[5].attr({
        mastery_factor: 0,
        uplift_targets: 8,
        revival_targets: 10,
        t4_2p_monk: false
    });
    
    return spcs;
});
