window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// =============================================================

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// =============================================================
// PRODUCTS DATA
// =============================================================

const products = [
  {
    title: "Milk Analyzers",
    subtitle: "Advanced Digital Milk Analyze",
    desc: "A high-precision analyzer that quickly measures FAT, SNF, protein, lactose, added water, and temperature within seconds, ensuring accurate milk quality testing.",
    img: "Images/REIL-EMT.png",
  },

  {
    title: "Milking Machine",
    subtitle: "Milking Machine Features",
    desc: "Designed for efficiency and animal safety, our milking machines deliver fast milking, reliable performance, and easy operation for modern dairy farms.",
    img: "Images/milking-machine.png",
  },

  {
    title: "Khawa Machine",
    subtitle: "Efficient Khawa (Mawa) Processing Machine",
    desc: "Designed for dairy production, this machine efficiently converts milk into khawa using gas, diesel, or wood, ensuring faster processing and consistent quality.",
    img: "Images/Khawa_machine.png",
  },

  {
    title: "Weighing Scale",
    subtitle: "High Precision Dairy Weighing System",
    desc: "Built with durable SS-304 stainless steel, this dock weighing scale provides accurate milk weight measurement and seamless integration with computers and printers for dairy collection centers.",
    img: "Images/weighing_scale.png",
  },
];

// =============================================================
// PRODUCT CHANGE WITH SLIDE ANIMATION
// =============================================================

function changeProduct(index) {
  const wrapper = document.querySelector(".product-wrapper");

  wrapper.classList.remove("slide-in-right");
  wrapper.classList.add("slide-out-left");

  setTimeout(() => {
    // CHANGE CONTENT
    document.getElementById("title").innerText = products[index].title;
    document.getElementById("subtitle").innerText = products[index].subtitle;
    document.getElementById("description").innerText = products[index].desc;
    document.getElementById("productImage").src = products[index].img;

    // SLIDE NEW CONTENT FROM RIGHT
    wrapper.classList.remove("slide-out-left");
    wrapper.classList.add("slide-in-right");
  }, 450);

  // UPDATE ACTIVE LINE
  let lines = document.querySelectorAll(".line");

  lines.forEach((line) => line.classList.remove("active"));

  lines[index].classList.add("active");
}
