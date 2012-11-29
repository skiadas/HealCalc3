(function() {
SPELLS = [
    // DISC
    //
    { code: 'HealDisc', name: 'Heal', specid: 1, base_ct: 2.5, base_mana: 5700, B: 10645, c: 1.024, img: 'spell_holy_heal' , aoe: false, instant: false, item: 2050 },
    { code: 'HealSSDisc', name: 'Heal Spirit Shell', specid: 1, base_ct: 2.5, base_mana: 5700, B: 10645, c: 1.024, img: 'ability_shaman_astralshift' , aoe: false, instant: false, item: 2050 },
    { code: 'GhealDisc', name: 'Greater Heal', specid: 1, base_ct: 2.5, base_mana: 17700, B: 22725.92, c: 2.19, img: 'spell_holy_greaterheal' , aoe: false, instant: false, item: 2060 },
    { code: 'GhealSSDisc', name: 'Greater Heal Spirit Shell', specid: 1, base_ct: 2.5, base_mana: 17700, B: 22725.92, c: 2.19, img: 'ability_shaman_astralshift' , aoe: false, instant: false, item: 2060 },
    { code: 'FhealDisc', name: 'Flash Heal', specid: 1, base_ct: 1.5, base_mana: 17700, B: 17044.549, c: 1.642, img: 'spell_holy_flashheal' , aoe: false, instant: false, item: 2061 },
    { code: 'FhealSSDisc', name: 'Flash Heal Spirit Shell', specid: 1, base_ct: 1.5, base_mana: 17700, B: 17044.549, c: 1.642, img: 'ability_shaman_astralshift' , aoe: false, instant: false, item: 2061 },
    { code: 'BhealDisc', name: 'Binding Heal', specid: 1, base_ct: 1.5, base_mana: 16200, B: 12452.174, c: 1.124, img: 'spell_holy_bindingheal' , targets: 2, aoe: false, instant: false, item: 32546 },
    { code: 'RenewDisc', name: 'Renew', specid: 1, base_ct: 1.5, base_mana: 7800, nticks: 4, time_tick: 3, Btick: 2690, ctick: 0.259, img: 'spell_holy_renew' , aoe: false, instant: true, item: 139 },
    { code: 'CascadeDisc', name: 'Cascade', specid: 1, base_ct: 1.5, base_mana: 27000, targets: 10, B: 10108, c: 0.975, img: 'ability_priest_cascade' , aoe: true, instant: true, item: 120785 },
    { code: 'PWSDisc', name: 'Power Word: Shield', specid: 1, base_ct: 1.5, base_mana: 18300, B: 19428, c: 1.871, img: 'spell_holy_powerwordshield', aoe: false, instant: true, item: 17 },
    { code: 'PoMDisc', name: 'Prayer of Mending', specid: 1, base_ct: 1.5, base_mana: 10500, targets: 6, B: 5919, c: 0.571, img: 'spell_holy_prayerofmendingtga' , aoe: true, instant: true, item: 33076 },
    { code: 'PoHDisc', name: 'Prayer of Healing', specid: 1, base_ct: 2.5, base_mana: 13500, targets: 5, B: 6957, c: 0.671, img: 'spell_holy_prayerofhealing02', aoe: true, instant: false, item: 596 },
    { code: 'PoHSSDisc', name: 'Prayer of Healing Spirit Shell', specid: 1, base_ct: 2.5, base_mana: 13500, targets: 5, B: 6957, c: 0.671, img: 'ability_shaman_astralshift', aoe: true, instant: false, item: 596 },
    { code: 'HolyFireDisc', name: 'Holy Fire', specid: 1, base_ct: 1.5, base_mana: 5400, B: 1135.52, c: 1.11, Btick: 57, ctick: 0.0312, nticks: 7, time_tick: 1, img: 'spell_holy_searinglight', aoe: false, instant: true, item: 14914 },
    { code: 'SmiteDisc', name: 'Smite', specid: 1, base_ct: 1.5, base_mana: 8100, B: 2361, c: 0.856, img: 'spell_holy_holysmite', aoe: false, instant: false, item: 585 },
    { code: 'PenanceDisc', name: 'Penance', specid: 1, base_ct: 2, base_mana: 9300, B: 6605.5, c: 0.635, targets: 3, img: 'spell_holy_penance', aoe: false, instant: false, item: 47540 },
    // HOLY
    //
    { code: 'HealHoly', name: 'Heal', specid: 2, base_ct: 2.5, base_mana: 5700, B: 10645, c: 1.024, img: 'spell_holy_heal' , aoe: false, instant: false, item: 2050 },
    { code: 'GhealHoly', name: 'Greater Heal', specid: 2, base_ct: 2.5, base_mana: 17700, B: 22725.92, c: 2.19, img: 'spell_holy_greaterheal' , aoe: false, instant: false, item: 2060 },
    { code: 'FhealHoly', name: 'Flash Heal', specid: 2, base_ct: 1.5, base_mana: 17700, B: 17044.549, c: 1.642, img: 'spell_holy_flashheal' , aoe: false, instant: false, item: 2061 },
    { code: 'BhealHoly', name: 'Binding Heal', specid: 2, base_ct: 1.5, base_mana: 16200, B: 12452.174, c: 1.124, img: 'spell_holy_bindingheal' , targets: 2, aoe: false, instant: false, item: 32546 },
    { code: 'RenewHoly', name: 'Renew', specid: 2, base_ct: 1.5, base_mana: 7800, nticks: 4, time_tick: 3, Btick: 2690, ctick: 0.259, img: 'spell_holy_renew' , aoe: false, instant: true, item: 139 },
    { code: 'PWSHoly', name: 'Power Word: Shield', specid: 2, base_ct: 1.5, base_mana: 18300, B: 19428, c: 1.871, img: 'spell_holy_powerwordshield', aoe: false, instant: true, item: 17 },
    { code: 'PoMHoly', name: 'Prayer of Mending', specid: 2, base_ct: 1.5, base_mana: 10500, targets: 6, B: 5919, c: 0.571, img: 'spell_holy_prayerofmendingtga' , aoe: true, instant: true, item: 33076 },
    { code: 'PoHHoly', name: 'Prayer of Healing', specid: 2, base_ct: 2.5, base_mana: 13500, targets: 5, B: 6957, c: 0.671, img: 'spell_holy_prayerofhealing02', aoe: true, instant: false, item: 596 },
    { code: 'CascadeHoly', name: 'Cascade', specid: 2, base_ct: 1.5, base_mana: 27000, targets: 10, B: 10108, c: 0.975, img: 'ability_priest_cascade' , aoe: true, instant: true, item: 120785 },
    { code: 'CoHHoly', name: 'Circle of Healing', specid: 2, base_ct: 1.5, base_mana: 9600, targets: 5, B: 4840.5, c: 0.467, img: 'spell_holy_circleofrenewal', aoe: true, instant: true, item: 34861 },
    { code: 'DHHoly', name: 'Divine Hymn', specid: 2, base_ct: 8, base_mana: 18900, targets: 5*(4+ 0.1*3), B: 7987, c: 1.542, img: 'spell_holy_circleofrenewal', aoe: true, instant: false, item: 64843 },
    { code: 'LWCastHoly', name: 'Lightwell Cast', specid: 2, base_ct: 1.5, base_mana: 16200, targets: 15*3, B: 5735, c: 0.553, img: 'spell_holy_summonlightwell', aoe: true, instant: true, item: 724 },
    // { code: 'LWHealHoly', name: 'Lightwell Heal', specid: 2, base_ct: 1.5, base_mana: 16200, targets: 3, B: 5735, c: 0.553, img: 'spell_holy_summonlightwell', aoe: false, instant: true, item: 2050 },
    { code: 'HWSerenityHoly', name: 'Holy Word: Serenity', specid: 2, base_ct: 1.5, base_mana: 6000, targets: 1, B: 13442, c: 1.3, img: 'spell_holy_persuitofjustice', aoe: false, instant: true, item: 88684 },
    { code: 'HWSanctuaryHoly', name: 'Holy Word: Sanctuary', specid: 2, base_ct: 1.5, base_mana: 18900, targets: 6, Btick: 504, ctick: 0.583, nticks: 15, time_tick: 2, img: 'spell_holy_divineprovidence', aoe: true, instant: true, item: 88686 },
    // DRUID
    //
    { code: 'HealingTouch', name: 'Healing Touch', specid: 4, base_ct: 2.5, base_mana: 17340, B: 20130, c: 1.86, img: 'spell_nature_healingtouch' , aoe: false, instant: false, item: 5185 },
    { code: 'ForceOfNature', name: 'Force of Nature', specid: 4, base_ct: 1.5, base_mana: 0, Btick: 0.1*20130, ctick: 0.1*1.86, nticks: 6, time_tick: 2.5, duration: 15, targets: 3, img: 'ability_druid_forceofnature' , aoe: true, instant: true, item: 106737 },
    { code: 'Nourish', name: 'Nourish', specid: 4, base_ct: 2.5, base_mana: 6120, B: 6649.5, c: 0.614, img: 'ability_druid_nourish' , aoe: false, instant: false, item: 50464 },
    { code: 'Regrowth', name: 'Regrowth', specid: 4, base_ct: 1.5, base_mana: 17820, B: 10383.5, c: 0.958, Btick: 787, ctick: 0.073, nticks: 3, time_tick: 2, img: 'spell_nature_resistnature' , aoe: false, instant: false, item: 8936 }, 
    { code: 'Rejuv', name: 'Rejuvenation', specid: 4, base_ct: 1.5, base_mana: 9600, Btick: 4234, ctick: 0.392, nticks: 4, time_tick: 3, img: 'spell_nature_rejuvenation' , aoe: false, instant: true, item: 774 },
    { code: 'Lifebloom', name: 'Lifebloom', specid: 4, base_ct: 1.5, base_mana: 3540, B: 8150, c: 0.752, Btick: 621, ctick: 0.057, nticks: 15, time_tick: 1, img: 'inv_misc_herb_felblossom' , aoe: false, instant: true, item: 94447 },
    { code: 'WildGrowth', name: 'Wild Growth', specid: 4, base_ct: 1.5, base_mana: 13740, Btick: 990, ctick: 0.092, nticks: 7, time_tick: 1, targets: 5, img: 'ability_druid_flourish' , aoe: true, instant: true, item: 48438 },
    { code: 'Swiftmend', name: 'Swiftmend', specid: 4, base_ct: 1.5, base_mana: 6120, Btick: 13966, ctick: 1.29, nticks: 7, time_tick: 1, targets: 1, img: 'inv_relics_idolofrejuvenation' , aoe: true, instant: true, item: 18562 },
    { code: 'Mushrooms', name: 'Wild Mushrooms', specid: 4, base_ct: 4.5, base_mana: 6120, B: 2233, c: 0.207, targets: 3*7, img: 'druid_ability_wildmushroom_b' , aoe: true, instant: true, item: 102792 },
    { code: 'Tranquility', name: 'Tranquility', specid: 4, base_ct: 8, base_mana: 16260, B: 9037, c: 0.835, Btick: 1542, ctick: 0.142, nticks: 4, time_tick: 2, targets: 5, img: 'spell_nature_tranquility' , aoe: true, instant: false, item: 740 },
    //
    // PALLY
    { code: 'HolyLight', name: 'Holy Light', specid: 3, base_ct: 2.5, base_mana: 7560, B: 8868.5, c: 0.785, img: 'spell_holy_holybolt' , aoe: false, instant: false, item: 635 },
    { code: 'DivineLight', name: 'Divine Light', specid: 3, base_ct: 2.5, base_mana: 21600, B: 16817.5, c: 1.49, img: 'spell_holy_surgeoflight' , aoe: false, instant: false, item: 82326 },
    { code: 'FlashLight', name: 'Flash of Light', specid: 3, base_ct: 1.5, base_mana: 22680, B: 12606.5, c: 1.12, img: 'spell_holy_flashheal' , aoe: false, instant: false, item: 19750 },
    { code: 'HolyRadiance', name: 'Holy Radiance', specid: 3, base_ct: 2.5, base_mana: 21600, B: 5664, c: 0.675, targets: 1+6*0.5, img: 'spell_paladin_divinecircle' , aoe: true, instant: false, item: 82327 },
    { code: 'HolyShock', name: 'Holy Shock', specid: 3, base_ct: 1.5, base_mana: 9600, B: 9389, c: 0.833, img: 'spell_holy_searinglight' , aoe: false, instant: true, item: 20473 },
    { code: 'WoG', name: 'Word of Glory', specid: 3, base_ct: 1.5, base_mana: 0, B: (4803+5350)/2, c: 0.49, img: 'inv_helmet_96' , aoe: false, instant: true, item: 130551 },
    { code: 'LoD', name: 'Light of Dawn', specid: 3, base_ct: 1.5, base_mana: 0, B: ( 1550+1725)/2, c: 0.144, targets: 6, img: 'spell_paladin_lightofdawn' , aoe: true, instant: true, item: 85222 },
    { code: 'HolyPrism', name: 'Holy Prism Single', specid: 3, base_ct: 1.5, base_mana: 3240, B: (14523 + 17750)/2, c: 1.428, img: 'spell_paladin_holyprism' , aoe: false, instant: true, item: 114165 },
    { code: 'HolyPrismAoE', name: 'Holy Prism AoE', specid: 3, base_ct: 1.5, base_mana: 3240, B: (9794 + 11969)/2, c: 0.962, targets: 5, img: 'spell_paladin_holyprism' , aoe: true, instant: true, item: 114165 },
    { code: 'LightsHammer', name: 'Light\'s Hammer', specid: 3, base_ct: 1.5, base_mana: 0, B: (3268 + 3993)/2, c: 0.321, targets: 7*8, img: 'spell_paladin_lightshammer' , aoe: true, instant: true, item: 114158 },
    { code: 'Execution', name: 'Execution Sentence', specid: 3, base_ct: 1.5, base_mana: 0, B: 12989.4, c: 5.936, img: 'spell_paladin_executionsentence' , aoe: false, instant: true, item: 114157 },
    { code: 'EternalFlame', name: 'Eternal Flame', specid: 3, base_ct: 1.5, base_mana: 0, B: (5240+5837)/2, c: 0.49, Btick: 508, ctick: 0.0585, nticks: 10, time_tick: 3, img: 'inv_torch_thrown' , aoe: false, instant: true, item: 114163 }, 
    { code: 'SacredShield', name: 'Sacred Shield', specid: 3, base_ct: 1.5, base_mana: 0, Btick: 30, ctick: 1.17, nticks: 5, time_tick: 6, img: 'ability_paladin_blessedmending' , aoe: false, instant: true, item: 20925 }, 
    // SHAMAN
    { code: 'HW', name: 'Healing Wave', specid: 5, base_ct: 2.5, base_mana: 5940, B: (7790 + 8899)/2, c: 0.756, res_factor: 1, img: 'spell_nature_magicimmunity' , aoe: false, instant: false, item: 331 },
    { code: 'GHW', name: 'Greater Healing Wave', specid: 5, base_ct: 2.5, base_mana: 16140, B: (14172 + 16190)/2, c: 1.377, res_factor: 1, img: 'spell_nature_healingwavelesser' , aoe: false, instant: false, item: 77472 },
    { code: 'HSurge', name: 'Healing Surge', specid: 5, base_ct: 1.5, base_mana: 20580, B: (11687 + 13351)/2, c: 1.135, res_factor: 0.6, img: 'spell_nature_healingway' , aoe: false, instant: false, item: 8004 },
    { code: 'ChainHeal', name: 'Chain Heal', specid: 5, base_ct: 2.5, base_mana: 13500, B: (5905 + 6745 )/2, c: 0.573, targets: 1+0.3*(1+0.3*(1+0.3)), res_factor: 0.333*4, img: 'spell_nature_healingway' , aoe: true, instant: false, item: 1064 },
    { code: 'Riptide', name: 'Riptide', specid: 5, base_ct: 1.5, base_mana: 9600, B: 3735, c: 0.339, Btick: 1764, ctick: 0.16, nticks: 6, time_tick: 3, res_factor: 0.6, img: 'spell_nature_riptide' , aoe: false, instant: true, item: 61295 }, 
    { code: 'UnleashLife', name: 'Unleash Life', specid: 5, base_ct: 1.5, base_mana: 4920, B: (3028 + 3280)/2, c: 0.286, res_factor: 0.6, img: 'spell_shaman_unleashweapon_life' , aoe: false, instant: true, item: 73685 },
    { code: 'HST', name: 'Healing Stream Totem', specid: 5, base_ct: 1.5, base_mana: 4100, Btick: 31, ctick: 0.0827+0.3124, nticks: 15/2, time_tick: 2, duration: 15, img: 'inv_spear_04' , aoe: false, instant: true, item: 5394 },
    { code: 'HTT', name: 'Healing Tide Totem', specid: 5, base_ct: 1.5, base_mana: 4800, Btick: 4932, ctick: 0.484, targets: 5, nticks: 11/2, time_tick: 2, duration: 11, img: 'ability_shaman_healingtide', aoe: true, instant: true, item: 108280 },
    { code: 'HealingRain', name: 'Healing Rain', specid: 5, base_ct: 2, base_mana: 25860, Btick:  (1983 + 2358)/2, ctick: 0.197, targets: 6, nticks: 10/2, time_tick: 2, duration: 10, img: 'spell_nature_giftofthewaterspirit', aoe: true, instant: false, item: 73920 },
    { code: 'Earthliving', name: 'Earthliving', specid: 5, base_ct: 1.5, base_mana: 0, Btick:  3648, ctick: 0.083, nticks: 4, time_tick: 3, img: 'spell_shaman_giftearthmother', aoe: false, instant: true, item: 51945 },
    { code: 'EarthShield', name: 'Earth Shield', specid: 5, base_ct: 1.5, base_mana: 11400, B: 2043, c: 0.13, targets: 9, img: 'spell_nature_skinofearth', aoe: false, instant: true, item: 974 },
    // MONK
    //
    { code: 'SoothingMist', name: 'Soothing Mist', specid: 6, base_ct: 1, base_mana: 3000, B: (20552 + 23872)/2/8, c: 0.1792, targets: 2, img: 'ability_monk_soothingmists', aoe: false, instant: true, item: 125953 },
    { code: 'SurgingMist', name: 'Surging Mist', specid: 6, base_ct: 1.5, base_mana: 24000, B: (15949 + 18535)/2 , c: 1.8, img: 'ability_monk_surgingmist', aoe: false, instant: true, item: 116995 },
    { code: 'EnvelopingMist', name: 'Enveloping Mist', specid: 6, base_ct: 1.5, base_mana: 0, Btick: (10128 + 11769)/2 , ctick: 0.665, nticks: 6, time_ticks: 1, img: 'spell_shaman_spiritlink', aoe: false, instant: true, item: 132120 },
    { code: 'RenewingMist', name: 'Renewing Mist', specid: 6, base_ct: 1.5, base_mana: 13800, Btick: 3236, ctick: 0.16, nticks: 6, time_ticks: 3, targets: 3, img: 'ability_monk_renewingmists', aoe: true, instant: true, item: 119611 },
    { code: 'LifeCocoon', name: 'Life Cocoon', specid: 6, base_ct: 1.5, base_mana: 13500, B: 39958, c: 5.5, img: 'ability_monk_chicocoon', aoe: false, instant: true, item: 116849 },
    { code: 'Uplift', name: 'Uplift', specid: 6, base_ct: 1.5, base_mana: 0, B: (7210 + 8379)/2, c: 0.68, img: 'ability_monk_uplift', targets: 8, aoe: true, instant: true, item: 116670 },
    { code: 'Revival', name: 'Revival', specid: 6, base_ct: 1.5, base_mana: 21000, B: 13684, c: 5, img: 'spell_shaman_blessingofeternals', targets: 10, aoe: true, instant: true, item: 115310 },
 ];

Spell = can.Model({
    findAll: 'GET /spells',
    findOne: 'GET /spell/{id}',
    create  : 'POST /spells',
    update  : 'PUT /spell/{id}',
    destroy : 'DELETE /spell/{id}'
},{
    fct: function(delta) { return(this.base_ct/(1+this.spec.fhastep(delta))); },
    fct_hp_pally: function(delta) {return((this.base_ct + (this.spec.cs_to_hp? 1.5 : 0) * (this.spec.one_hp ? 1 : 3) )/(1+this.spec.fhastep(delta)));},
    fmana: function(delta) { return(this.base_mana); },
    fmana_instant_priest: function(delta) { return(this.base_mana * (this.spec.inner_fire ? 1 : 0.85)) },
    fmana_shaman_resurgence: function(delta) {
        return(Math.round(this.base_mana - (8849*0.01*this.spec.fcrit(delta)*this.res_factor * (this.spec.resurgence ? 1 : 0))));
    },
    fmana_hp_pally: function(delta) {
        return((this.spec.cs_to_hp? 9000 : 0) * (this.spec.one_hp ? 1 : 3));
    },
    fdirect: function(delta) { return((this.B+this.c*this.spec.fsp(delta)) * (this.targets || 1) ); },
    fnticks: function(delta) { return(Math.round((this.nticks)*(1+this.spec.fhastep(delta)))); },
    fnticks_shaman_aoe: function(delta) {return(1+Math.ceil(this.duration*(1+this.spec.fhastep(delta))/this.time_tick));},
    fhot: function(delta) { return((this.Btick+this.ctick*this.spec.fsp(delta)) * (this.targets || 1) * this.fnticks(delta) ); },
    fbase: function(delta) { return((this.nticks ? this.fhot(delta) : this.fdirect(delta))); },
    fbase_disc: function(delta) {return((this.nticks ? this.fhot(delta) : this.fdirect(delta))*(this.spec.grace ? 1.3 : 1)*(this.spec.archangel ? 1.25 : 1)); },
    fbase_disc_no_archangel: function(delta) {return((this.nticks ? this.fhot(delta) : this.fdirect(delta))*(this.spec.grace ? 1.3 : 1)); },
    fbase_holy_sth: function(delta) { return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) * (this.spec.serenity ? 1.25 : 1)); },
    fbase_holy_aoe: function(delta) { return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) * (this.spec.sanctuary ? 1.25 : 1)); },
    fbase_pally: function(delta) {return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
        1.05 * 1.25); },
    fbase_pally_hp: function(delta) {return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) *
            1.05 * 1.25 * (this.spec.one_hp ? 1 : 3)); },
    fbase_shaman: function(delta) { return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) * 1.25); },
    fheal: function(delta) {
        // The average heal amount, including crits and mastery.
        return(this.fbase(delta)*(1+this.spec.fcritp(delta))*(1+ this.spec.fmastp(delta)));
    },
    fheal_pally: function(delta) {
        return(this.fbase(delta)*(1+this.spec.fcritp(delta))*(1+ (this.spec.bol ? 0.5 : 0) + this.spec.fmastp(delta)));
    },
    fheal_shaman: function(delta) {
        return(this.fbase(delta)*(1+this.spec.fcritp(delta))*this.spec.fmast_factor(delta));
    },
    fheal_shaman_aa: function(delta, crit) {
        return(this.fbase(delta)*(1+this.spec.fmast_factor(delta)) *
            (1+(crit || this.spec.fcritp(delta))+0.6*(crit || this.spec.fcritp(delta))*this.spec.fmast_factor(delta))
    );},
    fheal_disc: function(delta) {
        var da = 0.5;
        return(this.fbase(delta)*(1+this.spec.fcritp(delta)*(1+2*da+2*da*this.spec.fmastp(delta))));
    },
    fheal_spirit_shell: function(delta) {
return(this.fbase(delta)*(1+this.spec.fmastp(delta))*(1+this.spec.fcritp(delta))*(1+ 0.3*this.spec.fcritp(delta)));
    },
    fheal_sth_holy: function(delta) {
        return(this.fbase(delta)*(1+(this.spec.serenity ? 0.25 : 0) + this.spec.fcritp(delta))*(1+this.spec.fmastp(delta)));
    },
    fheal_living_seed: function(delta) {
        return(this.fbase(delta)*(1+this.spec.fmastp(delta))*(1+1.6*this.spec.fcritp(delta)));
    },
    fhps: function(delta) { return(this.fheal(delta)/this.fct(delta)); },
    fhpm: function(delta) { return(this.fheal(delta)/this.fmana(delta)); },
    fhpm_nomana: function(delta) { return(0); },
    fhpm_hp_pally_nomana: function(delta) { return((this.spec.cs_to_hp ? (this.fheal(delta)/this.fmana()) : 0)); },
    fmps: function(delta) { return(this.fmana(delta)/this.fct(delta)); },
    val_update: function(delta) {
        this.attr('ct', Math.round(this.fct()*100)/100);
        this.attr('mana', Math.round(this.fmana()));
        this.attr('base_heal', Math.round(this.fbase()));
        this.attr('heal', Math.round(this.fheal()));
        this.attr('hps', Math.round(this.fhps()));
        this.attr('hpm', Math.round(100*this.fhpm())/100);
        this.attr('mps', Math.round(this.fmps()));
    }
});

