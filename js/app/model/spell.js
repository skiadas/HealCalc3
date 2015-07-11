define(['can'], function(can) {
    var SPELLS = [
        // DISC
        //
        {
            id: 1,
            code: 'HealDisc',
            name: 'Heal',
            specid: 1,
            base_ct: 2.5,
            base_mana: 3200,
            c: 3.3264 * 1.25 * 1.1,
            img: 'spell_holy_greaterheal',
            aoe: false,
            instant: false,
            item: 2060
        },
        {
            id: 2,
            code: 'FhealDisc',
            name: 'Flash Heal',
            specid: 1,
            base_ct: 1.5,
            base_mana: 6624,
            c: 3.32657 * 1.25 * 1.1,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061
        },
        {
            id: 3,
            code: 'CascadeDisc',
            name: 'Cascade',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            c: 0.432 * 1.1,
            img: 'ability_priest_cascade',
            aoe: true,
            instant: false,
            item: 120785
        },
        {
            id: 4,
            code: 'DivineStarDisc',
            name: 'Divine Star',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3200,
            targets: 6 * 2,
            c:  0.6518,
            img: 'spell_priest_divinestar',
            aoe: true,
            instant: true,
            item: 110744
        },
        {
            id: 5,
            code: 'HaloDisc',
            name: 'Halo',
            specid: 1,
            base_ct: 1.5,
            base_mana: 5760,
            targets: 6,
            c:  2.874,
            img: 'ability_priest_halo',
            aoe: true,
            instant: false,
            item: 120517
        },
        {
            id: 6,
            code: 'PWSDisc',
            name: 'Power Word: Shield',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            c: 4.59,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17
        },
        {
            id: 7,
            code: 'PoMDisc',
            name: 'Prayer of Mending',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            targets: 5,
            c: 0.666 * 1.25 * 1.25,
            img: 'spell_holy_prayerofmendingtga',
            aoe: true,
            instant: true,
            item: 33076
        },
        {
            id: 8,
            code: 'PoHDisc',
            name: 'Prayer of Healing',
            specid: 1,
            base_ct: 2.5,
            base_mana: 11405,
            targets: 5,
            c: 2.21664,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596
        },
        {
            id: 9,
            code: 'HolyFireDisc',
            name: 'Holy Fire',
            specid: 1,
            base_ct: 1.5,
            base_mana: 1600,
            c: 1.3761,
            ctick: 0.29835,
            nticks: 9,
            time_tick: 1,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 14914
        },
        {
            id: 10,
            code: 'SolaceDisc',
            name: 'Power Word: Solace',
            specid: 1,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.8348,
            ctick: 0.1989,
            nticks: 9,
            time_tick: 1,
            img: 'ability_priest_flashoflight',
            aoe: false,
            instant: true,
            item: 14914
        },
        {
            id: 11,
            code: 'SmiteDisc',
            name: 'Smite',
            specid: 1,
            base_ct: 1.5,
            base_mana: 2400,
            c: 0.92448,
            img: 'spell_holy_holysmite',
            aoe: false,
            instant: false,
            item: 585
        },
        {
            id: 12,
            code: 'PenanceDisc',
            name: 'Penance Damage',
            specid: 1,
            base_ct: 2,
            base_mana: 1920,
            c: 1.2,
            targets: 3,
            img: 'spell_holy_penance',
            aoe: false,
            instant: false,
            item: 47540
        },
        {
            id: 13,
            code: 'PenanceHealDisc',
            name: 'Penance Heal',
            specid: 1,
            base_ct: 2,
            base_mana: 1920,
            c: 2.64,
            targets: 3,
            img: 'spell_holy_penance',
            aoe: false,
            instant: false,
            item: 47540
        },
        {
            id: 14,
            code: 'ClarityOfWill',
            name: 'Clarity of Will',
            specid: 1,
            base_ct: 2.5,
            base_mana: 5040,
            c: 6.6,
            img: 'ability_priest_clarityofwill',
            aoe: false,
            instant: false,
            item: 152118
        },
        {
            id: 15,
            code: 'SavingGrace',
            name: 'Saving Grace',
            specid: 1,
            base_ct: 1.5,
            base_mana: 4800,
            c: 6.3,
            img: 'ability_priest_savinggrace',
            aoe: false,
            instant: false,
            item: 155274
        },
        {
            id: 16,
            code: 'EmpPoHDisc',
            name: 'Empowered PoH',
            specid: 1,
            base_ct: 2.5,
            base_mana: 11405,
            targets: 5,
            c: 2.21664,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596
        },
        {
            id: 17,
            code: 'EmpFhealDisc',
            name: 'Empowered FH',
            specid: 1,
            base_ct: 1.5,
            base_mana: 6560,
            c: 3.32657 * 1.25 * 1.1,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061
        },
        {
            id: 18,
            code: 'HolyNova',
            name: 'Holy Nova',
            specid: 1,
            base_ct: 1.5,
            base_mana: 2560,
            targets: 5,
            c: 1.125 / 2,
            img: 'spell_holy_holynova',
            aoe: true,
            instant: true,
            item: 132157
        },


        //
        // DRUID
        //
        {
            id: 201,
            code: 'HealingTouch',
            name: 'Healing Touch',
            specid: 4,
            base_ct: 2.5,
            base_mana: 3312,
            c: 3.6,
            img: 'spell_nature_healingtouch',
            aoe: false,
            instant: false,
            item: 5185
        },
        {
            id: 202,
            code: 'Regrowth',
            name: 'Regrowth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 5962,
            c: 2.1784,
            ctick: 0.546264,
            nticks: 6,
            time_tick: 2,
            img: 'spell_nature_resistnature',
            aoe: false,
            instant: false,
            item: 8936
        },
        {
            id: 203,
            code: 'Rejuv',
            name: 'Rejuvenation',
            specid: 4,
            base_ct: 1.5,
            base_mana: 3024,
            ctick: 0.542, // Actual coef per tick, not total
            nticks: 5,
            time_tick: 3,
            img: 'spell_nature_rejuvenation',
            aoe: false,
            instant: true,
            item: 774
        },
        {
            id: 204,
            code: 'Lifebloom',
            name: 'Lifebloom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 1440,
            c: 2.011,
            ctick: 5.52,
            nticks: 15,
            time_tick: 1,
            img: 'inv_misc_herb_felblossom',
            aoe: false,
            instant: true,
            item: 94447
        },
        {
            id: 205,
            code: 'WildGrowth',
            name: 'Wild Growth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 12080,
            ctick: 3.2535,
            nticks: 7,
            time_tick: 1,
            targets: 5,
            img: 'ability_druid_flourish',
            aoe: true,
            instant: true,
            item: 48438
        },
        {
            id: 206,
            code: 'Swiftmend',
            name: 'Swiftmend',
            specid: 4,
            base_ct: 1.5,
            base_mana: 4160,
            c: 3.5,
            targets: 1,
            img: 'inv_relics_idolofrejuvenation',
            aoe: false,
            instant: true,
            item: 18562
        },
        {
            id: 208,
            code: 'Mushroom',
            name: 'Wild Mushroom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 6912,
            ctick: 7.15,
            time_tick: 2,
            nticks: 15,
            targets: 3,
            img: 'druid_ability_wildmushroom_b',
            aoe: true,
            instant: true,
            item: 102792
        },
        {
            id: 209,
            code: 'Tranquility',
            name: 'Tranquility',
            specid: 4,
            base_ct: 8,
            base_mana: 5888,
            ctick: 2.502,
            nticks: 4,
            time_tick: 2,
            img: 'spell_nature_tranquility',
            aoe: true,
            instant: false,
            item: 740
        },
        // {
        //     id: 202,
        //     code: 'ForceOfNature',
        //     name: 'Force of Nature',
        //     specid: 4,
        //     base_ct: 1.5,
        //     base_mana: 0,
        //     Btick: 3501.6,
        //     ctick: 0.3214,
        //     nticks: 6,
        //     time_tick: 2.5,
        //     duration: 15,
        //     targets: 1,
        //     img: 'ability_druid_forceofnature',
        //     aoe: true,
        //     instant: true,
        //     item: 106737
        // },

        //
        // HOLY
        //
        {
            id: 17,
            code: 'HealHoly',
            name: 'Heal',
            specid: 2,
            base_ct: 2.5,
            base_mana: 3200,
            c: 3.3264 * 1.25 * 1.1,
            img: 'spell_holy_greaterheal',
            aoe: false,
            instant: false,
            item: 2060
        },
        {
            id: 18,
            code: 'FhealHoly',
            name: 'Flash Heal',
            specid: 2,
            base_ct: 1.5,
            base_mana: 6624,
            c: 3.32657 * 1.25 * 1.1,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061
        },
        {
            id: 19,
            code: 'BhealHoly',
            name: 'Binding Heal',
            specid: 2,
            base_ct: 1.5,
            base_mana: 3440,
            c: 1.32996 * 1.25 * 1.1,
            img: 'spell_holy_bindingheal',
            targets: 2,
            aoe: false,
            instant: false,
            item: 32546
        },
        {
            id: 20,
            code: 'RenewHoly',
            name: 'Renew',
            specid: 2,
            base_ct: 1.5,
            base_mana: 2400,
            nticks: 5,
            time_tick: 3,
            ctick: 0.44 * 1.25 * 1.15 * 1.1,
            img: 'spell_holy_renew',
            aoe: false,
            instant: true,
            item: 139
        },
        {
            id: 21,
            code: 'PWSHoly',
            name: 'Power Word: Shield',
            specid: 2,
            base_ct: 1.5,
            base_mana: 3840,
            c: 4.59,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17
        },
       {
            id: 22,
            code: 'PoMHoly',
            name: 'Prayer of Mending',
            specid: 2,
            base_ct: 1.5,
            base_mana: 3840,
            targets: 5,
            c: 0.666 * 1.25 * 1.25 * 1.1,
            img: 'spell_holy_prayerofmendingtga',
            aoe: true,
            instant: true,
            item: 33076
        },
        {
            id: 23,
            code: 'PoHHoly',
            name: 'Prayer of Healing',
            specid: 2,
            base_ct: 2.5,
            base_mana: 11405,
            targets: 5,
            c: 2.21664 * 1.1,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596
        },
        {
            id: 24,
            code: 'CascadeHoly',
            name: 'Cascade',
            specid: 2,
            base_ct: 1.5,
            base_mana: 3840,
            c: 0.432 * 1.1,
            img: 'ability_priest_cascade',
            aoe: true,
            instant: true,
            item: 120785
        },
        {
            id: 25,
            code: 'CoHHoly',
            name: 'Circle of Healing',
            specid: 2,
            base_ct: 1.5,
            base_mana: 5702,
            targets: 5,
            c: 2.2248 * 1.1,
            img: 'spell_holy_circleofrenewal',
            aoe: true,
            instant: true,
            item: 34861
        },
        {
            id: 26,
            code: 'DHHoly',
            name: 'Divine Hymn',
            specid: 2,
            base_ct: 8,
            base_mana: 7040,
            targets: 5,
            c: 1.4 * 1.1,
            img: 'spell_holy_circleofrenewal',
            aoe: true,
            instant: false,
            item: 64843
        },
        {
            id: 27,
            code: 'LWCastHoly',
            name: 'Lightwell Cast',
            specid: 2,
            base_ct: 1.5,
            base_mana: 5920,
            targets: 15,
            ctick: 1.0989 * 1.1 * 3,
            nticks: 3,
            time_tick: 2,
            img: 'spell_holy_summonlightwell',
            aoe: true,
            instant: true,
            item: 724
        },
        {
            id: 28,
            code: 'HWSerenityHoly',
            name: 'Holy Word: Serenity',
            specid: 2,
            base_ct: 1.5,
            base_mana: 2851,
            targets: 1,
            c: 4.15294 * 1.1,
            img: 'spell_holy_persuitofjustice',
            aoe: false,
            instant: true,
            item: 88684
        },
        {
            id: 29,
            code: 'HWSanctuaryHoly',
            name: 'Holy Word: Sanctuary',
            specid: 2,
            base_ct: 1.5,
            base_mana: 4000,
            targets: 6,
            ctick: 0.0845775 * 15 * 1.1,
            nticks: 15,
            time_tick: 2,
            img: 'spell_holy_divineprovidence',
            aoe: true,
            instant: true,
            item: 88686
        },
        {
            id: 74,
            code: 'DivineStarHoly',
            name: 'Divine Star',
            specid: 2,
            base_ct: 1.5,
            targets: 6 * 2,
            base_mana: 3200,
            c:  0.6518 * 1.1,
            img: 'spell_priest_divinestar',
            aoe: true,
            instant: true,
            item: 110744
        },
        {
            id: 76,
            code: 'HaloHoly',
            name: 'Halo',
            specid: 2,
            base_ct: 1.5,
            base_mana: 5760,
            targets: 6,
            c:  2.874 * 1.1,
            img: 'ability_priest_halo',
            aoe: true,
            instant: true,
            item: 120517
        },
        //
        // PALLY
        //
        {
            id: 41,
            code: 'HolyLight',
            name: 'Holy Light',
            specid: 3,
            base_ct: 2.5,
            base_mana: 3300,
            c: 3 * 1.25,
            img: 'spell_holy_surgeoflight',
            aoe: false,
            instant: false,
            item: 82326
        },
        {
            id: 42,
            code: 'FlashLight',
            name: 'Flash of Light',
            specid: 3,
            base_ct: 1.5,
            base_mana: 6400,
            c: 3 * 1.25,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 19750
        },
        {
            id: 43,
            code: 'HolyRadiance',
            name: 'Holy Radiance',
            specid: 3,
            base_ct: 2.5,
            base_mana: 11405,
            c: 1.5131 * 1.25,
            targets: 1 + 6 * 0.5,
            img: 'spell_paladin_divinecircle',
            aoe: true,
            beaconPercent: 0.15,
            instant: false,
            item: 82327
        },
        {
            id: 44,
            code: 'HolyShock',
            name: 'Holy Shock',
            specid: 3,
            base_ct: 1.5,
            base_mana: 2352,
            c: 1.4 * 1.25,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 20473
        },
        {
            id: 45,
            code: 'WoG',
            name: 'Word of Glory',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.1 * 3 * 1.2,
            img: 'inv_helmet_96',
            aoe: false,
            instant: false,
            item: 130551
        },
        {
            id: 46,
            code: 'LoD',
            name: 'Light of Dawn',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 0.245 * 3 * 1.5,
            targets: 6,
            img: 'spell_paladin_lightofdawn',
            beaconPercent: 0.15,
            aoe: true,
            instant: false,
            item: 85222
        },
        {
            id: 47,
            code: 'HolyPrism',
            name: 'Holy Prism Single',
            specid: 3,
            base_ct: 1.5,
            base_mana: 5440,
            c: 4 * 1.25, // In-game tooltip value misses the 25% factor
            img: 'spell_paladin_holyprism',
            beaconPercent: 0.15,
            aoe: false,
            instant: true,
            item: 114165
        },
        {
            id: 48,
            code: 'HolyPrismAoE',
            name: 'Holy Prism AoE',
            specid: 3,
            base_ct: 1.5,
            base_mana: 5440,
            c: 3 * 1.25, // In-game tooltip value misses the 25% factor
            targets: 5,
            img: 'spell_paladin_holyprism',
            beaconPercent: 0.15,
            aoe: true,
            instant: true,
            item: 114165
        },
        {
            id: 49,
            code: 'LightsHammer',
            name: 'Light\'s Hammer',
            specid: 3,
            base_ct: 1.5,
            base_mana: 16608,
            ctick: 0.67 * 7 * 1.25, // All ticks. Tooltip includes 25%
            nticks: 7,
            time_tick: 2,
            duration: 14,
            targets: 6,
            img: 'spell_paladin_lightshammer',
            aoe: true,
            beaconPercent: 0.15,
            instant: true,
            item: 114158
        },
        {
            id: 50,
            code: 'Execution',
            name: 'Execution Sentence',
            specid: 3,
            base_ct: 1.5,
            base_mana: 4096,
            c: 0.594 * 27.906 * 1.25,
            img: 'spell_paladin_executionsentence',
            aoe: false,
            instant: true,
            item: 114157
        },
        {
            id: 51,
            code: 'EternalFlame',
            name: 'Eternal Flame',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.1 * 3 * 1.2,
            ctick: 0.1 * 1.25 * 1.2 * 15,  // all 15 ticks
            nticks: 15,
            time_tick: 2,
            img: 'inv_torch_thrown',
            aoe: false,
            instant: true,
            item: 114163
        },
        {
            id: 52,
            code: 'SacredShield',
            name: 'Sacred Shield',
            specid: 3,
            base_ct: 1.5,
            base_mana: 3040,
            ctick: 0.995 * 5, // All 5 ticks
            nticks: 5,
            time_tick: 6,
            img: 'ability_paladin_blessedmending',
            aoe: false,
            instant: true,
            item: 20925
        },

        //
        // SHAMAN
        //
        {
            id: 54,
            code: 'HW',
            name: 'Healing Wave',
            specid: 5,
            base_ct: 2.5,
            base_mana: 3312,
            c: 4.125 * 1.4,
            res_factor: 1351,
            img: 'spell_nature_healingwavelesser',
            aoe: false,
            instant: false,
            item: 77472
        },
        {
            id: 55,
            code: 'HSurge',
            name: 'Healing Surge',
            specid: 5,
            base_ct: 1.5,
            base_mana: 6624,
            c: 4.125 * 1.4,
            res_factor: 811,
            img: 'spell_nature_healingway',
            aoe: false,
            instant: false,
            item: 8004
        },
        {
            id: 56,
            code: 'ChainHeal',
            name: 'Chain Heal',
            specid: 5,
            base_ct: 2.5,
            base_mana: 8960,
            c: 2.03125 * 1.4,
            targets: 4,
            res_factor: 450 * 4,
            img: 'spell_nature_healingway',
            aoe: true,
            instant: false,
            item: 1064
        },
        {
            id: 57,
            code: 'Riptide',
            name: 'Riptide',
            specid: 5,
            base_ct: 1.5,
            base_mana: 2333,
            c: 1.38 * 1.4,
            ctick: 1.8 * 1.4,
            nticks: 6,
            time_tick: 3,
            res_factor: 811,
            img: 'spell_nature_riptide',
            aoe: false,
            instant: true,
            item: 61295
        },
        {
            id: 58,
            code: 'UnleashLife',
            name: 'Unleash Life',
            specid: 5,
            base_ct: 1.5,
            base_mana: 2176,
            c: 1.05 * 1.4,
            res_factor: 811,
            img: 'spell_shaman_unleashweapon_life',
            aoe: false,
            instant: true,
            item: 73685
        },
        {
            id: 59,
            code: 'HST',
            name: 'Healing Stream Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 2752,
            ctick: 0.525 * 1.5 * 1.4,  // Per tick
            nticks: 15 / 2,   // But there is an initial tick
            time_tick: 2,
            img: 'inv_spear_04',
            aoe: false,
            instant: true,
            item: 5394
        },
        {
            id: 60,
            code: 'HTT',
            name: 'Healing Tide Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 1792,
            ctick: 0.6 * 1.5 * 1.4,   // Per tick
            targets: 5,
            nticks: 10 / 2,
            time_tick: 2,
            img: 'ability_shaman_healingtide',
            aoe: true,
            instant: true,
            item: 108280
        },
        {
            id: 61,
            code: 'HealingRain',
            name: 'Healing Rain',
            specid: 5,
            base_ct: 2,
            base_mana: 6912,
            ctick: 0.163882 * 1.4 * 2, // Each tick
            targets: 6,
            nticks: 10 / 2,
            time_tick: 2,
            duration: 10,
            img: 'spell_nature_giftofthewaterspirit',
            aoe: true,
            instant: false,
            item: 73920
        },
        {
            id: 63,
            code: 'EarthShield',
            name: 'Earth Shield',
            specid: 5,
            base_ct: 1.5,
            base_mana: 4032,
            c: 0.63,  // No 1.4 multiplier needed
            targets: 9,
            img: 'spell_nature_skinofearth',
            aoe: false,
            instant: true,
            item: 974
        },
    ];

    var FIXME = [
        //
        // MONK
        //
        {
            id: 64,
            code: 'SoothingMist',
            name: 'Soothing Mist',
            specid: 6,
            base_ct: 1,
            base_mana: 3000,
            B: 2776.5,
            c: 0.1792,
            targets: 1,
            img: 'ability_monk_soothingmists',
            aoe: false,
            instant: true,
            item: 125953,
            mast_factor: 0.3+0.15, // Spell and statue
            chi_gain: 0.3
        },
        {
            id: 65,
            code: 'SurgingMist',
            name: 'Surging Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 24000,
            B: 17242.2,
            c: 1.8,
            img: 'ability_monk_surgingmist',
            aoe: false,
            instant: true,
            item: 116995,
            mast_factor: 1,
            chi_gain: 1
        },
        {
            id: 66,
            code: 'EnvelopingMist',
            name: 'Enveloping Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            Btick: 44448/6,
            ctick: 2.7/6,
            nticks: 6,
            time_tick: 1,
            img: 'spell_shaman_spiritlink',
            aoe: false,
            instant: true,
            item: 132120,
            mast_factor: 0.2,
            chi_use: 3
        },
        {
            id: 67,
            code: 'RenewingMist',
            name: 'Renewing Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 13800,
            Btick: 2266,
            ctick: 0.107,
            nticks: 9,
            time_tick: 2,
            targets: 3,
            img: 'ability_monk_renewingmists',
            aoe: true,
            instant: true,
            item: 119611,
            mast_factor: 0.15,
            chi_gain: 1
        },
        {
            id: 68,
            code: 'LifeCocoon',
            name: 'Life Cocoon',
            specid: 6,
            base_ct: 1.5,
            base_mana: 15000,
            B: 79916/1.2,
            c: 11/1.2,
            img: 'ability_monk_chicocoon',
            aoe: false,
            instant: true,
            item: 116849,
            mast_factor: 0
        },
        {
            id: 69,
            code: 'Uplift',
            name: 'Uplift',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            B: (7210 + 8379)/2,
            c: 0.68,
            img: 'ability_monk_uplift',
            targets: 8,
            aoe: true,
            instant: true,
            item: 116670,
            mast_factor: 0.25,
            chi_use: 2
        },
        {
            id: 70,
            code: 'Revival',
            name: 'Revival',
            specid: 6,
            base_ct: 1.5,
            base_mana: 21000,
            B: 13684,
            c: 5,
            img: 'spell_shaman_blessingofeternals',
            targets: 10,
            aoe: true,
            instant: true,
            item: 115310,
            mast_factor: 0.15
        },
        {
            id: 72,
            code: 'Efflorescence',
            name: 'Efflorescence',
            specid: 4,
            base_ct: 1,
            base_mana: 0,
            Btick: 13966 * 0.12,
            ctick: 1.29 * 0.12,
            nticks: 7,
            time_tick: 1,
            targets: 3,
            img: 'spell_shaman_giftearthmother',
            aoe: false,
            instant: true,
            item: 81262
        },
        {
            id: 76,
            code: 'ExpelHarm',
            name: 'Expel Harm',
            specid: 6,
            base_ct: 1.5,
            base_mana: 7500,
            melee_coeff: 7,
            targets: 1,
            img: 'ability_monk_expelharm',
            aoe: false,
            instant: true,
            item: 115072,
            mast_factor: 1,
            chi_gain: 1
        },
        {
            id: 77,
            code: 'Jab',
            name: 'Jab',
            specid: 6,
            base_ct: 1.5,
            base_mana: 24000,
            melee_coeff: 1.5,
            targets: 1,
            img: 'ability_monk_staffstrike',
            aoe: false,
            instant: true,
            item: 108557,
            mast_factor: 0.2 + 0.1,  // Eminence and Statue
            chi_gain: 1
        },
        {
            id: 78,
            code: 'TigerPalm',
            name: 'Tiger Palm',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            melee_coeff: 3 * 2,  // Teaching of Monastery
            targets: 1,
            img: 'ability_monk_tigerpalm',
            aoe: false,
            instant: true,
            item: 100787,
            mast_factor: 0.2 + 0.1,  // Eminence and Statue
            chi_use: 1
        },
        {
            id: 79,
            code: 'BlackoutKick',
            name: 'Blackout Kick',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            melee_coeff: 7.12,  // Need to add muscle memory/multiple targets later
            targets: 1,
            img: 'ability_monk_roundhousekick',
            aoe: true,
            instant: true,
            item: 100784,
            mast_factor: 0.2 + 0.1,  // Eminence and Statue
            chi_use: 2
        },
        {
            id: 80,
            code: 'HealingSphere',
            name: 'Healing Sphere',
            specid: 6,
            base_ct: 1.5,
            base_mana: 6000,
            B: 9984.5,
            c: 1.5,
            img: 'ability_monk_healthsphere',
            targets: 1,
            aoe: false,
            instant: true,
            item: 115460,
            mast_factor: 0
        },
        {
            id: 82,
            code: 'SCK',
            name: 'Spinning Crane Kick',
            specid: 6,
            base_ct: 2.25,
            base_mana: 21600,
            targets: 4 * 6,
            B: 2809,
            c: 0.096,
            img: 'ability_monk_cranekick_new',
            aoe: true,
            instant: true,
            item: 117640,
            mast_factor: 0.1,
            chi_gain: 1
        },
        {
            id: 83,
            code: 'ChiWave',
            name: 'Chi Wave',
            specid: 6,
            base_ct: 1,
            base_mana: 0,
            targets: 4,
            B: 493,
            c: 0.45 * 2,
            img: 'ability_monk_chiwave',
            aoe: true,
            instant: true,
            item: 115098,
            mast_factor: 0.25
        },
        // {
        //     id: 84,
        //     code: 'ZenSphere',
        //     name: 'Zen Sphere',
        //     specid: 6,
        //     base_ct: 1,
        //     base_mana: 0,
        //     targets: 1,
        //     Btick: 114,
        //     ctick: 0.208,
        //     B: 294,
        //     c: 0.538,
        //     img: 'ability_monk_forcesphere',
        //     aoe: true,
        //     instant: true,
        //     item: 124081,
        //     mast_factor: 0.25,
        //     mast_factor_detonate: 0.15
        // },
        {
            id: 85,
            code: 'ChiBurst',
            name: 'Chi Burst',
            specid: 6,
            base_ct: 1,
            base_mana: 0,
            targets: 6,
            B: 1095,
            c: 2,
            img: 'spell_arcane_arcanetorrent',
            aoe: true,
            instant: true,
            item: 123986,
            mast_factor: 0.15
        },
    ];

     //
    var spec_specific = {
        fct: function(delta) {
            return ( this.base_ct / (1+this.spec.fhastep(delta)) );
        },
        fct_monk: function(delta) {
            return (
                ((this.base_ct > 1.5) ? this.base_ct / (1 + this.spec.fhastep(delta)) : 1) +
                (this.spec.mana_tea ? (this.chi_gain || 0) * 0.25 * 0.5 : 0)
            );
        },
        fmana: function(delta) {
            return (this.base_mana);
        },
        fmana_shaman_resurgence: function(delta) {
            return (
                Math.roundn(
                    this.base_mana -
                    (
                        this.spec.fcritp(delta) *
                        this.res_factor *
                        (this.spec.resurgence ? 1 : 0)
                    )
                )
            );
        },
        fmana_monk: function(delta) {
            return (
                this.base_mana -
                (
                    this.spec.mana_tea ?
                    ( (this.chi_gain || 0) * 0.01 * this.spec.mana_pool ) :
                    0
                )
            );
        },
        ftargets: function(delta) {
            return ( this.targets || 1 );
        },
        fdirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) * this.ftargets(delta)
            );
        },
        fnticks_shaman_aoe: function(delta) {
            return (
                1 +
                Math.ceiln(
                    this.duration *
                    (1 + this.spec.fhastep(delta)) /
                    this.time_tick
                )
            );
        },
        fhot: function(delta) {
            return (
                this.ctick * this.spec.fsp(delta) * this.ftargets(delta) *
                (1 + this.spec.fhastep(delta))
            );
        },
        fbase: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 1 * this.spec.fmastp(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) );
        },
        fbase_offensive_disc: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) );
        },
        fbase_shield: function(delta) {
            return this.fdirect(delta) *
                   ( 1 + 1 * this.spec.fmastp(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) ) *
                   ( 1 + 1 * this.spec.attr('aa_uptime') *
                             this.spec.attr('aa_stacks') * 0.05 ) *
                   1.3;
        },
        fbase_disc: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 0.5 * this.spec.fmastp(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) ) *
                   ( 1 + 1 * this.spec.attr('aa_uptime') *
                             this.spec.attr('aa_stacks') * 0.05 ) *
                   1.3;  // Grace
        },
        fbase_druid: function(delta) {
            return (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                   ( 1 + this.spec.fmastp(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) ) *
                   1.1;
        },
        fbase_pally: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                1.05 // Seal of Insight
            );
        },
        fbase_shaman: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) );
        },
        fbase_monk: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.2
            );
        },
        fbase_monk_melee: function(delta) {
            return (
                1.2 *
                (0.25 + 0.25) *    // Eminence and statue
                this.melee_coeff *
                this.spec.fmonk_melee_factor(delta) *
                this.ftargets(delta) *
                this.ftarget_armor_dr(delta)
            );
        },
        ftarget_armor_dr: function(delta) {
            return (
                1 -
                1 /
                (
                    1 +
                    (4037.5*90 - 317117.5) /
                    (
                        24835 *
                        (this.spec.tiger_power ? 0.7 : 1) *
                        (this.spec.armor ? 0.88 : 1)
                    )
                )
            );
        },
        fheal: function(delta) {
            // The average heal amount, including crits and multistrike.
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) )
            );
        },
        fheal_disc: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 + this.spec.fcritp(delta) *
                    ( 1 + this.spec.fmastp(delta) )
                )
            );
        },
        fheal_shield: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 + this.spec.fcritp(delta) )
            );
        },
        fheal_pally: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  (this.spec.bol ? (this.beaconPercent || 0.5) : 0) +
                  (this.spec.bof ? (this.beaconPercent || 0.5) : 0)
                )
            );
        },
        fheal_shaman: function(delta) {
            // The average heal amount, including crits and multistrike.
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                this.spec.fmast_factor(delta)
            );
        },
        fheal_holy: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.72 * this.spec.fmultip(delta) )
            );
        },
        fheal_living_seed: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + 2 * this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) )
            );
        },
        fheal_monk: function(delta) {
            return (
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    this.fbase(delta) +
                    this.mast_factor *
                    (this.fnticks(delta) || 1) *
                    (this.ftargets(delta) || 1) *
                    this.spec.fmastp(delta) *
                    ( this.spec.mast_B + this.spec.fsp(delta) * this.spec.mast_c ) *
                    ( this.spec.t16_2p_monk ? 1.45 : 1)
                )
            );
        },
        fhps: function(delta) {
            return ( this.fheal(delta) / this.fct(delta) );
        },
        fhpm: function(delta) {
            return ( this.fheal(delta) / this.fmana(delta) );
        },
        fhpm_nomana: function(delta) {
            return ( 0 );
        },
        fmps: function(delta) {
            return ( this.fmana(delta) / this.fct(delta) );
        },
        val_update: function(delta) {
            this.attr({
                'ct': Math.roundn(this.fct(), 2),
                'mana': Math.roundn(this.fmana()),
                'base_heal': Math.roundn(this.fbase()),
                'heal': Math.roundn(this.fheal()),
                'hps': Math.roundn(this.fhps()),
                'hpm': Math.roundn(this.fhpm(), 2),
                'mps': Math.roundn(this.fmps())
            });
        }
     };


    var len = SPELLS.length,
        spls = new can.Observe.List([]),
        i,
        spell;

    for (i=0; i< len; i++) {
        spell = new can.Observe(can.extend(SPELLS[i], spec_specific));
        // spell.id = i;
        spls.push(spell);
    }
    // Global update function
    spls.val_update = function() {
        if (!this.updating) {
            this.updating = true;
            setTimeout(this._updater.bind(this), 30);
        }
    };
    spls._updater = function() {
        // can.Observe.startBatch();
        this.each(
            function(spell) { spell.val_update(); }
        );
        // can.Observe.stopBatch();
        this.updating = false;
    };

    // Search for spell by code or id
    spls.find = function(code) {
        var _fun = ( typeof code === 'string' ) ?
                    function(spell) { return ( spell.code === code ) } :
                    function(spell) { return ( spell.id === code ) },
            i = this.length;
        while (i--) {
            if ( _fun(this[i]) ) {
                return this[i]
            };
        };
        return false;
    };

    // Spell customization
    spls.each( function(sp) {
        sp.mask = (1 << sp.specid >> 1) |
                  (1 << (sp.aoe ? 6 : 7)) |
                  (1 << (sp.instant ? 8 : 9));  // Used for filtering
        if ( sp.specid == 1 ) {
            // General Disc spell setup
            sp.fbase = sp.fbase_disc;   // To account for Grace
            sp.fheal = sp.fheal_disc;   // To account for DA formula
        } else if (sp.specid == 2) {
            sp.fheal = sp.fheal_holy;
        } else if ( sp.specid == 3 ) {
            // General Pally spell setup
            sp.fbase = sp.fbase_pally;
            sp.fheal = sp.fheal_pally;
        } else if ( sp.specid == 5 ) {
            // General Shaman spell setup
            sp.fbase = sp.fbase_shaman;
            sp.fheal = sp.fheal_shaman;
        } else if (sp.specid == 4) {
            // General Druid setup
            sp.fbase = sp.fbase_druid;
        } else if (sp.specid == 6) {
           // General Monk setup
           sp.fct = sp.fct_monk;
           sp.fmana = sp.fmana_monk;
           sp.fbase = sp.fbase_monk;
           sp.fheal = sp.fheal_monk;
        }
    });

    // Individual Spell setups
    //
    //
    // DISC Spells setup
    spls.find('EmpFhealDisc').attr({
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 2 + this.spec.fmastp(delta) * 1 )
            );
        }
    });

    spls.find('CascadeDisc').attr({
        ftargets: function(delta) {
            return (
                31 *
                (
                    0.4 +
                    Math.min(this.spec.cascade_range_disc, 30) * 0.02
                )
            );
        }
    });

    spls.find('PWSDisc').attr({
        fbase: function(delta) {
            return ( this.fbase_shield(delta) );
        },
        fheal: function(delta) {
            return ( this.fheal_shield(delta) );
        },
    });
    spls.find('ClarityOfWill').attr({
        fbase: function(delta) {
            return ( this.fbase_shield(delta) );
        },
        fheal: function(delta) {
            return ( this.fheal_shield(delta) );
        },
    });

    spls.find('PoMDisc').attr({
        ftargets: function(delta) {
            return this.targets - ( this.spec.attr('glyph_pom_disc') ? 0.4 : 0 );
        },
    });

    spls.find('PoHDisc').attr({
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_disc );
        },
        fheal: function(delta) {
            var crit = Math.min(this.spec.fcritp(delta) + 0.1, 1);
            return (
                this.fbase(delta) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 + crit *
                    ( 1 + this.spec.fmastp(delta) )
                )
            );
        }
    });
    spls.find('EmpPoHDisc').attr({
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_disc );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 2 + this.spec.fmastp(delta) * 1 )
            );
        }
    });

    spls.find('HolyFireDisc').attr({
        fbase: function(delta) {
            return (
                (this.fhot(delta) + this.fdirect(delta)) *
                 ( 1 + 1 * this.spec.fversp(delta) )
            );
        },
    });
    spls.find('SolaceDisc').attr({
        fbase: function(delta) {
            return (
                (this.fhot(delta) + this.fdirect(delta)) *
                 ( 1 + 1 * this.spec.fversp(delta) )
            );
        },
    });

    spls.find('PenanceDisc').attr({
        fbase: function(delta) {
            return this.fbase_offensive_disc(delta);
        },
        fmana: function(delta) {
            return (
                this.base_mana *
                (this.spec.glyph_penance ? 1.2 : 1)
            )
        },
    });

    spls.find('SmiteDisc').attr({
        fbase: function(delta) {
            return this.fbase_offensive_disc(delta);
        },
    });

    spls.find('PenanceHealDisc').attr({
        fmana: function(delta) {
            return (
                this.base_mana *
                (this.spec.glyph_penance ? 1.2 : 1)
            )
        },
    });

    // END DISC Spells setup

    // HOLY Spells setup

    spls.find('BhealHoly').attr({
        fmana: function(delta) {
            return (
                (this.spec.attr('glyph_binding_holy') ? 1.35 : 1) *
                this.base_mana
            );
        },
        ftargets: function(delta) {
            return (this.spec.attr('glyph_binding_holy') ? 3 : 2)
        }
    });

    // Does not benefit from mastery
    spls.find('HWSanctuaryHoly').attr({
        fbase: function(delta) {
            return this.fhot(delta) *
                   ( 1 + 1 * this.spec.fversp(delta) );
        }
    });

    spls.find('PoHHoly').attr({
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_holy );
        },
    });

    spls.find('CoHHoly').attr({
        ftargets: function(delta) {
            return this.targets + (this.spec.glyph_coh ? 1 : 0);
        },
        fmana: function(delta) {
            return this.base_mana * (this.spec.glyph_coh ? 1.35 : 1);
        }
    });

    spls.find('RenewHoly').attr({
        fdirect: function(delta) {
            return (
                this.ctick * 0.5 *
                this.spec.fsp(delta) * this.ftargets(delta)
            );
        }, // direct heal does not benefit from glyph
        fhot: function(delta) {
            return (
                this.spec.fsp(delta) * this.ftargets(delta) *
                this.ctick *
                (this.spec.attr('glyph_renew_holy') ? 4 : 5) *
                (1 + this.spec.fhastep(delta))
            ) * (this.spec.attr('glyph_renew_holy') ? 1.25 : 1);
        },
        fbase: function(delta) {
            return (
                this.fhot(delta) +
                (
                    this.fdirect(delta) *
                    ( 1 + 1 * this.spec.fmastp(delta) )
                )
            ) * ( 1 + 1 * this.spec.fversp(delta) );
        }
    });

    spls.find('LWCastHoly').attr({
        fbase: function(delta) {
            return this.fhot(delta) *
                 ( 1 + 1 * this.spec.fversp(delta) ); // No mastery
        },
        fhot: function(delta) {
            return (
                this.ctick * this.spec.fsp(delta) *
                this.spec.lw_charges *
                (1 + this.spec.fhastep(delta))
            );
        },
    });

    spls.find('DHHoly').attr({
        ftargets: function(delta) {
            return ( this.spec.buffs.raid_size * (4 + 3 * 0.1) );
        }
    });

    spls.find('CascadeHoly').attr({
        ftargets: function(delta) {
            return (
                31 *
                (
                    0.4 +
                    Math.min( this.spec.cascade_range_holy, 30 ) * 0.02
                )
            );
        }
    });

    spls.find('PWSHoly').attr({
        fbase: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) );
        }
    });

    spls.find('PoMHoly').attr({
        fdirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) *
                (
                    this.targets -
                    (this.spec.attr('glyph_pom_holy') ? 0.4 : 0)
                )
            );
        }
    });

