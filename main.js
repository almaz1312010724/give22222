const timeElement = document.getElementById('time')
const bgColorSelect = document.getElementById('bgColor')
const setBgColorButton = document.getElementById('setBgColor')
const showURLButton = document.getElementById('showURL')
const infoElement = document.getElementById('info')
setInterval(()=>{
    timeElement.textContent = ` ${new Date().toLocaleString()}`
},1000);


setBgColorButton.addEventListener('click',() =>{
    let selectedColor = bgColorSelect.value;
    document.body.style.backgroundColor = selectedColor
})


showURLButton.addEventListener("click",()=>{
    infoElement.innerHTML += `<p>${window.location.href}</p>`
})

function updateInfo(){
    infoElement.innerHTML =` <p>${screen.width}px x ${screen.height}px</p>`

}
updateInfo()


