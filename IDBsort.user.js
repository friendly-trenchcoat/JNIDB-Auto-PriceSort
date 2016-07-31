// ==UserScript==
// @name         JNIDB - Auto Price-sort
// @description  Automatically redirect to the same search sorted by price
// @author       freindly-trenchcoat
// @namespace    https://github.com/friendly-trenchcoat
// @match        http://items.jellyneo.net/search/?*
// ==/UserScript==

var url = window.location.href;
var sort = url.match(/sort=([^&]*)/);

if (sort !== null) {
    if (sort[1] != "5"){
        url = url.replace("sort="+sort[1], "sort=5");
        window.location.replace(url);
    }
}
else {
    url = url.replace("search/?", "search/?sort=5&sort_dir=desc&");
    window.location.replace(url);
}
