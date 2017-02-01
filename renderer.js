// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.addEventListener("resize", () => {
    updateSize();
})
var dragRegion = document.getElementById("drag-region");
function updateSize() {
    document.body.style.width = (window.innerWidth - 4) + "px";
    document.body.style.height = (window.innerHeight - 4) + "px";
    //set drag region
    dragRegion.style.width = (document.body.clientWidth - 10) + "px";
    dragRegion.style.height = (document.body.clientHeight - 10) + "px";
    dragRegion.style.margin = "5px";    
}
updateSize();