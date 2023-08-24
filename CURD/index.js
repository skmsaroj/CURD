
var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }

    resetForm();

}


function readFormData() {
    var formData = {};
    formData["pcode"] = document.getElementById("pcode").value;
    formData["p"] = document.getElementById("p").value;
    formData["qtry"] = document.getElementById("qtry").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pcode;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.p;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qtry;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;


    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick=" onEdit(this)">edit</button>
                           <button onclick="onDelete(this);">edit</button>`;
}



function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('pcode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('p').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qtry').value = selectedRow.cells[2].innerHTML;
    document.getElementById('price').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pcode;
    selectedRow.cells[1].innerHTML = formData.p;
    selectedRow.cells[2].innerHTML = formData.qtry;
    selectedRow.cells[3].innerHTML = formData.price;
}


function onDelete(td) {
    if (confirm('do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('list').deleteRow(row.rowIndex);
    }

    resetForm();
}


function resetForm() {
    document.getElementById('pcode').value = '';
    document.getElementById('p').value = '';
    document.getElementById('qtry').value = '';
    document.getElementById('price').value = '';
}
