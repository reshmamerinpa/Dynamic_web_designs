


$(document).ready(function(){
	$("#input").keyup(function(e){
		if(e.keyCode == 13)
		{
			var texts=document.getElementById('input');
			var newLi=document.createElement('li');
			newLi.setAttribute('id','hot');
			var newList=document.createTextNode('-'+texts.value);
			newLi.appendChild(newList);
			var pos=document.getElementsByTagName('ul')[0];
			pos.appendChild(newLi);
			texts.value='';

		}
	});
	$("#ulId").mouseover(function(e) {
		  var tgt = e.target;

		  if (tgt.tagName.toUpperCase() == "LI") {
					$(tgt).wrap("<strike></strike>");
			}

	});

	$("#ulId").click(function(e) {
		//var txt="<s></s>"
		  var tgt = e.target;

		  if (tgt.tagName.toUpperCase() == "LI") {
			tgt.parentNode.removeChild(tgt); // or tgt.remove();
			//tgt.parentNode.append(txt);
			//$(tgt).unwrap();
			}

	});

		$("#ulId").mouseout(function(e) {
		//var txt="<s></s>"
		  var tgt = e.target;

		  if (tgt.tagName.toUpperCase() == "LI") {
			//tgt.parentNode.removeChild(tgt); // or tgt.remove();
			//tgt.parentNode.append(txt);
			$(tgt).unwrap();
			}

	});

});
