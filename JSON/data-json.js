var ch=new XMLHttpRequest();
ch.open('GET','data_json.json');
ch.onload=function(){
  responseObject=JSON.parse(ch.responseText);
  var newContent='';
  for(i=0;i<responseObject.events.length;i++){
    newContent += '<div class="event">';
    newContent+='<img src="'+responseObject.events[i].map +'"';
    newContent += 'alt="' + responseObject.events[i].name +'"/>';
    newContent +='<p><b>'+responseObject.events[i].name+'</b><br>';
    newContent+= responseObject.events[i].date +'</p>';
    newContent+='</div>';
      }
      document.getElementById('content').innerHTML=newContent;
};
ch.send(null);
