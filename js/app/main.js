requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        "jquery" : "jquery-1.8.3.min",
        view: '../app/view',
    }
});
requirejs(['jquery', 'can/view/ejs', 'can/control', 
            'app/model/stat', 'app/control/stats', 
            'app/model/buff', 'app/control/buffs', 'app/setup'], function($, can, _, stats, Stats, buffs, Buffs) {
    $(document).ready(function() {
        var _expand_fun = function(el,ev) {
            $(this).toggleClass('expandOff expandOn').siblings('div').toggle();
        }
        $('body').delegate('.expandOff, .expandOn', 'click', _expand_fun);
        $('.expandOff').siblings('div').hide();
    });
});

