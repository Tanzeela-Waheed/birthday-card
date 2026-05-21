const btn = document.getElementById("btn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("bgMusic");
const typingText = document.getElementById("typingText");

const message = `Dear Sir Bilal,  

It has been a true honor to be your student. You have not only been our teacher but also a mentor who guided us in learning, discipline, and confidence. We will always remember your efforts and the knowledge you shared with us.  
Wishing you a very Happy Birthday Sir 🎂  
May Allah bless you with health, happiness, and success always.`;

// 🎵 MUSIC READY ON PAGE LOAD
window.addEventListener("load", () => {
  music.currentTime = 30; // skip intro

  // Try autoplay (may be blocked by browser)
  music.play().catch(() => {
    console.log("Autoplay blocked, waiting for click");
  });
});

// 🎁 BUTTON CLICK EVENT
btn.addEventListener("click", () => {

  // 🔊 ENABLE SOUND + PLAY MUSIC
  music.muted = false;
  music.play().catch(err => console.log("Music error:", err));

  // PAGE SWITCH
  page1.classList.remove("active");
  page1.classList.add("hidden");

  page2.classList.remove("hidden");
  page2.classList.add("active");

  // RESET TEXT
  typingText.textContent = "";

  // ✍️ TYPING EFFECT
  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      typingText.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 25);
    }
  }
  typeWriter();
});