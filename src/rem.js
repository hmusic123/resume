function getRem(){
    var html = document.getElementsByTagName('html')[0];
    var oWith =document.body.clientWidth || document.documentElement.clientWidth;
    console.log(4,oWith)
    if(oWith>750){
        html.style.fontSize = oWith*100/1920+ 'px'
    }else{
        html.style.fontSize = oWith*100/750+ 'px'
    }
   
}
window.onload = function(){
    getRem()
    window.addEventListener('resize',getRem,false)
}