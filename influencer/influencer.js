const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");


const chicken = document.querySelector(".chicken");

let isChickenVisible = false;

let people = [
  {
    photo: 'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
    name: "Susan Smith",
    profession: "WEB DEVELOPER",
    description: "Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
  },
  {
    photo: "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
    name: "Anna Grey",
    profession: "UFC FIGHTER",
    description: "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
  },
  {
    photo: "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
    name: "Branson Cook",
    profession: "ACTOR",
    description: "Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
  },
  {
    photo: "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
    name: "Julius Grohn",
    profession: "PROFESSIONAL CHILD",
    description: "Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

// Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  // (+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: ${side1symbol + reviewWrapWidth}
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: ${side2symbol + reviewWrapWidth}
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
    description.style.height = descriptionHeight;
    personName.innerText = people[personNumber].name;
    profession.innerText = people[personNumber].profession;
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
  } else {
    currentPerson++;
  }
  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
  } else {
    currentPerson--;
  }
  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

 


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));