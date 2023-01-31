
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")

setTimeout( () => {
    modal.style.display = "inline"
    }, 1500)

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
})

consentForm.addEventListener("submit", function(e) {
    e.preventDefault()

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
            <h2>Thanks you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
            <img src="pirate.gif">
            </div>`
    },3000)
})