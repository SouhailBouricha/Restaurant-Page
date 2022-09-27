{/* 
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
import honeyTea from "./img/honeyTea.jpg";
import bearyTea from "./img/bearyTea.jpg";
import toast from "./img/toast.jpg";
import fruit from "./img/fruit.jpg";
import pancakes from "./img/pancakes.jpg";
import frenchToast from "./img/frenchToast.jpg";
import veggieSandwich from "./img/veggieSandwich.jpg";
import blt from "./img/blt.jpg";
import lox from "./img/lox.jpg";
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

    const menu1 = createMenu("Beverages",honeycombsr);
    const menu2 = createMenu("Sides",honeycombsr);
    const menu3 = createMenu("Main Dishes",honeycombsr);

    content.appendChild(menu1);
    
    const first_product = createProduct("Honey Tea","A warm, sweet tea made with the highest quality honey and a bit oflemon to start your day off right!","$2",honeyTea,beesr);
    const seconde_product = createProduct("Beary Tea","A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.","$3",bearyTea,beesr);
    const terth_product = createProduct("Toast and Jam","A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.","$1",toast,beesr);
    const forth_product = createProduct("Fresh Fruit","A small bowl of fresh fruit, whatever we find at the market for the day.","$3",fruit,beesr);
    const fifth_product = createProduct("Pancakes","A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.","$4",pancakes,beesr);
    const sixte_product = createProduct("French Toast","Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.","$5",frenchToast,beesr);
    const siventh_product = createProduct("Beary Veggie Sandwich","Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.","$8",veggieSandwich,beesr);
    const ieth_product = createProduct("veggieSandwich","Interested in the Beary Veggie Sandwich but also love bacon? Say no more.","$6",blt,beesr);
    const nineth_product = createProduct("Bagel and Low","Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.","$8",lox,beesr);
    const tineth_product = createProduct("Bagel and Low","Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.","$8",lox,beesr);
    
    
    content.appendChild(first_product);
    content.appendChild(seconde_product);
    content.appendChild(menu2);
    content.appendChild(terth_product);
    content.appendChild(forth_product);
    content.appendChild(menu3);
}
function createProduct(ProductNameText,ProductparaText,priceLabelText,mainImg,beesr){
    const product = document.createElement('div');
    product.classList.add('product');

    const insideProduct = document.createElement('div');
    insideProduct.classList.add('insideProduct');
    
    product.appendChild(insideProduct);
    
    const ProductName = document.createElement("p");
    ProductName.classList.add("ProductName");
    ProductName.innerText = ProductNameText;
    
    const Productpara = document.createElement("p");
    Productpara.classList.add("Productpara");
    Productpara.innerText = ProductparaText;
    
    const price = document.createElement('div');
    price.classList.add('price');
    
    const priceLabel = document.createElement('div');
    priceLabel.classList.add('priceLabel');
    priceLabel.innerText = priceLabelText;
 
    const imgwrapper = document.createElement('div');
    imgwrapper.classList.add('imgwrapper');

    price.appendChild(priceLabel);
    price.appendChild(imgwrapper);

    const img10 = new Image();
    img10.src = mainImg;
    img10.classList.add("productImg");

    imgwrapper.appendChild(img10);

    const img11 = new Image();
    img11.src = beesr;
    img11.classList.add("beex");
    img11.classList.add("bee");

    insideProduct.appendChild(ProductName);
    insideProduct.appendChild(Productpara);
    insideProduct.appendChild(price);
    insideProduct.appendChild(img11);
    return product;
}
function createMenu(headInfomenu1Text,honeycombsr){
    const headmenu1 = document.createElement('div');
    headmenu1.classList.add('head');
    headmenu1.classList.add('new');

    const headInfomenu1 = document.createElement("h1");
    headInfomenu1.classList.add("headInfo");
    headInfomenu1.innerText = headInfomenu1Text;

    const img9 = new Image();
    img9.src = honeycombsr;
    img9.classList.add("bee1");

    headmenu1.appendChild(headInfomenu1);
    headmenu1.appendChild(img9);

    return headmenu1;
}