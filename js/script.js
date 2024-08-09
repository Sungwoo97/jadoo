let pager = document.querySelectorAll('.testimonials .pager a');
let testimonialsList = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');
let currentIdx = 0;
let testimonialsCount = testimonialsList.length;


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