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
