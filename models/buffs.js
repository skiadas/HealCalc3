(function() {
// Currently the BUFFS array is only used to construct BUFFSSHORT. Everything else moved to the view. Remove in the future
BUFFS = [
   {id: 1, name: 'buff_stats', val: true, img: 'spell_magic_greaterblessingofkings_medium', txt: '+5% to stats' },
   {id: 2, name: 'buff_mastery', val: true, img: 'images/spell_holy_greaterblessingofkings_medium.jpg', txt: '+5 to mastery' },
   {id: 3, name: 'buff_haste', val: true, img: 'spell_nature_forceofnature_medium', alt: '+5% haste' },
   {id: 4, name: 'buff_crit', val: true, img: 'spell_nature_unyeildingstamina_medium', alt: '+5% crit chance'},
   {id: 5, name: 'buff_sp', val: false, img: 'spell_fire_totemofwrath_medium', alt: '+10% spellpower'},
   {id: 6, name: 'buff_armor', val: true, img: 'ability_warrior_sunder_medium', alt: '-12% armor'},
   {id: 7, name: 'buff_spelldam', val: false, img: 'warlock_curse_shadow_medium', alt: '+5% spell dam'}
];
BUFFSSHORT = {id: 1};
for (k in BUFFS) { BUFFSSHORT[BUFFS[k].name] = BUFFS[k].val; };

Buff = can.Model({
    findAll: "GET /buffs",
    findOne: "GET /buff/{id}",
    create  : 'POST /buffs',
    update  : 'PUT /buff/{id}',
    destroy : 'DELETE /buff/{id}'
},{});

buffStore = can.fixture.make(1, function(i) { return(BUFFSSHORT); });
can.fixture('GET /buffs', buffStore.findAll);
can.fixture('GET /buff/{id}', buffStore.findOne);
can.fixture('POST /buffs', buffStore.create);
can.fixture('PUT /buff/{id}', buffStore.update);
can.fixture('DELETE /buff/{id}', buffStore.destroy);

Buff.List = can.Model.List({});

Buffs = can.Control({
    init: function(element, options) {
        var self = this;
        var buffs = options.buffs;
        self.element.html(can.view('views/buffs.ejs', {buffs: buffs}));
    },
    'img click': function(el, ev) {
        var buffs = el.closest('div').data('buffs');
        var attr = el.attr('id');
        buffs.attr(attr, buffs.attr(attr) ? false : true).save();
    },
})
})();