define(['can/Observe'], function(cano) {
STATS = [
    {id: 1, name: 'standard', bint: 13400, bspi: 8394, bmast: 3831, bcrit: 2628, bhaste: 555, bweapon: 5812 }
];
// 
// Stat = canm({
//     findAll: "GET /stats",
//     findOne: "GET /stat/{id}",
//     create  : 'POST /stats',
//     update  : 'PUT /stat/{id}',
//     destroy : 'DELETE /stat/{id}'
// },{});
// 
// statStore = can.fixture.make(STATS.length, function(i) {
//     return(STATS[i]);
// });
// can.fixture('GET /stats', statStore.findAll);
// can.fixture('GET /stat/{id}', statStore.findOne);
// can.fixture('POST /stats', statStore.create);
// can.fixture('PUT /stat/{id}', statStore.update);
// can.fixture('DELETE /stat/{id}', statStore.destroy);
// 
    stat = new cano(STATS[0]);
return stat;
});