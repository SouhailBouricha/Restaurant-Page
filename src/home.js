import { content } from './index';
import beeimg from "./img/bee.svg";
import honeycomb from "./img/honeycomb.svg";



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

    const desc = document.createElement("div");
    desc.classList.add("desc");

    const hony = new Image();
    hony.src = honeycomb;
    hony.classList.add("hony");

    const insideDesc = document.createElement("div");
    insideDesc.classList.add("insideDesc");

    const para = document.createElement("p");
    para.classList.add("para");
    para.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."

    const customer = document.createElement("p");
    customer.classList.add("customer");
    customer.innerText = "Goldilocks";

    const img3 = new Image();
    img3.src = beeimg;
    img3.classList.add("bee2");

    insideDesc.appendChild(para);
    insideDesc.appendChild(customer);
    insideDesc.appendChild(img3);

    desc.appendChild(hony);
    desc.appendChild(insideDesc);

    content.appendChild(desc);

    const hours = document.createElement("div");
    hours.classList.add("hours");

    const hoursInside = document.createElement("div");
    hoursInside.classList.add("hoursInside");

    const img4 = new Image();
    img4.src = beeimg;
    img4.classList.add("bee3");

    const hoursDes = document.createElement("p");
    hoursDes.classList.add("hoursDes");
    hoursDes.innerText = "Hours";

    const listHours = document.createElement("ul");
    listHours.classList.add("listHours");

    const Sunday = document.createElement("li");
    Sunday.classList.add("hour");
    Sunday.innerText = "Sunday: 8am - 8pm";

    const Monday = document.createElement("li");
    Monday.classList.add("hour");
    Monday.innerText = "Monday: 6am - 6pm";

    const Tuesday = document.createElement("li");
    Tuesday.classList.add("hour");
    Tuesday.innerText = "Tuesday: 6am - 6pm";

    const Wednesday = document.createElement("li");
    Wednesday.classList.add("hour");
    Wednesday.innerText = "Wednesday: 6am - 6pm";

    const Thursday = document.createElement("li");
    Thursday.classList.add("hour");
    Thursday.innerText = "Thursday: 6am - 10pm";

    const Friday = document.createElement("li");
    Friday.classList.add("hour");
    Friday.innerText = "Friday: 6am - 10pm";

    const Saturday = document.createElement("li");
    Saturday.classList.add("hour");
    Saturday.innerText = "Saturday: 8am - 10pm";

    const img5 = new Image();
    img5.src = beeimg;
    img5.classList.add("bee4");

    listHours.appendChild(Sunday);
    listHours.appendChild(Monday);
    listHours.appendChild(Tuesday);
    listHours.appendChild(Wednesday);
    listHours.appendChild(Thursday);
    listHours.appendChild(Friday);
    listHours.appendChild(Saturday);

    hoursInside.appendChild(img4);
    hoursInside.appendChild(hoursDes);
    hoursInside.appendChild(listHours);
    hoursInside.appendChild(img5);
    hours.appendChild(hoursInside);

    content.appendChild(hours);

    const adreess = document.createElement("div");
    adreess.classList.add("adreess","desc");

    const insideDesc2 = document.createElement("div");
    insideDesc2.classList.add("insideDesc");

    const customer2 = document.createElement("p");
    customer2.classList.add("customer");
    customer2.innerText = "Location";

    const para2 = document.createElement("p");
    para2.classList.add("para","ala");
    para2.innerText = "123 Forest Drive, Forestville, Maine";

    const img6 = new Image();
    img6.src = beeimg;
    img6.classList.add("bee2");

    insideDesc2.appendChild(customer2);
    insideDesc2.appendChild(para2);
    insideDesc2.appendChild(img6);

    adreess.appendChild(insideDesc);

    content.appendChild(adreess);
}

{/* <div class="desc adreess">
  <div class="insideDesc ">
    <p class="customer">Location</p>
    <p class="para ala">123 Forest Drive, Forestville, Maine</p>
    <img src="./img/bee.svg" class="bee2" />
  </div>
</div>  */}