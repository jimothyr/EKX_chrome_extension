function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}



 window.setTimeout(function(){

 	var title ="";
 	var index="";

 	switch (window.location.hostname){
 			case "www.smarternetworks.org":
	 			title =  document.getElementsByTagName("h1")[0].textContent
	 			index = '.tab-content';
	 			container= '#EKX_mywidget';
	 			addGlobalStyle('#EKX_mywidget {position: fixed;right: 0;width: 100px;top: 200px; }');
 			break;
 			case "ukerc.rl.ac.uk":
	 			var title = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].textContent;
	 			index = '.resultsblock';
	 			container= '#EKX_mywidget';
	 			addGlobalStyle('#EKX_mywidget {position: fixed;right: 0;width: 100px;top: 200px; }');
 			break;
 	}


    var EKXWidget = new ekxWidget({
 				container : [container],
 				follow : ['pdf'],
                index : [index],
                title:title})
},2000)




