import jsPDF from "jspdf";
import "jspdf-autotable";
// Register the Roboto font
import RobotoRegular from "../../fonts/Roboto-Regular.ttf";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";

// Register the Alkatra font
import AlkatraBold from "../../fonts/Alkatra-Bold.ttf";
import AlkatraSemibold from "../../fonts/Alkatra-Semibold.ttf";

export const generateReport = (item, userName) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "letter",
  });

  doc.addFileToVFS("Roboto-Regular.ttf", RobotoRegular);
  doc.addFileToVFS("Roboto-Bold.ttf", RobotoBold);

  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");

  doc.addFileToVFS("Alkatra-Bold.ttf", AlkatraBold);
  doc.addFileToVFS("Alkatra-Semibold.ttf", AlkatraSemibold);

  doc.addFont("Alkatra-Bold.ttf", "Alkatra", "bold");
  doc.addFont("Alkatra-Semibold.ttf", "Alkatra", "normal");

  // y coordinates
  let positionY = 30;
  const pageHeight = doc.internal.pageSize.height;

  // app name
  const titleX =
    doc.internal.pageSize.width - doc.internal.pageSize.width / 1.8;
  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.setTextColor("#19D8E9");
  doc.text(titleX, positionY, "Plate Plan");

  //   user name and date
  doc.setFont("times", "bold");
  doc.setTextColor("#000");
  doc.setFontSize(16);
  doc.text(titleX, positionY + 20, userName);

  const dateX = doc.internal.pageSize.width - 100;
  doc.setTextColor("#909393");
  doc.setFontSize(12);
  doc.text(dateX, positionY + 20, `Date: ${item.selectedDate}`);

  //  report text
  doc.setFont("Roboto", "semibold");
  doc.setFontSize(18);
  doc.setTextColor("#000");
  doc.text(10, positionY + 60, "Meal Report:");

  //   nutrients
  doc.setFont("Roboto", "semibold");
  doc.setFontSize(17);
  doc.setTextColor("#000");
  doc.text(10, positionY + 80, "Nutrients:");

  //   breakfast
  createPageDocument(
    doc,
    "Breakfast",
    item.breakfast,
    positionY,
    pageHeight,
    titleX
  );

  // lunch
  createPageDocument(doc, "Lunch", item.lunch, positionY, pageHeight, titleX);

  // snack
  createPageDocument(doc, "Snack", item.snack, positionY, pageHeight, titleX);

  // dinner
  createPageDocument(doc, "Dinner", item.dinner, positionY, pageHeight, titleX);

  doc.save("report.pdf");
};

const createPageDocument = (
  doc,
  mealTitle,
  mealData,
  positionY,
  pageHeight,
  titleX
) => {
  let firstPage = true;
  if (mealTitle !== "Breakfast") {
    firstPage = false;
    doc.addPage();
  }

  //   breakfast data
  doc.setFontSize(13);
  doc.text(10, firstPage ? positionY + 100 : positionY + 10, mealTitle);

  mealData.forEach((meal, index) => {
    const text = `${index + 1}. ${meal.title}`;
    const textHeight = doc.getTextDimensions(text).h;
    if (positionY + textHeight > pageHeight - 30) {
      doc.addPage();
      positionY = 25;
    }
    doc.setFontSize(11);

    // check meal index
    if (index == 0) {
      doc.text(10, firstPage ? positionY + 115 : positionY + 25, text);
      doc.setFontSize(10);
      doc.text(
        10,
        firstPage ? positionY + 130 : positionY + 40,
        "Detailed Nutrients Information"
      );
    } else {
      doc.text(titleX + 40, firstPage ? positionY + 115 : positionY + 25, text);
      doc.setFontSize(10);
      doc.text(
        titleX + 40,
        firstPage ? positionY + 130 : positionY + 40,
        "Detailed Nutrients Information"
      );
    }

    meal.nutrients.forEach((nutrient, i) => {
      const nutrientText = nutrient.label;
      const nutrientMeasurement = `${nutrient.total.toFixed(2)} ${
        nutrient.unit
      }`;
      const cellWidth = 80;
      const cellHeight = 15;
      const cellPadding = 5;
      const cellX = index == 0 ? 10 : titleX + 40;
      const cellY = firstPage ? positionY + 145 : positionY + 55;

      doc.cell(cellX, cellY, cellWidth, cellHeight, nutrientText, i + 1);
      doc.cell(
        cellX + cellWidth + cellPadding,
        cellY,
        50,
        cellHeight,
        nutrientMeasurement,
        i + 1
      );

      //   if (positionY + cellHeight > pageHeight - 30) {
      //     doc.addPage();
      //     positionY = 25;
      //     firstPage = false;
      //   }
    });
  });
};
