const latested = document.querySelector(".lastedProudctdata");
let latestProductsContainer = ``;
const allDatalatestProducts = [
  {
    img1: "./images/Latest products/product1.jpg",
    img2: "./images/Latest products/product4.jpg",
    title: "أكسسوارات ",
    description: "اكسسوار باللوني",
    totalPrice: "200 ر.س",
    discount: "300 ر.س",
  },
  {
    img1: "./images/Latest products/product2.jpg",
    img2: "./images/Latest products/product4.jpg",
    title: " العقود",
    description: "عقد أنيق",
    totalPrice: "500 ر.س",
    discount: "650 ر.س",
  },
  {
    img1: "./images/Latest products/product3.jpg",
    img2: "./images/Latest products/product1.jpg",
    title: "أساور إنسيال",
    description: "أسورة جنزير",
    totalPrice: "700 ر.س",
    discount: "800 ر.س",
  },
  {
    img1: "./images/Latest products/product4.jpg",
    img2: "./images/Latest products/product2.jpg",
    title: "الخواتم",
    description: "خاتم خطبة أنيق",
    totalPrice: "300 ر.س",
    discount: "450 ر.س",
  },
];
allDatalatestProducts.forEach(
  (el, idx) =>
    (latestProductsContainer += `  <div class="bg-[#F7F2E9] p-2 rounded-lg    flex-col gap-4">
  <div class="  relative group overflow-hidden">
    <div class="absolute bg-[#F3F3F3] p-2 rounded-full left-2 top-2 z-20">
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_2517_385)"> <path d="M9.76103 18.0855C9.82379 18.1501 9.90999 18.1865 10 18.1865C10.0901 18.1865 10.1763 18.1501 10.239 18.0855L18.4157 9.68255C20.5281 7.48692 20.5281 4.0145 18.4157 1.81888C17.4132 0.775345 16.0287 0.185524 14.5817 0.185547H14.5797C13.1314 0.185311 11.7454 0.775072 10.7414 1.81888L10 2.57988L9.25903 1.81888C8.25437 0.776738 6.86907 0.188013 5.42153 0.188013C3.97398 0.188013 2.58868 0.776738 1.58403 1.81888C-0.521498 4.01715 -0.521498 7.48394 1.58403 9.68221L9.76103 18.0855ZM2.06103 2.28555C2.94006 1.37234 4.15298 0.856326 5.42053 0.856326C6.68807 0.856326 7.90099 1.37234 8.78003 2.28555L9.76003 3.29288C9.82279 3.35743 9.90899 3.39386 9.99903 3.39386C10.0891 3.39386 10.1753 3.35743 10.238 3.29288L11.2177 2.28588C12.0966 1.37037 13.3106 0.852658 14.5797 0.852214H14.5817C15.8484 0.852618 17.0603 1.36923 17.9377 2.28288C19.7982 4.21956 19.7982 7.27953 17.9377 9.21621L10 17.3742L2.06236 9.21888C0.204743 7.28019 0.204596 4.22208 2.06203 2.28321L2.06103 2.28555Z" fill="#ADADAD" /> </g> <defs> <clipPath id="clip0_2517_385"> <rect width="20" height="18" fill="white" transform="translate(0 0.185547)" /> </clipPath> </defs> </svg>
    </div>

    <img
      src="${el.img1}"
      alt="${el.title}"
      class="w-full h-full object-cover rounded transition-opacity duration-500 group-hover:opacity-0"
    />

    <img
      src="${el.img2}"
      alt="${el.title}"
      class="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    />
    <div  class="absolute bg-[#F3F3F3] p-2 rounded-full left-1/2 bottom-2 z-20 
           transform translate-y-0 md:translate-y-16 md:group-hover:translate-y-0  
           transition-transform duration-500 ease-out -translate-x-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
    </div>

  </div>

  <div class="flex items-center justify-between gap-3 mt-2">
    <p class="text-[#CE9461] md:text-[20px] text-[12px] font-harmattan font-normal md:leading-[32px]">
${el.title}
    </p>
    <div class="flex text-yellow-400 md:text-[28px] text-[15px] space-x-1">
      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
  </div>

  <p class="text-[#252525] md:text-[24px] text-[16px] font-harmattan font-medium md:leading-[32px]">
${el.description}
  </p>

  <p class="text-[#B70404] md:text-[20px] text-[14px] font-harmattan font-normal md:leading-[32px]">
   ${el.totalPrice}
    <span class="text-[#25252580] line-through">${el.discount}</span>
  </p>
</div>
`)
);
latested.innerHTML = latestProductsContainer;

