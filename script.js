// Generate barcodes
document.getElementById("barcodeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const input = document.getElementById("barcodeText").value.trim();
  const lines = input.split(/\r?\n/).filter(line => line.trim() !== "");
  const container = document.getElementById("barcodeContainer");
  
  container.innerHTML = ""; // clear old barcodes
  
  lines.forEach((text, index) => {
    const div = document.createElement("div");
    div.classList.add("barcode-item");
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "barcode" + index;
    div.appendChild(svg);
    container.appendChild(div);
    
    JsBarcode(svg, text.trim(), {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 60,
      displayValue: true,
      fontSize: 14,
      margin: 10
    });
  });
});

// Erase button functionality
document.getElementById("eraseBtn").addEventListener("click", function() {
  document.getElementById("barcodeText").value = ""; // clear textarea
  document.getElementById("barcodeContainer").innerHTML = ""; // clear barcodes
});

// Adding runner
const runnerLayer = document.getElementById("runner-layer");

function createRunner() {
  const runner = document.createElement("div");
  runner.className = "doodle-runner";

  const speed = Math.random() * 8 + 10;   // 10–18s
  const delay = Math.random() * 5;        // random delay
  const scale = Math.random() * 0.4 + 0.7;

  runner.style.animationDuration = `${speed}s`;
  runner.style.animationDelay = `${delay}s`;
  runner.style.transform = `scale(${scale})`;

  runner.innerHTML = `
    <div class="box-emoji">📦</div>
    <svg viewBox="0 0 200 100" width="200">
      <!-- Head -->
      <circle cx="40" cy="30" r="8" />
      <!-- Body -->
      <line x1="40" y1="38" x2="40" y2="60" />
      <!-- Arms -->
      <line x1="40" y1="45" x2="60" y2="50" />
      <line x1="60" y1="50" x2="60" y2="60" />
      <!-- Legs -->
      <line class="leg-left"  x1="40" y1="60" x2="30" y2="80" />
      <line class="leg-right" x1="40" y1="60" x2="50" y2="80" />
    </svg>
  `;

  runnerLayer.appendChild(runner);
}
createRunner();
// /* Create multiple runners */
// for (let i = 0; i < 4; i++) {
//   createRunner();
// }
