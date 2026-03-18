<script id="revealFix">
window.addEventListener("scroll", function() {
  let reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});
</script>