/* TODO


    //END HOLY Spells setup
*/


    //DRUID Spells setup
    spls.find('HealingTouch').attr({
        fct: function(delta) {
            return (
                ( this.spec.attr('healing_touch_with_ns') ?
                    1.5 :
                    (
                        this.base_ct *
                        (this.spec.attr('glyph_rejuv') ? 0.9 : 1)
                    )
                ) /
                ( 1 + this.spec.fhastep(delta) )
            );
        },
        fmana: function(delta) {
            return ( this.spec.attr('healing_touch_with_ns') ? 0 : this.base_mana )
        },
        fbase: function(delta) {
            return (
                this.fdirect(delta) *
                ( 1 + this.spec.fmastp(delta) ) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                1.1 *
                ( this.spec.attr('healing_touch_with_ns') ? 1.5 : 1 )
            );
        },
        fheal: function(delta) {
            return ( this.fheal_living_seed(delta) );
        },
    });

    spls.find('Regrowth').attr({
        fbase: function(delta) {
            return (
                (
                    this.fdirect(delta) +
                    (this.spec.attr('glyph_regrowth') ? 0 : this.fhot(delta))
                ) *
                ( 1 + this.spec.fmastp(delta) ) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                1.1
            );
        },
        fheal: function(delta) {
            var crit = (
                this.spec.attr('glyph_regrowth') ?
                1 :
                ( Math.min(this.spec.fcritp(delta) + 0.6, 1) )
            );
            return (
                (
                    this.fdirect(delta) * ( 1 + 2 * crit ) + // Living seed on direct
                        (this.spec.attr('glyph_regrowth') ? 0 : this.fhot(delta)) *
                        ( 1 + this.spec.fcritp(delta) )
                ) *
                ( 1 + this.spec.fmastp(delta) ) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                1.1
            );
        },
    });

    spls.find('Lifebloom').attr({
        fhot: function(delta) {
            return (
                this.ctick *
                (
                    this.nticks -
                    (this.spec.attr('glyph_blooming') ? 5 : 0)
                ) / this.nticks *
                 this.spec.fsp(delta) * this.ftargets(delta) *
                (1 + this.spec.fhastep(delta))
            );
        },
        fdirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) * this.ftargets(delta) *
                (this.spec.attr('glyph_blooming') ? 1.5 : 1)
            );
        },
        fbase: function(delta) {
            return (
                (
                    this.fdirect(delta) +
                    this.fhot(delta)
                ) *
                ( 1 + this.spec.fmastp(delta) ) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                1.1
            );
        }
    });

    spls.find('WildGrowth').attr({
        ftargets: function(delta) {
            return this.targets + (this.spec.attr('glyph_wild_growth') ? 1 : 0);
        }
    });

    spls.find('Tranquility').attr({
        fhot: function(delta) {
            return (
                this.ctick *
                this.nticks *
                this.spec.fsp(delta) * this.ftargets(delta)
            );
        },
        ftargets: function(delta) {
            return this.spec.buffs.raid_size * 1;
        }
    });

    spls.find('Rejuv').attr({
        fhot: function(delta) {
            return (
                this.ctick * this.spec.fsp(delta) * this.ftargets(delta) *
            // Initial tick must not contribute to computation
            // of extra ticks from haste
                (1 +
                    (this.nticks + (this.spec.attr('germination') ? 1 : 0)) *
                    (1 + this.spec.fhastep(delta))
                )
            );
        },
    });
    //END DRUID Spells setup

    // SHAMAN Spells setup

    spls.find('ChainHeal').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        ftargets: function(delta) {
            var targets = Math.min(1 * this.spec.ch_targets, this.targets);
            if (this.spec.high_tide) { return targets + 0.5 + 2; }
            var s = 0.5, f = 1;
            for (var i = 0; i < targets; i += 1) {
                s = s + f;
                f = 0.9 * f;
            }
            return s;
        },
    });

    spls.find('HW').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fct: function(delta) {
            return (
                this.base_ct *
                ( this.spec.attr('tidal_waves') ? 0.8 : 1) /
                ( 1 + this.spec.fhastep(delta) )
            );
        }
    });

    spls.find('HSurge').attr({
        fmana: function(delta) {
            var crit = Math.min(
                this.spec.fcritp(delta) +
                (this.spec.attr('tidal_waves') ? 0.3 : 0),
                1
            );
            return Math.roundn(
                this.base_mana -
                (
                    crit *
                    this.res_factor *
                    (this.spec.resurgence ? 1 : 0)
                )
            );
        },
        fheal: function(delta) {
            var crit = Math.min(
                this.spec.fcritp(delta) +
                (this.spec.attr('tidal_waves') ? 0.3 : 0),
                1
            );
            return (
                this.fbase(delta) *
                ( 1 + crit ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                this.spec.fmast_factor(delta)
            );
        }
    });

    spls.find('UnleashLife').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        }
    });

    spls.find('Riptide').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fdirect: function(delta) {
            return (
                ( this.c * this.spec.fsp(delta) ) *
                (this.spec.attr('glyph_riptide') ? 0.25 : 1)
            );
        },
        fbase: function(delta) {
            return (
                this.fhot(delta) + this.fdirect(delta)
            );
        }
    });

    spls.find('HST').attr({
        fhot: function(delta) {
            return (
                this.spec.fsp(delta) * this.ftargets(delta) *
                (1 +
                    this.ctick * this.nticks *
                    (1 + this.spec.fhastep(delta))
                )
            );
        },
        ftargets: function(delta) {
            return ( this.spec.rushing_streams ? 1.15 * 2 : 1 );
        }
    });
    spls.find('HTT').attr({
        fhot: function(delta) {
            return (
                this.spec.fsp(delta) * this.ftargets(delta) *
                (1 +
                    this.ctick * this.nticks *
                    (1 + this.spec.fhastep(delta))
                )
            );
        },
        ftargets: function(delta) {
            return ( this.spec.buffs.raid_size );
        }
    });

    spls.find('HealingRain').attr({
        fhot: function(delta) {
            return (
                this.spec.fsp(delta) * this.ftargets(delta) *
                (1 +
                    this.ctick * this.nticks *
                    (1 + this.spec.fhastep(delta))
                )
            );
        },
        ftargets: function(delta) {
            return ( Math.min(1 * this.spec.hr_targets, this.targets) );
        }
    });

    //END SHAMAN Spells Setup

    // PALLY Spells setup
    spls.find('HolyLight').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
            );
        },
        fmana: function(delta) {
            return (
                this.base_mana *
                ( this.spec.bol && this.spec.beacon_heals ? 0.6 : 1 )
            );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( this.spec.bol && this.spec.beacon_heals ? 1.1 : 1 ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  ( this.spec.bol && !this.spec.beacon_heals ? 0.5 : 0 ) +
                  ( this.spec.bof ? 0.5 : 0 )
                )
            );
        }
    });
    spls.find('FlashLight').attr({
        fmana: function(delta) {
            return (
                this.base_mana *
                ( this.spec.bol && this.spec.beacon_heals ? 0.6 : 1 )
            );
        },
        fbase: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                (this.spec.infusion_of_light ? 1.5 : 1) *
                1.05 // Seal of Insight
            );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( this.spec.bol && this.spec.beacon_heals ? 1.1 : 1 ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  ( this.spec.bol && !this.spec.beacon_heals ? 0.5 : 0 ) +
                  ( this.spec.bof ? 0.5 : 0 )
                )
            );
        }
    });

    spls.find('HolyShock').attr({
        fheal: function(delta) {
            var crit = Math.min(2 * this.spec.fcritp(delta), 1);
            return (
                this.fbase(delta) *
                ( 1 + crit ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( this.spec.bol && this.spec.beacon_heals ? 1.1 : 1 ) *
                ( (
                    ( 1 + this.spec.fmastp(delta) ) *
                    (this.spec.daybreak ? 1 + 6 * 0.3 : 1)
                  ) +  // Mastery not on beacon
                  ( this.spec.bol && !this.spec.beacon_heals ? 0.5 : 0 ) +
                  ( this.spec.bof ? 0.5 : 0 )
                )
            );
        }
    });

    spls.find('HolyRadiance').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
            );
        },
        fmana: function(delta) {
            return (
                Math.roundn(
                    this.base_mana *
                    ( this.spec.attr('t14_2p_pally') ? 0.9 : 1 )
                )
            );
        },
        fbase: function(delta) {
            return (
                this.fbase_pally(delta) *
                (this.spec.infusion_of_light && this.spec.t16_2p_pally ? 1.2 : 1)
            )
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        }
    });

    spls.find('WoG').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( this.spec.bol && this.spec.beacon_heals ? 1.1 : 1 ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  ( this.spec.bol && !this.spec.beacon_heals ? 0.5 : 0 ) +
                  ( this.spec.bof ? 0.5 : 0 )
                )
            );
        }
    });

    spls.find('LoD').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        ftargets: function(delta) {
            return ( this.targets - (this.spec.attr('glyph_lod') ? 2 : 0) )
        },
        fdirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) *
                this.ftargets(delta) *
                (this.spec.attr('glyph_lod') ? 1.25 : 1)
            );
        }
    });

    spls.find('EternalFlame').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        fbase: function(delta) {
            return (
                ( this.fhot(delta) + this.fdirect(delta) ) *
                ( 1 + 1 * this.spec.fversp(delta) ) *
                1.05 // Seal of Insight
            );
        },
        fheal: function(delta) {
            return (
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( this.spec.bol && this.spec.beacon_heals ? 1.1 : 1 ) *
                (
                    this.fbase(delta) *
                    ( 1 + // Only direct heal has mastery
                        ( this.spec.bol && !this.spec.beacon_heals ? 0.5 : 0 ) +
                        ( this.spec.bof ? 0.5 : 0 )
                    ) +
                    this.fdirect(delta) * // The direct heal adds mastery
                    ( 1 + 1 * this.spec.fversp(delta) ) *
                    this.spec.fmastp(delta) *
                    1.05
                )
            );
        }
    });
    spls.find('SacredShield').attr({
        fbase: function(delta) {
            return (
                this.fhot(delta) *
                ( 1 + 1 * this.spec.fversp(delta) )
            );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) )
            );
        }
    });

    spls.find('HolyPrismAoE').attr({
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  (
                    this.targets -
                    ( this.spec.bol ? 1 : 0 ) -
                    ( this.spec.bof ? 1 : 0 )
                  ) / this.targets * // Percent of non-beaconed targets
                    this.beaconPercent *
                    (this.spec.bol ? 1 : 0) * // Only apply if bol on
                    (this.spec.bof ? 2 : 1)
                )
            );
        }
    });

    spls.find('LightsHammer').attr({
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 +
                  this.spec.fmastp(delta) +  // Mastery not on beacon
                  (
                    this.targets -
                    ( this.spec.bol ? 1 : 0 ) -
                    ( this.spec.bof ? 1 : 0 )
                  ) / this.targets * // Percent of non-beaconed targets
                    this.beaconPercent *
                    (this.spec.bol ? 1 : 0) * // Only apply if bol on
                    (this.spec.bof ? 2 : 1)
                )
            );
        }
    });

   // END PALLY Spells setup

