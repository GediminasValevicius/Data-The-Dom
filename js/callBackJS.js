// var xhr = new XMLHttpRequest();
// var data;

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send();

// function setData(jsonData) {
//     data = jsonData;
// }

// xhr.onreadystatechange = function() {
//         console.log(this.readyState);

//         if (this.readyState == 4 && this.status == 200) {
//             // setData(JSON.parse(this.responseText));

//             // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
//             data = JSON.parse(this.responseText);
//         }
//     }
//     // data = this.responseText; can only run inside of xhr.onreadystatechange
// otherwhise it will be ampty
// setTimeout(function() {
//     console.log(data);
//     document.getElementById("data").innerHTML = data;
// }, 500);

// callback function to get data
function getData(callBack) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();


    xhr.onreadystatechange = function() {


            if (this.readyState == 4 && this.status == 200) {
                // setData(JSON.parse(this.responseText));

                // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
                callBack(JSON.parse(this.responseText));
            }
        }
        // da

}

// getData(function(data) {
//     console.log(data);
// });

// next step is to pass a function as an argument
function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);