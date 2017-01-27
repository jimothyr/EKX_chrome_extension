console.log("loaded widget setting script")

function setWidget(){
	console.log("setting widget")
	var title ="";
 	var index="";
    var container=[];
    var ignore=[];
    var ref="";
    var author="";
    var loadWidget = false; //to switch off widget where website already has widget on it
    var divloc=""
    var show=true;
    var widgetStyle='#EKX_mywidget {position: fixed;right: 0;width: 80px;top: 15px; z-index:1000}';
    var loadRef = 'no_index';
    var ekx_version =9;

    container= ['#EKX_mywidget'];
    ignore = ['#EKX_mywidget'];
 	switch (window.location.hostname){

 			case "www.smarternetworks.org":
                loadWidget = true
	 			title =  document.getElementsByTagName("h1")[0].textContent
	 			index = ['.tab-content'];
                divloc=["nav-tabs"];
	 		
 			break;
 			case "ukerc.rl.ac.uk":
                loadWidget = true
	 			title = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].textContent;
	 			ref = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[1].textContent;
                author= document.getElementsByTagName('table')[0].getElementsByTagName('tr')[14].getElementsByTagName('td')[1].textContent;
                index = ['.resultsblock','.boundary-box'];
                divloc=['resultsblock','boundary-box'];

	 		
 			break;
            case "www.ukerc.ac.uk":
                loadWidget = true
                title =  document.getElementsByTagName("h2")[0].textContent
                index = ['#content'];
                divloc=["container"]
                author=document.getElementsByTagName("h6")[0].textContent
              
            break;
            case "www.energynetworks.org":
            	loadWidget=true;
            	title =  document.getElementById("contentArea").getElementsByTagName("h2")[0].textContent;
            	index = ["#contentArea"];
            break;
            case "www.encraft.co.uk":
            break;
            case "www.cornwall-insight.com":
                loadWidget=true;
                title=document.getElementsByTagName("h3")[0].textContent.trim();
                index = [".main-copy-wrap"];
               
            break;
            case "www.gov.uk":
                loadWidget=true;
                index = ["#content"];
                title=document.getElementsByTagName("h1")[0].textContent.trim();
            break;
             case "www2.nationalgrid.com":
                loadWidget=true;
                index = [".content"];
                title=document.getElementsByTagName("h3")[0].textContent.trim();
            break;
             case "www.sciencedirect.com":
                loadWidget=true;
                index=[".abstract"];
                author=document.getElementsByClassName("authorName")[0].textContent.trim()
                title=document.getElementsByTagName("h1")[0].textContent.trim();
            break;
             case "www.energy-uk.org.uk":
                loadWidget=true;
                index=[".uk-article"];
                title=document.getElementsByTagName("h1")[0].textContent.trim();
            break;
              case "www.ofgem.gov.uk":
                loadWidget=true;
                index=["#block-system-main"];
                title=document.getElementsByTagName("h1")[0].textContent.trim();
            break;
 	}
            addGlobalStyle(widgetStyle);
		if(loadWidget){
		    makeDiv(divloc)//create div
		    //create new widget instance
		    var EKXWidget = new ekxWidget({
		 				container : container,
		 			//	follow : ['pdf'],
		                index : index,
		                title:title,
		                author:author,
		                show:show,
                        //loadRef:loadRef,
                        version:ekx_version,
                        ignore:ignore,
                        ref:ref
		            })
		    }
}

function makeDiv(obj){
    
     var e = document.createElement('div');
     e.id = 'EKX_mywidget';
     e.width ='600px';

    if (obj.length==0){document.body.appendChild(e)}
    else {
   for (i=0;i<obj.length;i++){
   	console.log("appending widget div to " + obj[i])
         if( document.getElementsByClassName(obj[i])[0]) {document.getElementsByClassName(obj[i])[0].appendChild(e)}
        }
    }
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//wait till ekxwidget exists then setting widget
var l=0
window.setTimeout(function waitforWidget(){
	if (typeof ekxWidget=="undefined"){
   l++
   console.log("no Widget yet")
   if(l<1000){setTimeout(waitforWidget,10)}
	//console.log(l)
	//setTimeout(waitforWidget,10)


	}
	else
	{console.log("widget exists")
     setWidget()}	
},10)

