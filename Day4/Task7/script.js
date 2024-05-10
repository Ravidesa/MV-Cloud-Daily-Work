function displayImagesInTable(csvData) {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");

  const rows = csvData.split("\n");

  rows.forEach((row) => {
    const columns = row.split(",");

    const tr = document.createElement("tr");

    columns.forEach((column) => {
      
      if (column.startsWith("http")) {
      
        const td = document.createElement("td");
        const imgElement = document.createElement("img");
        imgElement.src = column;
        td.appendChild(imgElement);
        tr.appendChild(td);

        const td2 = document.createElement("td");
        const downloadButton = document.createElement("button");
        
        downloadButton.textContent = "download";

        downloadButton.addEventListener("click", () => {
          fetch(column)
            .then((res) => res.blob())
            .then((bobject) => {
              console.log(bobject);
              const blob = URL.createObjectURL(bobject);
              const aTag = document.createElement("a");
              // console.log("Blob object ", blob);
              // aTag.style.display = "none";

              // let barr = blob.split(":");
              // console.log(barr[0]);
              // console.log(barr[1]);
              // console.log(barr[2]);
              // console.log(barr[3]);
              // console.log(barr.slice(1,4).join(""));
              // console.log();
              // var filename = barr[1]
              
              aTag.href = blob;

              console.log("blob is-->",blob);
              let wholeFileName = column.substr(column.lastIndexOf("/")+1);
              wholeFileName = wholeFileName.substring(0, wholeFileName.indexOf("?"));
              console.log(wholeFileName);

              aTag.download = wholeFileName;
              document.body.appendChild(aTag);
              aTag.click();
              document.body.removeChild(aTag);

              window.URL.revokeObjectURL(blob);
            });
        });

        // downloadButton.appendChild(linkBtn);
        td2.appendChild(downloadButton);
        tr.appendChild(td2);
      }
    });
    table.appendChild(tr);
  });
  tableContainer.appendChild(table);
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const csvData = event.target.result;
        displayImagesInTable(csvData);
    };

    reader.readAsText(file);
}

document.getElementById("fileInput").addEventListener("change", handleFileUpload);
