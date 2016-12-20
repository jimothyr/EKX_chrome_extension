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
    var container=[]
    var author="";
    var loadWidget = false; //to switch off widget where website already has widget on it
    var divloc=""
    var show=true;

 	switch (window.location.hostname){

 			case "www.smarternetworks.org":
                loadWidget = true
	 			title =  document.getElementsByTagName("h1")[0].textContent
	 			index = ['.tab-content'];
	 			container= ['#EKX_mywidget'];
                divloc="nav-tabs";
	 			addGlobalStyle('#EKX_mywidget {position: fixed;right: 0;width: 100px;top: 150px; z-index:1000}');
 			break;
 			case "ukerc.rl.ac.uk":
                loadWidget = true
	 			title = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].textContent;
	 			index = ['.resultsblock','.boundary-box'];
	 			container= ['#EKX_mywidget'];
                divloc=['resultsblock','boundary-box'];
	 			addGlobalStyle('#EKX_mywidget {position: fixed;right: 0;width: 100px;top: 150px; }');
 			break;
            case "www.ukerc.ac.uk":
                loadWidget = true
                title =  document.getElementsByTagName("h2")[0].textContent
                index = ['#content'];
                container= ['#EKX_mywidget'];
                divloc="container"
                author=document.getElementsByTagName("h6")[0].textContent
                addGlobalStyle('#EKX_mywidget {position: fixed;right: 0;width: 100px;top: 150px;z-index:1000 }');
            break;
            case "www.encraft.co.uk":
            break;
 	}



if(loadWidget){
    makeDiv(divloc)


    var EKXWidget = new ekxWidget({
 				container : container,
 			//	follow : ['pdf'],
                index : index,
                title:title,
                author:author,
                show:show
            }) 
    }
},2000)



function makeDiv(obj){
    console.log(obj)
     var e = document.createElement('div');
     e.id = 'EKX_mywidget';
     e.width ='600px';

    if (obj.length==0){document.body.appendChild(e)}
    else {
   for (i=0;i<obj.length;i++){
         if( document.getElementsByClassName(obj[i])[0]) {document.getElementsByClassName(obj[i])[0].appendChild(e)}
        }
    }

}





