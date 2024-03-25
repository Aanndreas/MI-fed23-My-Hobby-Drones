document.addEventListener("DOMContentLoaded", function () {
	const expandBtn = document.getElementById("expandBtn");
	const expandableContent = document.getElementById("expandableContent");

	expandBtn.addEventListener("click", function () {
		expandableContent.classList.toggle("active");
		if (expandableContent.classList.contains("active")) {
			expandBtn.textContent = "Read less";
		} else {
			expandBtn.textContent = "Read more";
		}
	});
});
