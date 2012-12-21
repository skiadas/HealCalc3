define(['can', 'text!view/haste_bar.ejs'], function(can, view) {
    can.view.ejs('hasteBarView', view);
    var HasteBar = can.Control({
        init: function(element, options) {
            var self = this;
            var spec = options.spec;
            self.element.html(can.view('hasteBarView', {spec: spec}));
            self.update_bar();
        },
        '{spec} change': function() {
            this.update_bar();
        },
        update_bar: function() {
            var spec = this.options.spec;
            var haste_mul = spec.fhaste_mul();
            var hastep = Math.round(spec.hastep*1000)/1000;
            var haste_rat = spec.stats.bhaste;
            var bpoints = spec.breakpoints;
            var rating_scale = 3000;
            bpoints.each(function(bpoint) {
                bpoint.rating = Math.ceil((bpoint.hastep/haste_mul -1) * 425 * 100);
                bpoint.rel_rating = bpoint.rating - haste_rat;
                bpoint.percent = Math.round(0.5*(1+bpoint.rel_rating/rating_scale * 0.9) * 100) + "%";
                bpoint.text = can.sub("You gain the {no} extra tick of {name} at {rating} rating.\nNeed {rel_rating} rating to reach that point.\n{hastep}", bpoint);
            });
             $('.breakpoint', this.element).hide().filter(function(_) {
                var rating = $(this).data('breakpoint').rel_rating;
                return((rating < rating_scale) && (rating > -rating_scale));
            }).show().css('left', function() {return($(this).data('breakpoint').percent);}).
            attr('title', function() { return($(this).data('breakpoint').text);});
            $('.haste_current').attr('title', can.sub('You have {haste_rat} rating.\nHaste factor: {hastep}', {haste_rat: haste_rat, hastep: hastep}));
            $('table', this.element).html(can.view('js/app/view/bpoint_rows.ejs', {breakpoints: bpoints}));
        },
    });
    return HasteBar;
})
