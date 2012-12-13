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

    });
});

