
window.addEventListener('mousemove', function (e) {
    if(e.x-15<=790 & e.x-15>=0 & e.y-85>=0 & e.y-85<=440){
    document.getElementById('x-value').textContent = e.x-15;
    document.getElementById('y-value').textContent = e.y-85;

    }
});

window.addEventListener('mousedown', function (e) {
    if(e.x-15<790 & e.x-15>=0 & e.y-85>=0 & e.y-85<440){
    console.log("x:%d   y:%d", e.x-15, e.y-15);
    document.getElementById('x-value-clicked').textContent = e.x;
    document.getElementById('y-value-clicked').textContent = e.y;
    }
});


var firstClick = 0
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    if(!firstClick){
        var initImg = document.getElementById("initImg");
        initImg.remove();
        firstClick = 1;
    }
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}


function addCoord(x,y) {
    http = window.httpClient;
    const Coord = [x, y];
    this.http.post<{ message: string }>("http://localhost:3000/api/coords", Coord)
        .subscribe(responseData => {
          console.log(responseData.message);
          this.Coords.push(Coord);
        });
}
