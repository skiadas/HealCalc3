requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        "jquery" : "jquery-1.8.3.min",
        view: '../app/view',
    }
});
requirejs(['jquery', 'can', 'app/setup'], function($, can) {
    $(document).ready(function() {
        var _expand_fun = function(el,ev) {
            $(this).toggleClass('expandOff expandOn').siblings('div').toggle(200);
        }
        $('body').delegate('.expandOff, .expandOn', 'click', _expand_fun);
        $('.expandOff').siblings('div').hide(200);
    });
});

