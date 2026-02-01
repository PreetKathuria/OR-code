const generate = document.getElementById("Generate");
const qr = document.getElementById("qr");
const input = document.getElementById("input");
const sizes = document.getElementById("sizes");
const download = document.getElementById("Download");

let size = sizes.value;

generate.addEventListener("click",(e) => {
    e.preventDefault();
    if(input.value !== "") {
        qrgenerate();
    }
});

sizes.addEventListener("change",(e) => {
    size = e.target.value;
    if(input.value !== "") {
        qrgenerate();
    }
});

download.addEventListener("click",() => {
    let img = document.querySelector("#qr img");

    if(!img) {
        alert("Generate QR code first!");
        return;
    }
    let link = document.createElement("a");

    link.href = img.src;
    link.download = "qr-img.png";
    link.click();
});

function qrgenerate() {
    qr.innerHTML = "";
    new QRCode(qr, {
    text: input.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
});
}