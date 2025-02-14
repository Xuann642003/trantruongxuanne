document.getElementById("toggle-icon-heart").addEventListener("click", function () {
    var content = document.getElementById("cons-6");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Hiện div
    } else {
        content.style.display = "none"; // Ẩn div
    }
});

document.getElementById("toggle-icon-star").addEventListener("click", function () {
    var content = document.getElementById("cons-6-1");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block"; // Hiện div
    } else {
        content.style.display = "none"; // Ẩn div
    }
});