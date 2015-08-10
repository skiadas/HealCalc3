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
            c: 3.3264 * 1.25 * 1.1 * 1.3,
            img: 'spell_holy_greaterheal',
            aoe: false,
            instant: false,
            item: 2060,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 2,
            code: 'FhealDisc',
            name: 'Flash Heal',
            specid: 1,
            base_ct: 1.5,
            base_mana: 6624,
            c: 3.32657 * 1.25 * 1.1 * 1.3,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 3,
            code: 'CascadeDisc',
            name: 'Cascade',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            c: 0.432 * 1.1 * 1.3,
            img: 'ability_priest_cascade',
            aoe: true,
            instant: false,
            item: 121148,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 4,
            code: 'DivineStarDisc',
            name: 'Divine Star',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3200,
            targets: 6 * 2,
            c:  0.6518 * 1.3,
            img: 'spell_priest_divinestar',
            aoe: true,
            instant: true,
            item: 110744,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 5,
            code: 'HaloDisc',
            name: 'Halo',
            specid: 1,
            base_ct: 1.5,
            base_mana: 5760,
            targets: 6,
            c:  2.874 * 1.3,
            img: 'ability_priest_halo',
            aoe: true,
            instant: false,
            item: 120517,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 6,
            code: 'PWSDisc',
            name: 'Power Word: Shield',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            cshield: 4.59 * 1.3,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 7,
            code: 'PoMDisc',
            name: 'Prayer of Mending',
            specid: 1,
            base_ct: 1.5,
            base_mana: 3840,
            targets: 5,
            c: 0.666 * 1.25 * 1.25 * 1.3,
            img: 'spell_holy_prayerofmendingtga',
            aoe: true,
            instant: true,
            item: 33076,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 8,
            code: 'PoHDisc',
            name: 'Prayer of Healing',
            specid: 1,
            base_ct: 2.5,
            base_mana: 11405,
            targets: 5,
            c: 2.21664 * 1.3,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 14914,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 14914,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 585,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 47540,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 13,
            code: 'PenanceHealDisc',
            name: 'Penance Heal',
            specid: 1,
            base_ct: 2,
            base_mana: 1920,
            c: 2.64 * 1.3,
            targets: 3,
            img: 'spell_holy_penance',
            aoe: false,
            instant: false,
            item: 47540,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 14,
            code: 'ClarityOfWill',
            name: 'Clarity of Will',
            specid: 1,
            base_ct: 2.5,
            base_mana: 5040,
            cshield: 6.6 * 1.3,
            img: 'ability_priest_clarityofwill',
            aoe: false,
            instant: false,
            item: 152118,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 15,
            code: 'SavingGrace',
            name: 'Saving Grace',
            specid: 1,
            base_ct: 1.5,
            base_mana: 4800,
            c: 6.3 * 1.3,
            img: 'ability_priest_savinggrace',
            aoe: false,
            instant: false,
            item: 155274,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 16,
            code: 'EmpPoHDisc',
            name: 'Empowered PoH',
            specid: 1,
            base_ct: 2.5,
            base_mana: 11405,
            targets: 5,
            c: 2.21664 * 1.3,
            img: 'spell_holy_prayerofhealing02',
            aoe: true,
            instant: false,
            item: 596,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 17,
            code: 'EmpFhealDisc',
            name: 'Empowered FH',
            specid: 1,
            base_ct: 1.5,
            base_mana: 6560,
            c: 3.32657 * 1.25 * 1.1 * 1.3,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 2061,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 18,
            code: 'HolyNova',
            name: 'Holy Nova',
            specid: 1,
            base_ct: 1.5,
            base_mana: 2560,
            targets: 5,
            c: 1.125 / 2 * 1.3,
            img: 'spell_holy_holynova',
            aoe: true,
            instant: true,
            item: 132157,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            c: 3.6 * 1.1,
            img: 'spell_nature_healingtouch',
            aoe: false,
            instant: false,
            item: 5185,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 202,
            code: 'Regrowth',
            name: 'Regrowth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 5962,
            c: 2.1784 * 1.1,
            ctick: 0.546264 * 1.1,
            nticks: 6,
            time_tick: 2,
            img: 'spell_nature_resistnature',
            aoe: false,
            instant: false,
            item: 8936,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 203,
            code: 'Rejuv',
            name: 'Rejuvenation',
            specid: 4,
            base_ct: 1.5,
            base_mana: 3024,
            c: 0.542 * 1.1,
            ctick: 5 * 0.542 * 1.1,
            nticks: 5,
            time_tick: 3,
            img: 'spell_nature_rejuvenation',
            aoe: false,
            instant: true,
            item: 774,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 204,
            code: 'Lifebloom',
            name: 'Lifebloom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 1440,
            c: 2.011 * 1.1,
            ctick: 5.52 * 1.1,
            nticks: 15,
            time_tick: 1,
            img: 'inv_misc_herb_felblossom',
            aoe: false,
            instant: true,
            item: 33763,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 205,
            code: 'WildGrowth',
            name: 'Wild Growth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 12080,
            ctick: 3.2535 * 1.1,
            nticks: 7,
            time_tick: 1,
            targets: 5,
            img: 'ability_druid_flourish',
            aoe: true,
            instant: true,
            item: 48438,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 206,
            code: 'Swiftmend',
            name: 'Swiftmend',
            specid: 4,
            base_ct: 1.5,
            base_mana: 4160,
            c: 3.5 * 1.1,
            targets: 1,
            img: 'inv_relics_idolofrejuvenation',
            aoe: false,
            instant: true,
            item: 18562,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 208,
            code: 'Mushroom',
            name: 'Wild Mushroom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 6912,
            ctick: 7.15 * 1.1,
            time_tick: 2,
            nticks: 15,
            targets: 3,
            img: 'druid_ability_wildmushroom_b',
            aoe: true,
            instant: true,
            item: 145205,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 209,
            code: 'Tranquility',
            name: 'Tranquility',
            specid: 4,
            base_ct: 8,
            base_mana: 5888,
            ctick: 4 * 2.502 * 1.1,
            nticks: 4,
            time_tick: 2,
            img: 'spell_nature_tranquility',
            aoe: true,
            instant: false,
            item: 740,
            cdlong: true,
            cdshort: false,
            cdnone: false
        },
        {
            id: 210,
            code: 'HealingTouchLB',
            name: 'Healing Touch on LB',
            specid: 4,
            base_ct: 2.5,
            base_mana: 3312,
            c: 3.6 * 1.1,
            img: 'spell_nature_healingtouch',
            aoe: false,
            instant: false,
            item: 5185,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 2060,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 2061,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 32546,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            ctick: 5 * 0.44 * 1.25 * 1.15 * 1.1,
            c: 0.5 * 0.44 * 1.25 * 1.15 * 1.1,
            img: 'spell_holy_renew',
            aoe: false,
            instant: true,
            item: 139,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 21,
            code: 'PWSHoly',
            name: 'Power Word: Shield',
            specid: 2,
            base_ct: 1.5,
            base_mana: 3840,
            cshield: 4.59,
            img: 'spell_holy_powerwordshield',
            aoe: false,
            instant: true,
            item: 17,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 33076,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 596,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 121148,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 34861,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            img: 'spell_holy_divinehymn',
            aoe: true,
            instant: false,
            item: 64843,
            cdlong: true,
            cdshort: false,
            cdnone: false
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
            item: 724,
            cdlong: true,
            cdshort: false,
            cdnone: false
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
            item: 88684,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 88686,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 110744,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 120517,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            c: 3 * 1.25 * 1.05,
            img: 'spell_holy_surgeoflight',
            aoe: false,
            instant: false,
            item: 82326,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 42,
            code: 'FlashLight',
            name: 'Flash of Light',
            specid: 3,
            base_ct: 1.5,
            base_mana: 6400,
            c: 3 * 1.25 * 1.05,
            img: 'spell_holy_flashheal',
            aoe: false,
            instant: false,
            item: 19750,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 43,
            code: 'HolyRadiance',
            name: 'Holy Radiance',
            specid: 3,
            base_ct: 2.5,
            base_mana: 11405,
            B: 57.5 * 1.25 * 1.05,  // Yes, it needs a B!!!
            c: 1.51319 * 1.25 * 1.05,
            targets: 1 + 6 * 0.5,
            img: 'spell_paladin_divinecircle',
            aoe: true,
            beaconPercent: 0.15,
            instant: false,
            item: 82327,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 44,
            code: 'HolyShock',
            name: 'Holy Shock',
            specid: 3,
            base_ct: 1.5,
            base_mana: 2352,
            c: 1.4 * 1.25 * 1.05,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 20473,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 45,
            code: 'WoG',
            name: 'Word of Glory',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.1 * 3 * 1.2 * 1.05,
            img: 'inv_helmet_96',
            aoe: false,
            instant: false,
            item: 130551,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 46,
            code: 'LoD',
            name: 'Light of Dawn',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 0.245 * 3 * 1.5 * 1.05,
            targets: 6,
            img: 'spell_paladin_lightofdawn',
            beaconPercent: 0.15,
            aoe: true,
            instant: false,
            item: 85222,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 47,
            code: 'HolyPrism',
            name: 'Holy Prism Single',
            specid: 3,
            base_ct: 1.5,
            base_mana: 5440,
            c: 4 * 1.25 * 1.05, // In-game tooltip value misses the 25% factor
            img: 'spell_paladin_holyprism',
            beaconPercent: 0.15,
            aoe: false,
            instant: true,
            item: 114165,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 48,
            code: 'HolyPrismAoE',
            name: 'Holy Prism AoE',
            specid: 3,
            base_ct: 1.5,
            base_mana: 5440,
            c: 3 * 1.25 * 1.05, // In-game tooltip value misses the 25% factor
            targets: 5,
            img: 'spell_paladin_holyprism',
            beaconPercent: 0.15,
            aoe: true,
            instant: true,
            item: 114165,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 49,
            code: 'LightsHammer',
            name: 'Light\'s Hammer',
            specid: 3,
            base_ct: 1.5 * 1.05,
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
            item: 114158,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 50,
            code: 'Execution',
            name: 'Execution Sentence',
            specid: 3,
            base_ct: 1.5,
            base_mana: 4096,
            c: 0.594 * 27.906 * 1.25 * 1.05,
            img: 'spell_paladin_executionsentence',
            aoe: false,
            instant: true,
            item: 114157,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 51,
            code: 'EternalFlame',
            name: 'Eternal Flame',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.1 * 3 * 1.2,
            ctick: 0.1 * 1.25 * 1.2 * 15 * 1.05,  // all 15 ticks
            nticks: 15,
            time_tick: 2,
            img: 'inv_torch_thrown',
            aoe: false,
            instant: true,
            item: 114163,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 52,
            code: 'SacredShield',
            name: 'Sacred Shield',
            specid: 3,
            base_ct: 1.5,
            base_mana: 3040,
            cshield: 0.995 * 5, // All 5 ticks // Not benefitting from SoI
            nticks: 5,
            time_tick: 6,
            img: 'ability_paladin_blessedmending',
            aoe: false,
            instant: true,
            item: 20925,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 77472,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 8004,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 1064,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            item: 61295,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 73685,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 59,
            code: 'HST',
            name: 'Healing Stream Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 2752,
            ctick: 15 / 2 * 0.525 * 1.5 * 1.4,
            nticks: 15 / 2,   // But there is an initial tick
            time_tick: 2,
            img: 'inv_spear_04',
            aoe: false,
            instant: true,
            item: 5394,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 60,
            code: 'HTT',
            name: 'Healing Tide Totem',
            specid: 5,
            base_ct: 1.5,
            base_mana: 1792,
            ctick: 5 * 0.6 * 1.5 * 1.4,
            targets: 5,
            nticks: 10 / 2,
            time_tick: 2,
            img: 'ability_shaman_healingtide',
            aoe: true,
            instant: true,
            item: 108280,
            cdlong: true,
            cdshort: false,
            cdnone: false
        },
        {
            id: 61,
            code: 'HealingRain',
            name: 'Healing Rain',
            specid: 5,
            base_ct: 2,
            base_mana: 6912,
            ctick: 10 / 2 * 0.163882 * 1.4 * 2,
            targets: 6,
            nticks: 10 / 2,
            time_tick: 2,
            duration: 10,
            img: 'spell_nature_giftofthewaterspirit',
            aoe: true,
            instant: false,
            item: 73920,
            cdlong: false,
            cdshort: true,
            cdnone: false
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
            item: 974,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 64,
            code: 'SoothingMist',
            name: 'Soothing Mist',
            specid: 6,
            base_ct: 1,
            base_mana: 1120,
            c: 1.1475 * 1.2,
            targets: 2, // Statue
            img: 'ability_monk_soothingmists',
            aoe: false,
            instant: true,
            item: 115175,
            mast_factor: (0.67 + 0.33) / 2, // Spell and statue
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
         {
            id: 65,
            code: 'SurgingMist',
            name: 'Surging Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 7520,
            c: 2.97 * 1.2,
            img: 'ability_monk_surgingmist',
            aoe: false,
            instant: true,
            item: 116995,
            mast_factor: 1,
            chi_gain: 1,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 66,
            code: 'EnvelopingMist',
            name: 'Enveloping Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            ctick: 9.9 * 1.2,
            nticks: 6,
            duration: 6,
            time_tick: 1,
            img: 'spell_shaman_spiritlink',
            aoe: false,
            instant: true,
            item: 132120,
            mast_factor: 0.25,
            chi_use: 3,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 67,
            code: 'RenewingMist',
            name: 'Renewing Mist',
            specid: 6,
            base_ct: 1.5,
            base_mana: 6400,
            ctick: 0.13748 * 10 * 1.2,
            nticks: 10,
            duration: 20,
            time_tick: 2,
            targets: 3,
            img: 'ability_monk_renewingmists',
            aoe: true,
            instant: true,
            item: 119611,
            mast_factor: 0.25,
            chi_gain: 1,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 68,
            code: 'LifeCocoon',
            name: 'Life Cocoon',
            specid: 6,
            base_ct: 1.5,
            base_mana: 3840,
            cshield: 31.164,
            img: 'ability_monk_chicocoon',
            aoe: false,
            instant: true,
            item: 116849,
            mast_factor: 0,
            cdlong: true,
            cdshort: false,
            cdnone: false
        },
        {
            id: 69,
            code: 'Uplift',
            name: 'Uplift',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            c: 1.65 * 1.2,
            img: 'ability_monk_uplift',
            targets: 8,
            aoe: true,
            instant: true,
            item: 116670,
            mast_factor: 0.4,
            chi_use: 2,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 70,
            code: 'Revival',
            name: 'Revival',
            specid: 6,
            base_ct: 1.5,
            base_mana: 6998,
            c: 8.95 * 1.2,
            img: 'spell_monk_revival',
            targets: 10,
            aoe: true,
            instant: true,
            item: 115310,
            mast_factor: 1,
            cdlong: true,
            cdshort: false,
            cdnone: false
        },
        {
            id: 76,
            code: 'ExpelHarm',
            name: 'Expel Harm',
            specid: 6,
            base_ct: 1.5,
            base_mana: 4800,
            c: 7.5 / 3.5 * 1.2,
            targets: 1,
            img: 'ability_monk_expelharm',
            aoe: false,
            instant: true,
            item: 115072,
            mast_factor: 1,
            chi_gain: 1,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 77,
            code: 'RenewingMistTFT',
            name: 'Renewing Mist (TFT)',
            specid: 6,
            base_ct: 1.5,
            base_mana: 6400,
            ctick: 0.13748 * 10 * 1.2,
            nticks: 10,
            duration: 20,
            time_tick: 2,
            targets: 5,
            img: 'ability_monk_renewingmists',
            aoe: true,
            instant: true,
            item: 119611,
            mast_factor: 0.25,
            chi_gain: 1,
            cooldown: 45,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 82,
            code: 'SCK',
            name: 'Spinning Crane Kick',
            specid: 6,
            base_ct: 2.25,
            base_mana: 14080,
            targets: 6,
            c: 4 * 0.49375 * 1.2,
            img: 'ability_monk_cranekick_new',
            aoe: true,
            instant: true,
            item: 117640,
            mast_factor: 0.15,
            chi_gain: 1,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 83,
            code: 'ChiWave',
            name: 'Chi Wave',
            specid: 6,
            base_ct: 1,
            base_mana: 0,
            targets: 4,
            c: 0.5 * 1.2,
            img: 'ability_monk_chiwave',
            aoe: true,
            instant: true,
            item: 115098,
            mast_factor: 0.25,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 84,
            code: 'ZenSphere',
            name: 'Zen Sphere',
            specid: 6,
            base_ct: 1,
            base_mana: 0,
            targets: 1,
            cticks: 8 * 0.095 * 1.2,
            c: 6 * 1.25 * 1.2, // Tooltip does not show the 1.2 factor
            img: 'ability_monk_forcesphere',
            aoe: true,
            instant: true,
            item: 124081,
            mast_factor: 0.2,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 85,
            code: 'ChiBurst',
            name: 'Chi Burst',
            specid: 6,
            base_ct: 1,
            base_mana: 0,
            targets: 6,
            c: 2.75 * 1.2,
            img: 'spell_arcane_arcanetorrent',
            aoe: true,
            instant: true,
            item: 123986,
            mast_factor: 0.2,
            cdlong: false,
            cdshort: true,
            cdnone: false
        },
        {
            id: 86,
            code: 'ChiExplosion',
            name: 'Chi Explosion',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            targets: 1,
            c: 1.7 * 1.2,
            img: 'ability_monk_chiexplosion',
            aoe: false,
            instant: true,
            item: 157675,
            mast_factor: 0.3,
            mast_factor_tick: 0.02 * 6,
            chi_use: 2,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
        {
            id: 87,
            code: 'BreathSerpent',
            name: 'Breath of the Serpent',
            specid: 6,
            base_ct: 1.5,
            base_mana: 0,
            targets: 6 * 10,
            c: 0.58 * 1.2,
            img: 'ability_monk_jadeserpentbreath',
            aoe: false,
            instant: true,
            item: 157535,
            mast_factor: 0.2,
            cdlong: true,
            cdshort: false,
            cdnone: false
        },

   ];

    var FIXME = [
        //
        // MONK
        //
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
            chi_gain: 1,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            chi_use: 1,
            cdlong: false,
            cdshort: false,
            cdnone: true
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
            chi_use: 2,
            cdlong: false,
            cdshort: false,
            cdnone: true
        },
    ];

     //
    var spec_specific = {
        fct: function(delta) {
            return ( this.base_ct / (1+this.spec.fhastep(delta)) );
        },
        fct_monk: function(delta) {
            return (
                (this.base_ct / (1 + this.spec.fhastep(delta))) +
                (this.spec.mana_tea_monk ? (this.chi_gain || 0) * 0.25 * 0.5 : 0)
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
                    this.spec.mana_tea_monk ?
                    ( (this.chi_gain || 0) * 0.01 * this.spec.mana_pool ) :
                    0
                )
            );
        },
        ftargets: function(delta) {
            return ( this.targets || 1 );
        },
        fnticks: function(delta) {
            return Math.ceil(this.nticks * (1 + this.spec.fhastep(delta)));
        },
        fmultip: function(delta) {
            return this.spec.fmultip(delta);
        },
        fcritp: function(delta) {
            return this.spec.fcritp(delta);
        },
        fspec_mixed_factor: function(delta) {
            return 1;
        },

        fbasefactor: function(delta) {
            return 1;
        },
        fbasedirect: function(delta) {
            return (
                (this.c || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbasehot: function(delta) {
            return (
                (this.ctick || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fhastep(delta)) *
                (1 + this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbaseshield: function(delta) {
            return (
                (this.cshield || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbaseother: function(delta) {
            return (
                (this.cother || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbaseheal: function(delta) {
            return (1 - this.spec.stats.overhealdirect) * this.fbasedirect(delta) +
                   (1 - this.spec.stats.overhealhot) * this.fbasehot(delta) +
                   (1 - this.spec.stats.overhealshield) * this.fbaseshield(delta) +
                   (1 - this.spec.stats.overhealother) * this.fbaseother(delta);
        },

        fmixeddirect: function(delta) {
            return this.fbasedirect(delta) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                        this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta);
        },
        fmixedhot: function(delta) {
            return this.fbasehot(delta) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                        this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta);
        },
        fmixedshield: function(delta) {
            return this.fbaseshield(delta) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                   this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta);
        },
        fmixedother: function(delta) {
            return this.fbaseother(delta) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                   this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta);
        },
        fmixedheal: function(delta) {
            return (1 - this.spec.stats.overhealdirect) * this.fmixeddirect(delta) +
                   (1 - this.spec.stats.overhealhot) * this.fmixedhot(delta) +
                   (1 - this.spec.stats.overhealshield) * this.fmixedshield(delta) +
                   (1 - this.spec.stats.overhealother) * this.fmixedother(delta);
        },

        fcritdirect: function(delta) {
            return this.fmixeddirect(delta) * 2;
        },
        fcrithot: function(delta) {
            return this.fmixedhot(delta) * 2;
        },
        fcritshield: function(delta) {
            return this.fmixedshield(delta) * 2;
        },
        fcritother: function(delta) {
            return this.fmixedother(delta) * 2;
        },
        fcritheal: function(delta) {
            return (1 - this.spec.stats.overhealdirect) * this.fcritdirect(delta) +
                   (1 - this.spec.stats.overhealhot) * this.fcrithot(delta) +
                   (1 - this.spec.stats.overhealshield) * this.fcritshield(delta) +
                   (1 - this.spec.stats.overhealother) * this.fcritother(delta);
        },

        favgdirect: function(delta) {
            return (1 - this.fcritp(delta)) * this.fmixeddirect(delta) +
                   this.fcritp(delta) * this.fcritdirect(delta);
        },
        favghot: function(delta) {
            return (1 - this.fcritp(delta)) * this.fmixedhot(delta) +
                   this.fcritp(delta) * this.fcrithot(delta);
        },
        favgshield: function(delta) {
            return (1 - this.fcritp(delta)) * this.fmixedshield(delta) +
                   this.fcritp(delta) * this.fcritshield(delta);
        },
        favgother: function(delta) {
            return (1 - this.fcritp(delta)) * this.fmixedother(delta) +
                   this.fcritp(delta) * this.fcritother(delta);
        },
        favgheal: function(delta) {
            return (1 - this.spec.stats.overhealdirect) * this.favgdirect(delta) +
                   (1 - this.spec.stats.overhealhot) * this.favghot(delta) +
                   (1 - this.spec.stats.overhealshield) * this.favgshield(delta) +
                   (1 - this.spec.stats.overhealother) * this.favgother(delta);
        },

        fbasedirect_no_mast: function(delta) {
            return (
                (this.c || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbasehot_no_mast: function(delta) {
            return (
                (this.ctick || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fhastep(delta)) *
                this.fbasefactor(delta)
            );
        },

        // Disc additions
        fbasedirect_disc: function(delta) {
            return (
                (this.c || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + 0.5 * this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fbasehot_disc: function(delta) {
            return (
                (this.ctick || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + 0.5 * this.spec.fmastp(delta)) *
                this.fbasefactor(delta)
            );
        },
        fspec_mixed_factor_disc: function(delta) {
             return ( 1 + 1 * this.spec.attr('aa_uptime') *
                        this.spec.attr('aa_stacks') * 0.05 );
        },
        fcritdirect_disc: function(delta) {
            return this.fmixeddirect(delta);
        },
        fcrithot_disc: function(delta) {
            return this.fmixedhot(delta);
        },
        fcritshield_da: function(delta) {
            return (this.fmixeddirect(delta) + this.fmixedhot(delta)) *
                   (1 + this.spec.fmastp(delta));
        },

        // Holy additions

        // Adds EoL
        fmixedhot_holy: function(delta) {
            return (
                        this.fbasehot(delta) +
                        this.fbasedirect(delta) * this.spec.fmastp(delta)
                   ) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                        this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta);
        },

        // Druid additions
        fcritother_living_seed: function(delta) {
            return 0.5 * this.fcritdirect(delta);
        },

        // Pally additions
        fbaseshield_pally_mast: function(delta) {
            return this.spec.fmastp(delta) *
                   this.fbasedirect(delta) *
                   this.fbasefactor(delta);
        },

        fbaseother_pally_beacon: function(delta) {
            return (this.fbasedirect(delta) + this.fbasehot(delta)) *
                (
                    (this.spec.bol ? 1 : 0) +
                    (this.spec.bof ? 1 : 0)
                ) * (this.beaconPercent || 0.5) *
                (this.spec.t18_2p_pally ? 1.25 : 1) *
                this.fbasefactor(delta);
        },
        fbaseother_pally_sth_beacon: function(delta) {
            return (this.fbasedirect(delta) + this.fbasehot(delta)) *
                (
                    (this.spec.bol && !this.spec.beacon_heals ? 1 : 0) +
                    (this.spec.bof ? 1 : 0)
                ) * (this.beaconPercent || 0.5) *
                (this.spec.t18_2p_pally ? 1.25 : 1) *
                this.fbasefactor(delta);
        },
        fbasedirect_sth_pally: function(delta) {
            return (this.c || 0) * this.spec.fsp(delta) *
                   (1 + this.spec.fversp(delta)) *
                   (this.spec.bol && this.spec.beacon_heals ? 1.1 : 1) *
                   this.fbasefactor(delta);
        },

        // Shaman changes
        fspec_mixed_factor_shaman: function(delta) {
            return this.spec.fmast_factor(delta);
        },

        // Monk changes
        fbaseother_monk: function(delta) {
            var sphere = this.spec.fsp(delta) * this.spec.mast_c *
                         (1 + this.spec.fversp(delta));
            var nticks = Math.ceiln(
                this.duration *
                (1 + this.spec.fhastep(delta)) / this.time_tick
            );
            var proc_chance = this.mast_factor *
                (this.ctick ? nticks : 1) *
                this.spec.fmastp(delta);
            return proc_chance * sphere;
        },


        // fbase_monk_melee: function(delta) {
        //     return (
        //         1.2 *
        //         (0.25 + 0.25) *    // Eminence and statue
        //         this.melee_coeff *
        //         this.spec.monk_melee_factor *
        //         this.ftargets(delta) *
        //         this.ftarget_armor_dr(delta)
        //     );
        // },
        // ftarget_armor_dr: function(delta) {
        //     return (
        //         1 -
        //         1 /
        //         (
        //             1 +
        //             (4037.5*90 - 317117.5) /
        //             (
        //                 24835 *
        //                 (this.spec.tiger_power ? 0.7 : 1) *
        //                 (this.spec.armor ? 0.88 : 1)
        //             )
        //         )
        //     );
        // },



        fdirectps: function(delta) {
            return ( this.favgdirect(delta) / this.fct(delta) );
        },
        fhotps: function(delta) {
            return ( this.favghot(delta) / this.fct(delta) );
        },
        fshieldps: function(delta) {
            return ( this.favgshield(delta) / this.fct(delta) );
        },
        fotherps: function(delta) {
            return ( this.favgother(delta) / this.fct(delta) );
        },
        fhealps: function(delta) {
            return ( this.favgheal(delta) / this.fct(delta) );
        },
        fdirectpm: function(delta) {
            var mana = this.fmana(delta);
            return mana === 0 ? 0 : this.favgdirect(delta) / mana;
        },
        fhotpm: function(delta) {
            var mana = this.fmana(delta);
            return mana === 0 ? 0 : this.favghot(delta) / mana;
        },
        fshieldpm: function(delta) {
            var mana = this.fmana(delta);
            return mana === 0 ? 0 : this.favgshield(delta) / mana;
        },
        fotherpm: function(delta) {
            var mana = this.fmana(delta);
            return mana === 0 ? 0 : this.favgother(delta) / mana;
        },
        fhealpm: function(delta) {
            var mana = this.fmana(delta);
            return mana === 0 ? 0 : this.favgheal(delta) / mana;
        },
        fmps: function(delta) {
            return ( this.fmana(delta) / this.fct(delta) );
        },
        val_update: function(delta) {
            this.attr({
                'ct': Math.roundn(this.fct(), 2),
                'mana': Math.roundn(this.fmana()),
                'basedirect': Math.roundn(this.fbasedirect()),
                'basehot': Math.roundn(this.fbasehot()),
                'baseshield': Math.roundn(this.fbaseshield()),
                'baseother': Math.roundn(this.fbaseother()),
                'baseheal': Math.roundn(this.fbaseheal()),
                'mixeddirect': Math.roundn(this.fmixeddirect()),
                'mixedhot': Math.roundn(this.fmixedhot()),
                'mixedshield': Math.roundn(this.fmixedshield()),
                'mixedother': Math.roundn(this.fmixedother()),
                'mixedheal': Math.roundn(this.fmixedheal()),
                'critdirect': Math.roundn(this.fcritdirect()),
                'crithot': Math.roundn(this.fcrithot()),
                'critshield': Math.roundn(this.fcritshield()),
                'critother': Math.roundn(this.fcritother()),
                'critheal': Math.roundn(this.fcritheal()),
                'avgdirect': Math.roundn(this.favgdirect()),
                'avghot': Math.roundn(this.favghot()),
                'avgshield': Math.roundn(this.favgshield()),
                'avgother': Math.roundn(this.favgother()),
                'avgheal': Math.roundn(this.favgheal()),
                'directps': Math.roundn(this.fdirectps()),
                'hotps': Math.roundn(this.fhotps()),
                'shieldps': Math.roundn(this.fshieldps()),
                'otherps': Math.roundn(this.fotherps()),
                'healps': Math.roundn(this.fhealps()),
                'directpm': Math.roundn(this.fdirectpm(), 2),
                'hotpm': Math.roundn(this.fhotpm(), 2),
                'shieldpm': Math.roundn(this.fshieldpm(), 2),
                'otherpm': Math.roundn(this.fotherpm(), 2),
                'healpm': Math.roundn(this.fhealpm(), 2),
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
        $('body').trigger('spellsChanged');
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
                  (1 << (sp.instant ? 8 : 9) |
                  (1 << (sp.cdlong ? 10 :
                         sp.cdshort ? 11 : 12))
                  );  // Used for filtering
        if ( sp.specid == 1 ) {
            // General Disc spell setup
            sp.fbasedirect = sp.fbasedirect_disc;
            sp.fbasehot = sp.fbasehot_disc;
            sp.fcritdirect = sp.fcritdirect_disc;
            sp.fcrithot = sp.fcrithot_disc;
            sp.fspec_mixed_factor = sp.fspec_mixed_factor_disc;
        } else if (sp.specid == 2) {
            sp.fbasedirect = sp.fbasedirect_no_mast;
            sp.fbasehot = sp.fbasehot_no_mast;
            sp.fmixedhot = sp.fmixedhot_holy;
        } else if ( sp.specid == 3 ) {
            // General Pally spell setup
            sp.fbasedirect = sp.fbasedirect_no_mast;
            sp.fbasehot = sp.fbasehot_no_mast;
            sp.fbaseshield = sp.fbaseshield_pally_mast;
            sp.fbaseother = sp.fbaseother_pally_beacon;
        } else if ( sp.specid == 5 ) {
            // General Shaman spell setup
            sp.fbasedirect = sp.fbasedirect_no_mast;
            sp.fbasehot = sp.fbasehot_no_mast;
            sp.fspec_mixed_factor = sp.fspec_mixed_factor_shaman;
        } else if (sp.specid == 4) {
            // General Druid setup
            sp.fbase = sp.fbase_druid;
        } else if (sp.specid == 6) {
           // General Monk setup
           sp.fct = sp.fct_monk;
           sp.fmana = sp.fmana_monk;
           sp.fbasedirect = sp.fbasedirect_no_mast;
           sp.fbasehot = sp.fbasehot_no_mast;
           sp.fbaseother = sp.fbaseother_monk;
           sp.fheal = sp.fheal_monk;
        }
    });

    // Individual Spell setups
    //
    //
    // DISC Spells setup

    ['HealDisc', 'FhealDisc', 'EmpFhealDisc',
     'CascadeDisc', 'DivineStarDisc', 'HaloDisc',
     'PoMDisc', 'PoHDisc', 'EmpPoHDisc',
     'HolyFireDisc', 'SolaceDisc', 'SmiteDisc',
     'PenanceDisc', 'PenanceHealDisc',
     'SavingGrace', 'HolyNova'].forEach(function(spell) {
        spls.find(spell).attr({
            fcritshield: function(delta) {
                return this.fcritshield_da(delta);
            }
        });
    });

    spls.find('EmpFhealDisc').attr({
        fcritp: function(delta) {
             return 1;
        }
    });
    spls.find('EmpPoHDisc').attr({
        fcritp: function(delta) {
             return 1;
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

    spls.find('PoMDisc').attr({
        ftargets: function(delta) {
            return (
                this.targets -
                (this.spec.attr('glyph_pom_disc') ? 0.4 : 0)
            );
        }
    });

    spls.find('PoHDisc').attr({
        fmana: function(delta) {
            return this.base_mana * (this.spec.t17_4p_disc ? 0.5 : 1);
        },
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_disc );
        },
        fcritp: function(delta) {
            return Math.min(this.spec.fcritp(delta) + 0.1, 1);
        }
    });

    spls.find('EmpPoHDisc').attr({
        fmana: function(delta) {
            return this.base_mana * (this.spec.t17_4p_disc ? 0.5 : 1);
        },
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_disc );
        }
    });

    spls.find('PenanceHealDisc').attr({
        fct: function(delta) {
            return (
                (
                    this.base_ct +
                    (this.spec.t17_2p_disc ? 1 : 0)
                ) /
                (1 + this.spec.fhastep(delta))
            );
        },
        ftargets: function(delta) {
            return this.targets + (this.spec.t17_2p_disc ? 1 : 0);
        },
        fmana: function(delta) {
            return this.base_mana *
                   (this.spec.glyph_penance ? 1.2 : 1);
        },
        fmixeddirect: function(delta) {
            return this.fbasedirect(delta) *
                   (1 + 2 * 0.3 * this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta) *
                   ( 1 + (this.spec.t18_2p_disc ? 6 * 0.12 : 0)) *
                   (this.spec.t18_4p_disc ? 1.5 : 1);
        }
    });

    ['PenanceDisc', 'SmiteDisc', 'SolaceDisc', 'HolyFireDisc'].forEach(function(spell) {
        spls.find(spell).attr({
            fspec_mixed_factor: function(delta) {
                return 1;
            },
            fbasedirect: function(delta) {
                return this.fbasedirect_no_mast(delta);
            },
            fbasehot: function(delta) {
                return this.fbasehot_no_mast(delta);
            }
        });
    });

    spls.find('PenanceDisc').attr({
        fct: function(delta) {
            return (
                (
                    this.base_ct +
                    (this.spec.t17_2p_disc ? 1 : 0)
                ) /
                (1 + this.spec.fhastep(delta))
            );
        },
        ftargets: function(delta) {
            return this.targets + (this.spec.t17_2p_disc ? 1 : 0);
        },
        fbasedirect: function(delta) {
            return this.fbasedirect_no_mast(delta);
        },
        fmana: function(delta) {
            return (
                this.base_mana *
                (this.spec.glyph_penance ? 1.2 : 1)
            )
        },
        fmixeddirect: function(delta) {
            var healPenance = spls.find('PenanceHealDisc');
            return (
                (
                    this.fbasedirect(delta) *
                    this.fspec_mixed_factor(delta) +
                    healPenance.fbasedirect(delta) *
                    healPenance.fspec_mixed_factor(delta) *
                    (this.spec.t18_4p_disc ? 0.5 : 0)

                ) *
                (1 + 2 * 0.3 * this.fmultip(delta)) *
                ( 1 + (this.spec.t18_2p_disc ? 6 * 0.12 : 0)) *
                this.ftargets(delta)
            );
        }
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

    spls.find('PoMHoly').attr({
        ftargets: function(delta) {
            return (
                this.targets -
                (this.spec.attr('glyph_pom_holy') ? 0.4 : 0) +
                (this.spec.t17_2p_holy ? 4 : 0)
            );
        },
        fmixeddirect: function(delta) {
            return this.fbasedirect(delta) *
                (1 + 2 * (this.spec.multi_factor || 0.3) *
                    this.fmultip(delta)) *
                this.ftargets(delta) *
                this.fspec_mixed_factor(delta) *
                (this.spec.t18_4p_holy ? 1.1 : 1);
        }
    });

    spls.find('PWSHoly').attr({
        fbaseshield: function(delta) {
            return (this.cshield || 0) * this.spec.fsp(delta) *
                   (1 + this.spec.fversp(delta));

        }
    });

    spls.find('LWCastHoly').attr({
        ftargets: function(delta) {
            return this.spec.lw_charges;
        }
    });

    //END HOLY Spells setup

    //DRUID Spells setup

    [
        'Regrowth', 'HealingTouch', 'HealingTouchLB', 'Swiftmend'
    ].forEach(function(sp) {
        spls.find(sp).attr({
            fcritother: function(delta) {
                return this.fcritother_living_seed(delta);
            }
        });
    });

    spls.find('Tranquility').attr({
        fbasehot: function(delta) {
            return (
                (this.ctick || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta))
            );
        },
        ftargets: function(delta) {
            return this.spec.buffs.raid_size * 1;
        }
    });

    spls.find('WildGrowth').attr({
        fmana: function(delta) {
            return this.base_mana * (this.spec.t17_4p_druid ? 0.75 : 1);
        },
        ftargets: function(delta) {
            return this.targets + (this.spec.attr('glyph_wild_growth') ? 1 : 0);
        }
    });

    spls.find('Regrowth').attr({
        fbasehot: function(delta) {
            return (
                (this.spec.attr('glyph_regrowth') ? 0 : this.ctick) *
                this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fhastep(delta)) *
                (1 + this.spec.fmastp(delta))
            );
        },
        fcritp: function(delta) {
            return this.spec.attr('glyph_regrowth') ?
                   1 :
                   Math.min(this.spec.fcritp(delta) + 0.6, 1);
        }
    });

    ['HealingTouch', 'HealingTouchLB'].forEach(function(sp) {
        spls.find(sp).attr({
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
                return this.spec.attr('healing_touch_with_ns') ? 0 : this.base_mana;
            },
            fbasefactor: function(delta) {
                return this.spec.attr('healing_touch_with_ns') ? 1.5 : 1;
            }
        });
    });

    spls.find('HealingTouchLB').attr({
        fcritp: function(delta) {
            return Math.min(this.spec.fcritp(delta) + 0.2, 1);
        }
    });

    spls.find('Rejuv').attr({
        fbasehot: function(delta) {
            return (
                (this.ctick || 0) *
                (this.spec.attr('germination') ?
                    (this.nticks + 1) / this.nticks : 1
                ) *
                this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fhastep(delta)) *
                (1 + this.spec.fmastp(delta))
            );
        },
    });

    spls.find('Lifebloom').attr({
        fbasehot: function(delta) {
            return (
                this.ctick *
                (
                    this.nticks -
                    (this.spec.attr('glyph_blooming') ? 5 : 0)
                ) / this.nticks *
                this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta)) *
                (1 + this.spec.fhastep(delta))
            );
        },
        fbasedirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) *
                (this.spec.attr('glyph_blooming') ? 1.5 : 1) *
                (1 + this.spec.fversp(delta)) *
                (1 + this.spec.fmastp(delta))
            );
        },
        fnticks: function(delta) {
            return Math.ceil(
                (this.nticks - (this.spec.attr('glyph_blooming') ? 5 : 0)) *
                (1 + this.spec.fhastep(delta))

            );
        },
        fbaseother: function(delta) {
            return this.spec.t18_2p_druid ?
                this.fnticks(delta) * 0.3 * this.fbasedirect(delta) :
                0;
        }
    });

    //END DRUID Spells setup

    // PALLY Spells setup
    ['HolyLight', 'FlashLight'].forEach(function(sp) {
        spls.find(sp).attr({
            fmana: function(delta) {
                return (
                    this.base_mana *
                    ( this.spec.bol && this.spec.beacon_heals ? 0.6 : 1 )
                );
            },
            fbaseother: sp.fbaseother_pally_sth_beacon
        })
    });

    ['HolyLight', 'WoG', 'HolyShock', 'EternalFlame'].forEach(function(sp) {
        spls.find(sp).attr({
            fbasedirect: this.fbasedirect_sth_pally,
            fbaseother: function(delta) {
                return this.fbaseother_pally_sth_beacon(delta);
            }
        });
    });

    spls.find('HolyLight').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
            );
        }
    });

    spls.find('FlashLight').attr({
        fbasefactor: function(delta) {
            return this.spec.infusion_of_light ? 1.5 : 1;
        }
    });

    // If healing beacon target gets 10% more
    // Translates to daybreak
    // Daybreak: Heal 30% for 6 other targets
    // TODO: Add option for 2 stacks of it
    // Daybreak heal does not transfer to beacon
    spls.find('HolyShock').attr({
        fcritp: function(delta) {
            return Math.min(2 * this.spec.fcritp(delta), 1);
        },
        fmixeddirect: function(delta) {
            return this.fbasedirect(delta) *
                   (1 + 2 * (this.spec.multi_factor || 0.3) *
                        this.fmultip(delta)) *
                   this.ftargets(delta) *
                   this.fspec_mixed_factor(delta) *
                   (this.spec.daybreak ? 1 + 6 * 0.3 : 1);
        }
    });

    spls.find('HolyRadiance').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
            );
        }
    });

    spls.find('LightsHammer').attr({
        fbaseshield: function(delta) {
            return this.spec.fmastp(delta) * this.fbasehot(delta);
        }
    });

    spls.find('LoD').attr({
        ftargets: function(delta) {
            return ( this.targets - (this.spec.attr('glyph_lod') ? 2 : 0) )
        },
        fbasefactor: function(delta) {
            return this.spec.attr('glyph_lod') ? 1.25 : 1;
        }
    });

    spls.find('SacredShield').attr({
        fbaseshield: function(delta) {
            return (this.cshield || 0) * this.spec.fsp(delta) *
                   (1 + this.spec.fversp(delta)) *
                   (1 + this.spec.fhastep(delta));
        }
    });

    // END PALLY Spells setup


    // SHAMAN Spells setup
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
        fcritp: function(delta) {
            return Math.min(
                this.spec.fcritp(delta) +
                (this.spec.attr('tidal_waves') ? 0.3 : 0),
                1
            );
        },
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        }
    });

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

    ['HST', 'HTT', 'HealingRain'].forEach(function(sp) {
        spls.find(sp).attr({
            fbasehot: function(delta) {
                return (
                    (
                        this.ctick / this.nticks +
                        (this.ctick || 0) * (1 + this.spec.fhastep(delta))
                    ) *
                    this.spec.fsp(delta) *
                    (1 + this.spec.fversp(delta))
                );
            }
        });
    });

    spls.find('HTT').attr({
        ftargets: function(delta) {
            return ( this.spec.buffs.raid_size );
        }
    });

    spls.find('HST').attr({
        ftargets: function(delta) {
            return ( this.spec.rushing_streams ? 1.15 * 2 : 1 );
        }
    });

    spls.find('UnleashLife').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        }
    });

    spls.find('HealingRain').attr({
        ftargets: function(delta) {
            return ( Math.min(1 * this.spec.hr_targets, this.targets) );
        }
    });

    spls.find('Riptide').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fbasedirect: function(delta) {
            return (
                (this.c || 0) * this.spec.fsp(delta) *
                (1 + this.spec.fversp(delta)) *
                (this.spec.attr('glyph_riptide') ? 0.25 : 1)
            );
        },
        fcritp: function(delta) {
            return Math.min(
                (this.spec.t18_2p_shaman ? 0.25 : 0) +
                 this.spec.fcritp(delta),
                1
            );
        }
    });
    //END SHAMAN Spells Setup

    // MONK Spells setup
    spls.find('Uplift').attr({
        ftargets: function(delta) {
            return this.spec.uplift_targets;
        }
    });

    spls.find('Revival').attr({
        ftargets: function(delta) {
            return this.spec.raid_size;
        }
    });

    ['RenewingMist', 'RenewingMistTFT'].forEach(function(sp) {
        spls.find(sp).attr({
            fbasefactor: function(delta) {
                return this.spec.pool_mists_monk ? 1.15 : 1;
            }
        });
    });

    spls.find('LifeCocoon').attr({
        fbaseother: function(delta) {
            return 0;
        },
        fcritp: function(delta) {
            return 0;
        },
        fbaseshield: function(delta) {
            return (this.cshield || 0) * this.spec.fsp(delta) *
                   (1 + this.spec.fversp(delta));
        },
        fmixedshield: function(delta) {
            return this.fbaseshield(delta);
        }
    });

    spls.find('ExpelHarm').attr({
        fbasedirect: function(delta) {
            return (
                this.c * this.spec.fsp(delta) +
                1.2 * this.spec.stats.bwdam
            ) * (1 + this.spec.fversp(delta));
        },
        fspec_mixed_factor: function(delta) {
            return this.spec.expelHarm_other ? 0.5 : 1;
        }
    });

    spls.find('ZenSphere').attr({
        fbasehot: function(delta) {
            return (
                this.cticks *
                this.spec.fsp(delta) *
                ( 1 + 1 * this.spec.fversp(delta) )
            );
        },
        fbaseother: function(delta) {
            var sphere = this.spec.fsp(delta) * this.spec.mast_c *
                         (1 + this.spec.fversp(delta));
            var proc_chance = this.mast_factor *
                ( 8 + 6 ) *
                this.spec.fmastp(delta);
            return proc_chance * sphere;
        }
    });

    spls.find('ChiExplosion').attr({
        fbasedirect: function(delta) {
            return this.c * this.spec.fsp(delta) *
                   (1 +  this.spec.chi_expl_monk) *
                   (1 + 1 * this.spec.fversp(delta));
        },
        fbasehot: function(delta) {
            var chi = 1 * this.spec.chi_expl_monk;
            return this.c * this.spec.fsp(delta) *
                   ( // hots seem to get double vers
                        chi === 4 ? 3.5 :
                        chi === 3 ? 2 :
                        chi === 2 ? 1 :
                        0
                   ) *
                   (1 + 1 * this.spec.fversp(delta)) *
                   (1 + 1 * this.spec.fversp(delta));
        },
        fbaseother: function(delta) {
            var sphere = this.spec.fsp(delta) * this.spec.mast_c *
                         (1 + this.spec.fversp(delta));
            var chi = 1 * this.spec.chi_expl_monk;
            var proc_chance =
                (chi >= 3 ? 7 : 1) * // Assuming 7 targets hardcoded
                (
                    this.mast_factor +
                    (chi >= 2 ? this.mast_factor_tick : 0)
                ) *
                this.spec.fmastp(delta);
            return proc_chance * sphere;
        }
    });


    return spls;
});
