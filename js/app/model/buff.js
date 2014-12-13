define(['can'], function(can) {

    var buffs = new can.Observe({
        stats: true,
        mastery: true,
        haste: true,
        crit: true,
        sp: true,
        mult: true,
        vers: true,
        secondary_food: true,
        intflask: true,
        stat_trinket: false,
        focus_pot: true,
        weapon_enchant: 'spirit',
        raidsize: 20,
        trinkets: [
            {
                name: 'None',
                uptime: 0,
                spi: 0,
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
