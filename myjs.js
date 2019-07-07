document.getElementById("search").addEventListener("click", function () {
  let search = prompt("search product").toLowerCase();
  if (search === "apple") {
    document.open("https://www.apple.com/ru/", "", "");
  } else if (search === "mac") {
    document.open("https://www.apple.com/ru/mac/", "", "");
  } else if (search === "ipad") {
    document.open("https://www.apple.com/ru/ipad/", "", "");
  } else if (search === "iphone") {
    document.open("https://www.apple.com/ru/iphone/", "", "");
  } else if (search === "watch") {
    document.open("https://www.apple.com/ru/watch/", "", "");
  } else if (search === "tv") {
    document.open("https://www.apple.com/ru/tv/", "", "");
  } else if (search === "music") {
    document.open("https://www.apple.com/ru/music/", "", "");
  } else if (search === "support") {
    document.open("https://support.apple.com/ru-ru", "", "");
  } else {
    alert("Wrong!");
  }
});
document.getElementById("shop").addEventListener("click", function () {
  document.open(
    "https://www.apple.com/ru/shop/accessories/all-accessories/whats-new",
    "",
    ""
  );
});
document.getElementById("buy").addEventListener('click', function () {
  document.open("https://www.apple.com/ru/shop/buy-iphone/iphone-xr", '', '');
})
document.getElementById("more").addEventListener("click", function () {
  document.open("https://www.apple.com/ru/iphone-xr/display/", '', '');
});
document.getElementById("compare").addEventListener('click', function () {
  document.open("https://www.apple.com/ru/iphone/compare/", "", "");
});