<script lang="ts" setup>
function handleLogin() {
  console.log("로그인 실행");
}
const NavUrl = {
  home: {
    href: "/",
    label: " 홈 ",
  },
  recommend: {
    href: "/recommend",
    label: " 추천 ",
  },
  community: {
    href: "/community",
    label: " 포트럭 ",
  },
  mypage: {
    href: "/mypage",
    label: " 마이페이지 ",
  },
};
</script>

<template>
  <div class="nav">
    <div class="img-container">
      <NuxtImg
        src="/Logo.png"
        alt="marshmovie main"
        sizes="(max-width: 600px) 40px 80px, (max-width: 1200px) 50px, 50px"
      />
    </div>
    <ul class="nav-list">
      <li v-for="(li, i) in NavUrl" :key="i">
        <NuxtLink :to="li.href"> {{ li.label }}</NuxtLink>
      </li>
    </ul>
    <CommonButton label="Log in" :onClick="handleLogin" />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex; /* Flexbox 활성화 */
  justify-content: space-between; /* 요소 간 간격 균등 분배 */
  align-items: center; /* 세로 가운데 정렬 */
  background-color: #aaffdd; /* 보기 편하게 배경색 지정 */
  padding: 0rem 2rem; /* 내부 여백 */
  width: 100%; /* 가로 크기 채우기 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  text-decoration-line: none;
}

.img-container {
  width: 100px;
  height: 100px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  display: flex; /* 가로 정렬 */
  gap: 1rem; /* 아이템 간 간격 */
  list-style: none; /* 기본 목록 스타일 제거 */
  padding: 0;
  margin: 0;
  text-decoration-line: none;
}

.nav-list li {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  text-decoration-line: none;
  a {
    text-decoration: none; /* 내부 NuxtLink 스타일 */
    color: inherit; /* 텍스트 색상 부모로부터 상속 */
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 1rem;
    font-weight: 1000;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
}
</style>
