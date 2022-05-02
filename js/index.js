import {tableAddtd} from "./tablefun.js";
import {addCloseModal, addOpenModal, OpenModal, clearFields} from "./modal.js"
import {addCard, editCard, editCardSubmit} from "./card.js"

addCloseModal(".form__close-button");
clearFields(".form__close-button", ".formFill");
addCloseModal(".form__submit-button");
clearFields(".modal__close-button_angular", ".formFill");
addCloseModal(".modal__close-button_angular");
addOpenModal(".body-td")



let target;
let table = document.querySelector(".table");
let kanbantable = document.querySelector(".kanban-table");
kanbantable.addEventListener("click", (event) => {
    target = event.target; // (1)
    console.log(target.className);
    if (target.tagName != 'TD') return;
     OpenModal();
});
let submitbtn = document.querySelector(".form__submit-button");
submitbtn.addEventListener("click", (event)=>
{
    let modal = document.querySelector(".modal__title");
    event.preventDefault();
    if (modal.textContent == "Заполнение карточки")
    addCard(".kanban-table", ".formFill",target)
    else
    editCardSubmit(".modal__title", ".formFill", cardTarget);
});


let tableAdd = table.querySelector(".table-add");
tableAdd.addEventListener("click", () => tableAddtd(".kanban-table"));



kanbantable.addEventListener("click", (event) => {
    let th = event.target; // (1)
    if (th.tagName != 'TH') return;
    let input = document.createElement("input");
    input.value = th.textContent;
    // input.autofocus = true;
    th.replaceWith(input);
    input.focus();
    input.addEventListener("blur", () =>{
        let th = document.createElement("th");
        let text = input.value;
        th.textContent = text;
        input.replaceWith(th);

    });
});
// Изменение карточки
let cardTarget;
kanbantable.addEventListener("click", (event) => {
    cardTarget = event.target;
    if (cardTarget.className != 'card__title' && cardTarget.className != 'card__description' && cardTarget.className != 'card') return;
    if (cardTarget.className == "card__title" || cardTarget.className == "card__description")
    cardTarget = cardTarget.parentNode; 
    console.log(cardTarget);
    editCard(".modal__title", ".formFill", cardTarget);
    OpenModal();

});




