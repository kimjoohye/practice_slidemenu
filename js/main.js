window.onload = function(){
    var iconBtn = document.querySelector("#iconBtn");
    var submenu = document.querySelector(".submenu");

    iconBtn.addEventListener("click",function(e){
        if(submenu.classList.contains('on')){
            submenu.classList.remove('on');
            iconBtn.src = "./image/hamburger.png";
            iconBtn.classList.remove('btnRotate');
            document.querySelector("#black").remove();
        }else{
            submenu.classList.add('on');
            iconBtn.src = "./image/x.png";
            iconBtn.classList.add('btnRotate');
            var div = document.createElement("div");
            div.id = "black";
            document.body.append(div);
        }
    });

}