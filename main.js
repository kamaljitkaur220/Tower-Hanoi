
let tower1 = document.getElementById("tower1");
let tower2 = document.getElementById("tower2");
let tower3=document.getElementById("tower3");
var source = "";
for(let index=3; index >= 0; index--){
    let disk = document.createElement("div");
    disk.setAttribute("id", "disk" + index);
    disk.setAttribute("class", "disk" + index);
    disk.setAttribute("name" , index);
    tower1.appendChild(disk);

}
moveDisk = function(event){
    let destination;
    let sourceTower;
    let destTower;
    let tempDisk;
    let movingDisk;
    let movingDiskVal;
    let tempDiskVal;

    if (source == "") {
        source = event.currentTarget.id;
    } else {
        destination = event.currentTarget.id;
        sourceTower = document.getElementById(source);
        destTower = document.getElementById(destination);
        if (sourceTower.childElementCount > 0) {
            movingDisk = sourceTower.lastElementChild;
            movingDiskVal=parseInt(movingDisk.getAttribute("name"));
            if (destTower.childElementCount > 0) {
                tempDisk= destTower.lastElementChild;
                tempDiskVal=parseInt(tempDisk.getAttribute("name"));
                if (tempDiskVal>movingDiskVal)
                   document.getElementById(destination).appendChild(movingDisk);
            }
            else {
             
               document.getElementById(destination).appendChild(movingDisk);
            } 
       }
        source = "";
    }
    console.log("source:", source);
}
tower1.addEventListener('click', moveDisk);
tower2.addEventListener('click', moveDisk);
tower3.addEventListener('click', moveDisk);