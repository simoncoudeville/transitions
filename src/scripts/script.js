
// select all the thumbnails
const thumbnails = document.querySelectorAll(".item");

document.addEventListener("astro:page-load", () => {

    thumbnails.forEach((thumbnail) => {
        thumbnail.onclick = async () => {
            // find the img element
            const img = thumbnail.querySelector(".item__img");
            img.style.viewTransitionName = "detail-image";

            document.startViewTransition(() => {
                thumbnail.style.viewTransitionName = "";
            });

            console.log("clicked");
        };
    });
});