define(['can'], function(can) {

    var buffs = new can.Observe({
        stats: true,
        mastery: true,
        haste: true, 
        crit: true,
        sp: true,
        armor: true, 
        spelldam: false,
        intfood: true,
        intflask: true,
        crit_meta: true,
        mana_meta: false,
        focus_pot: true,
        darkglow: false,
        raid25: false,
        trinkets: [
            {
                name: 'None',
                uptime: 0,
                spi: 0,
                int: 0
            },
            {
                name: 'Empty Fruit Barrel (463)',
                uptime: 0.3,
                spi: 0,
                int: 3386
            },
            {
                name: 'Empty Fruit Barrel (471)',
                uptime: 0.3,
                spi: 0,
                int: 3648
            },
            {
                name: 'Vial of Ichorous Blood (463)',
                uptime: 0.16,
                spi: 4241,
                int: 0
            },
            {
                name: 'Vial of Ichorous Blood (471)',
                uptime: 0.16,
                spi: 4569,
                int: 0
            },
            {
                name: 'Zen Alchemist Stone (458)',
                uptime: 0.27,
                spi: 0,
                int: 4353
            },
            {
                name: 'Zen Alchemist Stone (466)',
                uptime: 0.27,
                spi: 0,
                int: 4689
            },
            {
                name: 'Relic of Chi-Ji (476)',
                uptime: 0.4,
                spi: 3027,
                int: 0
            },
            {
                name: 'Relic of Chi-Ji (480)',
                uptime: 0.4,
                spi: 3141,
                int: 0
            },
            {
                name: 'Relic of Chi-Ji (484)',
                uptime: 0.4,
                spi: 3261,
                int: 0
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (476)',
                uptime: 0.43,
                spi: 0,
                int: 2866
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (480)',
                uptime: 0.43,
                spi: 0,
                int: 2974
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (484)',
                uptime: 0.43,
                spi: 0,
                int: 3087
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (489)',
                uptime: 0.43,
                spi: 0,
                int: 3236
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (493)',
                uptime: 0.43,
                spi: 0,
                int: 3358
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (497)',
                uptime: 0.43,
                spi: 0,
                int: 3486
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (502)',
                uptime: 0.43,
                spi: 0,
                int: 3653
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (506)',
                uptime: 0.43,
                spi: 0,
                int: 3791
            },
            {
                name: 'Qin-xi\'s Polarizing Seal (510)',
                uptime: 0.43,
                spi: 0,
                int: 3935
            },
            {
                name: 'Spirits of the Sun (483)',
                uptime: 0.19,
                spi: 6121,
                int: 0
            },
            {
                name: 'Spirits of the Sun (487)',
                uptime: 0.19,
                spi: 6353,
                int: 0
            },
            {
                name: 'Spirits of the Sun (491)',
                uptime: 0.19,
                spi: 6594,
                int: 0
            },
            {
                name: 'Spirits of the Sun (496)',
                uptime: 0.19,
                spi: 6908,
                int: 0
            },
            {
                name: 'Spirits of the Sun (500)',
                uptime: 0.19,
                spi: 7170,
                int: 0
            },
            {
                name: 'Spirits of the Sun (504)',
                uptime: 0.19,
                spi: 7442,
                int: 0
            },
            {
                name: 'Spirits of the Sun (509)',
                uptime: 0.19,
                spi: 7796,
                int: 0
            },
            {
                name: 'Spirits of the Sun (513)',
                uptime: 0.19,
                spi: 8092,
                int: 0
            },
            {
                name: 'Spirits of the Sun (517)',
                uptime: 0.19,
                spi: 8399,
                int: 0
            },
            {
                name: 'Scroll of Revered Ancestors (489)',
                uptime: 0.25,
                spi: 3595,
                int: 0
            },
            {
                name: 'Scroll of Revered Ancestors (493)',
                uptime: 0.25,
                spi: 3731,
                int: 0
            },
            {
                name: 'Scroll of Revered Ancestors (497)',
                uptime: 0.25,
                spi: 3873,
                int: 0
            },
            {
                name: 'Heartwarmer/Cutstitcher Medallion (496)',
                uptime: 0.25,
                spi: 3838,
                int: 0
            },

        ],
        trinket1: {
            uptime: 0,
            spi: 0,
            int : 0
        },
        trinket2: {
            uptime: 0,
            spi: 0,
            int : 0
        },
    });
    return buffs;
});