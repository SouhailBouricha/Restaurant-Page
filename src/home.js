import { content } from './index';
import beeimg from "./img/bee.svg"


/* <div class="head">
    <img src="./img/bee.svg" class="bee" />
    <h1 class="headInfo">Beary's Breakfast Bar</h1>
    <img src="./img/bee.svg" class="bee1" />
</div> */

export function CreateHome(){
    console.log(content,beeimg);
    const head = document.createElement("div");
    head.classList.add("head");

    const img1 = new Image();
    img1.src = beeimg;
    img1.classList.add("bee");

    const headInfo = document.createElement("h1");
    headInfo.classList.add("headInfo");
    headInfo.innerText = "Beary's Breakfast Bar";

    const img2 = new Image();
    img2.src = beeimg;
    img2.classList.add("bee1");

    head.appendChild(img1);
    head.appendChild(headInfo);
    head.appendChild(img2);
    content.appendChild(head);
}