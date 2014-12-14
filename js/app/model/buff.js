define(['can'], function(can) {

    var buffs = new can.Observe({
        stats: false,
        mastery: false,
        haste: false,
        crit: false,
        sp: false,
        multi: false,
        vers: false,
        secondary_food: false,
        intflask: false,
        stat_trinket: false,
        channeled_pot: false,
        weapon_enchant: 'spirit',
        raid_size: 20,
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
