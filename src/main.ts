
function main() {
    const link = createLink();
    insertLink(link);
}

function createLink(): HTMLAnchorElement | null {

    const link: HTMLAnchorElement = document.createElement("a");
    // = ["", , "d-none", "d-md-block"];
    link.classList.add("btn");
    link.classList.add("mr-2");
    link.classList.add("d-md-block");

    link.textContent = "Download";
    const pathname = window.location.pathname;
    link.href = pathname;
    const filename = window.location.pathname.split("/").pop();
    link.download = filename ?? "file";

    link.referrerPolicy = "no-referrer";

    return link;

}

function insertLink(link: HTMLAnchorElement | null): void {
    let blobPath = document.querySelector("div > h2#blob-path");

    if (link) {
        blobPath?.after(link);
    }
}

//--------- main --------- 
main();
// --------- main ---------

