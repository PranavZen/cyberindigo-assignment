function expand() {
    var element = document.getElementById("sidenav");
    element.classList.remove("is-collapsed");
    var element = document.getElementById("dashboardBody");
    element.classList.remove("fullWidthBox");
  }
  
  function collapse() {
    var element = document.getElementById("sidenav");
    element.classList.add("is-collapsed");
    var element = document.getElementById("dashboardBody");
    element.classList.add("fullWidthBox");
  }
  
  function toggle() {
    var element = document.getElementById("sidenav");
    element.classList.toggle("is-collapsed");
    var element = document.getElementById("dashboardBody");
    element.classList.toggle("fullWidthBox");
  }

  let inputBox = document.querySelector('.serachBoxWrap'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

  searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
  });

  closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
  });