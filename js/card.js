import { rgbToHex } from "./rbgToHex.js";
let k = 1;
export function addCard(tableSelector,formSelector,target) {
    
    let table = document.querySelector(tableSelector)
    let form = document.querySelector(formSelector);
    let div = document.createElement("div");
    let divTitle = document.createElement("div");
    let divDesc = document.createElement("div");
    div.className = "card";
    div.draggable = true;
    div.id = "dragtarget"+k;
    k++
    div.setAttribute('ondragstart','dragStart(event)');
    divTitle.className = "card__title";
    divDesc.className = "card__description";
    divTitle.textContent = form.elements.title.value;
    divDesc.textContent = form.elements.describing.value;
    div.style.backgroundColor = form.elements.colorSelect.value;
    div.style.width = "187px";
    div.style.minHeight = "100px";
    console.log(target);
    target.append(div);
    div.append(divTitle);
    div.append(divDesc);
    form.elements.title.value = "";
    form.elements.describing.value = "";
    form.elements.colorSelect.value = "#fff200";
}

export function editCard(titleSelector,formSelector,target) {
    let modalTitle = document.querySelector(titleSelector);
    let form = document.querySelector(formSelector);
    let cardTitle = target.querySelector(".card__title");
    let cardDescription = target.querySelector(".card__description");

   
    modalTitle.textContent = "Изменение карточки";
    form.elements.title.value = cardTitle.textContent;
    form.elements.describing.value = cardDescription.textContent;
    form.elements.colorSelect.value = rgbToHex(target.style.backgroundColor);
}
export function editCardSubmit(titleSelector,formSelector,target) {
    let modalTitle = document.querySelector(titleSelector);
    let form = document.querySelector(formSelector);
    let cardTitle = target.querySelector(".card__title");
    let cardDescription = target.querySelector(".card__description");


    cardTitle.textContent = form.elements.title.value;
    cardDescription.textContent = form.elements.describing.value;
    target.style.backgroundColor = form.elements.colorSelect.value;

        form.elements.title.value = "";
form.elements.describing.value = "";
form.elements.colorSelect.value = "#fff200";
modalTitle.textContent = "Заполнение карточки";
}