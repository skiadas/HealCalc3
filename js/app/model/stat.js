define(['can'], function(can) {
    var STATS = [
        {
            id: 1, 
            name: 'standard',
            bint: 21512,
            bspi: 11460,
            bmast: 3770,
            bcrit: 6288,
            bhaste: 2195,
            bweapon: 8926,
            bwspeed: 3.3,
            bwdps: 1643
        }
    ],
        stat = new can.Observe(STATS[0]);

    return stat;
});