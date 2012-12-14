requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        "jquery" : "jquery-1.8.3.min"
    }
});
requirejs(['jquery', 'can/view/ejs', 'can/control', 
            'app/model/stat', 'app/control/stats', 
            'app/model/buff', 'app/control/buffs', 'app/setup'], function($, can, _, stats, Stats, buffs, Buffs) {
    $(document).ready(function() {
        var _expand_fun = function(el,ev) {
            $(this).toggleClass('expandOff expandOn').siblings('div').toggle();
        }
        $('a.expandOff, a.expandOn').bind('click', _expand_fun).filter('a.expandOff').siblings('div').hide();
    });
});

