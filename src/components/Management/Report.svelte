<!-- <script>
  import jsPDF from "jspdf";

  const sections = [
    { type: "text", content: "This is some sample text." },
    { type: "list", items: ["Item 1", "Item 2", "Item 3"] },
    {
      type: "table",
      headers: ["Column 1", "Column 2", "Column 3"],
      rows: [
        ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
        ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
        ["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3"],
      ],
    },
  ];

  function downloadPDF() {
    const doc = new jsPDF();

    // Set the font and text color
    doc.setFont("Alkatra", "bold");
    doc.setTextColor("#007bff");

    // Add the text to the PDF
    sections.forEach((section, index) => {
      if (section.type === "text") {
        doc.setFontSize(14);
        doc.setTextColor("#a4fbff");
        doc.text(10, 5 + index * 15, section.content);
      } else if (section.type === "list") {
        doc.setFontSize(10);
        section.items.forEach((item, itemIndex) => {
          doc.text(30, 30 + (index + itemIndex) * 10, `• ${item}`);
        });
      } else if (section.type === "table") {
        doc.setFontSize(10);
        section.headers.forEach((header, headerIndex) => {
          doc.text(20 + headerIndex * 50, 50 + index * 15, header);
        });
        section.rows.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
            doc.text(
              20 + cellIndex * 50,
              65 + index * 15 + rowIndex * 10,
              cell
            );
          });
        });
      }
    });

    doc.save("report.pdf");
  }
</script>

<div class="bg-green-400">
  <button class="bg-red-400" on:click={downloadPDF}>Download Report</button>
</div> -->
