const placeholderFont = "montserrat";

document.querySelectorAll("img").forEach((img) => {
  const handleError = () => {
    if (img.dataset.errorHandled) return;
    img.dataset.errorHandled = "true";

    const devicePixelRatio = window.devicePixelRatio || 1;

    const width = img.width || 300;
    const height = img.height || 200;

    const scaledWidth = Math.floor(width * devicePixelRatio);
    const scaledHeight = Math.floor(height * devicePixelRatio);

    const placeholder = `https://placehold.co/${scaledWidth}x${scaledHeight}?text=No+Image&font=${placeholderFont}`;

    img.style.width = width + "px";
    img.style.height = height + "px";

    console.warn(`Replacing broken image (${img.src}) with retina placeholder:`, placeholder);

    img.src = placeholder;
  };

  img.addEventListener("error", handleError);

  if (!img.complete || img.naturalWidth === 0) {
    handleError();
  }
});
