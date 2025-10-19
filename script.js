let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carousalDom = document.querySelector(".carousal");
let sliderDom = carousalDom.querySelector(".list");
let thumbnailBorderDom = document.querySelector(".carousal .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick = function(){
  showSlider("next");
}
prevDom.onclick = function(){
  showSlider("prev")
}

let timeRunning = 2000;
let runTimeOut;

function showSlider(type){
  let SliderItemsDom = sliderDom.querySelectorAll(".carousal .list .item");
  let thumbnailItemsDom = document.querySelectorAll(".carousal .thumbnail .item");

  if(type === "next") {
    sliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carousalDom.classList.add("next")
  }else{
    sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carousalDom.classList.add("prev")
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousalDom.classList.remove('next');
    carousalDom.classList.remove('prev')
  }, timeRunning);

  timeDom.style.animation = "none";
  void timeDom.offsetWidth;
  timeDom.style.animation = `runningTime ${timeRunning}ms linear forwards`;
}