Spell.List = can.Model.List({
    val_update: function(spec) {
        this.each(function(spell) {
            // If no spec specified, update all spells
            if (!spec || spell.specid == spec.id) {
                spell.val_update();
            }
        })
        $(this).trigger('ready');
    },
    find: function(code) {
        var ret;
        this.each(function(spell) { if (spell.code == code) {ret=spell}; });
        return ret;
    }
});

spellStore = can.fixture.make(SPELLS.length, function(i) {
    SPELLS[i].id = i;
    return(SPELLS[i]);
});
can.fixture('GET /spells', spellStore.findAll);
can.fixture('GET /spell/{id}', spellStore.findOne);
can.fixture('POST /spells', spellStore.create);
can.fixture('PUT /spell/{id}', spellStore.update);
can.fixture('DELETE /spell/{id}', spellStore.destroy);

Spells = can.Control({
    init: function(element, options) {
        var self = this;
        var spells = options.spells;
        var specs = options.specs;
        spells.each(function(spell) {
            specs.each(function(spec) {
                if (spec.id == spell.specid) {
                    spell.attr('spec', spec).save();
                }
            });
        });
        can.Observe.startBatch();
        spells.each(function(sp) {
            sp.mask = (1 << sp.specid >> 1) | (1 << (sp.aoe ? 6 : 7)) | (1 << (sp.instant ? 8 : 9));  // Used for filtering
            if (sp.specid == 1) {
                // General Disc spell setup
                sp.fbase = sp.fbase_disc;   // To account for Grace choice
                sp.fheal = sp.fheal_disc;   // To account for DA formula
            } else if (sp.specid == 3) {
                // General Pally spell setup
                sp.fbase = sp.fbase_pally;
                sp.fheal = sp.fheal_pally;
            } else if (sp.specid == 5) {
                // General Shaman spell setup
                sp.fheal = sp.fheal_shaman;
            }
        });
        // DISC Spells setup
        var sp = spells.find('RenewDisc');
            sp.fmana = sp.fmana_instant_priest;
            sp.fnticks = can.proxy(function(delta) { return(Math.round((this.nticks- (this.spec.attr('glyph_renew_disc') ? 1 : 0))*(1+this.spec.fhastep(delta))))}, sp); 
            sp.fhot = can.proxy(function(delta) { return((this.spec.attr('glyph_renew_disc') ? (1+1/3) : 1) * (this.Btick+this.ctick*this.spec.fsp(delta)) * (this.targets || 1) * this.fnticks(delta) );}, sp);
        sp = spells.find('CascadeDisc');
            sp.fmana = sp.fmana_instant_priest;
        sp = spells.find('PWSDisc');
            sp.fmana = sp.fmana_instant_priest;
            sp.fbase = can.proxy(function(delta) {return(this.fdirect(delta))*(this.spec.attr('archangel') ? 1.25 : 1);}, sp);
            sp.fheal = can.proxy(function(delta) {return(this.fbase(delta) * (1+this.spec.fmastp(delta)));},sp);
        sp = spells.find('PoMDisc');
            sp.fmana = sp.fmana_instant_priest;
            sp.fdirect  = can.proxy(function(delta) { return((this.B+this.c*this.spec.fsp(delta)) * (this.spec.attr('glyph_pom_disc') ? 5.6 : 6) ); }, sp);
        sp = spells.find('PoHDisc');
            sp.fheal = can.proxy(function(delta) { var da = 0.5; return(this.fbase(delta) * (1+this.spec.fcritp(delta)) * (1+da*(1+this.spec.fmastp(delta))) );}, sp);
        sp = spells.find('HealSSDisc');
            sp.fheal = sp.fheal_spirit_shell;
        sp = spells.find('FhealDisc');
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_disc') ? 0.9 : 1)))}, sp);
        sp = spells.find('FhealSSDisc');
            sp.fheal = sp.fheal_spirit_shell;
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_disc') ? 0.9 : 1)))}, sp);
        sp = spells.find('GhealSSDisc');
            sp.fheal = sp.fheal_spirit_shell;
        sp = spells.find('PoHSSDisc');
            sp.fheal = can.proxy(function(delta) { return(this.fbase(delta) * (1+this.spec.fcritp(delta)) * (1+this.spec.fmastp(delta)) * 1.3 );}, sp);
        sp = spells.find('HolyFireDisc');
            sp.fbase = can.proxy(function(delta) {
                return((this.fhot(delta) + this.fdirect(delta)) *
                    (this.spec.grace ? 1.3 : 1)*(this.spec.archangel ? 1.25 : 1) * (1+5*0.04)); 
            }, sp);
            sp.fmana = can.proxy(function(delta) { return(this.base_mana * (1-5*0.06))}, sp)
        sp = spells.find('SmiteDisc');
            sp.fbase = can.proxy(function(delta) {
            return(this.fdirect(delta) * (this.spec.grace ? 1.3 : 1)*(this.spec.archangel ? 1.25 : 1) * (1+5*0.04) * 1.2); 
        }, sp);
            sp.fmana = can.proxy(function(delta) { return(this.base_mana * (1-5*0.06))}, sp)
        sp = spells.find('PenanceDisc');
            sp.fbase = can.proxy(function(delta) {
                return(this.fdirect(delta) * (this.spec.grace ? 1.3 : 1)*(this.spec.archangel ? 1.25 : 1) * (1+5*0.04) * 1.2); 
            }, sp);
            sp.fmana = can.proxy(function(delta) { return(this.base_mana * (1-5*0.06))}, sp)
        // END DISC Spells setup
        // HOLY Spells setup
        $.each(['HealHoly', 'FhealHoly', 'GhealHoly', 'BhealHoly'], function(i, spname) {
            sp = spells.find(spname);
            sp.fbase = sp.fbase_holy_sth;
            sp.fheal = sp.fheal_sth_holy;
        });
        sp = spells.find('FhealHoly');
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_holy') ? 0.9 : 1)))}, sp);
        $.each(['PoHHoly', 'DHHoly', 'CoHHoly', 'PoMHoly', 'HWSanctuaryHoly'], function(i, spname) {
            sp = spells.find(spname);
            sp.fbase = sp.fbase_holy_aoe;
        });
        sp = spells.find('HWSerenityHoly');
            sp.fbase = sp.fbase_holy_sth;
            sp.fmana = sp.fmana_instant_priest;
        sp = spells.find('PoMHoly');
            sp.fmana = sp.fmana_instant_priest;
            sp.fdirect  = can.proxy(function(delta) { return((this.B+this.c*this.spec.fsp(delta)) * (this.spec.attr('glyph_pom_holy') ? 5.6 : 6) ); }, sp);
        sp = spells.find('RenewHoly');
            sp.fmana = sp.fmana_instant_priest;
            sp.fnticks = can.proxy(function(delta) { return(Math.round((this.nticks- (this.spec.attr('glyph_renew_holy') ? 1 : 0))*(1+this.spec.fhastep(delta))))}, sp); 
            sp.fhot = can.proxy(function(delta) { return((this.spec.attr('glyph_renew_holy') ? (1+1/3) : 1) * (this.Btick+this.ctick*this.spec.fsp(delta)) * (this.targets || 1) * this.fnticks(delta) );}, sp);
            sp.fbase = can.proxy(function(delta) { return(this.fhot(delta) * 1.15 * 1.15 * (this.spec.sanctuary ? 1.25 : 1));}, sp);
            sp.fct = can.proxy(function(delta) { return 1;}, sp);
        sp = spells.find('PWSHoly');
            sp.fmana = sp.fmana_instant_priest;
            sp.fheal = sp.fbase;
        sp = spells.find('LWCastHoly');
            sp.fmana = sp.fmana_instant_priest;
            sp.fheal = sp.fbase;
        // sp = spells.find('LWHealHoly');
        //     sp.fheal = sp.fbase;
        //     sp.fmana = function() {return NaN};
        //     sp.fhpm = function() {return NaN};
        //END HOLY Spells setup
        //DRUID Spells setup
        sp = spells.find('Nourish');
            sp.fct = can.proxy(function(delta) { return((this.base_ct - (this.spec.attr('glyph_rejuv') ? 0.5 : 0))/(1+this.spec.fhastep(delta))); }, sp);
            sp.fbase = can.proxy(function(delta) { return(this.fdirect(delta) * 1.2);}, sp);
            sp.fheal = sp.fheal_living_seed;
        sp = spells.find('HealingTouch');
            sp.fheal = sp.fheal_living_seed;
        sp = spells.find('Regrowth');
            sp.fbase = can.proxy(function(delta) {return(this.fdirect(delta) + (this.spec.attr('glyph_regrowth') ? 0 : this.fhot(delta)));}, sp);
            sp.fheal = can.proxy(function(delta) { 
                var crit = (this.spec.attr('glyph_regrowth') ? 1 : (Math.min(this.spec.fcritp(delta) + 0.6, 1)));
                return((1+this.spec.fmastp(delta))*(this.fbase(delta)*(1+crit) +
                                            this.fdirect(delta) * 0.6 * crit)
                ); 
            }, sp);
        sp = spells.find('Rejuv');
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_druid') ? 0.9 : 1)))}, sp);
            sp.fct = can.proxy(function(delta) {return(1);}, sp);
            sp.fnticks = can.proxy(function(delta) {return(Math.round(1+this.nticks*(1+this.spec.fhastep(delta))));}, sp);
        sp = spells.find('Lifebloom');
            sp.fnticks = can.proxy(function(delta) {return(Math.round((this.nticks-(this.spec.attr('glyph_blooming') ? 5 : 0))*(1+this.spec.fhastep(delta))));}, sp);
            sp.fdirect = can.proxy(function(delta) {return((this.B+this.c*this.spec.fsp(delta))*(this.spec.attr('glyph_blooming') ? 1.5 : 1));}, sp);
            sp.fbase = can.proxy(function(delta) {return(this.fdirect(delta) + this.fhot(delta));}, sp);
        sp = spells.find('WildGrowth');
            sp.fhot = can.proxy(function(delta) {
                return((this.Btick+this.ctick*this.spec.fsp(delta)) * 
                        (1+this.spec.fmastp(delta)) * (1+this.spec.fcritp(delta)) *
                        (5+(this.spec.attr('glyph_wild_growth') ? 1 : 0) +
                        (this.spec.attr('incarnation') ? 2 : 0)) *
                    this.fnticks(delta) );
            }, sp);
        sp = spells.find('Swiftmend');
            sp.fnticks = can.proxy(function(delta) {return(
                1 + 0.12* 3 * Math.round((this.nticks)*(1+this.spec.fhastep(delta)))
            );}, sp);
            sp.fheal = can.proxy(function(delta) {return( (1+this.spec.fmastp(delta)) *
                (
                    this.fbase(delta) * (1+this.spec.fcritp(delta))  +
                    (this.Btick + this.ctick*this.spec.fsp(delta)) * 0.6 * this.spec.fcritp(delta)
                )
            )}, sp);
        sp = spells.find('Mushrooms');
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta)));
            }, sp);
        sp = spells.find('Tranquility');
            sp.fheal = can.proxy(function(delta) {
                var nticks = this.fnticks(delta);
                return((this.fdirect(delta) * nticks + 
                            (-3 + 3*nticks + 3*nticks) * 
                            (this.Btick + this.ctick*this.spec.fsp(delta)) *
                            this.targets
                        ) * (1+this.spec.fmastp(delta)) * (1+this.spec.fcritp(delta))
                );
            }, sp);
        sp = spells.find('ForceOfNature');
            sp.fnticks = sp.fnticks_shaman_aoe;
            sp.fhpm = sp.fhpm_nomana;
        //END DRUID Spells setup
        // PALLY Spells setup
        sp = spells.find('HolyLight');
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta))*
                    (1+ (this.spec.bol ? 1 : 0) + this.spec.fmastp(delta)));
            }, sp);
        sp = spells.find('HolyShock');
            sp.fheal = can.proxy(function(delta) { 
                var crit = 0.25 + this.spec.fcritp(delta);
                return((1+ (this.spec.bol ? 0.5 : 0) + this.spec.fmastp(delta))*this.fbase(delta)*(1+crit) *
                        (this.spec.attr('daybreak') ? 2 : 1)); 
            }, sp);
        sp = spells.find('WoG');
            sp.fct = sp.fct_hp_pally;
            sp.fmana = sp.fmana_hp_pally;
            sp.fhpm = sp.fhpm_hp_pally_nomana;
            sp.fbase = sp.fbase_pally_hp
        sp = spells.find('HolyRadiance');
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_pally') ? 0.9 : 1)))}, sp);
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta))*
                        (1+ (this.spec.bol ? 0.15 : 0) + this.spec.fmastp(delta)));
            }, sp);
        sp = spells.find('LoD');
            sp.fct = sp.fct_hp_pally;
            sp.fmana = sp.fmana_hp_pally;
            sp.fhpm = sp.fhpm_hp_pally_nomana;
            sp.fbase = sp.fbase_pally_hp;
            sp.fdirect = can.proxy(function(delta) { return((this.B+this.c*this.spec.fsp(delta)) *
                 (this.targets - (this.spec.attr('glyph_lod') ? 2 : 0)) *
                 (this.spec.attr('glyph_lod') ? 1.25 : 1)); }, sp);
            sp.fheal = can.proxy(function(delta) {
                 return(this.fbase(delta)*(1+this.spec.fcritp(delta))*
                        (1+ (this.spec.bol ? 0.15 : 0) + this.spec.fmastp(delta)));
            }, sp);
        sp = spells.find('LightsHammer');
            sp.fhpm = sp.fhpm_nomana;
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta)) * (1+ (this.spec.bol ? 0.15 : 0)));
            }, sp);
        sp = spells.find('Execution');
            sp.fhpm = sp.fhpm_nomana;
        sp = spells.find('EternalFlame');
            sp.fct = sp.fct_hp_pally;
            sp.fmana = sp.fmana_hp_pally;
            sp.fhpm = sp.fhpm_hp_pally_nomana;
            sp.fbase = can.proxy(function(delta) {return((this.fhot(delta) + this.fdirect(delta)) *
                1.05 * 1.25 * (this.spec.one_hp ? 1 : 3)); }, sp);   
        sp = spells.find('SacredShield');
            sp.fhpm = sp.fhpm_nomana;
            sp.fbase = sp.fhot;
        sp = spells.find('HolyPrism');
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta))*
                    (1+ (this.spec.bol ? 0.15 : 0) + this.spec.fmastp(delta)));
            }, sp);
        sp = spells.find('HolyPrismAoE');
            sp.fheal = can.proxy(function(delta) {
                return(this.fbase(delta)*(1+this.spec.fcritp(delta))*
                    (1+ (this.spec.bol ? 0.15 : 0) + this.spec.fmastp(delta)));
            }, sp);
        // END PALLY Spells setup
        //
        // SHAMAN Spells setup
        sp = spells.find('HW');
            sp.fmana = sp.fmana = sp.fmana_shaman_resurgence;
            sp.fheal = sp.fheal_shaman_aa;
            sp.fct = can.proxy(function(delta) {
                return(this.base_ct/(1+this.spec.fhastep(delta)) * (this.spec.attr('tidal_waves') ? 0.7 : 1));
            }, sp);
        sp = spells.find('GHW');
            sp.fmana = can.proxy(function(delta) { return(Math.round(this.base_mana * (this.spec.attr('t14_2p_shaman') ? 0.9 : 1) - (8849*this.spec.fcritp(delta)*this.res_factor * (this.spec.resurgence ? 1 : 0))))}, sp);
            sp.fheal = sp.fheal_shaman_aa;
            sp.fct = can.proxy(function(delta) {
            return(this.base_ct/(1+this.spec.fhastep(delta)) * (this.spec.attr('tidal_waves') ? 0.7 : 1));
            }, sp);
        sp = spells.find('HSurge');
            sp.fmana = can.proxy(function(delta) {
                var crit = this.spec.fcritp(delta) + (this.spec.attr('tidal_waves') ? 0.3 : 0);
                return(Math.round(this.base_mana-(crit*8849*0.6 *
                        (this.spec.attr('resurgence') ? 1 : 0)))); }, sp);
            sp.fheal = can.proxy(function(delta) {
                return(this.fheal_shaman_aa(delta, this.spec.fcritp(delta) + (this.spec.attr('tidal_waves') ? 0.3 : 0)));
            }, sp);
        sp = spells.find('ChainHeal');
            sp.fmana = sp.fmana_shaman_resurgence;
            sp.fbase = can.proxy(function(delta) { 
                return((this.nticks ? this.fhot(delta) : this.fdirect(delta)) * 1.25 *
                (this.spec.attr('chain_heal_riptide') ? 1.25 : 1)); 
            }, sp);
        sp = spells.find('Riptide');
            sp.fmana = sp.fmana_shaman_resurgence;
            sp.fdirect = can.proxy(function(delta) { return((this.B+this.c*this.spec.fsp(delta))*
                        (this.spec.attr('glyph_riptide') ? 0.1 : 1));
            }, sp);
            sp.fbase = can.proxy(function(delta) { return(this.fhot(delta) + this.fdirect(delta)); }, sp);
            sp.fheal = sp.fheal_shaman_aa;
        sp = spells.find('UnleashLife');
            sp.fmana = sp.fmana_shaman_resurgence;
            sp.fheal = sp.fheal_shaman_aa;
        sp = spells.find('HST');
            sp.fnticks = sp.fnticks_shaman_aoe;
        sp = spells.find('HTT');
            sp.fnticks = sp.fnticks_shaman_aoe;
        sp = spells.find('HealingRain');
            sp.fnticks = can.proxy(function(delta) {
                return(1+Math.round((this.nticks)*(1+this.spec.fhastep(delta))));
            }, sp);
        sp = spells.find('Earthliving');
            sp.fhpm = sp.fhpm_nomana;
        //  END SHAMAN Spells setup
        //
        // MONK Spells setup
        sp = spells.find('EnvelopingMist');
            sp.fhpm = sp.fhpm_nomana;
        sp = spells.find('SurgingMist');
            sp.fmana = can.proxy(function(delta) { return(this.base_mana * (this.spec.attr('t14_2p_monk') ? 0.9 : 1))}, sp);
        sp = spells.find('Uplift');
            sp.fhpm = sp.fhpm_nomana;
        can.Observe.stopBatch();
        // Call View
        self.element.html(can.view('views/spells.ejs', {spells: spells}));
    },
    '{Spell} updated': function(ev, a, spell) {},
    '{Spec} updated': function(ev, a, spec) { this.options.spells.val_update(spec); },
});

})();