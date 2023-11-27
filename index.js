//const svg = document.getElementById("svg");
const append = document.getElementsByClassName("append");
const figcaption = document.getElementsByTagName("figcaption");
const arrow = document.querySelectorAll(".arrow");
const ul = document.getElementById("meta");
let currentIndex = 0;
let li = [
   '<li class="before:content-[url(./SVG/checkmark.svg)] before:w-[22px] before:h-[22px] gap-[8px]">30-DAY SATISFACTION GUARANTEE</li>',
   '<li class="before:content-[url(./SVG/truck.svg)] before:w-[22px] before:h-[22px] gap-[8px]">FREE DELIVERY ON ORDERS OVER $40.00</li>',
   '<li class="before:content-[url(./SVG/corazon.svg)] before:w-[22px] before:h-[22px] before:flex before:items-center gap-[8px]">50.000+ HAPPY CUSTOMERS</li>',
   '<li class="before:content-[url(./SVG/arrow.svg)] before:w-[22px] before:h-[22px] gap-[8px]">100% MONEY BACK GUARANTEE</li>'
]

function changeHeader() {
   const width = document.documentElement.clientWidth;
   if (width >= 1500) {
      if (ul.hasChildNodes) {
         while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
         }
      }
      for (let i in li) {
         let liElement = document.createElement("li");
         liElement.innerHTML = li[i];
         ul.appendChild(liElement);
      }
      arrow.forEach((element) => {
         element.removeEventListener("click", handleClick);
      })
   } else {
      ul.innerHTML = li[currentIndex];
      arrow.forEach((element) => {
         element.addEventListener("click", handleClick)
      })
   }
}

function handleClick() {
   let direction = this.getAttribute("data-direction");
   if (direction == "right") {
      if (ul.hasChildNodes) {
         ul.removeChild(ul.firstChild);
      }
      currentIndex = (currentIndex + 1) % li.length;
      ul.innerHTML = li[currentIndex];
   } else {
      if (ul.hasChildNodes) {
         ul.removeChild(ul.firstChild);
      }
      currentIndex = (currentIndex - 1 + li.length) % li.length;
      ul.innerHTML = li[currentIndex];
   }
}

function addContent() {
   const width = document.documentElement.clientWidth;
   const payment = document.getElementById("payment");
   if (width >= 1500) {
      //svg.setAttribute("src", "./SVG/Clarifion_Logo.svg");
      if (append[1].lastElementChild != payment) {
         const node = append[0].lastElementChild;
         append[1].appendChild(node);
      }
      for (let i in append) {
         let text = []
         for (let j in text) {
            if (i == j) {
               append[i].innerHTML = text[j];
            }
         }
      }
      for (let i = 0; i < figcaption.length; i++) {
         let text = [
            "Step 1 : Cart Review",
            "Step 2 : Checkout",
            "Step 3 : Special Offer",
            "Step 4 : Confirmation"
         ]
         for (let j in text) {
            if (i == j) {
               figcaption[i].innerHTML = text[j];
            }
         }
      }
   } else {
      //svg.setAttribute("src", "./SVG/Clarifion_Logo.png");
      if (append[0].lastElementChild != payment) {
         const node = append[1].lastElementChild;
         append[0].appendChild(node);
      }
      for (let i in append) {
         let text = []
         for (let j in text) {
            if (i == j) {
               append[i].innerHTML = text[j];
            }
         }
      }
      for (let i = 0; i < figcaption.length; i++) {
         let text = [
            "Cart Review",
            "Checkout",
            "Special Offer",
            "Confirmation"
         ]
         for (let j in text) {
            if (i == j) {
               figcaption[i].innerHTML = text[j];
            }
         }
      }
   }
}

changeHeader();
addContent();

window.addEventListener("resize", changeHeader);
window.addEventListener("resize", addContent)