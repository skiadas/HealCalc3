define(['can'], function(can) {

var buffs = new can.Observe({
    'stats': true, 'mastery': true, 'haste': true, 
    'crit': true, 'sp': true, 'armor': true, 
    'spelldam': false, 'intfood': true, 'intflask': true, 'crit_meta': true, 
    'mana_meta': false, 'focus_pot': true,
    'relics': [
        {'name': 'None', uptime: 0, effect: {}},
        {'name': 'Empty Fruit Barrel (463)', uptime: 0.3, effect: {'int': 3386}},
        {'name': 'Empty Fruit Barrel (471)', uptime: 0.3, effect: {'int': 3648}},
        {'name': 'Vial of Ichorous Blood (463)', uptime: 0.16, effect: {'spi': 4241}},
        {'name': 'Vial of Ichorous Blood (471)', uptime: 0.16, effect: {'spi': 4569}},
        {'name': 'Zen Alchemist Stone (458)', uptime: 0.27, effect: {'int': 4353}},
        {'name': 'Zen Alchemist Stone (466)', uptime: 0.27, effect: {'int': 4689}},
        {'name': 'Relic of Chi-Ji (476)', uptime: 0.4, effect: {'spi': 3027}},
        {'name': 'Relic of Chi-Ji (480)', uptime: 0.4, effect: {'spi': 3141}},
        {'name': 'Relic of Chi-Ji (484)', uptime: 0.4, effect: {'spi': 3261}},
        {'name': 'Qin-xi\'s Polarizing Seal (476)', uptime: 0.43, effect: {'int': 2866}},
        {'name': 'Qin-xi\'s Polarizing Seal (480)', uptime: 0.43, effect: {'int': 2974}},
        {'name': 'Qin-xi\'s Polarizing Seal (484)', uptime: 0.43, effect: {'int': 3087}},
        {'name': 'Qin-xi\'s Polarizing Seal (489)', uptime: 0.43, effect: {'int': 3236}},
        {'name': 'Qin-xi\'s Polarizing Seal (493)', uptime: 0.43, effect: {'int': 3358}},
        {'name': 'Qin-xi\'s Polarizing Seal (497)', uptime: 0.43, effect: {'int': 3486}},
        {'name': 'Qin-xi\'s Polarizing Seal (502)', uptime: 0.43, effect: {'int': 3653}},
        {'name': 'Qin-xi\'s Polarizing Seal (506)', uptime: 0.43, effect: {'int': 3791}},
        {'name': 'Qin-xi\'s Polarizing Seal (510)', uptime: 0.43, effect: {'int': 3935}},
        {'name': 'Spirits of the Sun (483)', uptime: 0.19, effect: {'spi': 6121}},
        {'name': 'Spirits of the Sun (487)', uptime: 0.19, effect: {'spi': 6353}},
        {'name': 'Spirits of the Sun (491)', uptime: 0.19, effect: {'spi': 6594}},
        {'name': 'Spirits of the Sun (496)', uptime: 0.19, effect: {'spi': 6908}},
        {'name': 'Spirits of the Sun (500)', uptime: 0.19, effect: {'spi': 7170}},
        {'name': 'Spirits of the Sun (504)', uptime: 0.19, effect: {'spi': 7442}},
        {'name': 'Spirits of the Sun (509)', uptime: 0.19, effect: {'spi': 7796}},
        {'name': 'Spirits of the Sun (513)', uptime: 0.19, effect: {'spi': 8092}},
        {'name': 'Spirits of the Sun (517)', uptime: 0.19, effect: {'spi': 8399}},
        {'name': 'Scroll of Revered Ancestors (489)', uptime: 0.25, effect: {'spi': 3595}},
        {'name': 'Scroll of Revered Ancestors (493)', uptime: 0.25, effect: {'spi': 3731}},
        {'name': 'Scroll of Revered Ancestors (497)', uptime: 0.25, effect: {'spi': 3873}},
        {'name': 'Heartwarmer/Cutstitcher Medallion (496)', uptime: 0.25, effect: {'spi': 3838}},
    ],
});
    return buffs;
});