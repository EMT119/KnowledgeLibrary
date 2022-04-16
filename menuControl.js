hideDivs(); //Hide the sub sections of the website

document.querySelectorAll(".nav-item").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    document.getElementById(e.target.innerText).style.display = "block";
  });
});

function hideDivs() {
  let hideDivs = ["AEMT"];

  hideDivs.forEach((e) => {
    document.getElementById(e).style.display = "none";
  });
}

function changeFrame(frame) {
  document.getElementById("AEMTframe").src = frame;
}
