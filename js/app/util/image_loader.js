define(['text!app/util/image_namelist.js','text!app/util/big_one.jpg'], function(names, big_one) {
    ImageLoader = (function() {
        eval(names);
        var imageList = big_one.split("\u0001");
        var retList = {};
        for (var i = 0, len = imageList.length; i < len; i++) {
            retList[names[i]] = '<img src="data:image/jpeg;base64,' + imageList[i] + '" />';
        }
        ret = function(name) {
            return retList[name.replace('_large.jpg', '')];
        }
        return ret;
    })();
    return ImageLoader;
});

