const closeNotice = document.getElementById("closeNotice");
const noticePopup = document.getElementById("noticePopup");

if (closeNotice && noticePopup) {
    closeNotice.addEventListener("click", function() {
        noticePopup.classList.add("closing");
        setTimeout(function() {
            noticePopup.style.display = "none";
        }, 300);
    });
}
