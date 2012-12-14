define(['can'], function(can) {

buffs = new can.Observe({
    'stats': true, 'mastery': true, 'haste': true, 
    'crit': true, 'sp': true, 'armor': true, 
    'spelldam': false, 'intfood': true, 'intflask': true, 'crit_meta': true, 
    'mana_meta': false, 'focus_pot': true
});
    return buffs;
});