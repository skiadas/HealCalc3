requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        "jquery" : "jquery-1.11.2.min",
        view: '../app/view',
    }
});
//
//    Extending basic math rounding functions to have a specific number of digits
//
Math.ceiln = function(x, d) {
    var n = Math.pow( 10, d || 0 );
    return Math.ceil( x * n ) / n;
}
Math.floorn = function(x, d) {
    var n = Math.pow( 10, d || 0 );
    return Math.floor( x * n ) / n;
}
Math.roundn = function(x, d) {
    var n = Math.pow( 10, d || 0 );
    return Math.round( x * n ) / n;
}

//
requirejs(['jquery', 'can', 'app/setup', 'app/util/twitterLoader', 'app/util/wowheadLoader'], function($, can) {
    $(document).ready(function() {
        $('body').delegate('.tab-bar li', 'click', function(ev) {
            var target = $(ev.target).data('target');
            $(target).addClass('selected').siblings('li').removeClass('selected');
        });
        $('.tab-contents li.selected');
    });
});

