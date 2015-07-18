define(['jquery'], function($) {
    $(document).ready(function() {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'http://static.wowhead.com/widgets/power.js');
        document.head.appendChild(script);
    });
});

