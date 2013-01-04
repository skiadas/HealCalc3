define(['can'], function(can) {
    var STATS = [
        {
            id: 1, 
            name: 'standard',
            bint: 13400,
            bspi: 8394,
            bmast: 3831,
            bcrit: 2628,
            bhaste: 555,
            bweapon: 5812
        }
    ],
        stat = new can.Observe(STATS[0]);

    return stat;
});