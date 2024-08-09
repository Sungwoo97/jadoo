let pager = document.querySelectorAll('.testimonials .pager a');
let testimonialsList = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');
let currentIdx = 0;
let testimonialsCount = testimonialsList.length;
let partnerList = document.querySelector('.partner_list');
let partnerListWidth = 234;
let partnerListCount =document.querySelectorAll('.partner_list li').length;
let partnerListLeft = 0;
let partnerListTotalWidth = partnerListWidth * partnerListCount;
let animation;
let bookATrip = document.querySelector('.book_a_trip');
let bookATripOST = bookATrip.offsetTop - 300;
let progressBar = document.querySelector('.progress_bar');
let bar = document.querySelector('.progress_bar .bar');
let onGoingPercent = document.querySelector('.percent');
let scrollOn = false;

partnerList.style.width =  partnerListTotalWidth + 'px';

function movePartnerList(){
  partnerListLeft -= 2;
  if(partnerListLeft === -(partnerListTotalWidth/2)){
    partnerListLeft = 0;
  }
  partnerList.style.left = partnerListLeft + 'px';
  animation = requestAnimationFrame(movePartnerList);
}
requestAnimationFrame(movePartnerList);

partnerList.addEventListener('mouseenter', ()=>{
  cancelAnimationFrame(animation);
});
partnerList.addEventListener('mouseleave', ()=>{
  requestAnimationFrame(movePartnerList);
});


pager.forEach((item,idx) =>{
    item.addEventListener('click',(e)=>{
      e.preventDefault();
     showTestimonial(idx);
  })
})

function showTestimonial(num){
  //조건문 활용
  /*if(num < 0){
    num = testimonialsCount -1;
  }
  if(num > testimonialsCount - 1){
    num = 0;
  }*/

  // 삼항 연산자 활용
  // num = (num === -1) ? testimonialsCount -1 : (num === 3) ? 0 : num;

  // 나머지 연산 활용
  num = (num + testimonialsCount) % testimonialsCount;
  
  currentIdx = num;
  for(let test of testimonialsList){
    test.classList.remove('active');
  }
    testimonialsList[num].classList.add('active');
  for(let page of pager){
    page.classList.remove('active');
  }
  pager[num].classList.add('active');
}

paginationUp.addEventListener('click', ()=>{
  showTestimonial(currentIdx - 1);
})

paginationDown.addEventListener('click', ()=>{
  showTestimonial(currentIdx + 1); 
})

window.addEventListener('scroll', ()=>{
  let scrollAmt = window.scrollY;
  if(scrollAmt >= bookATripOST){
    if(!bookATrip.classList.contains('active')){
      bookATrip.classList.add('active');
      onGoingNumAnimation();
    }
  }
});

function onGoingNumAnimation(){
  let targetNum = Number(bar.getAttribute('data-rate'));
  let num = 0;
  console.log(targetNum);
  let animation = setInterval(()=>{
    num += 1;
      onGoingPercent.innerText = num + '%';
      bar.style.width = num + '%';
    if(num == targetNum){
      clearInterval(animation);
    }
  },100);

}