document.addEventListener("DOMContentLoaded", function () {
  const playPauseBtn = document.querySelector("#play-pause");
  const video = document.querySelector("video");

  function playPauseFn() {
    video.paused ? video.play() : video.pause();
  }

  function updatePlayPauseIcon() {
    const icon = playPauseBtn.querySelector("svg");
    const playIconPath =
      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z";
    const pauseIconPath =
      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z";

    const pathElement = icon.querySelector("path");
    if (pathElement) {
      pathElement.setAttribute(
        "d",
        video.paused ? playIconPath : pauseIconPath
      );
    }
  }
  video.addEventListener("play", updatePlayPauseIcon);
  video.addEventListener("pause", updatePlayPauseIcon);
  video.addEventListener("ended", updatePlayPauseIcon);
  playPauseBtn.addEventListener("click", playPauseFn);
});
