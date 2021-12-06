var Links ={
  setColor:function(color){
  //   var alist = document.querySelectorAll('a');
  //   var i = 0;
  //   while(i < alist.length){
  //     alist[i].style.color = color;
  //     i = i+1;
  // }
  $('a').css('color', color);
}
}
var body = {
setColor:function (color){
//document.querySelector('body').style.color = color;
$('body').css('color',color);
},
setBackgroundColor:function (color){
$('body').css('color',color);
// document.querySelector('body').style.backgroundColor = color; // document<<객체
// querySelector 는 객체에 속해있는 함수 즉, 메소드 (method)라고한다.
}
}


function nightDayHandler(self){
var target = document.querySelector('body');
  if(self.value==='night'){
  body.setBackgroundColor('black');
  body.setColor('white');
  self.value = 'day';

  Links.setColor('blue');

}else {
    body.setBackgroundColor('white');
    body.setColor('black'); // 객체 폴더 관점으로 보기 .
    self.value = 'night';
    Links.SetColor('black');
}
}
