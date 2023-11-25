//const svg = document.getElementById("svg");
const append = document.getElementsByClassName("append");
const figcaption = document.getElementsByTagName("figcaption");

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

addContent();

window.addEventListener("resize", addContent)