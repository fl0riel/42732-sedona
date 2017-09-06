var searchBtn = document.querySelector(".search-btn");
var searchForm = document.querySelector(".search-form-visible");

searchForm.classList.add("search-form-hidden");

searchBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form-hidden");
});

