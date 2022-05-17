let stars = document.getElementById('stars') ;
let moon = document.getElementById('moon') ;
let mountans1 = document.getElementById('mountans1') ;
let mountans2 = document.getElementById('mountans2') ;
let revier = document.getElementById('revier') ;
let boat = document.getElementById('boat') ;
let name = document.querySelector('.Namy') ;
window.onscroll = function(){
  let value = scrollY ;
  stars.style.left = value +'px';
  moon.style.top = value*2 +'px';
  mountans1.style.top = value +'px';
  mountans2.style.top = value*0.5 +'px';
  revier.style.top = value +'px';
  boat.style.top = value +'px';
  boat.style.left = value*2 +'px';
  name.style.fontSize = value*0.25 +'px';
  if (scrollY>=67){
    name.style.fontSize = 67 +'px';
    name.style.position = 'fixed';
    if (scrollY>=317){
      name.style.display = 'none';
    }else {
      name.style.display = 'block';
    }
    if (scrollY >=267){
      document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    }else {
      document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
}
