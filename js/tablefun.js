import { addOpenModal } from "./modal.js";
export function tableAddtd (selector) {
    let table = document.querySelector(selector);
    let tbody = table.querySelector("tbody");
    let thead = table.querySelector("thead");
    let tr =  thead.querySelectorAll("tr");
    for (let i = 0; i < tr.length; i++)
    {
        let th = document.createElement("th");
        tr[i].append(th);
    }
    tr =  tbody.querySelectorAll("tr");
    for (let i = 0; i < tr.length; i++)
    {
        let td = document.createElement("td");
        td.setAttribute("ondrop","drop(event)");
        td.setAttribute("ondragover","allowDrop(event)");
        tr[i].append(td);
    }
   }
