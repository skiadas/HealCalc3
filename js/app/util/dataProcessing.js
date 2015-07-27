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
         bint: 1042, bspi: 782, bstam: 890, bcrit: 0, bhaste: 0,
         bweapon: 0, bvers: 0, bmulti: 0, bmast: 0
      };
      Object.keys(items).forEach(function(iName) {
         var item = items[iName];
         if (item != null && !item.hasOwnProperty('uptime')) {
            Object.keys(item).forEach(function(key) {
               totals[key] += item[key];
            });
         }
      });
      var specs = [
         { name: 'disc', class: 5, tree: 0 },
         { name: 'holy', class: 5, tree: 1 },
         { name: 'pally', class: 2, tree: 0 },
         { name: 'druid', class: 11, tree: 3 },
         { name: 'shaman', class: 7, tree: 2 },
         { name: 'monk', class: 10, tree: 1 }
      ];
      var specNo, spec;
      for (var i = 0; i < specs.length; i += 1) {
         if (data.class == specs[i].class) {
            // First find which talent set to consider (specNo)
            // It is the selected set unless that set is not a healing
            // spec
            specNo = data.talents[0].selected ? 0 : 1;
            if ((specs[i].class == 5 && data.talents[specNo].spec.order > 1) ||
                (specs[i].class != 5 && data.talents[specNo].spec.order !== specs[i].tree)) {
               specNo = 1 - specNo;
            }
            // Now to pick the spec
            spec = specs[i];
            // If holy switch
            if (data.class == 5 && data.talents[specNo].spec.order == specs[1].tree) {
               spec = specs[1];
            }
            break;
         }
      }
      totals.spec = spec.name;
      totals.talents = data.talents[specNo].calcTalent.split('').map(function(x) { return parseInt(x) });
      totals.glyphs  = data.talents[specNo].glyphs.major.map(function(glyph) { return glyph.glyph });
      delete(totals.name);
      return totals;
   };
});