const style1 = document.createElement("style");
const pos = "left";
style1.innerHTML = `@keyframes my {
    0% {
    ${pos}:-${document.querySelector(".text1").offsetWidth + 100}px;
  }
    100% {
    ${pos}:100%;
  }
}`;
document.head.append(style1);

function toggleFaq(clicked) {
  const item = clicked.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const svg = item.querySelector(".icon-svg");
  const isOpen = item.classList.contains("open");

  // Close all
  document.querySelectorAll(".faq-item").forEach((el) => {
    el.classList.remove("open", "bg-[#F4F4F4]", "rounded-2xl");
    el.querySelector(".faq-answer").classList.remove(
      "max-h-[500px]",
      "opacity-100",
      "py-2"
    );
    el.querySelector(".faq-answer").classList.add("max-h-0", "opacity-0");
    el.querySelector(".icon-svg").classList.remove("rotate-45");
  });

  // Open clicked
  if (!isOpen) {
    item.classList.add("open", "bg-[#F4F4F4]", "rounded-2xl");
    answer.classList.remove("max-h-0", "opacity-0");
    answer.classList.add("max-h-[500px]", "opacity-100");
    svg.classList.add("rotate-45");
  }
}
// ===== السلايدر الكبير =====
const bigSlider = new Swiper(".bigSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ===== السلايدر الصغير =====
const smallSlider = new Swiper(".smallSlider", {
  slidesPerView: 1,
  direction: "vertical",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

// ===== ربط الاتنين مع بعض =====
bigSlider.controller.control = smallSlider;
smallSlider.controller.control = bigSlider;

// ===== عداد تنازلي لكل سلايد =====
// ===== Countdown Timer =====
function startCountdown(elementId, days = 5) {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + days);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      document.getElementById(elementId).innerHTML = "انتهى العرض";
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `
  <div class="flex gap-1  mx-auto absolute bottom-5 left-1/2 -translate-x-1/2">
    
    <div class="flex flex-col items-center">
      <p class="w-[41.44px] h-[42.97px]  md:size-[80px] text-white text-[20px]   md:text-[40px]  bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">${s}</p>
      <span class="text-white">ثانية</span>
    </div>
    
    <p class="text-6xl font-bold text-white">:</p>
    
    <div class="flex flex-col items-center">
      <p class="w-[41.44px] h-[42.97px]  md:size-[80px] text-white text-[20px]   md:text-[40px]  bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">${m}</p>
      <span class="text-white md:text-[20px] text-[10px]">دقيقة</span>
    </div>
    
    <p class="text-6xl font-bold text-white">:</p>
    
    <div class="flex flex-col items-center">
      <p class="w-[41.44px] h-[42.97px]  md:size-[80px] text-white text-[20px]   md:text-[40px]  bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">${h}</p>
      <span class="text-white  md:text-[20px] text-[10px]">ساعة</span>
    </div>
    
    <p class="text-6xl font-bold text-white">:</p>
    
    <div class="flex flex-col items-center">
      <p class="w-[41.44px] h-[42.97px]  md:size-[80px] text-white text-[20px]   md:text-[40px]  bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">${d}</p>
      <span class="text-white  md:text-[20px] text-[10px]">يوم</span>
    </div>

  </div>
`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
}

startCountdown("countdown1", 5);
startCountdown("countdown2", 3);
startCountdown("countdown3", 7);
