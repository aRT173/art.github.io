export function addCloseModal(selector){
    let closeModalbtn = document.querySelectorAll(selector);
    for (let i = 0; i< closeModalbtn.length; i++){
    closeModalbtn[i].addEventListener("click", () => {
        let modalActive = document.querySelector(".modal_active");
        modalActive.classList.remove("modal_active");
    })
}
}
export function addOpenModal(selector){
    let openModalbtn = document.querySelectorAll(selector);
    for (let i = 0; i< openModalbtn.length; i++){
    openModalbtn[i].addEventListener("click", () => {
        let modal = document.querySelector(".modal");
        modal.classList.add("modal_active");
})
    }

}
export function OpenModal(){
    let modal = document.querySelector(".modal");
        modal.classList.add("modal_active");
}

export function clearFields(btn, formSelector){
    let closeModalbtn = document.querySelectorAll(btn);
    for (let i = 0; i< closeModalbtn.length; i++){
    closeModalbtn[i].addEventListener("click", () => {
        let modalTitle = document.querySelector(".modal__title");
        modalTitle.textContent = "Заполнение карточки";
    let form = document.querySelector(formSelector);
    form.elements.title.value = "";
    form.elements.describing.value = "";
    form.elements.colorSelect.value = "#fff200";
})
}
}