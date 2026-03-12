window.addEventListener("scroll", function () {
  const toTopo = document.querySelector("#to-topo");

  if (window.scrollY > 100) {
    toTopo.style.display = "block";
  } else {
    toTopo.style.display = "none";
  }
});

document.querySelector("#to-topo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
