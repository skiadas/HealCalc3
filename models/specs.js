(function() {
SPECS = [
    {id: 1 , name: 'Disc', icon: 'spell_holy_powerwordshield_large.jpg', active: true, bcrit: 1.235},
    {id: 2 , name: 'Holy', icon: 'spell_holy_guardianspirit_large.jpg', active: false, bcrit: 1.235},
    {id: 3 , name: 'Pally', icon: 'spell_holy_holybolt_large.jpg', active: false, bcrit: 3.335 },
    {id: 4 , name: 'Druid', icon: 'spell_nature_healingtouch_large.jpg', active: false, bcrit: 1.85},
    {id: 5 , name: 'Shaman', icon: 'spell_nature_healingwavegreater_large.jpg', active: false, bcrit: 1.235},
    {id: 6 , name: 'Monk', icon: 'spell_monk_mistweaver_spec_large.jpg', active: false, bcrit: 2.19}
];

Spec = can.Model({
    findAll : "GET /specs",
    findOne : "GET /spec/{id}",
    create  : 'POST /specs',
    update  : 'PUT /spec/{id}',
    destroy : 'DELETE /spec/{id}'
},{
    mastery_factor: 2.5,
    fint: function() { 
        return (Math.round((this.attr('buffs.buff_stats') ? 1.05 : 1)*
                            this.attr('stats.bint')));
    },
    fcrit: function() {
        return (Math.round(((this.attr('stats.bcrit') /600 +
                 this.attr('int') * 0.0003951) +
                 + this.attr('bcrit') +
                 (this.attr('buffs.buff_crit') ? 5 : 0))*100 )/100  );
    },
    fmast: function() {
        return (Math.round((((1* this.attr('stats.bmast') +
                            (this.attr('buffs.buff_mastery') ? 3000 : 0) )/600 +8)  *
                    this.mastery_factor) * 100) /100);
    },
    fhaste: function() {
        return (Math.round( (((1+ this.attr('stats.bhaste') /425 / 100) *
                            (this.attr('buffs.buff_haste') ? 1.05 : 1)) -1) * 100 * 100
                )/ 100);
    },
    fsp: function() {
        return (Math.round(((this.attr('int')-10 + this.attr('stats.bweapon')) * 
                            (this.attr('buffs.buff_sp') ? 1.05 : 1))
        ));
    },
    fmast_heal_factor: function() {
        return(1+this.mastp);  // Specs need to override this
    },
    val_update: function() {
        this.attr('int', this.fint());
        this.attr('crit', this.fcrit());
        this.attr('critp', 0.01*this.fcrit());
        this.attr('mast', this.fmast());
        this.attr('mastp', 0.01*this.mast);
        this.attr('mast_heal_factor', this.fmast_heal_factor());
        this.attr('haste', this.fhaste());
        this.attr('hastep', 0.01*this.haste);
        this.attr('sp', this.fsp()).save();
    }
});

Spec.List = can.Model.List({
    val_update: function() {
        var self = this;
        self.each(function(spec) {
            spec.val_update();
        });
    }
});
// can.fixture("/specs", "fixtures/spec.json");
specStore = can.fixture.make(SPECS.length, function(i) {return(SPECS[i]);});
can.fixture('GET /specs', specStore.findAll);
can.fixture('GET /spec/{id}', specStore.findOne);
can.fixture('POST /specs', specStore.create);
can.fixture('PUT /spec/{id}', specStore.update);
can.fixture('DELETE /spec/{id}', specStore.destroy);



Specs = can.Control({
    init: function(element, options) {
        var self = this;
        specs = options.specs;
        buffs = options.buffs[0];
        stats = options.stats[0];
        specs.each(function(spec) {
            spec.attr('buffs', buffs);
            spec.attr('stats', stats);
        });
        specs.val_update();
        self.element.html(can.view('views/specs.ejs', {specs: specs, buffs: buffs, stats: stats}));
        $('li', self.element).addClass('expand').children('a').click();
    },
    // 'img click': function(img, event) {
    //     var spec = img.closest('div.spec').data('spec');
    //     spec.attr('active', spec.attr('active') ? false : true).save();
    // },
    'select change': function(el, ev) {
       var spec = el.closest('div.spec').data('spec');
       spec.attr('inner_fire', spec.attr('inner_fire') ? false : true).save();
       this.options.specs.val_update();
    },
    'input change': function(el, ev) {
        var attr = el.attr('name');
        var val = (el.attr('type') == 'checkbox') ? (el.attr('checked') ? true : false) : el.attr('value');
        el.closest('div.spec').data('spec').attr(attr, val).save();
        this.options.specs.val_update();
    },
    'a click': function(el, ev) {
        el.closest('li').toggleClass('expand collapse');
        el.closest('li').next('div').toggle();
    },
    // '{Spec} updated': function() { this.options.specs.val_update(); },
    '{Buff} updated': function() { this.options.specs.val_update(); },
    '{Stat} updated': function() { this.options.specs.val_update(); }
});

})();
