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

// 실습 4
const submitComents = (commentObj) => {
  const li = document.createElement("li");
  li.innerText = commentObj.text;
  li.id = commentObj.id;
  li.style.fontSize = "20px";
  li.style.listStyle = "none";
  const span = document.createElement("span");
  const img = document.createElement("img");
  img.className = "comment-delete-icon";
  img.src = "./images/close.png";
  img.alt = "comment";
  img.onclick = deleteComment; // 클릭 이벤트에 deleteComment 함수를 직접 연결
  span.appendChild(img);
  li.appendChild(span);
  ul.appendChild(li);
};

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  const commentObj = {
    // 사용자의 입력값을 id와 함께 전달하기 위해 객체를 만듬 -> 각 입력값이 어떤 건지 알기 위해
    text: commentText,
    id: Date.now(),
  };
  commentsList.push(commentObj);
  commentId = commentsList.length;
  submitComents(commentObj, deleteComment);
  commentInput.value = "";
  savedToDos();
});

// 실습 5

const deleteComment = (event) => {
  const li = event.target.parentNode.parentNode; // 이벤트가 일어난 대상의 부모
  li.remove(); // remove() 함수 -> 요소를 지울 수 있음.
  commentsList = commentsList.filter(function (comment) {
    console.log(comment);
    return comment.id !== parseInt(li.id);
  }); // 클릭한 버튼의 li의 id를 가진 배열의 요소를 지움.
  console.log(li);
  savedToDos();
};

// 실습6
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

// 로컬스토리지에 댓글 저장
function savedToDos() {
  // todo를 localstorage에 배열로 저장
  localStorage.setItem("comment", JSON.stringify(commentsList));
}

const savedComment = localStorage.getItem("comment");

if (savedComment !== null) {
  const parsedComment = JSON.parse(savedComment); // 2. 다시 그 문자열을 배열로 전환
  parsedComment.forEach(submitComents);
  commentsList = parsedComment; // 기존 로컬에 있는 요소들을 현재 toDos 배열에 계속해서 추가하기
  // => 이러면 새로고침할 때마다 toDos 배열은 리셋되지만 로컬에는 남아있기 때문에 그걸 다시 toDos 배열에 넣어서
  // 가져올 수 있다.
}
console.log(commentsList);
