.document.addEventListener("DOMContentLoaded",function () {

    const closeBtn = document.getElementById("close-btn");

    if (closeBtn) {
   
      closeBtn.addEventListener("click", function (event) {
   
        event.preventDefault(); // 避免<a>元素的預設行為
   
      });
   
    }
   
});