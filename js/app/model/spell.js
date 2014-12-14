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
            base_mana: 6560,
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
            c: 0.8305,
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
            c: 7.8,
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
            c: 0.833 * 1.25,
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
            c: 1.226,
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
            c: 2.6,
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
            c: 6,
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
            code: 'WordsOfMending',
            name: 'Words of Mending',
            specid: 1,
            base_ct: 1.5,
            base_mana: 0,
            c: 6.3,
            img: 'ability_priest_wordsofmeaning',
            aoe: false,
            instant: true,
            item: 152117
        },
    ]
    var FIXME = [
        //
        // HOLY
        //
        {
            id: 74,
            code: 'DivineStarHoly',
            name: 'Divine Star',
            specid: 2,
            base_ct: 1.5,
            base_mana: 13500,
            targets: 10,
            B: 7861.5,
            c:  0.758,
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
            base_mana: 40500,
            targets: 10,
            B: 33694,
            c:  3.25,
            img: 'ability_priest_halo',
            aoe: true,
            instant: true,
            item: 120517
        },
        {
            id: 16,
            code: 'HealHoly',
            name: 'Heal',
            specid: 2,
            base_ct: 2.5,
            base_mana: 5700,
            B: 10645,
            c: 1.024,
            img: 'spell_holy_heal',
            aoe: false,
            instant: false,
            item: 2050
        },
        {
            id: 17,
            code: 'GhealHoly',
            name: 'Greater Heal',
            specid: 2,
            base_ct: 2.5,
            base_mana: 17700,
            B: 22725.92,
            c: 2.19,
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
            base_mana: 17700,
            B: 17044.549,
            c: 1.642,
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
            base_mana: 16200,
            B: 12452.174,
            c: 1.124,
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
            base_mana: 7800,
            nticks: 4,
            time_tick: 3,
            Btick: 2690,
            ctick: 0.259,
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
            base_mana: 18300,
            B: 19428,
            c: 1.871,
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
            base_mana: 10500,
            targets: 6,
            B: 5919,
            c: 0.571,
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
            base_mana: 13500,
            targets: 5,
            B: 8687,
            c: 0.8381,
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
            base_mana: 27000,
            targets: 10,
            B: 10108,
            c: 0.975,
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
            base_mana: 9600,
            targets: 5,
            B: 4840.5,
            c: 0.467,
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
            base_mana: 18900,
            targets: 5,
            B: 7987,
            c: 1.542,
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
            base_mana: 16200,
            targets: 15,
            Btick: 5735,
            ctick: 0.553,
            nticks: 3,
            time_tick: 2,
            img: 'spell_holy_summonlightwell',
            aoe: true,
            instant: true,
            item: 724
        },
        // {
        //     code: 'LWHealHoly',
        //     name: 'Lightwell Heal',
        //     specid: 2,
        //     base_ct: 1.5,
        //     base_mana: 16200,
        //     targets: 3,
        //     B: 5735,
        //     c: 0.553,
        //     img: 'spell_holy_summonlightwell',
        //     aoe: false,
        //     instant: true,
        //     item: 2050
        // },
        {
            id: 28,
            code: 'HWSerenityHoly',
            name: 'Holy Word: Serenity',
            specid: 2,
            base_ct: 1.5,
            base_mana: 6000,
            targets: 1,
            B: 13442,
            c: 1.3,
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
            base_mana: 11400,
            targets: 6,
            Btick: 504,
            ctick: 0.0583,
            nticks: 15,
            time_tick: 2,
            img: 'spell_holy_divineprovidence',
            aoe: true,
            instant: true,
            item: 88686
        },

        //
        // DRUID
        //
        {
            id: 30,
            code: 'HealingTouch',
            name: 'Healing Touch',
            specid: 4,
            base_ct: 2.5,
            base_mana: 17340,
            B: 20130,
            c: 1.86,
            img: 'spell_nature_healingtouch',
            aoe: false,
            instant: false,
            item: 5185
        },
        {
            id: 31,
            code: 'ForceOfNature',
            name: 'Force of Nature',
            specid: 4,
            base_ct: 1.5,
            base_mana: 0,
            Btick: 3501.6,
            ctick: 0.3214,
            nticks: 6,
            time_tick: 2.5,
            duration: 15,
            targets: 1,
            img: 'ability_druid_forceofnature',
            aoe: true,
            instant: true,
            item: 106737
        },
        {
            id: 32,
            code: 'Nourish',
            name: 'Nourish',
            specid: 4,
            base_ct: 2.5,
            base_mana: 6120,
            B: 6649.5,
            c: 0.614,
            img: 'ability_druid_nourish',
            aoe: false,
            instant: false,
            item: 50464
        },
        {
            id: 33,
            code: 'Regrowth',
            name: 'Regrowth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 17820,
            B: 10383.5,
            c: 0.958,
            Btick: 787,
            ctick: 0.073,
            nticks: 3,
            time_tick: 2,
            img: 'spell_nature_resistnature',
            aoe: false,
            instant: false,
            item: 8936
        },
        {
            id: 34,
            code: 'Rejuv',
            name: 'Rejuvenation',
            specid: 4,
            base_ct: 1.5,
            base_mana: 8700, // was 9600 before 5.2
            Btick: 4234,
            ctick: 0.392,
            nticks: 4,
            time_tick: 3,
            img: 'spell_nature_rejuvenation',
            aoe: false,
            instant: true,
            item: 774
        },
        {
            id: 35,
            code: 'Lifebloom',
            name: 'Lifebloom',
            specid: 4,
            base_ct: 1.5,
            base_mana: 3540,
            B: 8150,
            c: 0.752,
            Btick: 621,
            ctick: 0.057,
            nticks: 15,
            time_tick: 1,
            img: 'inv_misc_herb_felblossom',
            aoe: false,
            instant: true,
            item: 94447
        },
        {
            id: 36,
            code: 'WildGrowth',
            name: 'Wild Growth',
            specid: 4,
            base_ct: 1.5,
            base_mana: 13740,
            Btick: 990,
            ctick: 0.092,
            nticks: 7,
            time_tick: 1,
            targets: 5,
            img: 'ability_druid_flourish',
            aoe: true,
            instant: true,
            item: 48438
        },
        {
            id: 37,
            code: 'Swiftmend',
            name: 'Swiftmend',
            specid: 4,
            base_ct: 1.5,
            base_mana: 6120,
            Btick: 13966,
            ctick: 1.29,
            nticks: 7,
            time_tick: 1,
            targets: 1,
            img: 'inv_relics_idolofrejuvenation',
            aoe: true,
            instant: true,
            item: 18562
        },
        {
            id: 38,
            code: 'Mushrooms',
            name: 'Wild Mushrooms',
            specid: 4,
            base_ct: 1.5,
            base_mana: 6120,
            B: 13398,
            c: 1.242,
            targets: 6,
            img: 'druid_ability_wildmushroom_b',
            aoe: true,
            instant: true,
            item: 102792
        },
        {
            id: 39,
            code: 'Tranquility',
            name: 'Tranquility',
            specid: 4,
            base_ct: 8,
            base_mana: 16260,
            B: 9037,
            c: 0.835,
            Btick: 1542,
            ctick: 0.142,
            nticks: 4,
            time_tick: 2,
            targets: 5,
            img: 'spell_nature_tranquility',
            aoe: true,
            instant: false,
            item: 740
        },

        //
        // PALLY
        //
        {
            id: 40,
            code: 'HolyLight',
            name: 'Holy Light',
            specid: 3,
            base_ct: 2.5,
            base_mana: 7560,
            B: 8868.5,
            c: 0.785,
            img: 'spell_holy_holybolt',
            aoe: false,
            instant: false,
            item: 635
        },
        {
            id: 41,
            code: 'DivineLight',
            name: 'Divine Light',
            specid: 3,
            base_ct: 2.5,
            base_mana: 21600,
            B: 16817.5,
            c: 1.49,
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
            base_mana: 22680,
            B: 12606.5,
            c: 1.12,
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
            base_mana: 21600,
            B: 5664,
            c: 0.675,
            targets: 1+6*0.5,
            img: 'spell_paladin_divinecircle',
            aoe: true,
            instant: false,
            item: 82327
        },
        {
            id: 44,
            code: 'HolyShock',
            name: 'Holy Shock',
            specid: 3,
            base_ct: 1.5,
            base_mana: 4800,
            B: 9389,
            c: 0.833,
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
            B: 5539,
            c: 0.49,
            img: 'inv_helmet_96',
            aoe: false,
            instant: true,
            item: 130551
        },
        {
            id: 46,
            code: 'LoD',
            name: 'Light of Dawn',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: (1627+1812)/2,
            c: 0.152,
            targets: 6,
            img: 'spell_paladin_lightofdawn',
            aoe: true,
            instant: true,
            item: 85222
        },
        {
            id: 47,
            code: 'HolyPrism',
            name: 'Holy Prism Single',
            specid: 3,
            base_ct: 1.5,
            base_mana: 3240,
            B: (14523 + 17750)/2 / 1.05,
            c: 1.428 / 1.05,
            img: 'spell_paladin_holyprism',
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
            base_mana: 3240,
            B: (9794 + 11969)/2  / 1.05,
            c: 0.962 / 1.05,
            targets: 5,
            img: 'spell_paladin_holyprism',
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
            base_mana: 0,
            B: (3268 + 3993)/2 / 1.05,
            c: 0.321 / 1.05,
            targets: 7 * 6,
            img: 'spell_paladin_lightshammer',
            aoe: true,
            instant: true,
            item: 114158
        },
        {
            id: 50,
            code: 'Execution',
            name: 'Execution Sentence',
            specid: 3,
            base_ct: 1.5,
            base_mana: 0,
            B: 12989.4 / 1.05,
            c: 5.936 / 1.05,
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
            B: 5539,
            c: 0.49,
            Btick: 711,
            ctick: 0.0819,
            nticks: 10,
            time_tick: 3,
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
            base_mana: 9600,
            Btick: 340,
            ctick: 1.17,
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
            id: 53,
            code: 'HW',
            name: 'Healing Wave',
            specid: 5,
            base_ct: 2.5,
            base_mana: 5940,
            B: (7790 + 8899)/2,
            c: 0.756, res_factor: 1,
            img: 'spell_nature_magicimmunity',
            aoe: false,
            instant: false,
            item: 331
        },
        {
            id: 54,
            code: 'GHW',
            name: 'Greater Healing Wave',
            specid: 5,
            base_ct: 2.5,
            base_mana: 16140,
            B: (14172 + 16190)/2,
            c: 1.377, res_factor: 1,
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
            base_mana: 20580,
            B: (11687 + 13351)/2,
            c: 1.135, res_factor: 0.6,
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
            base_mana: 13500,
            B: (7086 + 8094)/2,
            c: 0.6876,
            targets: 4,
            res_factor: 0.333*4,
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
            base_mana: 7200,
            B: 3735,
            c: 0.339,
            Btick: 1764,
            ctick: 0.16,
            nticks: 6,
            time_tick: 3,
            res_factor: 0.6,
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
            base_mana: 4920,
            B: (3028 + 3280)/2,
            c: 0.286,
            res_factor: 0.6,
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
            base_mana: 14100,
            Btick: 0,
            ctick: 0.444,
            nticks: 15/2,
            time_tick: 2,
            duration: 15,
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
            base_mana: 4800,
            Btick: 4932,
            ctick: 0.484,
            targets: 5,
            nticks: 11/2,
            time_tick: 2,
            duration: 11,
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
            base_mana: 21981,
            Btick:  (1983 + 2358)/2,
            ctick: 0.197,
            targets: 6,
            nticks: 10/2,
            time_tick: 2,
            duration: 10,
            img: 'spell_nature_giftofthewaterspirit',
            aoe: true,
            instant: false,
            item: 73920
        },
        {
            id: 62,
            code: 'Earthliving',
            name: 'Earthliving',
            specid: 5,
            base_ct: 1.5,
            base_mana: 0,
            Btick:  1094,
            ctick: 0.0996,
            nticks: 4,
            time_tick: 3,
            img: 'spell_shaman_giftearthmother',
            aoe: false,
            instant: true,
            item: 51945
        },
        {
            id: 63,
            code: 'EarthShield',
            name: 'Earth Shield',
            specid: 5,
            base_ct: 1.5,
            base_mana: 11400,
            B: 2461.4/1.25,  // To account for 1.25 baseline buff to shaman spells
            c: 0.2413/1.25,
            targets: 9,
            img: 'spell_nature_skinofearth',
            aoe: false,
            instant: true,
            item: 974
        },

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
            id: 81,
            code: 'HolyFireHoly',
            name: 'Holy Fire / Solace',
            specid: 2,
            base_ct: 1.5,
            base_mana: 5400,
            B: 1135.52,
            c: 1.11,
            Btick: 57,
            ctick: 0.0312,
            nticks: 7,
            time_tick: 1,
            img: 'spell_holy_searinglight',
            aoe: false,
            instant: true,
            item: 14914
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
        fct_hp_pally: function(delta) {
            return (
                (
                    this.base_ct +
                    (this.spec.cs_to_hp? 1.5 : 0) * (this.spec.one_hp ? 1 : 3)
                ) /
                (1+this.spec.fhastep(delta))
            );
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
                        8849 * 0.01 *
                        this.spec.fcrit(delta) *
                        this.res_factor *
                        (this.spec.resurgence ? 1 : 0)
                    )
                )
            );
        },
        fmana_hp_pally: function(delta) {
            return (
                (this.spec.cs_to_hp? 9000 : 0) *
                (this.spec.one_hp ? 1 : 3)
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
                   ( 1 + 1 * this.spec.fversp(delta) );
        },
        fbase_disc: function(delta) {
            return ( this.nticks ? this.fhot(delta) : this.fdirect(delta) ) *
                   ( 1 + 0.5 * this.spec.fmastp(delta) ) *
                   ( 1 + 1 * this.spec.fversp(delta) ) *
                   1.3;  // Grace
        },
        fbase_druid: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.1   // Buff from 5.2
            );
        },
        fbase_holy_sth: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.serenity ? 1.25 : 1)
            );
        },
        fbase_holy_aoe: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.sanctuary ? 1.25 : 1)
            );
        },
        fbase_pally: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.05 *
                1.25
            );
        },
        fbase_pally_hp: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.05 *
                1.5 *
                (this.spec.one_hp ? 1 : 3)
            );
        },
        fbase_shaman: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                1.25
            );
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
            // The average heal amount, including crits and mastery.
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) )
            );
        },
        fheal_disc: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1 + 0.6 * this.spec.fmultip(delta) ) *
                ( 1 + this.spec.fmastp(delta) * this.spec.fcritp(delta) )
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
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1 +
                        (this.spec.bol ? 0.5 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        },
        fheal_shaman: function(delta) {
            return (
                this.fbase(delta) *
                (
                    1 +
                        (
                            -1 +
                                2 *
                                (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                ) *
                this.spec.fmast_factor(delta)
            );
        },
        fheal_shaman_aa: function(delta, crit) {
            return (
                (this.spec.earth_shield_buff ? 1.2 : 1) *
                this.fbase(delta) *
                this.spec.fmast_factor(delta) *
                (
                    1 +
                    (this.spec.t15_4p_shaman ? 0.3 : 0) +
                    (
                        -1 +
                            2 *
                            (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) *
                            1.3
                    ) *
                    (crit || this.spec.fcritp(delta))
                )
            );
        },
        fheal_spirit_shell: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fmastp(delta) ) *
                ( 1 + this.spec.fcritp(delta) ) *
                ( 1+ 0.3 * this.spec.fcritp(delta))
            );
        },
        fheal_sth_holy: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 +
                    (
                        -1 +
                        2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                    ) *
                    (
                        (this.spec.serenity ? 0.25 : 0) +
                        this.spec.fcritp(delta)
                    )
                ) *
                ( 1 + this.spec.fmastp(delta) )
            );
        },
        fheal_living_seed: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    1 +
                    (
                        -1 +
                            2 *
                            (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) *
                            1.3
                    ) *
                    this.spec.fcritp(delta)
                )
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
        fhpm_hp_pally_nomana: function(delta) {
            return (
                this.spec.cs_to_hp ? (this.fheal(delta) / this.fmana()) : 0
            );
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
    spls.find('CascadeDisc').attr({
        ftargets: function(delta) {
            return (
                this.spec.buffs.raid_size * 1 *
                (
                    0.4 +
                    Math.min(this.spec.cascade_range_disc, 30) * 0.02
                )
            );
        }
    });

    spls.find('DivineStarDisc').attr({
        ftargets: function(delta) {
            return ( this.spec.buffs.raid_size * 2 );
        }
    });
    spls.find('HaloDisc').attr({
        ftargets: function(delta) {
            return ( this.spec.buffs.raid_size * 1 );
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
            return ( this.spec.attr('glyph_pom_disc') ? 5.6 : 6 );
        },
    });

    spls.find('PoHDisc').attr({
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_disc );
        },
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

/* TODO
    // HOLY Spells setup
    $.each(['HealHoly', 'FhealHoly', 'GhealHoly', 'BhealHoly'], function(i, spname) {
        spls.find(spname).attr({
            fbase: function(delta) {
                return ( this.fbase_holy_sth(delta) );
            },
            fheal: function(delta) {
                return ( this.fheal_sth_holy(delta) );
            }
        });
    });

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

    spls.find('FhealHoly').attr({
        fmana: function(delta) {
            return (
                Math.roundn(
                    this.base_mana *
                    (this.spec.attr('t14_2p_holy') ? 0.8 : 1)
                )
            )
        }
    });

    spls.find('HolyFireHoly').attr({
        fbase: function(delta) {
            return (
                (this.fhot(delta) + this.fdirect(delta)) *
                ( 1 + (this.spec.evang_stacks || 5) * 0.04 )
            );
        },
        fheal: this.fheal_sth_holy,
        fmana: function(delta) {
            return (
                (
                    (this.spec.talent45_holy === 'solace') ?
                    0 :
                    this.fmana_instant_priest(delta)
                ) *
                ( 1 - (this.spec.evang_stacks || 5) * 0.06 )
            );
        },
        fhpm: function(delta) {
            return (
                (this.spec.talent45_holy === 'solace') ?
                0 :
                this.fheal(delta) / this.fmana(delta)
            );
        }
    });

    $.each(['PoHHoly', 'DHHoly', 'CoHHoly', 'PoMHoly', 'HWSanctuaryHoly', 'CascadeHoly', 'DivineStarHoly', 'HaloHoly'], function(i, spname) {
        spls.find(spname).attr({
            fbase: function(delta) {
                return ( this.fbase_holy_aoe(delta) );
            },
        });
    });

    spls.find('DHHoly').attr({
        ftargets: function(delta) {
            return ( (this.spec.buffs.raid25 ? 12 : 5) * (4 + 2 * 0.1) );
        }
    });

    spls.find('HWSerenityHoly').attr({
        fbase: function(delta) {
            return (
                this.fbase_holy_sth(delta) *
                (this.spec.attr('t16_4p_holy') ? 2 : 1)
            );
        },
    });

    spls.find('CascadeHoly').attr({
        ftargets: function(delta) {
            return (
                Math.min(
                    this.spec.cascade_targets_holy,
                    this.spec.raid25 ? 25 : 10
                ) *
                (
                    0.4 +
                    Math.min( this.spec.cascade_range_holy, 30 ) * 0.02
                )
            );
        }
    });
    spls.find('DivineStarHoly').attr({
        ftargets: function(delta) {
            return (
                Math.min(
                    this.spec.divinestar_targets_holy,
                    this.spec.raid25 ? 25 : 10
                ) *
                2
            );
        }
    });
    spls.find('HaloHoly').attr({
        ftargets: function(delta) {
            return (
                Math.min(
                    this.spec.halo_targets_holy,
                    this.spec.raid25 ? 25 : 10
                )
            );
        }
    });

    spls.find('CoHHoly').attr({
       fmana: function(delta) {
           return (
               this.fmana_instant_priest(delta) *
               (this.spec.glyph_coh ? 1.35 : 1)
           );
       },
       ftargets: function(delta) {
           return ( this.targets + (this.spec.glyph_coh ? 1 : 0) );
       },
       fheal: function(delta) {
           return (
               this.fbase(delta) *
               (
                   1 +
                       (
                           -1 +
                           2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                       ) *
                       this.spec.fcritp(delta)
               ) *
               ( 1 + 1 * this.spec.fmastp(delta) ) +
               (this.spec.attr('t15_4p_holy') ? 0.4 * 100000 : 0)
           );

       },
    });

    spls.find('PoHHoly').attr({
        ftargets: function(delta) {
            return ( 1 * this.spec.poh_targets_holy );
        },
    });
    spls.find('HWSanctuaryHoly').attr({
        fbase: function(delta) {
            return (
                (this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
                (this.spec.attr('t16_4p_holy') ? 3.15 : 1)
            );
        },
        fheal: function(delta) {
            // The average heal amount, including crits and mastery.
            return (
                this.fbase(delta) *
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                )
            );
        },
    });
    spls.find('PoMHoly').attr({
        fdirect: function(delta) {
            return (
                ( this.B + this.c * this.spec.fsp(delta) ) *
                (
                    this.spec.attr('t15_2p_holy') ?
                        1.1 * (1 + 1.1 * (1 + 1.1 * (1 + 1.1))) +  // The 2th through 5th heals
                        (this.spec.attr('glyph_pom_holy') ? 1.6 : (1 + Math.pow(1.1, 5)))
                    :
                        (this.spec.attr('glyph_pom_holy') ? 5.6 : 6)
                )
            );
        }
    });

    spls.find('RenewHoly').attr({
        fnticks: function(delta) {
            return (
                Math.roundn(
                    (
                        this.nticks -
                        (this.spec.attr('glyph_renew_holy') ? 1 : 0)
                    ) *
                    this.time_tick /
                    this.ftick_time(delta)
                )
            );
        },
        fhot: function(delta) {
            return (
                (this.spec.attr('glyph_renew_holy') ? (1+1/3) : 1) *
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                this.ftargets(delta) *
                this.fnticks(delta)
            );
        },
        fbase: function(delta) {
            return (
                this.fhot(delta) *
                1.15 *    // Renew Heals for 15%
                1.15      // Renew instantly heals target for 15%
            );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                (
                    // Need to add the mastery from the initial tick
                    1 + 0.15 / 1.15 * this.spec.fmastp(delta)
                ) *
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                )
            );
        },
        fct: function(delta) { return ( 1 ); },
    });

    spls.find('PWSHoly').attr({
        fheal: function(delta) {
            return ( this.fbase(delta) );
        },
    });

    spls.find('LWCastHoly').attr({
        fheal: function(delta) {
            return ( this.fbase(delta) );
        },
        fhot: function(delta) {
            return (
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                this.spec.lw_charges *
                this.fnticks(delta)
            );
        },
    });
    //END HOLY Spells setup



    //DRUID Spells setup
    spls.find('Nourish').attr({
        fct: function(delta) {
            return (
                (
                    this.base_ct *
                    (this.spec.attr('glyph_rejuv') ? 0.7 : 1)
                ) /
                ( 1 + this.spec.fhastep(delta) )
            );
        },
        fbase: function(delta) {
            return (
                this.fdirect(delta) *
                1.2 *   // Buff from 3 Rejuvs
                1.1     // 5.2 buff
            );
        },
        fheal: function(delta) {
            return ( this.fheal_living_seed(delta) );
        },
    });

    spls.find('HealingTouch').attr({
        fmana: function(delta) {
            return ( this.spec.t16_2p_druid ? 0 : this.base_mana );
        },
        fhpm: function(delta) {
            return ( this.spec.t16_2p_druid ? 0 : this.fheal(delta) / this.fmana(delta) );
        },
        fct: function(delta) {
            return (
                (this.spec.t16_2p_druid ? 1.5 : this.base_ct) /
                ( 1 + this.spec.fhastep(delta) )
            );
        },
        fheal: function(delta) {
            return ( this.fheal_living_seed(delta) );
        }
    });

    spls.find('Regrowth').attr({
        fbase: function(delta) {
            return (
                (
                    this.fdirect(delta) +
                    (this.spec.attr('glyph_regrowth') ? 0 : this.fhot(delta))
                ) * 1.1  // 5.2 Buff
            );
        },
        fheal: function(delta) {
            var crit = (
                        this.spec.attr('glyph_regrowth') ?
                        1 :
                        ( Math.min(this.spec.fcritp(delta) + 0.6, 1) )
                       );
            return (
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    this.fbase(delta) *
                    (
                        1 +
                            (
                                -1 +
                                    2 * crit *
                                    (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                            )
                    ) + // Living seed only looks at direct heal part
                    // But should it not care about the glyph of regrowth?
                    // FIXME?
                    this.fdirect(delta) *
                    (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) *
                    0.6 * crit
                )
            );
        },
    });

    spls.find('Rejuv').attr({
        fmana: function(delta) {
            return (
                Math.roundn(
                    this.base_mana *
                    (this.spec.attr('t14_2p_druid') ? 0.9 : 1)
                )
            );
        },
        fct: function(delta) { return ( 1 ); },
        fnticks: function(delta) {
            var ntick = Math.roundn(
                    this.nticks * this.time_tick / this.ftick_time(delta)
                );
                // If t15 set bonus, we count the ticks including the extra healing from the bonus
                // FIXME: Does the initial heal get affected by that? Guess is no
            return (
                1 +
                (
                    this.spec.attr('t15_4p_druid')
                    ?
                        (Math.pow(1.06, ntick) - 1) / (1.06 - 1)   // Sum of powers of 1.06
                    :
                        ntick
                )
            );
        }
    });

    spls.find('Lifebloom').attr({
        fnticks: function(delta) {
            return (
                Math.roundn(
                    (
                        this.nticks -
                        (this.spec.attr('glyph_blooming') ? 5 : 0)
                    ) *
                    this.time_tick /
                    this.ftick_time(delta)
                )
            );
        },
        fdirect: function(delta) {
            return (
                ( this.B + this.c * this.spec.fsp(delta)) *
                (this.spec.attr('glyph_blooming') ? 1.5 : 1)
            );
        },
        fbase: function(delta) {
            return (
                (
                    this.fdirect(delta) +
                    this.fhot(delta)
                ) * 1.1 // 5.2 Buff
            );
        }
    });

    spls.find('WildGrowth').attr({
        fhot: function(delta) {
            return (
                ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                (
                    5 +
                    (this.spec.attr('glyph_wild_growth') ? 1 : 0) +
                    (this.spec.attr('incarnation') ? 2 : 0)
                ) *
                this.fnticks(delta)
            );
        },
        fheal: function(delta) {
            // The average heal amount, including crits and mastery.
            return (
                (
                    this.fbase(delta) *
                    ( 1 + 1 * this.spec.fmastp(delta) ) +
                    (this.spec.t16_4p_druid ? 0.33 * this.spec.sp : 0)
                ) *
                (
                    1 +
                        (
                            -1 +
                            2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) )
                        ) *
                        this.spec.fcritp(delta)
                )

            );
        },

    });

    spls.find('Swiftmend').attr({
        fnticks: function(delta) {
            return (
                1 +
                    (
                        this.spec.glyph_efflo ?
                        0 :
                        (
                            0.12 *
                            (this.spec.t15_2p_druid ? 4 : 3) *
                            Math.roundn(
                                this.nticks *
                                this.time_tick /
                                this.ftick_time(delta)
                            )
                        )
                    )
            );
        },
        fheal: function(delta) {
            return (
                (this.spec.glyph_efflo ? 1.2 : 1) *
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    this.fbase(delta) *
                    (
                        1 +
                            ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                            this.spec.fcritp(delta)
                    ) +

                    ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                    0.6 *
                    (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) *
                    this.spec.fcritp(delta)
                )
            );
        }
    });

    spls.find('Efflorescence').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        fbase: function(delta) {
            return (
                ( this.Btick + this.ctick * this.spec.fsp(delta) )
                * this.ftargets(delta)
            );
        }
    });
    spls.find('Mushrooms').attr({
        fheal: function(delta) {
            var rj = spls.find('Rejuv').fheal(delta);
            var efflo = spls.find('Efflorescence').fheal(delta);
            var efflo_tick = spls.find('Efflorescence').ftick_time(delta);
            return (
                ( 1 + this.spec.fmastp(delta) ) *
                this.fbase(delta)
                + this.spec.wm_rj * rj  // Include full rejuvs
                + ( (this.spec.glyph_efflo && this.spec.efflo_wm) ?
                    (efflo * (1 * this.spec.wm_bloom_time - 3) / efflo_tick) : 0
                  )
            );
        }
    });

    spls.find('Tranquility').attr({
        fheal: function(delta) {
            var nticks = this.fnticks(delta);
            return (
                (
                    this.fdirect(delta) * nticks +
                        (
                            -3 +
                            3 * nticks +
                            3 * nticks
                        ) *
                        ( this.Btick + this.ctick * this.spec.fsp(delta) ) *
                        ( this.spec.buffs.raid25 ? 12 : 5)
                ) *
                ( 1 + this.spec.fmastp(delta) ) *
                (
                    1 +
                        ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                        this.spec.fcritp(delta)
                )
            );
        }
    });

    spls.find('ForceOfNature').attr({
        fnticks: function(delta) {
            return ( this.fnticks_shaman_aoe(delta) );
        },
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        fbase: function(delta) {
            return ( this.fhot(delta) );
        },
        fheal: function(delta) {
            var sm = spls.find('Swiftmend').fheal(delta);
            return (
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                        this.spec.fcritp(delta)
                ) + 0.16 * sm
            );
        }
    });
    //END DRUID Spells setup



    // PALLY Spells setup
    spls.find('HolyLight').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
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
                        (this.spec.bol ? 1 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                     +
                    this.spec.fmastp(delta)
                )
            );
        }
    });

    spls.find('DivineLight').attr({
        fct: function(delta) {
            return (
                ( this.base_ct - (this.spec.infusion_of_light ? 1.5 : 0) ) /
                (1 + this.spec.fhastep(delta))
            );
        },
        fbase: function(delta) {
            return (
                this.fbase_pally(delta) *
                (this.spec.infusion_of_light && this.spec.t16_2p_pally ? 1.2 : 1)
            )
        }
    });

    spls.find('HolyShock').attr({
        fheal: function(delta) {
            var crit = 0.25 + this.spec.fcritp(delta);
            return (
                (
                    1 +
                        (this.spec.bol ? 0.5 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                     +
                    this.spec.fmastp(delta)
                ) *
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                        crit
                ) *
                (
                    this.spec.attr('daybreak') ?
                        (this.spec.attr('t15_2p_pally') ? 2.5 : 2)
                    :
                        1
                )
            );
        }
    });

    spls.find('WoG').attr({
        fct: function(delta) {
            return ( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return ( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return ( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return ( this.fbase_pally_hp(delta) );
        },
        fheal: function(delta) {
            return (
                (
                    this.fbase(delta) +
                    this.spec.fmastp(delta) * this.fdirect(delta) * 1.5 * 1.05
                ) *
                ( 1 +
                    ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                    this.spec.fcritp(delta)
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

    spls.find('LoD').attr({
        fct: function(delta) {
            return ( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return ( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return ( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return ( this.fbase_pally_hp(delta) );
        },
        ftargets: function(delta) {
            return ( this.targets - (this.spec.attr('glyph_lod') ? 2 : 0) )
        },
        fdirect: function(delta) {
            return (
                ( this.B + this.c * this.spec.fsp(delta) ) *
                this.ftargets(delta) *
                (this.spec.attr('glyph_lod') ? 1.25 : 1)
            );
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

    spls.find('LightsHammer').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                ( 1 +
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

    spls.find('Execution').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });

    spls.find('EternalFlame').attr({
        fct: function(delta) {
            return ( this.fct_hp_pally(delta) );
        },
        fmana: function(delta) {
            return ( this.fmana_hp_pally(delta) );
        },
        fhpm: function(delta) {
            return ( this.fhpm_hp_pally_nomana(delta) );
        },
        fbase: function(delta) {
            return (
                (
                    this.fhot(delta) +
                    this.fdirect(delta)
                ) *
                1.05 *
                1.5 *
                (this.spec.one_hp ? 1 : 3)
            );
        }
    });

    spls.find('SacredShield').attr({
        fbase: function(delta) {
            return ( this.fhot(delta) );
        },
        fheal: function(delta) {
            return ( this.fbase(delta) );
        }
    });

    spls.find('HolyPrism').attr({
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

    spls.find('HolyPrismAoE').attr({
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                (
                    1 +
                        ( -1 + 2 * (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) ) *
                        this.spec.fcritp(delta)
                ) *
                (
                    1+
                        (this.spec.bol ? 0.15 : 0) *
                        (this.spec.t15_4p_pally ? 1.2 : 1)
                    +
                    this.spec.fmastp(delta)
                )
            );
        }
    });
    // END PALLY Spells setup



    // SHAMAN Spells setup
    spls.find('EarthShield').attr({
        fbase: function(delta) {
            return (
                this.fbase_shaman(delta) *
                (this.spec.t16_2p_shaman ? 4 : 1)
            );
        }
    });
    spls.find('HW').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fheal: function(delta) {
            return ( this.fheal_shaman_aa(delta) );
        },
        fct: function(delta) {
            return (
                this.base_ct /
                ( 1 + this.spec.fhastep(delta) ) *
                (
                    this.spec.attr('tidal_waves') ?
                        0.7 - (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                    :
                        1
                )
            );
        }
    });

    spls.find('GHW').attr({
        fmana: function(delta) {
            return (
                Math.roundn(
                    (
                        this.base_mana *
                        (this.spec.attr('t14_2p_shaman') ? 0.9 : 1)
                    ) -
                    (
                        8849 *
                        this.spec.fcritp(delta) *
                        this.res_factor *
                        (this.spec.resurgence ? 1 : 0)
                    )
                )
            )
        },
        fheal: function(delta) {
            return ( this.fheal_shaman_aa(delta) );
        },
        fct: function(delta) {
            return (
                this.base_ct /
                ( 1 + this.spec.fhastep(delta) ) *
                (
                    this.spec.attr('tidal_waves') ?
                        0.7 - (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                    :
                        1
                )

            );
        }
    });

    spls.find('HSurge').attr({
        fmana: function(delta) {
            var crit = this.spec.fcritp(delta) +
                       (
                           this.spec.attr('tidal_waves') ?
                               0.3 + (this.spec.attr('t14_4p_shaman') ? 0.05 : 0)
                           :
                               0
                       );
            return (
                Math.roundn(
                    this.base_mana -
                    (
                        crit *
                        8849 *
                        0.6 *
                        (this.spec.attr('resurgence') ? 1 : 0)
                    )
                )
            );
        },
        fheal: function(delta) {
            return (
                this.fheal_shaman_aa(
                    delta,
                    this.spec.fcritp(delta) +
                    (this.spec.attr('tidal_waves') ? 0.3 : 0)
                )
            );
        }
    });

    spls.find('ChainHeal').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        ftargets: function(delta) {
            return (
                Math.min(1 * this.spec.ch_targets, this.targets) +
                (this.spec.earth_shield_buff ? 0.2 : 0)
            );
        },
        fbase: function(delta) {
            return (
                this.fdirect(delta) *
                1.25 *
                (this.spec.attr('chain_heal_riptide') ? 1.25 : 1)
            );
        },
        fheal: function(delta) {
            return (
                this.fbase(delta) *
                this.spec.fmast_factor(delta) *
                (
                    1 +
                    (this.spec.t15_4p_shaman ? 0.3 : 0) +
                    (
                        -1 +
                            2 *
                            (1 + (this.spec.critmeta ? 0.03 : 0) + (this.spec.stat_trinket ? 0.07 : 0) ) *
                            1.3
                    ) *
                    this.spec.fcritp(delta)
                )
            );
        }
    });

    spls.find('Riptide').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fdirect: function(delta) {
            return (
                ( this.B + this.c * this.spec.fsp(delta) ) *
                (this.spec.attr('glyph_riptide') ? 0.25 : 1)
            );
        },
        fbase: function(delta) {
            return (
                (
                    this.fhot(delta) +
                    this.fdirect(delta)
                ) * 1.25
            );
        },
        fheal: function(delta) {
            return ( this.fheal_shaman_aa(delta) );
        }
    });

    spls.find('UnleashLife').attr({
        fmana: function(delta) {
            return ( this.fmana_shaman_resurgence(delta) );
        },
        fheal: function(delta) {
            return ( this.fheal_shaman_aa(delta) );
        }
    });

    spls.find('HST').attr({
        fnticks: function(delta) {
            return ( this.fnticks_shaman_aoe(delta) );
        },
        ftargets: function(delta) {
            return ( (this.spec.t15_2p_shaman ? 1.25 : 1) * (this.spec.rushing_streams ? 1.15 * 2 : 1));
        },
        fbase: function(delta) {
            return ( this.fbase_shaman(delta) * 1.5 ); // 50% extra buff to HST from purification
        }
    });

    spls.find('HTT').attr({
        fnticks: function(delta) {
            return ( this.fnticks_shaman_aoe(delta) );
        },
        fbase: function(delta) {
            return ( this.fbase_shaman(delta) * 1.5 ); // 50% extra buff to HST from purification
        },
        ftargets: function(delta) {
            return ( this.spec.buffs.raid25 ? 12 : 5 );
        }
    });
    spls.find('HealingRain').attr({
        fnticks: function(delta) {
            return (
                1 +
                Math.ceiln(
                    (this.duration + this.spec.conductivity * 2) *
                    (1 + this.spec.fhastep(delta)) /
                    this.time_tick
                )
            );
        },
        ftargets: function(delta) {
            return ( Math.min(1 * this.spec.hr_targets, this.targets) );
        },
        fbase: function(delta) {
            return ( this.fbase_shaman(delta) * 2 ); // 100% extra buff to HST from purification
        }
    });

    spls.find('Earthliving').attr({
        fhpm: function(delta) {
            return ( this.fhpm_nomana(delta) );
        }
    });
    //  END SHAMAN Spells setup



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
