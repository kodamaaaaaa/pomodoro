document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("bar");
  const text = document.getElementById("text");
  const loader = document.getElementById("loader");

  let progress = 0;
  let t = 0;
  const arr = ["Loading.", "Loading..", "Loading..."];

  const txtTimer = setInterval(() => {
    text.textContent = arr[t % 3];
    t++;
  }, 400);

  const timer = setInterval(() => {
    progress += 2;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(timer);
      clearInterval(txtTimer);

      loader.style.opacity = "0";
      loader.style.transition = "0.8s";

      }, 800);
    }
  }, 60);
});
