let photo = document.querySelectorAll(".photo");
let box = document.querySelectorAll(".dotLinks");
let index = 0;
galery();
function galery() {
  if (index >= photo.length) {
    index = 0;
  } else if (index < 0) {
    index = photo.length - 1;
  }

  for (i = 0; i < photo.length; i++) {
    //console.log(box)
    photo[i].classList.remove("active");
    box[i].classList.remove("activeList");
  }

  photo[index].classList.add("active");
  box[index].classList.add("activeList");

  
}

time = setInterval(go, 3000);
function go() {
  index++;
  galery();
}


const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// drop menu products and solves
const dropBtn = document.querySelector(".dropBtn");
const dropDown = document.querySelector(".dropDown");
const header = document.querySelector("header");

dropBtn.addEventListener('mouseover',function(){
  dropDown.style.display="block";
  aboutDropDown.style.display="none";
  header.classList.add('active');
})
dropDown.addEventListener('mouseleave',function(){
  dropDown.style.display="none";
  header.classList.remove('active');
})


// drop menu about us 
const aboutUs = document.querySelector(".aboutUsBtn");
const aboutDropDown=document.querySelector(".aboutDropDown");
const aboutHeader = document.querySelector("header");

aboutUs.addEventListener('mouseover',function(){
  aboutDropDown.style.display="block";
  dropDown.style.display="none";
  aboutHeader.classList.add('active');
})
aboutDropDown.addEventListener('mouseleave',function(){
aboutDropDown.style.display="none";
aboutHeader.classList.remove('active');
})


// menu bar open


function openMenu(){
    
  document.getElementById("mobileNav").style.width = "100%"; 

}

function closeMenu() {
  document.getElementById("mobileNav").style.width = "0%";
}


// open glass bar

function openGlass(){

    document.getElementById('mobileAndDesk').style.display='flex'
}


function closeInput(){

  document.getElementById('mobileAndDesk').style.display='none'
}

// mobile open pro and solve
/* let productSolves = document.getElementById('openSubMenu');

let showMenu = false;
const getMenu = () => {
  showMenu ? productSolves.style.display = 'none' : productSolves.style.display = 'block'
}
getMenu() */

// function openProAndSolve(){

//    //console.log(12)
//     const productSolves = document.getElementById('openSubMenu');
//      if(productSolves.style.display === 'none'){
//           productSolves.style.display ='block'
//           console.log('one')
//      }else{
//       productSolves.style.display ='none'
//      }
// }

// openMobileElektron
const mobileElektron = document.getElementById('openSubMenu');
const showHideMobileMenu = () => {
  if(mobileElektron.classList.contains('d-block')){
      mobileElektron.classList.remove('d-block')
  }else{
      mobileElektron.classList.add('d-block')
  }
}
function openProAndSolve(){
  showHideMobileMenu();
}

function openMobileElektron(e){
  const subMobileElektron = document.getElementById('subMobileElektron');
    showHideMobileMenu();
    subMobileElektron.classList.toggle('d-block')
}

 function openMobileTelemetric(){

  const mobileTelemetric = document.getElementById('mobileSubTelemetric');
     showHideMobileMenu()
     mobileTelemetric.classList.toggle('d-block')
}


 function mobileSolves(){

  const mobileSolves = document.getElementById('mobileSubSolvesMenu');
   showHideMobileMenu()
    mobileSolves.classList.toggle('d-block')
}

 function mobileProgram(){

  const mobileProgram = document.getElementById('mobileSubProgMenu');
     showHideMobileMenu()
     mobileProgram.classList.toggle('d-block')
} 

// open AboutUs

function openAboutUs(){
 
  const aboutUs = document.getElementById('AboutUs');
      showHideMobileMenu()
      aboutUs.classList.toggle('d-block')
}