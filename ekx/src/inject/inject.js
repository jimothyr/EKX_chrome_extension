chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("loading EKX widget extension");
		// ----------------------------------------------------------
	
// (function() {
//     'use strict';
// var QueryString = function () {
//   // This function is anonymous, is executed immediately and 
//   // the return value is assigned to QueryString!
//   var query_string = {};
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   for (var i=0;i<vars.length;i++) {
//     var pair = vars[i].split("=");
//         // If first entry with this name
//     if (typeof query_string[pair[0]] === "undefined") {
//       query_string[pair[0]] = decodeURIComponent(pair[1]);
//         // If second entry with this name
//     } else if (typeof query_string[pair[0]] === "string") {
//       var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
//       query_string[pair[0]] = arr;
//         // If third or later entry with this name
//     } else {
//       query_string[pair[0]].push(decodeURIComponent(pair[1]));
//     }
//   }
//   return query_string;
// }();
 
    // add div into side bar
    //if(!QueryString.EKXSHOW){ window.location.search = window.location.search + "&EKXSHOW=SHOW";}

  

  var script = document.createElement('script');
  // var head = document.getElementsByTagName('head')[0];
  script.onload = loadWidget();
  script.type = 'text/javascript';
  document.body.appendChild(script);
  //script.onreadystatechange = loadWidget();
 
  script.src="https://host-ekx.rhcloud.com/controller.js";

  // var script2 = document.createElement('script');
  // script2.type = 'text/javascript';
  // //  script.textContent=''
  // document.body.appendChild(script2);
  //   //script.onload = setWidget();
  // script2.src=chrome.extension.getURL('src/inject/widgetscript.js');



};

	},10);
});

function loadWidget(){
  var script = document.createElement('script');
 
	  // var head = document.getElementsByTagName('head')[0];
	  script.type = 'text/javascript';
	//  script.textContent=''
    document.body.appendChild(script);
    //script.onload = setWidget();
    script.src=chrome.extension.getURL('src/inject/widgetscript.js');
	 


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