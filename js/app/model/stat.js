define(['can'], function(can) {
    var STATS = [
        {
            id: 1,
            name: 'standard',
            bint: 3207,
            bspi: 1038,
            bmast: 763,
            bcrit: 356,
            bhaste: 943,
            bmulti: 350,
            bvers: 172,
            bweapon: 956,
            bwdam: 1000,
            bwspeed: 3,
            bwdps: 115,
            overhealdirect: 0.1,
            overhealhot: 0.3,
            overhealshield: 0,
            overhealother: 0.4
        }
    ],
        stat = new can.Observe(STATS[0]);

    return stat;
});
