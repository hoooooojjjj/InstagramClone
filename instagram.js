// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");
const xButton = document.querySelector(".xButton");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

xButton.addEventListener("click", () => {
  storyModal.style.display = "none";
});

// 실습 2
const profile_container = document.querySelector(".profile-container");
const profile_modal = document.getElementById("profile-modal");

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

// 실습 3
const likeCount = document.getElementById("like-count");
let likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) + 1;
});

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;
});

// 실습 4
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

// 댓글을 만드는 로직
let commentsList = [];
let commentId = 0;
const ul = document.querySelector(".comment-wrapper");

const submitComents = (commentText, deleteComment) => {
  const li = document.createElement("li");
  li.innerText = commentText;
  li.style.fontSize = "20px";
  li.style.listStyle = "none";
  const span = document.createElement("span");
  const img = document.createElement("img");
  img.id = commentId;
  img.className = "comment-delete-icon";
  img.onclick = deleteComment;
  img.src = "./images/close.png";
  img.alt = "comment";
  span.appendChild(img);
  li.appendChild(span);
  ul.appendChild(li);
};

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);
  commentId = commentsList.length;
  submitComents(commentText, deleteComment);
  commentInput.value = "";
});

// 실습 5

const deleteComment = (event) => {
  console.log(event);
  const li = event.target.parentNode.parentNode; // 이벤트가 일어난 대상의 부모
  li.remove(); // remove() 함수 -> 요소를 지울 수 있음.
  commentsList = commentsList.filter(function () {
    return commentId !== parseInt(li.id);
  }); // 클릭한 버튼의 li의 id를 가진 배열의 요소를 지움.
};

// 실습6
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;
