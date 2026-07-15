document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;

  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  video.load();

  video.play().catch((err) => {
    console.log("Autoplay prevented:", err);
  });
});
