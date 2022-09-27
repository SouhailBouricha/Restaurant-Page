{/* 
      <div class="head">
        <h1 class="headInfo">Beverages</h1>
        <img src="./9f6b40b263827ecffca7.svg" class="bee1" />
      </div>
      
      <div class="product">
        <div class="insideProduct">
          <p class="ProductName">Honey Tea</p>
          <p class="Productpara">
            A warm, sweet tea made with the highest quality honey and a bit of
            lemon to start your day off right!
          </p>
          <div class="price" >
            <div class="priceLabel">$2</div>
            <div class="imgwrapper">
              <img class="productImg" src="./img/honeyTea.jpg"/>
            </div>
          </div>
          <img src="./5759589f026baa86e75a.svg" class="bee beex" />
        </div>
      </div> */}
import { content } from './index';
import beesr from './img/bee.svg';
import honeycombsr from "./img/honeycomb.svg";
export function CreateMenu(){
    const headmenu = document.createElement('div');
    headmenu.classList.add('head');

    const img7 = new Image();
    img7.src = beesr;
    img7.classList.add("bee");

    const headInfomenu = document.createElement("h1");
    headInfomenu.classList.add("headInfo");
    headInfomenu.innerText = "Menu";

    const img8 = new Image();
    img8.src = beesr;
    img8.classList.add("bee1");

    headmenu.appendChild(img7);
    headmenu.appendChild(headInfomenu);
    headmenu.appendChild(img8);

    content.appendChild(headmenu);

    const headmenu1 = document.createElement('div');
    headmenu1.classList.add('head');

    const headInfomenu1 = document.createElement("h1");
    headInfomenu1.classList.add("headInfo");
    headInfomenu1.innerText = "Beverages";

    const img9 = new Image();
    img9.src = honeycombsr;
    img9.classList.add("bee1");

    headmenu1.appendChild(headInfomenu1);
    headmenu1.appendChild(img9);

    content.appendChild(headmenu1);
}