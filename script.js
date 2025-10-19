const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const text2 = `Hôm nay là ngày đặc biệt dành cho phái đẹp, và trong suy nghĩ của tớ, người xứng đáng nhận được nhiều lời chúc nhất chính là cậu. 
Cảm ơn cậu vì đã luôn xuất hiện như một tia nắng nhỏ khiến mỗi ngày của tớ trở nên tươi sáng hơn.

Nhân dịp 20/10, tớ chúc cậu luôn xinh đẹp, vui vẻ, tự tin và gặp thật nhiều may mắn. 
Mong rằng nụ cười của cậu sẽ luôn rạng rỡ như bây giờ, vì với tớ – chỉ cần thấy cậu cười thôi là cả ngày đã vui rồi.

Nếu có thể, tớ muốn gửi tặng cậu một bó hoa thật đẹp, nhưng có lẽ lời chúc này là “món quà” chân thành nhất mà tớ có thể dành. 
Hy vọng cậu sẽ có một ngày 20/10 thật ý nghĩa, đầy ắp yêu thương và niềm vui.

Biết đâu, trong số những người chúc cậu hôm nay… có một người đang âm thầm thích cậu rất nhiều! 💐❤️`;
const text3 = `Cảm ơn vì đã đọc hết và bây giờ hãy quét mã ở dưới đi nekk 
               Nhớ để lâu lâu xíu và phong to trang ra để dễ quét hơn nhé🌸`

function typeEffect(element, text, speed, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) callback();
  }
  typing();
}

// Hiệu ứng pháo hoa
function fireworks(containerId) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < 50; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.position = "absolute";
    firework.style.width = "4px";
    firework.style.height = "4px";
    firework.style.borderRadius = "50%";
    firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    firework.style.top = Math.random() * 100 + "%";
    firework.style.left = Math.random() * 100 + "%";
    firework.style.animation = `explode ${1 + Math.random() * 2}s ease-out infinite`;
    container.appendChild(firework);
  }
}

startBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page1.style.display = "none";
  page2.classList.add("active");
  music.play();
  startPage2();
});

function startPage2() {
  fireworks("fireworks-container");
  typeEffect(message2, text2, 70, () => {
    img1.style.opacity = "1";
    nextBtn.classList.remove("hidden");
  });
}

nextBtn.addEventListener("click", () => {
  page2.classList.remove("active");
  page2.style.display = "none";
  page3.classList.add("active");
  startPage3();
});

function startPage3() {
  fireworks("fireworks-container3");
  typeEffect(message3, text3, 70, () => {
    img2.style.opacity = "1";
  });
}
