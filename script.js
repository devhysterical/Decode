// DOM elements
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const decodeType = document.getElementById("decodeType");
const decodeBtn = document.getElementById("decodeBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");
const clearInputBtn = document.getElementById("clearInputBtn");
const clearOutputBtn = document.getElementById("clearOutputBtn");
const pasteBtn = document.getElementById("pasteBtn");
const swapBtn = document.getElementById("swapBtn");
const alert = document.getElementById("alert");

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.textContent = "☀️";
    themeText.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "🌙";
    themeText.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.textContent = "☀️";
  themeText.textContent = "Light Mode";
}

// Show alert function
function showAlert(message, type = "success") {
  alert.textContent = message;
  alert.style.backgroundColor =
    type === "success" ? "var(--success)" : "var(--danger)";
  alert.style.opacity = "1";

  setTimeout(() => {
    alert.style.opacity = "0";
  }, 3000);
}

// Decode function
function processData() {
  const type = decodeType.value;
  const input = inputText.value;

  if (!input.trim()) {
    showAlert("Please enter some text to process", "error");
    return;
  }

  try {
    let result = "";

    switch (type) {
      case "base64":
        result = atob(input);
        break;
      case "base64encode":
        result = btoa(input);
        break;
      case "url":
        result = decodeURIComponent(input);
        break;
      case "urlencode":
        result = encodeURIComponent(input);
        break;
      case "html":
        result = new DOMParser().parseFromString(input, "text/html")
          .documentElement.textContent;
        break;
      case "htmlencode":
        result = input.replace(
          /[&<>"']/g,
          (m) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            }[m])
        );
        break;
      case "jwt":
        const parts = input.split(".");
        if (parts.length !== 3) throw new Error("Invalid JWT format");

        const header = JSON.parse(atob(parts[0]));
        const payload = JSON.parse(atob(parts[1]));

        result =
          "HEADER:\n" +
          JSON.stringify(header, null, 2) +
          "\n\nPAYLOAD:\n" +
          JSON.stringify(payload, null, 2);
        break;
      case "hexToAscii":
        result = input
          .replace(/\s+/g, "") // Remove whitespace
          .match(/.{1,2}/g) // Split into pairs
          .map((byte) => String.fromCharCode(parseInt(byte, 16)))
          .join("");
        break;
      case "asciiToHex":
        result = Array.from(input)
          .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
          .join(" ");
        break;
      case "binaryToText":
        result = input
          .replace(/\s+/g, "") // Remove whitespace
          .match(/.{1,8}/g) // Split into bytes
          .map((byte) => String.fromCharCode(parseInt(byte, 2)))
          .join("");
        break;
      case "textToBinary":
        result = Array.from(input)
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
          .join(" ");
        break;
      default:
        throw new Error("Unknown decode type");
    }

    outputText.value = result;
    showAlert("Successfully processed!");
  } catch (error) {
    outputText.value = "Error: " + error.message;
    showAlert("Processing error: " + error.message, "error");
  }
}

// Event listeners
decodeBtn.addEventListener("click", processData);

copyBtn.addEventListener("click", () => {
  if (!outputText.value) {
    showAlert("Nothing to copy!", "error");
    return;
  }

  navigator.clipboard
    .writeText(outputText.value)
    .then(() => showAlert("Copied to clipboard!"))
    .catch((err) => showAlert("Failed to copy: " + err, "error"));
});

clearInputBtn.addEventListener("click", () => {
  inputText.value = "";
  showAlert("Input cleared");
});

clearOutputBtn.addEventListener("click", () => {
  outputText.value = "";
  showAlert("Output cleared");
});

pasteBtn.addEventListener("click", () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      inputText.value = text;
      showAlert("Text pasted from clipboard");
    })
    .catch((err) => showAlert("Failed to paste: " + err, "error"));
});

swapBtn.addEventListener("click", () => {
  const temp = inputText.value;
  inputText.value = outputText.value;
  outputText.value = temp;
  showAlert("Input and output swapped");
});

// Auto process on input change after a delay
let typingTimer;
inputText.addEventListener("input", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(processData, 1000); // Process after 1 second of inactivity
});

// Process on decode type change
decodeType.addEventListener("change", () => {
  if (inputText.value) {
    processData();
  }
});

// Enable keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Ctrl+Enter to process
  if (e.ctrlKey && e.key === "Enter") {
    processData();
  }

  // Ctrl+Shift+C to copy output
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
    copyBtn.click();
  }
});
