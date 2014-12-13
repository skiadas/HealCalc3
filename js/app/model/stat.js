define(['can'], function(can) {
    var STATS = [
        {
            id: 1,
            name: 'standard',
            bint: 3222,
            bspi: 1033,
            bmast: 349,
            bcrit: 574,
            bhaste: 577,
            bmult: 250,
            bvers: 366,
            bweapon: 956,
            bwspeed: 3,
            bwdps: 115
        }
    ],
        stat = new can.Observe(STATS[0]);

    return stat;
});
