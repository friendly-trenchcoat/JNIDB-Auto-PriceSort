// ==UserScript==
// @name         JNIDB - Auto Price-sort
// @description  Automatically redirect to the same search sorted by price
// @author       freindly-trenchcoat
// @namespace    https://github.com/friendly-trenchcoat
// @match        http://items.jellyneo.net/*
// ==/UserScript==

var url = window.location.href;
var sort = url.match(/sortby=(.+)&/);

if (sort !== null) { 
    if (sort[1] != "price"){ 
        url = url.replace("sortby="+sort[1], "sortby=price"); 
        window.location.replace(url);
    } 
}
else { 
    url = url.replace("&numitems", "&sortby=price&numitems"); 
    window.location.replace(url);
}


