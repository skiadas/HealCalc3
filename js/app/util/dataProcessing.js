define(['./tooltipParams'], function(tooltipParams) {
   return function(data) {
      var itemSlots = [
         'back', 'chest', 'feet', 'finger1', 'finger2', 'hands', 'head',
         'legs', 'mainHand', 'neck', 'offHand', 'shoulder', 'trinket1', 'trinket2',
         'waist', 'wrist'
      ];
      var statNumbers = {
         '5': 'bint',
         '6': 'bspi',
         '7': 'bstam',
         '32': 'bcrit',
         '36': 'bhaste',
         '40': 'bvers',
         '45': 'bweapon',
         '49': 'bmast',
         '59': 'bmulti',
      }
      var items = {};
      var stats;
      itemSlots.forEach(function(item) {
         if (!data.items[item]) { return; }
         stats = {};
         data.items[item].stats.forEach(function(stat) {
            stats[statNumbers[stat.stat]] = stat.amount;
         });
         var extras = data.items[item].tooltipParams;
         var simplifiedExtras = [];
         items[item] = stats;
         Object.keys(extras || []).forEach(function(key) {
            items[item + '-' + key] = tooltipParams[extras[key]];
         });
      });
      var totals = {
         bint: 1024, bspi: 782, bstam: 890, bcrit: 0, bhaste: 0,
         bweapon: 0, bvers: 0, bmulti: 0, bmast: 0
      };
      Object.keys(items).forEach(function(iName) {
         var item = items[iName];
         if (!item.hasOwnProperty('uptime')) {
            Object.keys(item).forEach(function(key) {
               totals[key] += item[key];
            });
         }
      });
      totals.spec = {5: "disc", 2: "pally", 11: "druid", 7: "shaman", 10: "monk"}[data['class']];
      totals.talents = data.talents;
      if (totals.spec === "disc") {
         // Detecting Holy
         var spec1 = totals.talents[0].spec.name,
             spec2 = totals.talents[1].spec.name,
             primary = totals.talents[0].selected ? spec1 : spec2,
             secondary = totals.talents[0].selected ? spec2 : spec1,
             specLong = (primary === 'Shadow') ? secondary : primary;
         totals.spec = {'Discipline': 'disc', 'Holy': 'holy'}[specLong];
      }
      totals.talents[0].spec = totals.talents[0].spec.name;
      totals.talents[1].spec = totals.talents[1].spec.name;
      delete(totals.name);
      return totals;
   };
});