/*

    // MONK Spells setup
    $.each(['Jab', 'TigerPalm', 'BlackoutKick'], function(i, spname) {
        spls.find(spname).attr({
            fbase: function(delta) {
                return ( this.fbase_monk_melee(delta) );
            }
        });
    });

    spls.find('SoothingMist').attr({
        fbase: function(delta) {
            return ( this.fbase_monk(delta) * 1.5 );
        }
    });
    spls.find('EnvelopingMist').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });

    spls.find('SurgingMist').attr({
        fmana: function(delta) {
            return (
                this.base_mana *
                (this.spec.attr('t14_2p_monk') ? 0.9 : 1) -
                (
                    this.spec.mana_tea ?
                    ( (this.chi_gain || 0) * 0.01 * this.spec.mana_pool ) :
                    0
                )
            );
        }
    });

    spls.find('Uplift').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });

    spls.find('RenewingMist').attr({
        ftargets: function(delta) {
            return (
                this.spec.attr('t15_2p_monk') ?
                    1 + 1.15 * ( 1 + 1.15 )
                :
                    3
            );
        },
        fheal: function(delta) {
            return (
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    this.fbase(delta) +
                    (this.fnticks(delta) || 1) *
                    (this.ftargets(delta) || 1) *
                    (
                        this.mast_factor *
                        this.spec.fmastp(delta) *
                        ( this.spec.mast_B + this.spec.fsp(delta) * this.spec.mast_c ) *
                        ( this.spec.t16_2p_monk ? 1.45 : 1) +
                        ( this.spec.t16_4p_monk ?
                            ( 0.04 * (295 + 0.54 * this.spec.fsp(delta)) ) :
                            0
                        )
                    )
                )
            );
        }
    });

    spls.find('ExpelHarm').attr({
        ftargets: function(delta) {
            return (
                this.spec.attr('glyph_targeted_expulsion') ? 0.5 : 1
            );
        },
        fbase: function(delta) {
            return (
                1.2 *
                this.melee_coeff *
                this.spec.fmonk_melee_factor(delta) *
                this.ftargets(delta)
            );
        }
    });

    spls.find('Jab').attr({
        fmana: function(delta) {
            return (
                this.fmana_monk(delta) -
                (this.spec.muscle_memory ? 0.04 * this.spec.mana_pool : 0)
            );
        }
    });
    spls.find('TigerPalm').attr({
        fbase: function(delta) {
            return (
                this.fbase_monk_melee(delta) *
                (this.spec.muscle_memory ? 2.5 : 1)
            );
        },
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });

    spls.find('BlackoutKick').attr({
        fbase: function(delta) {
            return (
                this.fbase_monk_melee(delta) *
                (this.spec.muscle_memory ? 2.5 : 1) *
                (1 + 0.5 * this.spec.blackoutkick_extra * 1)
            );
        },
        ftargets: function(delta) {
            return (
                (1 + this.spec.blackoutkick_extra * 1)
            );
        },
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });

    spls.find('HealingSphere').attr({
        fct: function(delta) {
            return ( 0.5 );
        }
    });

    spls.find('Revival').attr({
        ftargets: function(delta) {
            return ( this.spec.raid25 ? 25 : 10 );
        }
    });

    spls.find('ChiWave').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });
    spls.find('ChiBurst').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });
*/
    return spls;
});
