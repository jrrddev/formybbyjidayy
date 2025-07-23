document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.getElementById("sparkle-container").appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
});
