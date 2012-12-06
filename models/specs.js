(function() {
SPECS = [
    {id: 1 , name: 'Disc', icon: 'spell_holy_powerwordshield_large.jpg', active: true, bcrit: 1.235},
    {id: 2 , name: 'Holy', icon: 'spell_holy_guardianspirit_large.jpg', active: false, bcrit: 1.235},
    {id: 3 , name: 'Pally', icon: 'spell_holy_holybolt_large.jpg', active: false, bcrit: 3.335 },
    {id: 4 , name: 'Druid', icon: 'spell_nature_healingtouch_large.jpg', active: false, bcrit: 1.85},
    {id: 5 , name: 'Shaman', icon: 'spell_nature_healingwavegreater_large.jpg', active: false, bcrit: 1.235},
    {id: 6 , name: 'Monk', icon: 'spell_monk_mistweaver_spec_large.jpg', active: false, bcrit: 2.19}
];

SPECS[0].bpoints_info = [
    { name: 'Renew', img: 'spell_holy_renew', nticks: 4, time_tick: 3, hfactor: 1 },
    { name: 'Renew BT', img: 'spell_holy_renew', nticks: 4, time_tick: 3, hfactor: 1.15 },
    { name: 'Glyphed Renew', img: 'spell_holy_renew', nticks: 3, time_tick: 3, hfactor: 1 },
    { name: 'Glyphed Renew BT', img: 'spell_holy_renew', nticks: 3, time_tick: 3, hfactor: 1.15 },
    { name: 'Holy Fire', img: 'spell_holy_searinglight', nticks: 7, time_tick: 1, hfactor: 1 },
    { name: 'Holy Fire BT', img: 'spell_holy_searinglight', nticks: 7, time_tick: 1, hfactor: 1.15 },
];
SPECS[1].bpoints_info = [
    { name: 'Renew', img: 'spell_holy_renew', nticks: 4, time_tick: 3 },
    { name: 'Glyphed Renew', img: 'spell_holy_renew', nticks: 3, time_tick: 3 },
    { name: 'HW:Sanc', img: 'spell_holy_divineprovidence', nticks: 15, time_tick: 2 },
    { name: 'LW/LS', img: 'spell_holy_summonlightwell', nticks: 3, time_tick: 2 },
];
SPECS[2].bpoints_info = [
    { name: 'EF', img: 'inv_torch_thrown', nticks: 10, time_tick: 3 },
    { name: 'SS', img: 'ability_paladin_blessedmending', nticks: 5, time_tick: 6 },
];
SPECS[3].bpoints_info = [
    { name: 'LB', img: 'inv_misc_herb_felblossom', nticks: 15, time_tick: 1 },
    { name: 'Glyphed LB', img: 'inv_misc_herb_felblossom', nticks: 10, time_tick: 1},
    { name: 'WG/SM', img: 'ability_druid_flourish', nticks: 7, time_tick: 1},
    { name: 'Rejuv', img: 'spell_nature_rejuvenation', nticks: 4, time_tick: 3 },
    { name: 'Tranq', img: 'spell_nature_rejuvenation', nticks: 4, time_tick: 2 },
    { name: 'Regrowth', img: 'spell_nature_resistnature', nticks: 3, time_tick: 2 },
];
SPECS[4].bpoints_info = [
    { name: 'Riptide', img: 'spell_nature_riptide', nticks: 6, time_tick: 3 },
    { name: 'Healing Rain', img: 'spell_nature_giftofthewaterspirit', nticks: 5, time_tick: 2 },
    { name: 'Earthliving', img: 'spell_shaman_giftearthmother', nticks: 4, time_tick: 4 },
    { name: 'HTT', img: 'ability_shaman_healingtide', nticks: 11/2, time_tick: 2 },
    { name: 'HST', img: 'inv_spear_04', nticks: 15/2, time_tick: 2 },
];
SPECS[5].bpoints_info = [
    { name: 'Surging Mist, Renewing Mist', img: 'ability_monk_surgingmist', nticks: 6 },
];
$.each(SPECS, function(_, spec) {
   spec.breakpoints = [];
   $.each(spec.bpoints_info, function(_, bpoint) {
       var max_haste_p = 0.5;
       var max_new_points = Math.ceil(bpoint.nticks*max_haste_p+0.5);
       for (i=1; i<max_new_points; i++) {
           var count = [i, ['st','nd','rd','th','th','th'][i-1]].join('');
           spec.breakpoints.push({name: bpoint.name, img: bpoint.img, no: count, 
               hastep: bpoint.time_tick/((bpoint.hfactor || 1) * Math.ceil((bpoint.time_tick*bpoint.nticks)/(bpoint.nticks+i-0.5) * 1000)/1000 - 0.0005)
           });
       }
   });
   // Sort the breakpoints
   var flag;
   var n=0;
   var l = spec.breakpoints.length;
   do {
       n++;
       flag = 0;
       for (var i=0; i < l-1; i++) {
           val1 = spec.breakpoints[i].hastep;
           val2 = spec.breakpoints[i+1].hastep;
               // alert("here")
           if (val1 > val2) {
               flag = 1;
               var temp = spec.breakpoints[i];
               spec.breakpoints[i] = spec.breakpoints[i+1];
               spec.breakpoints[i+1] = temp;
           }
       }
   } while (flag == 1 && n<200);
});


Spec = can.Model({
    findAll : "GET /specs",
    findOne : "GET /spec/{id}",
    create  : 'POST /specs',
    update  : 'PUT /spec/{id}',
    destroy : 'DELETE /spec/{id}'
},{
    mastery_factor: 2.5,
    fint: function(delta) { 
        return (Math.round( 1.05 * (this.attr('buffs.stats') ? 1.05 : 1)*
                            (this.attr('stats.bint')*1 + ((delta && delta.int) || 0) +
                             (this.attr('buffs.intfood') ? 275 : 0) +
                             (this.attr('buffs.intflask') ? 1000 : 0) )));
    },
    fcrit: function(delta) {
        return (Math.round((((this.attr('stats.bcrit')*1 + ((delta && delta.crit) || 0)) /600 +
                 this.fint(delta) * 0.0003951) +
                 + this.attr('bcrit') +
                 (this.attr('buffs.crit') ? 5 : 0))*100 )/100  );
    },
    fcritp: function(delta) {
        return(0.01*this.fcrit(delta));
    },
    fmast: function(delta) {
        return (Math.round((((1* this.attr('stats.bmast') +((delta && delta.mast) || 0) +
                            (this.attr('buffs.mastery') ? 3000 : 0) )/600 +8)  *
                    this.mastery_factor) * 100) /100);
    },
    fmastp: function(delta) {
        return(0.01*this.fmast(delta));
    },
    fhaste_mul: function() {
        return((this.attr('buffs.haste') ? 1.05 : 1));
    },
    fhaste: function(delta) {
        return ( (((1+ (this.attr('stats.bhaste')*1 +((delta && delta.haste) || 0)) /425 / 100) *
                            (this.fhaste_mul())) -1) * 100 
                );
    },
    fhastep: function(delta) {
        return(0.01*this.fhaste(delta));
    },
    fsp: function(delta) {
        return (Math.round(((1*this.fint(delta)-10 + 1*this.attr('stats.bweapon') +
                            ((delta && delta.sp) || 0))) * 
                            (this.attr('buffs.sp') ? 1.05 : 1)));
    },
    fmast_heal_factor: function(delta) {
        return(1+0.01*this.fmast(delta));  // Specs need to override this
    },
    val_update: function() {
        this.attr('int', this.fint());
        this.attr('crit', this.fcrit());
        this.attr('critp', this.fcritp());
        this.attr('mast', this.fmast());
        this.attr('mastp', this.fmastp());
        this.attr('mast_heal_factor', this.fmast_heal_factor());
        this.attr('haste', Math.round(this.fhaste()*100)/100);
        this.attr('hastep', this.fhastep());
        this.attr('sp', this.fsp());
        this.attr('critmeta', this.attr('buffs.critmeta')).save();
    }
});

Spec.List = can.Model.List({
    val_update: function() {
        can.Observe.startBatch();
        var self = this;
        self.each(function(spec) {
            spec.val_update();
        });
        can.Observe.stopBatch();
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
        var specs = options.specs;
        var buffs = options.buffs;
        var stats = options.stats[0];
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
    '{buffs} change': function() { this.options.specs.val_update(); },
    '{Stat} updated': function() { this.options.specs.val_update(); }
});


HasteBar = can.Control({
    init: function(element, options) {
        var self = this;
        var spec = options.spec;
        self.element.html(can.view('views/haste_bar.ejs', {spec: spec}));
        $('.haste_bar', self.element).click();
        self.update_bar();
    },
    '{Spec} updated': function() {
        this.update_bar();
    },
    update_bar: function() {
        var spec = this.options.spec;
        var haste_mul = spec.fhaste_mul();
        var hastep = Math.round(spec.hastep*1000)/1000;
        var haste_rat = spec.stats.bhaste;
        var bpoints = spec.breakpoints;
        var rating_scale = 3000;
        bpoints.each(function(bpoint) {
            bpoint.rating = Math.ceil((bpoint.hastep/haste_mul -1) * 425 * 100);
            bpoint.rel_rating = bpoint.rating - haste_rat;
            bpoint.percent = Math.round(0.5*(1+bpoint.rel_rating/rating_scale * 0.9) * 100) + "%";
            bpoint.text = can.sub("You gain the {no} extra tick of {name} at {rating} rating.\nNeed {rel_rating} rating to reach that point.\n{hastep}", bpoint);
        });
         $('.breakpoint', this.element).hide().filter(function(_) {
            var rating = $(this).data('breakpoint').rel_rating;
            return((rating < rating_scale) && (rating > -rating_scale));
        }).show().css('left', function() {return($(this).data('breakpoint').percent);}).
        attr('title', function() { return($(this).data('breakpoint').text);});
        $('.haste_current').attr('title', can.sub('You have {haste_rat} rating.\nHaste factor: {hastep}', {haste_rat: haste_rat, hastep: hastep}));
        $('table', this.element).html(can.view('views/bpoint_rows.ejs', {breakpoints: bpoints}));
    },
    '.haste_bar click': function(bar) {
        el = this.element;
        $(bar).toggleClass('collapse expand');
        $('.haste_list', el).toggle();
    }
});

})();
