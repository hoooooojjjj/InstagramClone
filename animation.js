// 좋아요 눌렀을 때 애니메이션 구현

const like_modal = document.querySelector("#like_modal");
const blackHeart1 = document.getElementById("black-heart");
const like_modal_xbutton = document.querySelector("#like_modal_xbutton");

blackHeart1.addEventListener("click", () => {
  // 현재 right 값 가져오기
  const currentRight = getComputedStyle(like_modal).getPropertyValue("right");

  // 애니메이션 적용
  like_modal.animate(
    { right: [currentRight, "1%", "1%"] }, // 시작, 끝, 그 후 유지할 값
    {
      duration: 1000,
      easing: "linear",
      iterations: 1,
      direction: "normal",
      fill: "forwards", // 애니메이션이 끝난 후 최종 상태로 유지
    }
  );

  // 3초 후에 다시 -40%로 애니메이션 실행
  setTimeout(() => {
    like_modal.animate(
      { right: ["1%", "-100%"] }, // 시작, 끝
      {
        duration: 1000,
        easing: "linear",
        iterations: 1,
        direction: "normal",
        fill: "forwards", // 애니메이션이 끝난 후 최종 상태로 유지
      }
    );
  }, 4000);
});
