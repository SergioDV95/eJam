const li = document.querySelectorAll("li");
const arrow = document.querySelectorAll(".arrow");
let currentIndex = 0; 
arrow.forEach((element) => {
   element.addEventListener("click", () => {
      let direction = element.getAttribute("data-direction"); 
      if (direction == "right") {
         currentIndex++;
         if (currentIndex == li.length) {
         currentIndex = 0;
         }
      } else {
         currentIndex--;
         if (currentIndex == -1) {
         currentIndex = li.length - 1;
         }
      }
      li.forEach((element) => {
         element.classList.toggle("max-[1499px]:hidden");
      });
      li[currentIndex].classList.toggle("max-[1499px]:hidden");
   })
})