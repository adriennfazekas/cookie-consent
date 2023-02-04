
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")
const declineBtn = document.getElementById("decline-btn")
const buttons = document.getElementById("modal-choice-btns")

setTimeout( () => {
    modal.style.display = "inline"
    }, 1500)

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

consentForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const formData = new FormData(consentForm)
    const userName = formData.get("userName") 

    modalText.innerHTML = `
    <div id="modal-inner-loading" class="modal-inner-loading">
        <img src="loading.svg" class="loading">
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout( () => {
        document.getElementById('uploadText').innerText = `Making the sale...`
    }, 1500)

    setTimeout(() => {
        modalInner.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
            <img src="pirate.gif">
            </div>`
        closeBtn.disabled = false
    },3000)

})

declineBtn.addEventListener("mouseenter", function() {
    buttons.classList.toggle("switch")
})