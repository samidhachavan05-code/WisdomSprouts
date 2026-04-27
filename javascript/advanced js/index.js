// ===============================
// 1. IMAGE SLIDER
// ===============================

const images = [
   "assets/flower1.jpg",
  "assets/flower2.jpg",
  "assets/flower3.jpg"

];

let currentIndex = 0;

function showImage() {
  console.log("Showing:", images[currentIndex]);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Auto Slide every 3 sec
setInterval(nextImage, 3000);

showImage();


// ===============================
// 2. DIGITAL CLOCK
// ===============================

function showClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(showClock, 1000);


// ===============================
// 3. COUNTDOWN TIMER
// ===============================

function countdown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    console.log(`${remaining} seconds remaining`);
    remaining--;

    if (remaining < 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}

countdown(5);


// ===============================
// 4. CALLBACK FUNCTION
// ===============================

function readFile(callback) {
  setTimeout(() => {
    const fileData = "This is file content.";
    callback(fileData);
  }, 1500);
}

readFile((data) => {
  console.log("File Read:", data);
});