const counters = document.querySelectorAll(".stat h3");

let started = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector(".about-stats");

  const sectionTop = section.getBoundingClientRect().top;

  const trigger = window.innerHeight - 100;

  if (sectionTop < trigger && !started) {
    started = true;

    counters.forEach((counter) => {
      const target = counter.innerText.replace("+", "");
      let count = 0;

      const updateCounter = () => {
        count += target / 100;

        if (count < target) {
          counter.innerText = Math.floor(count);

          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();
    });
  }
});

// ============================================================

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

const data = [
  {
    title: "Research",
    desc: "Continuous research and development to improve dairy technology.",
  },
  {
    title: "Engineering",
    desc: "Designing efficient and durable dairy equipment solutions.",
  },
  {
    title: "Manufacturing",
    desc: "Modern machinery ensures high precision production.",
  },
  {
    title: "Quality Testing",
    desc: "Strict inspection ensures top quality products.",
  },
  { title: "Delivery", desc: "Timely and reliable delivery across India." },
];

function openCard(e, index) {
  const card = document.getElementById("processCard");
  const arrow = document.getElementById("arrow");

  const step = e.currentTarget;
  const parent = document.querySelector(".process-right");

  const stepRect = step.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  // content
  document.getElementById("cardTitle").innerText = data[index].title;
  document.getElementById("cardDesc").innerText = data[index].desc;

  // horizontal center
  let left = stepRect.left - parentRect.left + stepRect.width / 2 - 140;

  let top;

  // 🔥 FIXED RULE
  if (step.classList.contains("top-card")) {
    // ABOVE
    top = stepRect.top - parentRect.top - card.offsetHeight - 15;

    arrow.style.bottom = "-6px";
    arrow.style.top = "auto";
  } else {
    // BELOW
    top = stepRect.top - parentRect.top + stepRect.height + 15;

    arrow.style.top = "-6px";
    arrow.style.bottom = "auto";
  }

  // apply
  card.style.left = left + "px";
  card.style.top = top + "px";

  arrow.style.left = "50%";
  arrow.style.transform = "translateX(-50%) rotate(45deg)";

  card.classList.add("active");
}
