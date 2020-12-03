<html lang="en" dir="ltr" class="client-js" data-lt-installed="true"><head>
<meta charset="UTF-8"><script type="text/javascript" src="https://bam-cell.nr-data.net/1/05ab6e1949?a=84455028&amp;v=1184.ab39b52&amp;to=YwBabBRSCEFYAkVaWlpKeVsSWglcFgBSR1xbCxdOD1YR&amp;rst=10797&amp;ck=1&amp;ref=https://interactivegroup.github.io/almsmobileapp/dev/Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;ap=114&amp;be=3910&amp;fe=10175&amp;dc=9602&amp;perf=%7B%22timing%22:%7B%22of%22:1606918108309,%22n%22:0,%22f%22:2090,%22dn%22:2348,%22dne%22:2348,%22c%22:2348,%22s%22:2527,%22ce%22:2801,%22rq%22:2816,%22rp%22:3162,%22rpe%22:3210,%22dl%22:3516,%22di%22:9602,%22ds%22:9602,%22de%22:9602,%22dc%22:10174,%22l%22:10174,%22le%22:10215%7D,%22navigation%22:%7B%7D%7D&amp;fp=9367&amp;fcp=9367&amp;at=T0dZGlxIG08%3D&amp;jsonp=NREUM.setToken"></script><script src="https://js-agent.newrelic.com/nr-1184.min.js"></script><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"05ab6e1949",applicationID:"84455028"};window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var i=t[n]={exports:{}};e[n][0].call(i.exports,function(t){var i=e[n][1][t];return r(i||t)},i,i.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,n){function r(){}function i(e,t,n){return function(){return o(e,[u.now()].concat(c(arguments)),t?null:this,n),t?void 0:this}}var o=e("handle"),a=e(6),c=e(7),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,t){s[t]=i(p+t,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,i="function"==typeof t;return o(l+"tracer",[u.now(),e,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return t.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],n),e}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=i(l+t)}),newrelic.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,t])}},{}],2:[function(e,t,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=e(8);t.exports=r,t.exports.offset=a,t.exports.getLastTimestamp=i},{}],3:[function(e,t,n){function r(e,t){var n=e.getEntries();n.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,t){var n=e.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var t=Math.round(e.timeStamp),n={type:e.type};t<=p.now()?n.fid=p.now()-t:t>p.offset&&t<=Date.now()?(t-=p.offset,n.fid=p.now()-t):t=p.now(),g=!0,d("timing",["fi",t,n])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(5),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],4:[function(e,t,n){function r(e,t){if(!i)return!1;if(e!==i)return!1;if(!t)return!0;if(!o)return!1;for(var n=o.split("."),r=t.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}t.exports={agent:i,version:o,match:r}},{}],5:[function(e,t,n){function r(e){function t(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,t,!1)}t.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],6:[function(e,t,n){function r(e,t){var n=[],r="",o=0;for(r in e)i.call(e,r)&&(n[o]=t(r,e[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],7:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,i=n-t||0,o=Array(i<0?0:i);++r<i;)o[r]=e[t+r];return o}t.exports=r},{}],8:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function i(e){function t(e){return e&&e instanceof r?e:e?f(e,c,o):o()}function n(n,r,i,o){if(!p.aborted||o){e&&e(n,r,i);for(var a=t(i),c=v(n),f=c.length,u=0;u<f;u++)c[u].apply(a,r);var d=s[w[n]];return d&&d.push([b,n,r,a]),a}}function l(e,t){h[e]=v(e).concat(t)}function m(e,t){var n=h[e];if(n)for(var r=0;r<n.length;r++)n[r]===t&&n.splice(r,1)}function v(e){return h[e]||[]}function g(e){return d[e]=d[e]||i(n)}function y(e,t){u(e,function(e,n){t=t||"feature",w[n]=t,t in s||(s[t]=[])})}var h={},w={},b={on:l,addEventListener:l,removeEventListener:m,emit:n,get:g,listeners:v,context:t,buffer:y,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(p.aborted=!0,s=p.backlog={})}var c="nr@context",f=e("gos"),u=e(6),s={},d={},p=t.exports=i();p.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(i.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[t]=r,r}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){i.buffer([e],r),i.emit(e,t,n)}var i=e("ee").get("handle");t.exports=r,r.ee=i},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!E++){var e=b.info=NREUM.info,t=p.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return u.abort();f(h,function(t,n){e[t]||(e[t]=n)});var n=a();c("mark",["onload",n+b.offset],null,"api"),c("timing",["load",n]);var r=p.createElement("script");r.src="https://"+e.agent,t.parentNode.insertBefore(r,t)}}function i(){"complete"===p.readyState&&o()}function o(){c("mark",["domContent",a()+b.offset],null,"api")}var a=e(2),c=e("handle"),f=e(6),u=e("ee"),s=e(4),d=window,p=d.document,l="addEventListener",m="attachEvent",v=d.XMLHttpRequest,g=v&&v.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:v,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var y=""+location,h={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1184.min.js"},w=v&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),b=t.exports={offset:a.getLastTimestamp(),now:a,origin:y,features:{},xhrWrappable:w,userAgent:s};e(1),e(3),p[l]?(p[l]("DOMContentLoaded",o,!1),d[l]("load",r,!1)):(p[m]("onreadystatechange",i),d[m]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0},{}],"wrap-function":[function(e,t,n){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(7),a="nr@original",c=Object.prototype.hasOwnProperty,f=!1;t.exports=function(e,t){function n(e,t,n,i){function nrWrapper(){var r,a,c,f;try{a=this,r=o(arguments),c="function"==typeof n?n(r,a):n||{}}catch(u){p([u,"",[r,a,i],c])}s(t+"start",[r,a,i],c);try{return f=e.apply(a,r)}catch(d){throw s(t+"err",[r,a,d],c),d}finally{s(t+"end",[r,a,f],c)}}return r(e)?e:(t||(t=""),nrWrapper[a]=e,d(e,nrWrapper),nrWrapper)}function u(e,t,i,o){i||(i="");var a,c,f,u="-"===i.charAt(0);for(f=0;f<t.length;f++)c=t[f],a=e[c],r(a)||(e[c]=n(a,u?c+i:i,o,c))}function s(n,r,i){if(!f||t){var o=f;f=!0;try{e.emit(n,r,i,t)}catch(a){p([a,n,r,i])}f=o}}function d(e,t){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(e);return n.forEach(function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){return e[n]=t,t}})}),t}catch(r){p([r])}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return t}function p(t){try{e.emit("internal-error",t)}catch(n){}}return e||(e=i),n.inPlace=u,n.flag=a,n}},{}]},{},["loader"]);</script>
<title>Setting up your development environment for Moodle Mobile 2 - MoodleDocs</title>
<script>document.documentElement.className = document.documentElement.className.replace( /(^|\s)client-nojs(\s|$)/, "$1client-js$2" );</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Setting_up_your_development_environment_for_Moodle_Mobile_2","wgTitle":"Setting up your development environment for Moodle Mobile 2","wgCurRevisionId":58085,"wgRevisionId":58085,"wgArticleId":6170,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["Mobile","Moodle App 3.5"],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"Setting_up_your_development_environment_for_Moodle_Mobile_2","wgRelevantArticleId":6170,"wgRequestId":"2cc577d4c955cc8a2e8e2efd","wgIsProbablyEditable":false,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgWikiEditorEnabledModules":{"toolbar":true,"dialogs":false,"preview":false,"publish":false}});mw.loader.implement("user.options",function($,jQuery,require,module){mw.user.options.set({"variant":"en"});});mw.loader.implement("user.tokens",function ( $, jQuery, require, module ) {
mw.user.tokens.set({"editToken":"+\\","patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});/*@nomin*/;

});mw.loader.load(["mediawiki.page.startup"]);});</script>
<link rel="stylesheet" href="/dev/load.php?debug=false&amp;lang=en&amp;modules=mediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.sectionAnchor&amp;only=styles&amp;skin=moodledocs">
<link rel="stylesheet" href="/dev/skins/moodledocs/devdocs.css?305" media="screen"><link rel="stylesheet" href="/dev/skins/moodledocs/sitebar/sitebar-dev.css?305" media="screen"><link rel="stylesheet" href="/dev/skins/moodledocs/bootstrap-responsive.min.css?305"><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300&amp;amp;subset=latin,cyrillic-ext,greek-ext,greek,vietnamese,latin-ext,cyrillic">
<style>
#pending-review{border:3px solid red}
.mw-collapsible-toggle{float:right;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}  .mw-content-ltr .mw-collapsible-toggle,.mw-content-rtl .mw-content-ltr .mw-collapsible-toggle{float:right} .mw-content-rtl .mw-collapsible-toggle,.mw-content-ltr .mw-content-rtl .mw-collapsible-toggle{float:left}.mw-customtoggle,.mw-collapsible-toggle{cursor:pointer} caption .mw-collapsible-toggle,.mw-content-ltr caption .mw-collapsible-toggle,.mw-content-rtl caption .mw-collapsible-toggle,.mw-content-rtl .mw-content-ltr caption .mw-collapsible-toggle,.mw-content-ltr .mw-content-rtl caption .mw-collapsible-toggle{float:none} li .mw-collapsible-toggle,.mw-content-ltr li .mw-collapsible-toggle,.mw-content-rtl li .mw-collapsible-toggle,.mw-content-rtl .mw-content-ltr li .mw-collapsible-toggle,.mw-content-ltr .mw-content-rtl li .mw-collapsible-toggle{float:none} .mw-collapsible-toggle-li{list-style:none}
.suggestions{overflow:hidden;position:absolute;top:0;left:0;width:0;border:none;z-index:1099;padding:0;margin:-1px 0 0 0}.suggestions-special{position:relative;background-color:white;cursor:pointer;border:solid 1px #aaaaaa;padding:0;margin:0;margin-top:-2px;display:none;padding:0.25em 0.25em;line-height:1.25em}.suggestions-results{background-color:white;cursor:pointer;border:solid 1px #aaaaaa;padding:0;margin:0}.suggestions-result{color:black;margin:0;line-height:1.5em;padding:0.01em 0.25em;text-align:left; overflow:hidden;-o-text-overflow:ellipsis; text-overflow:ellipsis;white-space:nowrap}.suggestions-result-current{background-color:#4C59A6;color:white}.suggestions-special .special-label{color:gray;text-align:left}.suggestions-special .special-query{color:black;font-style:italic;text-align:left}.suggestions-special .special-hover{background-color:silver}.suggestions-result-current .special-label,.suggestions-result-current .special-query{color:white}.highlight{font-weight:bold}
@media screen {
	.tochidden,.toctoggle{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.toctoggle{font-size:94%}}
@media print {
	#toc.tochidden,.toctoggle{display:none}}
.postedit-container{margin:0 auto;position:fixed;top:0;height:0;left:50%;z-index:1000;font-size:13px}.postedit-container:hover{cursor:pointer}.postedit{position:relative;top:0.6em;left:-50%;padding:.6em 3.6em .6em 1.1em;line-height:1.5625em;color:#626465;background-color:#f4f4f4;border:1px solid #dcd9d9;text-shadow:0 0.0625em 0 rgba(255,255,255,0.5);border-radius:5px;box-shadow:0 2px 5px 0 #ccc;-webkit-transition:all 0.25s ease-in-out;-moz-transition:all 0.25s ease-in-out;-ms-transition:all 0.25s ease-in-out;-o-transition:all 0.25s ease-in-out;transition:all 0.25s ease-in-out}.skin-monobook .postedit{top:6em !important}.postedit-faded{opacity:0}.postedit-icon{padding-left:41px;  line-height:25px;background-repeat:no-repeat;background-position:8px 50%}.postedit-icon-checkmark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9ElEQVR4AZWRA3AYURQArxrVHtW2bdu2bdu2zdi2bdu2bWxs7zeehZaw4f70kbs+zI3e/nWK+RWx3aOFlrL56Sy5SxrruG69hlv6OyK+mz+8KDSXdXembj0ispT7tjs4ZTIbpYBvxGSGKzZTeFrb7W/meN002swFs0U8ttpHTkF2BvCqWQrW35929bTsKm5Zb+SEwWwcY8wAngB9m7Z+d+rIPZ/npdy12M5p47n8dXsCYAf0qPy06eGMdktuDu9Qf+JmKl3SWM91qzVcN9tAbEYkwMaq0tyb1m/To5kP170el/BK8/qa6sJr70ydf+T/Uu5ab+Oo/lS0AkUBpIFWlZ9WPhxpse/PHO7YbOOczjL0vZV2lNxPPtG73dYXM+xvm2znrOl83tidoqCwMBgYXsPFB0on5S6pr+eK5TKuW67lgvaKvF8mL1dtfTL32FHxRdyx3cQpg7m4x9sCXKkTIzA4LDH44zWdzaUf71hv5rTG4uyzcusybxSX7aThbMQ8XgCYAp3rzTTQOiIh9PNlzY3FSuZxrzjme1Y7uGS6kjsWO4jPjM4FVjRZsvD4kO9XtTZzQn82NyzWc0B7AmZh6gA/hOYSGhfw9YbOVnarj+S7800AL2BIsxUAbWNToj7bhBuQmZcOsFdoKUC74rGheCwXmqAIQTc9jQcrADIAAAAASUVORK5CYII=);background-image:url(/dev/resources/src/mediawiki.action/images/green-checkmark.png?d94f1)!ie;background-position:left}.postedit-close{position:absolute;padding:0 .8em;right:0;top:0;font-size:1.25em;font-weight:bold;line-height:2.3em;color:black;text-shadow:0 0.0625em 0 white;text-decoration:none;opacity:0.2;filter:alpha(opacity=20)}.postedit-close:hover{color:black;text-decoration:none;opacity:0.4;filter:alpha(opacity=40)}
#postedit-modqueued a{font-weight:bold}#pending-review{display:inline-block;padding:5px;margin:10px;margin-left:0;font-weight:bold;font-size:120%;text-transform:uppercase}</style><style>
.suggestions a.mw-searchSuggest-link,.suggestions a.mw-searchSuggest-link:hover,.suggestions a.mw-searchSuggest-link:active,.suggestions a.mw-searchSuggest-link:focus{color:black;text-decoration:none}.suggestions-result-current a.mw-searchSuggest-link,.suggestions-result-current a.mw-searchSuggest-link:hover,.suggestions-result-current a.mw-searchSuggest-link:active,.suggestions-result-current a.mw-searchSuggest-link:focus{color:white}.suggestions a.mw-searchSuggest-link .special-query{ overflow:hidden;-o-text-overflow:ellipsis; text-overflow:ellipsis;white-space:nowrap}</style><meta name="ResourceLoaderDynamicStyles" content="">
<script async="" src="/dev/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=ALMSdocs"></script>
<meta name="generator" content="MediaWiki 1.27.4">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="/favicon-dev.ico">
<link rel="search" type="application/opensearchdescription+xml" href="/dev/opensearch_desc.php" title="ALMSDocs&nbsp;dev&nbsp;(Development)">
<link rel="EditURI" type="application/rsd+xml" href="https://interactivegroup.github.io/almsmobileapp/dev/api.php?action=rsd">
<link rel="copyright" href="https://interactivegroup.github.io/almsmobileapp/dev/License">
<link rel="alternate" type="application/atom+xml" title="ALMSDocs Atom feed" href="/dev/index.php?title=Special:RecentChanges&amp;feed=atom">
<script src="/dev/load.php?debug=false&amp;lang=en&amp;modules=jquery%2Cmediawiki&amp;only=scripts&amp;skin=ALMSdocs&amp;version=dhA6Pkgz"></script></head>
<body class="mediawiki ltr sitedir-ltr ns-0 ns-subject page-Setting_up_your_development_environment_for_ALMS_Mobile_ rootpage-Setting_up_your_development_environment_for_ALMS_Mobile_2 skin-ALMSdocs action-view">
<div id="ALMSsitestopnavbar">
    <div class="navbar-container">
        <a class="sitelogo" href="https://alms.aldermin.com/">
            <img alt="alms.aldermin.com" width="96" height="25" src="/dev/skins/moodledocs/sitebar/pix/logo.png">
        </a>
        <ul>
            <li class="home">
            <a href="https://alms.aldermin.com"><span>Home</span><span class="placeholder"></span></a>
            </li>
            <li class="documentation">
            <a href="https://alms.aldermin.com"><span>Documentation</span><span class="placeholder"></span></a>
            </li>
            <li class="download">
            <a href="https://alms.aldermin.com"><span>Downloads</span><span class="placeholder"></span></a>
            </li>
            <li class="demo">
            <a href="https://alms.aldermin.com"><span>Demo</span><span class="placeholder"></span></a>
            </li>
            <li class="tracker">
            <a href="https://alms.aldermin.com"><span>Tracker</span><span class="placeholder"></span></a>
            </li>
            <li class="development">
            <a href="https://interactivegroup.github.io/almsmobileapp/"><span>Development</span><span class="placeholder"></span></a>
            </li>
            <li class="translation">
            <a href="https://alms.aldermin.com"><span>Translation</span><span class="placeholder"></span></a>
            </li>
            <li class="moodlenet">
            <a href="https://alms.aldermin.com"><span>Moodle.net</span><span class="placeholder"></span></a>
            </li>
            <li class="search">
            <a href="https://aldermin.com/public/search/"><span>Search</span><span class="placeholder"></span></a>
            </li>
        </ul>
    </div>
    <div style="clear:both"></div>
</div>
<div id="page">
<!-- header start -->
<div id="moodlelogo"></div>
<!-- header end -->


<!-- navbar start -->
<div id="moodlenavbar" class="navbar clearfix" dir="LTR"><div class="breadcrumb"><h2 class="accesshide">You are here</h2><ul><li class="first"><a href="/dev/">Main Page</a></li><li>&nbsp;► Setting up your development environment for Moodle Mobile 2</li></ul></div></div>
<!-- navbar end -->

<div id="globalWrapper" class="container-fluid">
<div id="column-content" class="has-sideblock">
<div id="content">
	<a id="top"></a>

	<h1 id="firstHeading" class="firstHeading">Setting up your development environment for Moodle Mobile 2</h1>
	<div id="bodyContent">
		<div id="contentSub"></div>
		<div id="jump-to-nav">Jump to: <a href="#column-one">navigation</a>, <a href="#searchInput">search</a></div>
		<!-- start content -->
<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="sideblock right" style="width: 18em;">	
<div class="header"><a href="/dev/Moodle_Mobile" title="Moodle Mobile">Moodle Apps</a></div>	
<div class="content">
<ul><li> <a href="/dev/Moodle_Mobile_Customization" title="Moodle Mobile Customization">Moodle Mobile Customization</a></li>
<li> <strong class="selflink">Setting up your development environment for Moodle Mobile 2</strong></li>
<li> <a href="/dev/Moodle_Mobile_development_using_Chrome_or_Chromium" title="Moodle Mobile development using Chrome or Chromium">Moodle Mobile development using Chrome or Chromium</a></li>
<li> <a href="/dev/Mobile_support_for_plugins" title="Mobile support for plugins">Mobile support for plugins</a></li>
<li> <a href="/dev/Moodle_Mobile_Themes" title="Moodle Mobile Themes">Moodle Mobile Themes</a></li>
<li> <a href="/dev/Moodle_Mobile_debugging_WS_requests" title="Moodle Mobile debugging WS requests">Moodle Mobile debugging WS requests</a></li>
<li> <a href="/dev/Moodle_Desktop" title="Moodle Desktop">Moodle Desktop</a></li>
<li> <a href="/dev/Moodle_Mobile_FAQ" title="Moodle Mobile FAQ">Moodle Mobile FAQ</a></li></ul>
</div>
</div>
<p><span class="small-info-right">Moodle App <span class="text-big new">3.5</span></span>
</p><p><br>
Note: These instructions do work (give or take) for the current 3.9.x version of the Moodle Mobile app.
</p>
<div id="toc" class="toc"><div id="toctitle"><h2>Contents</h2><span class="toctoggle">&nbsp;[<a href="#" id="togglelink">hide</a>]&nbsp;</span></div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Overview"><span class="tocnumber">1</span> <span class="toctext">Overview</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#Requirements"><span class="tocnumber">2</span> <span class="toctext">Requirements</span></a>
<ul>
<li class="toclevel-2 tocsection-3"><a href="#Install_a_browser_for_development"><span class="tocnumber">2.1</span> <span class="toctext">Install a browser for development</span></a></li>
<li class="toclevel-2 tocsection-4"><a href="#Install_git"><span class="tocnumber">2.2</span> <span class="toctext">Install git</span></a></li>
<li class="toclevel-2 tocsection-5"><a href="#Install_Node.js"><span class="tocnumber">2.3</span> <span class="toctext">Install Node.js</span></a></li>
<li class="toclevel-2 tocsection-6"><a href="#Windows_only:_Native_build_dependencies"><span class="tocnumber">2.4</span> <span class="toctext">Windows only: Native build dependencies</span></a></li>
<li class="toclevel-2 tocsection-7"><a href="#Mac_only:_Push_notifications"><span class="tocnumber">2.5</span> <span class="toctext">Mac only: Push notifications</span></a></li>
<li class="toclevel-2 tocsection-8"><a href="#Linux_only:_libsecret"><span class="tocnumber">2.6</span> <span class="toctext">Linux only: libsecret</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-9"><a href="#Clone_the_app_base_code"><span class="tocnumber">3</span> <span class="toctext">Clone the app base code</span></a></li>
<li class="toclevel-1 tocsection-10"><a href="#Setup_the_environment"><span class="tocnumber">4</span> <span class="toctext">Setup the environment</span></a></li>
<li class="toclevel-1 tocsection-11"><a href="#Open_the_app_in_the_browser"><span class="tocnumber">5</span> <span class="toctext">Open the app in the browser</span></a></li>
<li class="toclevel-1 tocsection-12"><a href="#Updating_ionic_and_cordova"><span class="tocnumber">6</span> <span class="toctext">Updating ionic and cordova</span></a></li>
<li class="toclevel-1 tocsection-13"><a href="#Updating_plugins"><span class="tocnumber">7</span> <span class="toctext">Updating plugins</span></a></li>
<li class="toclevel-1 tocsection-14"><a href="#Building_for_Android_and_iOS"><span class="tocnumber">8</span> <span class="toctext">Building for Android and iOS</span></a></li>
<li class="toclevel-1 tocsection-15"><a href="#Compiling_using_AOT"><span class="tocnumber">9</span> <span class="toctext">Compiling using AOT</span></a></li>
<li class="toclevel-1 tocsection-16"><a href="#Troubleshooting"><span class="tocnumber">10</span> <span class="toctext">Troubleshooting</span></a>
<ul>
<li class="toclevel-2 tocsection-17"><a href="#Strange_NPM_errors"><span class="tocnumber">10.1</span> <span class="toctext">Strange NPM errors</span></a></li>
<li class="toclevel-2 tocsection-18"><a href="#Error:_libsass_bindings_not_found._Try_reinstalling_node-sass.3F"><span class="tocnumber">10.2</span> <span class="toctext">Error: libsass bindings not found. Try reinstalling node-sass?</span></a></li>
<li class="toclevel-2 tocsection-19"><a href="#com.android.dex.DexException:_Multiple_dex_files_define_XXX"><span class="tocnumber">10.3</span> <span class="toctext">com.android.dex.DexException: Multiple dex files define XXX</span></a></li>
<li class="toclevel-2 tocsection-20"><a href="#Could_not_resolve_all_dependencies_for_configuration_.27:_debugCompile.27."><span class="tocnumber">10.4</span> <span class="toctext">Could not resolve all dependencies for configuration ':_debugCompile'.</span></a></li>
<li class="toclevel-2 tocsection-21"><a href="#Could_not_find_com.android.support:support-v4:XXX"><span class="tocnumber">10.5</span> <span class="toctext">Could not find com.android.support:support-v4:XXX</span></a></li>
<li class="toclevel-2 tocsection-22"><a href="#ERROR:_In_.3Cdeclare-styleable.3E_FontFamilyFont.2C_unable_to_find_attribute_android:font"><span class="tocnumber">10.6</span> <span class="toctext">ERROR: In &lt;declare-styleable&gt; FontFamilyFont, unable to find attribute android:font</span></a></li>
<li class="toclevel-2 tocsection-23"><a href="#Error:_Could_not_find_gradle_wrapper_within_Android_SDK._Might_need_to_update_your_Android_SDK."><span class="tocnumber">10.7</span> <span class="toctext">Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.</span></a></li>
<li class="toclevel-2 tocsection-24"><a href="#Could_not_find_com.android.support:support-v4:27.1.0"><span class="tocnumber">10.8</span> <span class="toctext">Could not find com.android.support:support-v4:27.1.0</span></a></li>
<li class="toclevel-2 tocsection-25"><a href="#Error:_not_found:_make"><span class="tocnumber">10.9</span> <span class="toctext">Error: not found: make</span></a></li>
<li class="toclevel-2 tocsection-26"><a href="#Current_working_directory_is_not_a_Cordova-based_project."><span class="tocnumber">10.10</span> <span class="toctext">Current working directory is not a Cordova-based project.</span></a></li>
<li class="toclevel-2 tocsection-27"><a href="#ReferenceError:_internalBinding_is_not_defined"><span class="tocnumber">10.11</span> <span class="toctext">ReferenceError: internalBinding is not defined</span></a></li>
<li class="toclevel-2 tocsection-28"><a href="#npm_update_check_failed"><span class="tocnumber">10.12</span> <span class="toctext">npm update check failed</span></a></li>
<li class="toclevel-2 tocsection-29"><a href="#Unhandled_rejection_Error:_Command_failed:_C:.5Ccygwin64.5Cbin.5Cgit.EXE_..."><span class="tocnumber">10.13</span> <span class="toctext">Unhandled rejection Error: Command failed: C:\cygwin64\bin\git.EXE ...</span></a></li>
<li class="toclevel-2 tocsection-30"><a href="#The_product_name_change_.28.3Cname.3E_tag.29_in_config.xml_is_not_supported_dynamically"><span class="tocnumber">10.14</span> <span class="toctext">The product name change (&lt;name&gt; tag) in config.xml is not supported dynamically</span></a></li>
<li class="toclevel-2 tocsection-31"><a href="#Failed_to_install_.27cordova-plugin-file-transfer.27:_CordovaError:_Version_of_installed_plugin:_.22cordova-plugin-file.404.3.3.22_does_not_satisfy_dependency_plugin_requirement_.22cordova-plugin-file.40.3E.3D5.0.0.22."><span class="tocnumber">10.15</span> <span class="toctext">Failed to install 'cordova-plugin-file-transfer': CordovaError: Version of installed plugin: "cordova-plugin-file@4.3.3" does not satisfy dependency plugin requirement "cordova-plugin-file@&gt;=5.0.0".</span></a></li>
<li class="toclevel-2 tocsection-32"><a href="#doc.find_is_not_a_function"><span class="tocnumber">10.16</span> <span class="toctext">doc.find is not a function</span></a></li>
<li class="toclevel-2 tocsection-33"><a href="#Mac:_linker_code_failed_with_exit_code_1"><span class="tocnumber">10.17</span> <span class="toctext">Mac: linker code failed with exit code 1</span></a></li>
<li class="toclevel-2 tocsection-34"><a href="#Windows:_npm_start_hangs_after_.22Starting_.27watch.27.22"><span class="tocnumber">10.18</span> <span class="toctext">Windows: npm start hangs after "Starting 'watch'"</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-35"><a href="#See_also"><span class="tocnumber">11</span> <span class="toctext">See also</span></a></li>
</ul>
</div>

<h2><span class="mw-headline" id="Overview">Overview</span></h2>
<p>The structure of this page is
</p>
<ul><li> the first part, up to the point where you get the <tt>npm start</tt> command to work is what you need to be able to do development on the app and test it in a browser.</li>
<li> the second part is about how to build a version of the app that can be run on a device.</li>
<li> then at the end is a list of troubleshooting advice. If you encounter a problem that is not already listed, please consider adding it.</li></ul>
<p>The majority of your development will be done using a browser. You will probably only begin to use an emulator once you need to simulate a real mobile device.
</p><p>If you are just <a href="/dev/Mobile_support_for_plugins" title="Mobile support for plugins">adding mobile support to plugins</a>, remember that most of your development can be done using the online pre-built version at <a rel="nofollow" class="external free" href="https://mobileapp.moodledemo.net/">https://mobileapp.moodledemo.net/</a> (with Chrome or Chromium). However, if you want to be able to to write <a href="/dev/Acceptance_testing_for_the_mobile_app" title="Acceptance testing for the mobile app">automated acceptance tests for the app</a> then you need to follow this page at least as far as getting the <tt>npm start</tt> command to work on this page.
</p>
<h2><span class="mw-headline" id="Requirements">Requirements</span></h2>
<p>Windows tip: ingore any use of the sudo command below. Just use the command without it. Most things work that way. And if they don't, try in a Powershell window that you have opened with 'Run as administrator ...'.
</p>
<h3><span class="mw-headline" id="Install_a_browser_for_development">Install a browser for development</span></h3>
<p>We recommend Chromium browser (Google Chrome open source version) <a rel="nofollow" class="external free" href="https://download-chromium.appspot.com/">https://download-chromium.appspot.com/</a>
Please, read <a href="/dev/Moodle_Mobile_development_using_Chrome_or_Chromium" title="Moodle Mobile development using Chrome or Chromium">Moodle_Mobile_development_using_Chrome_or_Chromium</a> for more information
</p>
<h3><span class="mw-headline" id="Install_git">Install git</span></h3>
<p><a rel="nofollow" class="external free" href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
</p>
<h3><span class="mw-headline" id="Install_Node.js">Install Node.js</span></h3>
<p>On Linux we recommend you use <a rel="nofollow" class="external text" href="https://github.com/creationix/nvm">nvm</a> - this lets you switch Node versions, and makes the installation a bit easier than the official installation route.
</p>
<pre>nvm install node
nvm use 11 # This is important, npm commands will not work in other versions
</pre>
<p>On Windows we recommend you use <a rel="nofollow" class="external free" href="https://github.com/coreybutler/nvm-windows">https://github.com/coreybutler/nvm-windows</a>. Same nvm commands as for Linux.
</p><p>On Mac we recommend installing NodeJS via Macports.
</p><p>(It may seem simpler and easier to install directly from <a rel="nofollow" class="external free" href="http://nodejs.org">http://nodejs.org</a>, but actually it is more tricky to get that to work. If you have previously installed Node directly, and want to switch to nvm, you need to uninstall node completely before installing nvm - or Google for trouble-shooting instructions, for example <a rel="nofollow" class="external free" href="https://github.com/coreybutler/nvm-windows/issues/58#issuecomment-272608696">https://github.com/coreybutler/nvm-windows/issues/58#issuecomment-272608696</a>.)
</p>
<h3><span class="mw-headline" id="Windows_only:_Native_build_dependencies">Windows only: Native build dependencies</span></h3>
<p>node-gyp requires native build tools for your platform.  If you're developing on Mac or Linux, you'll probably have these already (<a rel="nofollow" class="external text" href="https://github.com/nodejs/node-gyp/blob/master/README.md">refer to the docs if you don't</a>). On Windows, run the following command as administrator (in cmd or Powershell):
</p>
<pre>npm install --global --production windows-build-tools
</pre>
<p>Warning! this installer can take a very, very long time to run. We were seeing it take hours. Literally. Be prepared to be very patient. Don't just make the natural assumption that it has crashed.
</p>
<h3><span class="mw-headline" id="Mac_only:_Push_notifications">Mac only: Push notifications</span></h3>
<p>Phonegap plugin push 1.9.0 requires CocoaPods to work on a Mac. The installation steps can be found in <a rel="nofollow" class="external free" href="https://cocoapods.org/">https://cocoapods.org/</a>
</p>
<pre>sudo gem install cocoapods
pod setup
</pre>
<p>Please note that for compiling the app in Mac you need to open the <b>Moodle.xcworkspace</b> file, more information here: <a rel="nofollow" class="external text" href="http://tracker.aldermin.com/browse/MOBILE-1970">MOBILE-1970</a>
</p>
<h3><span class="mw-headline" id="Linux_only:_libsecret">Linux only: libsecret</span></h3>
<p>In Moodle App 3.9.3 we'll include a new script to easily push diff URLs to Moodle Tracker (Jira): <a href="/dev/Moodle_App_scripts:_gulp_push" title="Moodle App scripts: gulp push">gulp push</a>. One of the libraries used requires the libsecret library to be installed in Linux before running <i>npm install</i>. Depending on your distribution, you will need to run the following command:
</p><p>Debian/Ubuntu: sudo apt-get install libsecret-1-dev
</p><p>Red Hat-based: sudo yum install libsecret-devel
</p><p>Arch Linux: sudo pacman -S libsecret
</p>
<h2><span class="mw-headline" id="Clone_the_app_base_code">Clone the app base code</span></h2>
<p>Clone the code base into a local directory in your computer.
It may be a good idea to work from the integration branch rather than master.
</p>
<pre>git clone <a rel="nofollow" class="external free" href="https://github.com/moodlehq/moodleapp.git">https://github.com/moodlehq/moodleapp.git</a> moodleapp
cd moodleapp
git checkout integration
</pre>
<h2><span class="mw-headline" id="Setup_the_environment">Setup the environment</span></h2>
<p>Please, note that if you are creating a custom app with a custom URL scheme, you should edit the /package.json and /config.xml files and specify there your custom URL_SCHEME (replacing the existing value) and your <a rel="nofollow" class="external text" href="https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/INSTALLATION.md">GCMPN SENDER_ID</a>.
</p><p>The following command must be run in the project's root folder:
</p>
<pre>npm run setup
</pre>
<p>If this fails, you can see what it is doing by looking at the 'scripts' section in package.json. At the moment it is doing <tt>npm install &amp;&amp; npx cordova prepare &amp;&amp; npx gulp</tt> (installing npm dependencies, preparing cordova and running default gulp tasks). That is, running three commands back-to-back, but only carrying on if the previous one succeeds completely. You can try running the three commands separately. If you do, <tt>npm start</tt> (see below) may work, even if <tt>npx cordova prepare</tt> gives errors. You only really need <tt>npx cordova prepare</tt> to work if you are going to go on and build the app for a mobile device or emulator.
</p>
<h2><span class="mw-headline" id="Open_the_app_in_the_browser">Open the app in the browser</span></h2>
<p>First start Chromium via the command line using the custom parameters as is mentioned here: <a href="/dev/Moodle_Mobile_development_using_Chrome_or_Chromium" title="Moodle Mobile development using Chrome or Chromium">Moodle Mobile development using Chrome or Chromium</a>
</p><p>Then, start the Ionic server:
</p>
<pre>npm start
</pre>
<p>Congratulations! Now that you have got to the point where the <tt>npm start</tt> command works, you can start doing development on the app. You only need to read the rest of the page if you want to build packaged versions of the app.
</p>
<h2><span class="mw-headline" id="Updating_ionic_and_cordova">Updating ionic and cordova</span></h2>
<p>Update project platforms:
</p>
<pre>npx ionic cordova platform remove android
npx ionic cordova platform remove ios
npx ionic cordova platform add android
npx ionic cordova platform add ios
</pre>
<h2><span class="mw-headline" id="Updating_plugins">Updating plugins</span></h2>
<pre>npx cordova plugin remove your_plugin_id
npx cordova plugin add your_plugin_id
</pre>
<h2><span class="mw-headline" id="Building_for_Android_and_iOS">Building for Android and iOS</span></h2>
<p>Please see the guides below to be able to build for Android and iOS using the command line:
</p><p>Android: <a rel="nofollow" class="external free" href="https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html">https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html</a>
</p><p>iOS: <a rel="nofollow" class="external free" href="https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html">https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html</a>
</p><p>For convenience, you can use the following commands:
</p>
<pre>npm run dev:android
npm run dev:ios
npm run prod:android # Uses aot compilation, read below
npm run prod:ios        # Uses aot compilation, read below
</pre>
If the build fails, please run <pre>npx cordova requirements</pre> to check that you fulfilled all requirements for the platform.
<p>If you get errors while building, please see the Troubleshooting section below.
</p><p>If using <b>Ubuntu</b> you should install the packages: <tt>gradle</tt> and <tt>libgradle-android-plugin-java</tt> (and all its dependencies) to build.
</p>
<h2><span class="mw-headline" id="Compiling_using_AOT">Compiling using AOT</span></h2>
<p>Angular has 2 ways of compiling: JIT and AOT. Running <tt>npm start</tt> or <tt>npx ionic build</tt> compiles using JIT by default, which is faster to compile but the app takes longer to start.
</p><p>When building for release you should always compile using AOT, otherwise the app can take too long to start in some devices. The default AOT compiling causes some issues with the database activity and the <a href="/dev/Mobile_support_for_plugins" title="Mobile support for plugins">Mobile support for plugins</a>, so you have to modify a couple of files in order to make this work.
</p><p>First you need to open the file: <i>node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js</i>. Search the variable called "<i>_NO_RESOURCE_LOADER</i>", you'll see it has a function named "<i>get</i>" with this line:
</p>
<pre class="javascript" style="font-family:monospace;"><span style="color: #000066; font-weight: bold;">throw</span> <span style="color: #000066; font-weight: bold;">new</span> Error<span style="color: #009900;">(</span><span style="color: #3366CC;">"No ResourceLoader implementation has been provided. Can't read the url <span style="color: #000099; font-weight: bold;">\"</span>"</span> <span style="color: #339933;">+</span> url <span style="color: #339933;">+</span> <span style="color: #3366CC;">"<span style="color: #000099; font-weight: bold;">\"</span>"</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre>
<p>Remove that line and put this code instead:
</p>
<pre class="javascript" style="font-family:monospace;">url <span style="color: #339933;">=</span> <span style="color: #3366CC;">'templates/'</span> <span style="color: #339933;">+</span> url<span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #000066; font-weight: bold;">var</span> resolve<span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> reject<span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> promise <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> Promise<span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span>res<span style="color: #339933;">,</span> rej<span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
            resolve <span style="color: #339933;">=</span> res<span style="color: #339933;">;</span>
            reject <span style="color: #339933;">=</span> rej<span style="color: #339933;">;</span>
        <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">var</span> xhr <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> XMLHttpRequest<span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">open</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'GET'</span><span style="color: #339933;">,</span> url<span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">responseType</span> <span style="color: #339933;">=</span> <span style="color: #3366CC;">'text'</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">onload</span> <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
            <span style="color: #006600; font-style: italic;">// responseText is the old-school way of retrieving response (supported by IE8 &amp; 9)</span>
            <span style="color: #006600; font-style: italic;">// response/responseType properties were introduced in ResourceLoader Level2 spec (supported by IE10)</span>
            <span style="color: #000066; font-weight: bold;">var</span> response <span style="color: #339933;">=</span> xhr.<span style="color: #660066;">response</span> <span style="color: #339933;">||</span> xhr.<span style="color: #660066;">responseText</span><span style="color: #339933;">;</span>
            <span style="color: #006600; font-style: italic;">// normalize IE9 bug (http://bugs.jquery.com/ticket/1450)</span>
            <span style="color: #000066; font-weight: bold;">var</span> status <span style="color: #339933;">=</span> xhr.<span style="color: #660066;">status</span> <span style="color: #339933;">===</span> <span style="color: #CC0000;">1223</span> <span style="color: #339933;">?</span> <span style="color: #CC0000;">204</span> <span style="color: #339933;">:</span> xhr.<span style="color: #660066;">status</span><span style="color: #339933;">;</span>
            <span style="color: #006600; font-style: italic;">// fix status code when it is 0 (0 status is undocumented).</span>
            <span style="color: #006600; font-style: italic;">// Occurs when accessing file resources or on Android 4.1 stock browser</span>
            <span style="color: #006600; font-style: italic;">// while retrieving files from application cache.</span>
            <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>status <span style="color: #339933;">===</span> <span style="color: #CC0000;">0</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
                status <span style="color: #339933;">=</span> response <span style="color: #339933;">?</span> <span style="color: #CC0000;">200</span> <span style="color: #339933;">:</span> <span style="color: #CC0000;">0</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
            <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span><span style="color: #CC0000;">200</span> <span style="color: #339933;">&lt;=</span> status <span style="color: #339933;">&amp;&amp;</span> status <span style="color: #339933;">&lt;=</span> <span style="color: #CC0000;">300</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
                resolve<span style="color: #009900;">(</span>response<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
            <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">{</span>
                reject<span style="color: #009900;">(</span><span style="color: #3366CC;">"Failed to load "</span> <span style="color: #339933;">+</span> url<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">}</span>
        <span style="color: #009900;">}</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">onerror</span> <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span> reject<span style="color: #009900;">(</span><span style="color: #3366CC;">"Failed to load "</span> <span style="color: #339933;">+</span> url<span style="color: #009900;">)</span><span style="color: #339933;">;</span> <span style="color: #009900;">}</span><span style="color: #339933;">;</span>
        xhr.<span style="color: #660066;">send</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
        <span style="color: #000066; font-weight: bold;">return</span> promise<span style="color: #339933;">;</span></pre>
<p>We tried to replace the default loader with our own implementation, but we weren't able to make the compiler work so the only solution left was to modify the default one.
</p><p>Now you need to open the file: <i>node_modules/@ionic/app-scripts/dist/util/config.js</i>. In that file you need to remove the <i>context.isProd</i> condition from the options <i>optimizeJs</i>. So the final code for that part should be like this:
</p>
<pre class="javascript" style="font-family:monospace;">context.<span style="color: #660066;">optimizeJs</span> <span style="color: #339933;">=</span> <span style="color: #009900;">[</span>
        context.<span style="color: #660066;">optimizeJs</span><span style="color: #339933;">,</span>
        hasArg<span style="color: #009900;">(</span><span style="color: #3366CC;">'--optimizeJs'</span><span style="color: #009900;">)</span>
    <span style="color: #009900;">]</span>.<span style="color: #660066;">find</span><span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">(</span>val<span style="color: #009900;">)</span> <span style="color: #009900;">{</span> <span style="color: #000066; font-weight: bold;">return</span> <span style="color: #000066; font-weight: bold;">typeof</span> val <span style="color: #339933;">===</span> <span style="color: #3366CC;">'boolean'</span><span style="color: #339933;">;</span> <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre>
<p>We want to compile in production mode but without optimizing Javascript because that breaks our plugins support. However, Ionic doesn't let you do that, so the only option is to do this change.
</p><p>With these changes done you can now compile using production mode:
</p>
<pre class="php" style="font-family:monospace;">npm run ionic<span style="color: #339933;">:</span>build <span style="color: #339933;">--</span> <span style="color: #339933;">--</span>prod</pre>
<p>This command will generate the app files and put them inside <i>www</i> folder. If you now want to install that app in a real device you can run "<i>npx cordova run android</i>" or "<i>npx cordova build ios</i>" (please don't use "<i>npx ionic cordova ...</i>" nor "<i>npm start</i>" because it will override your build files!).
</p>
<h2><span class="mw-headline" id="Troubleshooting">Troubleshooting</span></h2>
<h3><span class="mw-headline" id="Strange_NPM_errors">Strange NPM errors</span></h3>
<p>To get more debug output from npm commands, see <a rel="nofollow" class="external free" href="https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties">https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties</a>. In particular try adding <tt>--loglevel verbose</tt> (or <tt>--loglevel info</tt> or <tt>--loglevel silly</tt>) to the command-line.
</p>
<h3><span class="mw-headline" id="Error:_libsass_bindings_not_found._Try_reinstalling_node-sass.3F">Error: libsass bindings not found. Try reinstalling node-sass?</span></h3>
<p>Sometimes running the following command will fix the problem:
</p>
<pre>npm rebuild node-sass
</pre>
<p>If the issue persists, please read: <a rel="nofollow" class="external free" href="http://fettblog.eu/gulp-and-node4-first-aid/">http://fettblog.eu/gulp-and-node4-first-aid/</a>, alternatively you must be sure that you installed Node v0.12
</p>
<h3><span class="mw-headline" id="com.android.dex.DexException:_Multiple_dex_files_define_XXX">com.android.dex.DexException: Multiple dex files define XXX</span></h3>
<p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
</p>
<pre> configurations {
     all*.exclude group: 'com.android.support', module: 'support-v4'
 }
</pre>
<h3><span class="mw-headline" id="Could_not_resolve_all_dependencies_for_configuration_.27:_debugCompile.27.">Could not resolve all dependencies for configuration ':_debugCompile'.</span></h3>
<p>Open the Android SDK Manager and make sure you have installed: Android Support Repository, Android Support Library, Google Play Services and Google Repository.
</p>
<h3><span class="mw-headline" id="Could_not_find_com.android.support:support-v4:XXX">Could not find com.android.support:support-v4:XXX</span></h3>
<p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
</p>
<pre> configurations.all {
     resolutionStrategy.force 'com.android.support:support-v4:24.0.0'
 }
</pre>
<h3><span class="mw-headline" id="ERROR:_In_.3Cdeclare-styleable.3E_FontFamilyFont.2C_unable_to_find_attribute_android:font">ERROR: In &lt;declare-styleable&gt; FontFamilyFont, unable to find attribute android:font</span></h3>
<p>Open the file <i>platforms/android/build.gradle</i> and add this code at the end:
</p>
<pre>android {
    compileSdkVersion 26
    buildToolsVersion "26.0.1"
}
</pre>
<h3><span class="mw-headline" id="Error:_Could_not_find_gradle_wrapper_within_Android_SDK._Might_need_to_update_your_Android_SDK.">Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.</span></h3>
<p>1. Download Android studio - <a rel="nofollow" class="external free" href="https://developer.android.com/studio/">https://developer.android.com/studio/</a>
</p><p>2. Copy the folder android-studio/plugins/android/lib/templates
</p><p>3. Paste in the folder android-sdk-folder/Sdk/tools
</p>
<h3><span class="mw-headline" id="Could_not_find_com.android.support:support-v4:27.1.0">Could not find com.android.support:support-v4:27.1.0</span></h3>
<p>Open the file <i>platforms/android/build.gradle</i> and configure like this:
</p>
<pre> allprojects {
     repositories {
         jcenter()
         maven {
             url "<a rel="nofollow" class="external free" href="https://maven.google.com">https://maven.google.com</a>"
         }
     }
 }
</pre>
<h3><span class="mw-headline" id="Error:_not_found:_make">Error: not found: make</span></h3>
<p>If you see this error in Ubuntu, run <tt>sudo apt-get install build-essential</tt> and retry.
</p>
<h3><span class="mw-headline" id="Current_working_directory_is_not_a_Cordova-based_project.">Current working directory is not a Cordova-based project.</span></h3>
<p>If you see this error during <tt>npm setup</tt>, run <tt>mkdir www</tt> and retry.
</p>
<h3><span class="mw-headline" id="ReferenceError:_internalBinding_is_not_defined">ReferenceError: internalBinding is not defined</span></h3>
<p>This <a rel="nofollow" class="external text" href="https://stackoverflow.com/questions/53146394/node-app-fails-to-run-on-mojave-referenceerror-internalbinding-is-not-defined">seems to be</a> an error with 'natives' prior to 1.1.6. I fixed it using <tt>npm install natives@1.1.6</tt>.
</p>
<h3><span class="mw-headline" id="npm_update_check_failed">npm update check failed</span></h3>
<p>I got the error
</p>
<pre>│                   npm update check failed                   │
│             Try running with sudo or get access             │ 
│            to the local update config store via             │
│ sudo chown -R $USER:$(id -gn $USER) C:\Users\username\.config │
</pre>
<p>on Windows because I installed too much as admin, and the suggested command does not work on Windows. The is to manually check the ownership of all the files in C:\Users\username\.config\configstore. In my case it was update-notifier-npm.json which got changed to be owned by Administrator.
</p>
<h3><span class="mw-headline" id="Unhandled_rejection_Error:_Command_failed:_C:.5Ccygwin64.5Cbin.5Cgit.EXE_...">Unhandled rejection Error: Command failed: C:\cygwin64\bin\git.EXE ...</span></h3>
<p>You need to heed the advice at <a rel="nofollow" class="external free" href="https://www.npmjs.com/package/npm#installing-on-cygwin">https://www.npmjs.com/package/npm#installing-on-cygwin</a>. Cygwin users are not welcome in the Node world. However, you just need to ensure that Msysgit is on your windows path and that the cygwin bin folder is not. Then always use another shell like Powershell for your Moodle mobile development. (You don't need your Cygwin bin folder on the Windows path. It automatically gets added to the path when you lauch Cygwin bash.)
</p>
<h3><span class="mw-headline" id="The_product_name_change_.28.3Cname.3E_tag.29_in_config.xml_is_not_supported_dynamically">The product name change (&lt;name&gt; tag) in config.xml is not supported dynamically</span></h3>
<p>According to Google, this happens when you create the iOS platform with a certain &lt;name&gt; and then you change that name in config.xml. It's weird that the installation process does that, it should create the platform with the right name unless it was changed manually.
</p><p>The solution seems to be removing and adding the iOS platform again:
</p>
<pre>npx ionic platform remove ios
npx ionic platform add ios
</pre>
<p>Note that this does not seem to prevent <tt>ionic --serve</tt> from serving a working app if you run gulp after <tt>npm run setup</tt> has failed with this error.
</p>
<h3><span class="mw-headline" id="Failed_to_install_.27cordova-plugin-file-transfer.27:_CordovaError:_Version_of_installed_plugin:_.22cordova-plugin-file.404.3.3.22_does_not_satisfy_dependency_plugin_requirement_.22cordova-plugin-file.40.3E.3D5.0.0.22.">Failed to install 'cordova-plugin-file-transfer': CordovaError: Version of installed plugin: "cordova-plugin-file@4.3.3" does not satisfy dependency plugin requirement "cordova-plugin-file@&gt;=5.0.0".</span></h3>
<p>The <i>cordova-plugin-file</i> version specified in config.xml is 6.0.1, for some reason the installation process installed a wrong version for that plugin. You can manually install the <i>cordova-plugin-file</i> plugin like this:
</p>
<pre>npx cordova plugin remove cordova-plugin-file
npx cordova plugin add cordova-plugin-file@6.0.1
</pre>
<p>Please notice that if there is any plugin installed that depends on <i>cordova-plugin-file</i> you'll have to remove and re-add them too.
</p><p>Note that this does not seem to prevent <tt>npm start</tt> from serving a working app if you run <tt>npx gulp</tt> after <tt>npm run setup</tt> has failed with this error.
</p>
<h3><span class="mw-headline" id="doc.find_is_not_a_function">doc.find is not a function</span></h3>
<p>This happens in some environments, the solution is to run <tt>npx cordova platform add ios</tt> before running <tt>npm run setup</tt> (but you'll need to run <tt>npm install</tt> if you hadn't). If you get this error, you'll need to remove the platforms and plugins folders before running this sequence of commands to fix your environment.
</p><p><a rel="nofollow" class="external text" href="https://stackoverflow.com/questions/47404622/edit-config-for-ios-usage-descriptions-doc-find-is-not-a-function">Find more about this in StackOverflow</a>
</p>
<h3><span class="mw-headline" id="Mac:_linker_code_failed_with_exit_code_1">Mac: linker code failed with exit code 1</span></h3>
<p>If you get this error when trying to build the Moodle app with XCode, some dependencies might not have installed correctly.
</p><p>Ensure you have followed the <a rel="nofollow" class="external text" href="https://interactivegroup.github.io/almsmobileapp/dev/Setting_up_your_development_environment_for_Moodle_Mobile_2#Mac_only:_Push_notifications%7C">Mac only: Push notifications</a> steps above (particularly opening the .xcworkspace file rather than the .xcodeproj file). Then run the following:
</p>
<pre> npm run setup
 cd platforms/ios
 pod install
</pre>
<p>Now try running the build again in XCode.
</p>
<h3><span class="mw-headline" id="Windows:_npm_start_hangs_after_.22Starting_.27watch.27.22">Windows: <pre>npm start</pre> hangs after "Starting 'watch'"</span></h3>
<p>This appears to have happened since the move to npx. Try running the npx commands generated by npm run directly in bash:
</p>
<pre> npx gulp watch &amp; npx ionic-app-scripts serve -b --devapp --address=0.0.0.0
</pre>
<h2><span class="mw-headline" id="See_also">See also</span></h2>
<p><a rel="nofollow" class="external free" href="http://ionicframework.com/docs/cli/">http://ionicframework.com/docs/cli/</a>
</p>
<!-- 
NewPP limit report
Cached time: 20201202140831
Cache expiry: 86400
Dynamic content: false
CPU time usage: 0.032 seconds
Real time usage: 0.037 seconds
Preprocessor visited node count: 203/1000000
Preprocessor generated node count: 306/1000000
Post‐expand include size: 584/2097152 bytes
Template argument size: 0/2097152 bytes
Highest expansion depth: 3/40
Expensive parser function count: 0/100
-->

<!-- 
Transclusion expansion time report (%,ms,calls,template)
100.00%    4.488      1 - -total
 49.76%    2.233      1 - Template:Moodle_Mobile
 46.95%    2.107      1 - Template:Moodle_Mobile_3.5
-->

<!-- Saved in parser cache with key docs_development:pcache:idhash:6170-0!*!0!!en!*!* and timestamp 20201202140831 and revision id 58085
 -->
</div><div class="printfooter">
Retrieved from "<a dir="ltr" href="https://interactivegroup.github.io/almsmobileapp/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;oldid=58085">https://interactivegroup.github.io/almsmobileapp/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;oldid=58085</a>"</div>
		<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/dev/Special:Categories" title="Special:Categories">Categories</a>: <ul><li><a href="/dev/Category:Mobile" title="Category:Mobile">Mobile</a></li><li><a href="/dev/Category:Moodle_App_3.5" title="Category:Moodle App 3.5">Moodle App 3.5</a></li></ul></div></div>		<!-- end content -->
				<div class="visualClear"></div>
	</div>
</div></div>
<div id="column-one" class="row-fluid">
	<div id="p-cactions" class="portlet">
				<h5>Views</h5>
		<div class="pBody">
			<ul><li id="ca-nstab-main" class="selected"><a href="/dev/Setting_up_your_development_environment_for_Moodle_Mobile_2" title="View the content page [ctrl-option-c]" accesskey="c">Page</a></li><li id="ca-talk" class="new"><a href="/dev/index.php?title=Talk:Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;action=edit&amp;redlink=1" title="Discussion about the content page [ctrl-option-t]" accesskey="t">Discussion</a></li><li id="ca-viewsource"><a href="/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;action=edit" title="This page is protected.
You can view its source [ctrl-option-e]" accesskey="e">View source</a></li><li id="ca-history"><a href="/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;action=history" title="Past revisions of this page [ctrl-option-h]" accesskey="h">History</a></li></ul>		</div>
	</div>
	<div class="portlet" id="p-personal">
		<h5>Personal tools</h5>
		<div class="pBody">
			<ul><li><a href="/dev/index.php?title=Special:UserLogin&amp;returnto=Setting+up+your+development+environment+for+Moodle+Mobile+2">Log in</a></li></ul>		</div>
	</div>
	<div class="portlet bottom-portlet span6" id="p-navigation">
		<h5>Navigation</h5>
		<div class="pBody">
				<ul>
							<li id="n-mainpage-description"><a href="/dev/Main_Page" title="Visit the main page [ctrl-option-z]" accesskey="z">Main page</a></li>
							<li id="n-recentchanges"><a href="/dev/Special:RecentChanges" title="A list of recent changes in the wiki [ctrl-option-r]" accesskey="r">Recent changes</a></li>
							<li id="n-Moodle-Docs-3.10"><a href="https://interactivegroup.github.io/almsmobileapp/310/en">Moodle Docs 3.10</a></li>
							<li id="n-Docs-overview"><a href="https://interactivegroup.github.io/almsmobileapp/overview/">Docs overview</a></li>
						</ul>
				</div>
	</div>
	<div class="portlet bottom-portlet span6" id="p-tb">
		<h5>Tools</h5>
		<div class="pBody">
				<ul>
				<li id="t-whatlinkshere"><a href="/dev/Special:WhatLinksHere/Setting_up_your_development_environment_for_Moodle_Mobile_2" title="A list of all wiki pages that link here [ctrl-option-j]" accesskey="j">What links here</a></li>
				<li id="t-recentchangeslinked"><a href="/dev/Special:RecentChangesLinked/Setting_up_your_development_environment_for_Moodle_Mobile_2" title="Recent changes in pages linked from this page [ctrl-option-k]" accesskey="k">Related changes</a></li>
<li id="t-specialpages"><a href="/dev/Special:SpecialPages" title="A list of all special pages [ctrl-option-q]" accesskey="q">Special pages</a></li>
				<li id="t-print"><a href="/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;printable=yes" rel="alternate" title="Printable version of this page [ctrl-option-p]" accesskey="p">Printable version</a></li>				<li id="t-permalink"><a href="/dev/index.php?title=Setting_up_your_development_environment_for_Moodle_Mobile_2&amp;oldid=58085" title="Permanent link to this revision of the page">Permanent link</a></li>			</ul>
		</div>
	</div>
<div id="p-search" role="search">
	<h3><label for="searchInput">Search</label></h3>
	<form action="/dev/index.php" id="searchform">
		<div id="simpleSearch">
						<input name="search" placeholder="Search" title="Search MoodleDocs [ctrl-option-f]" accesskey="f" id="searchInput" autocomplete="off">						<button type="submit" name="button" title="Search the pages for this text" id="searchButton"><img src="/dev/skins/moodledocs/images/search-ltr.png?305" alt="Search" width="12" height="13"></button>						<input type="hidden" name="title" value="Special:Search">
		</div>
	</form>
</div>
</div><!-- end of the left (by default at least) column -->
<div class="visualClear"></div>
<div id="footer">
	<div id="f-poweredbyico">
		<a href="//www.mediawiki.org/"><img src="/dev/resources/assets/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/dev/resources/assets/poweredby_mediawiki_132x47.png 1.5x, /dev/resources/assets/poweredby_mediawiki_176x62.png 2x" width="88" height="31"></a>
	</div>
	<ul id="f-list">
		<li id="lastmod"> This page was last modified on 24 November 2020, at 09:56.</li>
		<li id="copyright">Content is available under <a class="external" rel="nofollow" href="https://interactivegroup.github.io/almsmobileapp/dev/License">GNU General Public License</a> unless otherwise noted.</li>
		<li id="privacy"><a href="/dev/MoodleDocs:Privacy_policy" title="MoodleDocs:Privacy policy">Privacy</a></li>
		<li id="about"><a href="/dev/MoodleDocs:About" title="MoodleDocs:About">About the Dev docs</a></li>
		<li id="disclaimer"><a href="/dev/MoodleDocs:General_disclaimer" title="MoodleDocs:General disclaimer">Disclaimers</a></li>
	</ul>
</div>
</div>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.loader.state({"user":"ready","user.groups":"ready"});mw.loader.load(["mediawiki.toc","mediawiki.action.view.postEdit","site","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","mediawiki.searchSuggest","custom.editortoolbar","ext.moderation.notify","ext.moderation.notify.desktop","skins.moodledocs.bootstrap"]);});</script><script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgBackendResponseTime":113});});</script>
<!-- final footer start -->
<div id="moodlesitelink"></div>
<!-- final footer end -->

</div><!-- #page -->
<!-- google analytics start -->
<script type="text/javascript">var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script><script src="https://ssl.google-analytics.com/ga.js" type="text/javascript"></script><script type="text/javascript">try {var pageTracker = _gat._getTracker("UA-72764-4");pageTracker._trackPageview();} catch(err) {}</script>
<!-- google analytics end -->

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"05ab6e1949","applicationID":"84455028","transactionName":"YwBabBRSCEFYAkVaWlpKeVsSWglcFgBSR1xbCxdOD1YR","queueTime":0,"applicationTime":114,"atts":"T0dZGlxIG08=","errorBeacon":"bam-cell.nr-data.net","agent":""}</script><div class="suggestions" style="display: none; font-size: 14px;"><div class="suggestions-results"></div><div class="suggestions-special"></div></div></body></html>