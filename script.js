document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (video) {
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay prevented.");
      });
    }
  }
});
