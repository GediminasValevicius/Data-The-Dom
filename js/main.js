const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, callBack) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();


    xhr.onreadystatechange = function() {


        if (this.readyState == 4 && this.status == 200) {
            callBack(JSON.parse(this.responseText));
        }
    }


}

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);

    });
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        // console.dir(data.results);
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        data.forEach(function(item) {

            var dataRow = [];
            Object.keys(item).forEach(function(key) {

                var rowData = item[key].toString();
                var trunkatedData = rowData.substring(0, 15);

                dataRow.push(`<td>${trunkatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
        // document.getElementById("data").innerHTML = results;
    });
}