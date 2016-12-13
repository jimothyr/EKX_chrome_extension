chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("loading EKX widget extension");
		// ----------------------------------------------------------
	
(function() {
    'use strict';
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();
 
    // add div into side bar
    if(!QueryString.EKXSHOW){ window.location.search = window.location.search + "&EKXSHOW=SHOW&EKXV=5";}

  

  var script = document.createElement('script');
  var head = document.getElementsByTagName('head')[0];
  script.type = 'text/javascript';
  script.src="https://host-ekx.rhcloud.com/controller.js";
  head.appendChild(script);
 // script.onreadystatechange = loadWidget();
  script.onload = loadWidget();

})();

	}
	}, 10);
});

function loadWidget(){
	  var script = document.createElement('script');
	  var head = document.getElementsByTagName('head')[0];
	  script.type = 'text/javascript';
	//  script.textContent=''

	  script.src=chrome.extension.getURL('src/inject/widgetscript.js');
	  head.appendChild(script);


	// chrome.tabs.executeScript(null, {file: 'src/inject/widgetscript.js'});
		// console.log("widget_loading")
  //   var title = document.getElementsByTagName("h1")[0].textContent;
  //   var EKXWidget = new ekxWidget({
 	// 			container : ['#EKX_mywidget'],
 	// 			follow : ['pdf'],
  //               index : ['.tab-content'],
  //               title:title
 //			});
}