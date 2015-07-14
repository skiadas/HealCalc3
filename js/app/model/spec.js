define(['can'], function(can) {
    var SPECS = [
        {
            id: 1,
            name: 'Disc',
            icon: 'spell_holy_powerwordshield',
            active: true,
            bcrit: 1.235,
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Passive Regen',
                    fmana: function(time, delta) {
                        return ( ((1*this.spi + ((delta && delta.spi) || 0)) *
                                 0.5 * 1.129 + 6000) / 5 * (time || 1) )
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time/this.interval_time );
                    }
                },
                {
                    name: 'Potion', fmana: function(time, delta) {
                        return ( this.potmana * time/this.interval_time );
                    }
                },
                {
                    name: 'MindBender',
                    fmana: function(time, delta) {
                        return ( (this.mana_pool * ((this.talent45_disc === 'mb') ? 0.0175 * 13 / 60 : 0.03 *11 / (3*60))) * time )
                    }
                },
                {
                    name: 'Solace',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * ((this.talent45_disc === 'solace') ?  0.0226 : 0) * time * this.hfpm /60 )
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
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return ( ((1*this.spi + ((delta && delta.spi) || 0)) *
                                0.5 * 1.129 + 6000) / 5 * (time || 1) )
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time/this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return ( this.potmana * time/this.interval_time );
                    }
                },
                {
                    name: 'MindBender',
                    fmana: function(time, delta) {
                        return ( (this.mana_pool * ((this.talent45_holy === 'mb') ? 0.0175 * 13 / 60 : 0.03 *11 / (3*60))) * time )
                    }
                },
                {
                    name: 'Solace',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * ((this.talent45_holy === 'solace') ?  0.01 : 0) * time * this.hfpm /60 )
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
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return ( ( (1*this.spi + ( ( delta && delta.spi ) || 0 )) *
                                0.5 * 1.129 + 6000) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return ( this.potmana * time / this.interval_time );
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
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return ( ( ( 1*this.spi + ( ( delta && delta.spi ) || 0 ) ) *
                                    0.5 * 1.129 + 6000 ) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return ( this.potmana * time / this.interval_time );
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
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return ( ( 1 * this.spi + ( ( delta && delta.spi ) || 0 ) *
                                0.5 * 1.129 + 6000 ) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return ( this.potmana * time / this.interval_time );
                    }
                },
                {
                    name: 'Water Shield',
                    fmana: function(time, delta) {
                        return ( 2138 * ( this.glyph_water_shield ? 0.85 : 1 ) * time / 5 );
                    }
                },
                {
                    name: 'Water Shield proc',
                    fmana: function(time, delta) {
                        return ( 2928 * ( this.glyph_water_shield ? 1.5 : 1 ) *
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
            bpoints_info: [],
            mana_sources: [
                {
                    name: 'Spirit Based',
                    fmana: function(time, delta) {
                        return ( ( 1 * this.spi + ( ( delta && delta.spi ) || 0 ) *
                                0.5 * 1.129 + 6000) / 5 * ( time || 1 ) );
                    }
                },
                {
                    name: 'Initial Mana',
                    fmana: function(time, delta) {
                        return ( this.mana_pool * time / this.interval_time );
                    }
                },
                {
                    name: 'Potion',
                    fmana: function(time, delta) {
                        return ( this.potmana * time / this.interval_time );
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
            return (
                Math.roundn(
                    1.05 *
                    (this.attr('buffs.stats') ? 1.05 : 1) *
                    (
                        // 1042 +  // This should already be in the displayed value
                        this.attr('stats.bint') * 1 +
                        ( ( delta && delta.int ) || 0 ) +
                        ( this.attr('buffs.intflask') ? 250 : 0 ) +
                        ( this.attr('buffs.trinket1.int') *
                                this.attr('buffs.trinket1.uptime') ) +
                        ( this.attr('buffs.trinket2.int') *
                                this.attr('buffs.trinket2.uptime') )
                    )
                )
            );
        },
        fspi: function(delta) {
            return (
                Math.roundn(
                    ( this.attr('stats.bspi') || delta ) +
                    ( this.attr('buffs.trinket1.spi') *
                            this.attr('buffs.trinket1.uptime') ) +
                    ( this.attr('buffs.trinket2.spi') *
                            this.attr('buffs.trinket2.uptime') ) +
                    ( this.attr('buffs.weapon_enchant') === 'spirit' ? 500 * 0.35 : 0 )
                )
            );
        },
        fcrit: function(delta) {
            return (
                Math.roundn(
                    5 +   // 5% base crit
                    this.attr('stats.bcrit') * 0.00909 +
                    ( (delta && delta.crit) || 0 ) * 0.00909 +
                    ( this.attr('buffs.weapon_enchant') === 'crit' ? 500 * 0.35 : 0 ) +
                    ( this.attr('buffs.crit') ? 5 : 0 ),
                2 )
            );
        },
        fcritp: function(delta) {
            return ( 0.01 * this.fcrit(delta) );
        },
        fmast: function(delta) {
            return (
                Math.roundn(
                    (
                        (
                            this.attr('stats.bmast') * 0.00909 +
                            ( (delta && delta.mast) || 0 )  * 0.00909 +
                            ( this.attr('buffs.mastery') ? 550 : 0 )  * 0.00909
                        ) +
                        8
                    ) *
                    this.mastery_factor,
                2 )
            );
        },
        fmastp: function(delta) {
            return ( 0.01 * this.fmast(delta) );
        },
        fhaste_mul: function() {
            return ( this.attr('buffs.haste') ? 1.05 : 1 );
        },
        fhaste: function(delta) {
            return (
                (
                    (
                        ( 1 +
                            (
                                this.attr('stats.bhaste') * 1 +
                                ( (delta && delta.haste) || 0 )
                            ) *
                            (this.attr('monk_haste') ? 1.5 : 1) /
                            90 / 100
                        ) *
                        this.fhaste_mul()
                    ) - 1
                ) * 100
            );
        },
        fhastep: function(delta) {
            return ( 0.01 * this.fhaste(delta) );
        },
        fmulti: function(delta) {
            return (
                Math.roundn(
                    this.attr('stats.bmulti') * 0.01514 +
                    ( (delta && delta.multi) || 0 ) * 0.01514 +
                    ( this.attr('buffs.multi') ? 5 : 0 ),
                2 )
            );
        },
        fmultip: function(delta) {
            return ( 0.01 * this.fmulti(delta) );
        },
        fvers: function(delta) {
            return (
                Math.roundn(
                    this.attr('stats.bvers') * 0.00769 +
                    ( (delta && delta.vers) || 0 ) * 0.00769 +
                    ( this.attr('buffs.vers') ? 3 : 0 ),
                2 )
            );
        },
        fversp: function(delta) {
            return ( 0.01 * this.fvers(delta) );
        },
        fsp: function(delta) {
            return (
                Math.roundn(
                    (
                        (
                            this.fint(delta) * 1 +
                            this.attr('stats.bweapon') * 1 +
                            ( (delta && delta.sp) || 0 )
                        )
                    ) *
                    ( this.attr('buffs.sp') ? 1.1 : 1 )
                )
            );
        },
        fmast_heal_factor: function(delta) {
            return ( 1 + 0.01 * this.fmast(delta) );  // Specs need to override this
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
        fmana_pool: function(delta) {
            return 160000;
        },
        fmonk_ap: function(delta) {
            return (
                this.fsp(delta) * 2
            );
        },
        fmonk_melee_haste: function(delta) {
            return (
                ((1 + this.fhastep(delta)) * 1.4 - 1) * 100
            );
        },
        fmonk_melee_hastep: function(delta) {
            return ( 0.01 * this.fmonk_melee_haste(delta) );
        },
        fmonk_wspeed: function(delta) {
            return (
                this.attr('stats.bwspeed') / (1 + this.fmonk_melee_hastep(delta))
            );
        },
        fmonk_wdps: function(delta) {
            return (
                (
                    this.attr('stats.bwdps') +
                    this.fmonk_ap(delta) / 14
                ) *
                (1 + this.fmonk_melee_hastep(delta))
            );
        },
        fmonk_melee_factor: function(delta) {
            return (
                this.attr('stats.bwdps') *
                ( (this.attr('stats.bwspeed') > 3) ? 1 : 1.5 * 0.898882 ) +
                this.fmonk_ap(delta) / 14
            );
        },
        fmonk_wdam: function(delta) {
            return (
                this.fmonk_wdps(delta) * this.fmonk_wspeed(delta)
            );
        },
        interval_time: 60,   // Seconds to consider for mana sources
        val_update: function() {
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
                'multi': this.fmulti(),
                'multip': this.fmultip(),
                'vers': this.fvers(),
                'versp': this.fversp(),
                'sp': this.fsp(),
                'monk_ap': this.fmonk_ap(),
                'monk_melee_haste': Math.roundn(this.fmonk_melee_haste(), 2),
                'monk_melee_hastep': this.fmonk_melee_hastep(),
                'monk_wspeed': this.fmonk_wspeed(),
                'monk_wdps': this.fmonk_wdps(),
                'monk_wdam': this.fmonk_wdam(),
                'raid_size': this.attr('buffs.raid_size'),
                'mana_pool': this.fmana_pool(),
                'potmana':  this.attr('buffs.channeled_pot') ? 51000 : 34000,
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
        mastery_factor: 1.6,
        aa_stacks: 5,
        aa_uptime: 0,
        borrowed_time_uptime: 0,
        fcrit: function(delta) {
            return (
                Math.roundn(
                    5 +   // 5% base crit
                    ( this.attr('buffs.crit') ? 5 : 0 ) +
                    (
                        this.attr('stats.bcrit') * 0.00909 +
                        ( (delta && delta.crit) || 0 ) * 0.00909 +
                        ( this.attr('buffs.weapon_enchant') === 'crit' ? 500 * 0.35 : 0 ) * 0.00909
                    ) * 1.05,  // Disc gets more crit
                2 )
            );
        },
        fhaste: function(delta) {
            return (
                (
                    (
                        ( 1 +
                            (
                                this.attr('stats.bhaste') * 1 +
                                ( (delta && delta.haste) || 0 )
                            ) *
                            (1 + 0.4 * this.attr('borrowed_time_uptime')) /
                            90 / 100
                        ) *
                        this.fhaste_mul()
                    ) - 1
                ) * 100
            );
        },
        cascade_targets_disc: 15,
        divinestar_targets_disc: 8,
        halo_targets_disc: 15,
        cascade_range_disc: 25,
        poh_targets_disc: 5,
        glyph_pom_disc: true,
        glyph_penance: true,
        hfpm: 6,   // Holy fires per minute
        talent45_disc: 'solace',
        t17_2p_disc: false,
        t17_4p_disc: false,
        t18_2p_disc: false
    });

    // HOLY
    spcs[1].attr({
        mastery_factor: 1.3,
        cascade_range_holy: 25,
        divinestar_targets_holy: 8,
        fmulti: function(delta) {
            return (
                Math.roundn(
                    (
                        this.attr('stats.bmulti') +
                        ( (delta && delta.multi) || 0 )
                    ) * 0.01514 * 1.05 +
                    ( this.attr('buffs.multi') ? 5 : 0 ),
                2 )
            );
        },
        fhaste_mul: function() {
            return (
                (this.attr('buffs.haste') ? 1.05 : 1) *
                (this.attr('t18_2p_holy') ? 1.06 : 1)
            );
        },
        poh_targets_holy: 5,
        lw_charges: 15,
        glyph_coh: false,
        glyph_pom_holy: true,
        glyph_renew_holy: false,
        glyph_binding_holy: false,
        talent45_holy: 'mb',
        t17_2p_holy: false,
        t18_2p_holy: false,
        t18_4p_holy: false
    });

    // PALLY
    spcs[2].attr({
        mastery_factor: 1.25,
        fhaste_mul: function() {
            return (
                1.1 *
                ( this.attr('buffs.haste') ? 1.05 : 1 ) *
                ( this.attr('t18_4p_pally') ? 1.08 : 1 )
            );
        },
        fcrit: function(delta) {
            return (
                Math.roundn(
                    5 +   // 5% base crit
                    ( this.attr('buffs.crit') ? 5 : 0 ) +
                    (
                        this.attr('stats.bcrit') * 0.00909 +
                        ( (delta && delta.crit) || 0 ) * 0.00909 +
                        ( this.attr('buffs.weapon_enchant') === 'crit' ? 500 * 0.35 : 0 ) * 0.00909
                    ) * 1.05,  // Disc gets more crit
                2 )
            );
        },
        daybreak: false,
        infusion_of_light: false,
        beacon_heals: false,
        bol: true,
        bof: true,
        glyph_lod: false,
        t18_2p_pally: false,
        t18_4p_pally: false
    });

    // DRUID
    spcs[3].attr({
        mastery_factor: 1.25,
        fhaste: function(delta) {
            return (
                (
                    (
                        ( 1 +
                            (
                                this.attr('stats.bhaste') * 1 +
                                ( (delta && delta.haste) || 0 )
                            ) / 90 / 100 *
                            1.05 // Druids get more haste stat
                        ) *
                        this.fhaste_mul()
                    ) - 1
                ) * 100
            );
        },
        incarnation: false,
        germination: true,
        glyph_wild_growth: true,
        glyph_blooming: false,
        glyph_regrowth: true,
        glyph_rejuv: false,
        healing_touch_with_ns: false,
        t17_4p_druid: false
    });

    // SHAMAN
    spcs[4].attr({
        mastery_factor: 3,
        fhaste_mul: function() {
            return (
                ( this.attr('ancestral_swiftness') ? 1.05 : 1 ) *
                ( this.attr('buffs.haste') ? 1.05 : 1 )
            );
        },
        fmast: function(delta) {
            return (
                Math.roundn(
                    (
                        (
                            this.attr('stats.bmast') * 0.00909 +
                            ( (delta && delta.mast) || 0 )  * 0.00909 +
                            ( this.attr('buffs.mastery') ? 550 : 0 )  * 0.00909
                        ) * 1.05 +
                        8
                    ) *
                    this.mastery_factor,
                2 )
            );
        },
        fmast_factor: function(delta) {
            return ( 1 + ( this.attr('health_deficit') / 100 ) * this.fmastp(delta) );
        },
        resurgence: true,
        tidal_waves: true,
        conductivity: 0,
        ancestral_swiftness: false,
        hr_targets: 6,
        ch_targets: 4,
        glyph_riptide: false,
        health_deficit: 20,
        glyph_water_shield: false,
        high_tide: true,
        water_shield_ppm: 4,
        rushing_streams: false,
        t18_2p_shaman: false
    });

    // MONK
    spcs[5].attr({
        fmana_pool: function(delta) {
            return (
                ( this.attr('buffs.mana_meta') ? 1.02 : 1 ) *
                ( this.attr('ascension') ? 1.15 : 1 ) *
                300000
            );
        },
        mastery_factor: 0.8,
        uplift_targets: 8,
        tiger_power: true,
        muscle_memory: true,
        blackoutkick_extra: 0,
        ascension: false,
        glyph_targeted_explusion: false,
        t14_2p_monk: false,
        t16_2p_monk: false,
        t16_4p_monk: false,
        mast_B: 1.2 * 9985,
        mast_c: 1.2 * 0.7,
        mana_tea: true,
        monk_haste: true
    });

    return spcs;
});
