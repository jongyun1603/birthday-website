function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const correctUser = "maitrang";
  const correctPass = "21032007";

  if (username === correctUser && password === correctPass) {
    window.location.href = "welcome.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu");
  }
}

function gotoMain() {
  window.location.href = "happybirthday.html";
}

function openGift(number) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-text");

  popup.classList.remove("hidden");

  if (number === 1) {
    img.src = "https://images2.thanhnien.vn/528068263637045248/2023/3/9/2841-1678335804674516677736.jpg";
    text.innerText = "🎂 Omg chú chuột hamster đuôi dài đã tăng thêm 1 tuổi rồi";
  }

  if (number === 2) {
    img.src = "https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-chuc-mung-sinh-nhat-meo-cung.jpg";
    text.innerText = "💖 Tớ chúc cậu sinh nhật tuổi 19 rực rỡ và thành công trong việc học nha! Thi môn nào qua môn môn đó nha =)))";
  }

  if (number === 3) {
    img.src = "https://th.bing.com/th/id/OIP.RYmgupKNTNPvR0Y-47vOOAHaHa?w=191&h=191&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3";
    text.innerText = "✨ Cuối cùng sống thật vui và tích cực nha cười nhiều lên ông trời sẽ ban cho sự xinh đẹp vĩnh hằng :>";
  }
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function submitReview() {
  const text = document.getElementById("reviewText").value;
  const rating = document.getElementById("rating").value;
  const reviews = document.getElementById("reviews");

  if (text.trim() === "") {
    alert("Chưa viết gì mà huhu viết gì đó đi nhanh lên!!!");
    return;
  }

  const div = document.createElement("div");
  div.className = "review-item";
  div.innerHTML = `<strong>${rating}</strong><p>${text}</p>`;

  reviews.prepend(div);

  document.getElementById("reviewText").value = "";
}
