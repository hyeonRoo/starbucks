const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});

// 검색창에 통합검색 뜨게 하기
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add(['focused']);
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창에 통합검색 제거하기
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove(['focused']);
  searchInputEl.setAttribute('placeholder', '');
});


//올해 자동 날짜 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2024
