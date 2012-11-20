(function() {
STATS = [
    {id: 1, name: 'standard', bint: 13400, bspi: 8394, bmast: 3831, bcrit: 2628, bhaste: 555, bweapon: 5812 }
];

Stat = can.Model({
    findAll: "GET /stats",
    findOne: "GET /stat/{id}",
    create  : 'POST /stats',
    update  : 'PUT /stat/{id}',
    destroy : 'DELETE /stat/{id}'
},{});

statStore = can.fixture.make(STATS.length, function(i) {
    return(STATS[i]);
});
can.fixture('GET /stats', statStore.findAll);
can.fixture('GET /stat/{id}', statStore.findOne);
can.fixture('POST /stats', statStore.create);
can.fixture('PUT /stat/{id}', statStore.update);
can.fixture('DELETE /stat/{id}', statStore.destroy);

Stats = can.Control({
    init: function(element, options) {
        var self = this;
        var stats = options.stats;
        self.element.html(can.view('views/stats.ejs', {stats: stats}));
    },
    'input change': function(el, ev) {
        var attr = el.attr('id');
        var val = (el.attr('type') == 'checkbox') ? (el.attr('checked') ? true : false) : el.attr('value');
        el.closest('div').data('stat').attr(attr, val).save();
    },
    
})
})();