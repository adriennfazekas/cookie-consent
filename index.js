
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")

setTimeout( () => {
    modal.style.display = "inline"
    }, 1500)

closeBtn.addEventListener("click", function (){
    modal.style.display = "none"
})