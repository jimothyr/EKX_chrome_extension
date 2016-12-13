console.log("controller_loaded");
var EKXWIDGET_bURL = 'https://host-ekx.rhcloud.com';
if(location.hostname == '' || location.hostname == 'localhost'){
	EKXWIDGET_bURL = 'http://localhost:3000';
}

var EKXWIDGET_pURL = EKXWIDGET_bURL+'/widget/';
function ekxWidget(args){
	args.timeNow = Date.now();
	args.latestV = '5';
	this.getQS = function(name){	    
	    url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	};
	this.getJS = function(version, callback){
		var head = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = EKXWIDGET_pURL+'js/V'+version+'/widget.js';
	    script.onreadystatechange = callback;
	    script.onload = callback;
	    head.appendChild(script);
	};
	if(this.getQS('EKXSHOW') != 'SHOW'){
		return false;
	}
	for(var i=0;i<args.container.length;i++){
		if(args.container[i].charAt(0) == '#'){
			document.getElementById(args.container[i].substr(1)).innerHTML = '<img src="'+EKXWIDGET_pURL+'img/loading-dots.gif" class="EKXLOADING" width="100%"/>';
		}else{
			var theseC = document.getElementsByClassName(args.container[i].substr(1));
			for(var x=0;x<theseC.length;x++){
				theseC[x].innerHTML = '<img src="'+EKXWIDGET_pURL+'img/loading-dots.gif" class="EKXLOADING" width="100%"/>';
			}
		}
	}
	
	args.version = this.getQS('EKXV') || args.latestV;
	this.getJS(args.version, function(){
		EKXFUNC.setTime('controller loaded', Date.now());
		EKXFUNC.args = args;
		EKXFUNC.controller('start widget');
	});
}

