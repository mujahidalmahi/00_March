const DEFAULT_FILTERS = {
    Brightness: { value: 100, min: 0, max: 200, unit: "%" },
    Contrast: { value: 100, min: 0, max: 200, unit: "%" },
    Saturation: { value: 100, min: 0, max: 200, unit: "%" },
    HueRotation: { value: 0, min: 0, max: 360, unit: "deg" },
    Blur: { value: 0, min: 0, max: 20, unit: "px" },
    GreyScale: { value: 0, min: 0, max: 100, unit: "%" },
    Sepia: { value: 0, min: 0, max: 100, unit: "%" },
    Opacity: { value: 100, min: 0, max: 100, unit: "%" },
    Invert: { value: 0, min: 0, max: 200, unit: "%" }
};

let filters = JSON.parse(JSON.stringify(DEFAULT_FILTERS));

const imagePlaceholder = document.querySelector(".placeholder");
const imageCanvas = document.getElementById("image-canvas");
const canvasCtx = imageCanvas.getContext("2d");
const imageInput = document.querySelector("#image-input");
const filterContainer = document.querySelector(".filters");
const clearButton = document.querySelector("#clear-btn");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetContainer = document.querySelector(".presets");

let image = null;

/* -------- FILTER UI -------- */

function createFilterElement(name, config) {
    const div = document.createElement("div");
    div.classList.add("filter");

    const label = document.createElement("p");
    label.innerText = name;

    const input = document.createElement("input");
    input.type = "range";
    input.min = config.min;
    input.max = config.max;
    input.value = config.value;

    input.addEventListener("input", (e) => {
        filters[name].value = e.target.value;
        applyFilter();
    });

    div.append(label, input);
    return div;
}

function renderFilters() {
    filterContainer.innerHTML = "";
    Object.entries(filters).forEach(([name, config]) => {
        filterContainer.appendChild(createFilterElement(name, config));
    });
}

/* -------- IMAGE LOAD -------- */

imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    imageCanvas.style.display = "block";
    if (imagePlaceholder) imagePlaceholder.style.display = "none";

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        image = img;
        imageCanvas.width = image.width;
        imageCanvas.height = image.height;
        applyFilter();
    };
});

/* -------- FILTER APPLY -------- */

function getFilterString() {
    return `
        brightness(${filters.Brightness.value}${filters.Brightness.unit})
        contrast(${filters.Contrast.value}${filters.Contrast.unit})
        saturate(${filters.Saturation.value}${filters.Saturation.unit})
        hue-rotate(${filters.HueRotation.value}${filters.HueRotation.unit})
        blur(${filters.Blur.value}${filters.Blur.unit})
        grayscale(${filters.GreyScale.value}${filters.GreyScale.unit})
        sepia(${filters.Sepia.value}${filters.Sepia.unit})
        opacity(${filters.Opacity.value}${filters.Opacity.unit})
        invert(${filters.Invert.value}${filters.Invert.unit})
    `;
}

function applyFilter() {
    if (!image) return;

    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = getFilterString();
    canvasCtx.drawImage(image, 0, 0);
}

/* -------- CLEAR -------- */

clearButton.addEventListener("click", () => {
    image = null;
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

    imagePlaceholder.style.display = "block";
    imageCanvas.style.display = "none";
});

/* -------- RESET -------- */

resetButton.addEventListener("click", () => {
    filters = JSON.parse(JSON.stringify(DEFAULT_FILTERS));
    renderFilters();
    applyFilter();
});

/* -------- DOWNLOAD -------- */

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
});

/* -------- PRESETS -------- */

const presets = {
    Normal: { Brightness: 100, Contrast: 100, Saturation: 100, HueRotation: 0, Blur: 0, GreyScale: 0, Sepia: 0, Opacity: 100, Invert: 0 },

    Drama: { Brightness: 90, Contrast: 150, Saturation: 120, HueRotation: 0, Blur: 0, GreyScale: 10, Sepia: 0, Opacity: 100, Invert: 0 },

    Vintage: { Brightness: 110, Contrast: 90, Saturation: 80, HueRotation: 10, Blur: 0, GreyScale: 20, Sepia: 40, Opacity: 100, Invert: 0 },

    Cool: { Brightness: 100, Contrast: 110, Saturation: 110, HueRotation: 180, Blur: 0, GreyScale: 0, Sepia: 0, Opacity: 100, Invert: 0 },

    Noir: { Brightness: 90, Contrast: 140, Saturation: 0, HueRotation: 0, Blur: 0, GreyScale: 100, Sepia: 0, Opacity: 100, Invert: 0 },

    WarmSunset: { Brightness: 110, Contrast: 105, Saturation: 130, HueRotation: -15, Blur: 0, GreyScale: 0, Sepia: 25, Opacity: 100, Invert: 0 },

    ColdWinter: { Brightness: 95, Contrast: 110, Saturation: 90, HueRotation: 170, Blur: 0, GreyScale: 10, Sepia: 0, Opacity: 100, Invert: 0 },

    SoftGlow: { Brightness: 115, Contrast: 85, Saturation: 105, HueRotation: 10, Blur: 2, GreyScale: 0, Sepia: 15, Opacity: 95, Invert: 0 },

    Cinematic: { Brightness: 95, Contrast: 135, Saturation: 110, HueRotation: 5, Blur: 0, GreyScale: 5, Sepia: 10, Opacity: 100, Invert: 0 },

    WashedOut: { Brightness: 120, Contrast: 70, Saturation: 60, HueRotation: 0, Blur: 0, GreyScale: 20, Sepia: 10, Opacity: 90, Invert: 0 },

    NeonPop: { Brightness: 105, Contrast: 140, Saturation: 180, HueRotation: 200, Blur: 0, GreyScale: 0, Sepia: 0, Opacity: 100, Invert: 0 },

    DarkMode: { Brightness: 70, Contrast: 130, Saturation: 90, HueRotation: 0, Blur: 0, GreyScale: 20, Sepia: 0, Opacity: 100, Invert: 0 },

    DreamyPastel: { Brightness: 120, Contrast: 80, Saturation: 90, HueRotation: 30, Blur: 3, GreyScale: 10, Sepia: 20, Opacity: 95, Invert: 0 },

    Horror: { Brightness: 80, Contrast: 160, Saturation: 50, HueRotation: 300, Blur: 1, GreyScale: 30, Sepia: 0, Opacity: 100, Invert: 0 },

    RetroFilm: { Brightness: 105, Contrast: 85, Saturation: 75, HueRotation: 0, Blur: 1, GreyScale: 25, Sepia: 50, Opacity: 95, Invert: 0 }
};

function applyPreset(preset) {
    Object.entries(preset).forEach(([key, value]) => {
        filters[key].value = value;
    });
    renderFilters();
    applyFilter();
}

Object.keys(presets).forEach(name => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("preset");
    btn.innerText = name;

    btn.addEventListener("click", () => {
        applyPreset(presets[name]);
    });

    presetContainer.appendChild(btn);
});

/* -------- INIT -------- */

renderFilters();