document.getElementById("toggle-more").addEventListener("click", function () {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        document.getElementById("toggle-more").textContent = "Show Less";
    } else {
        moreInfo.classList.add("hidden");
        document.getElementById("toggle-more").textContent = "Show More";
    }
});
