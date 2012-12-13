define(['can'], function(can) {

buffs = new can.Observe({
    'stats': true, 'mastery': true, 'haste': true, 
    'crit': true, 'sp': true, 'armor': true, 
    'spelldam': false, 'intfood': true, 'intflask': true, 'critmeta': true
});
    return buffs;
});