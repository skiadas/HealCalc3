define(['can'], function(can) {
    var STATS = [
        {
            id: 1,
            name: 'standard',
            bint: 3222 / 1.05,
            bspi: 1033,
            bmast: 599,
            bcrit: 574,
            bhaste: 759,
            bmulti: 382,
            bvers: 172,
            bweapon: 956,
            bwspeed: 3,
            bwdps: 115
        }
    ],
        stat = new can.Observe(STATS[0]);

    return stat;
});
