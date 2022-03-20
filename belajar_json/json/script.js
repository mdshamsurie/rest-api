let student = {
    "nama" : "shamsurie",
    "id" :"F088",
    "umur" : 30,
    "position": "software engineer",
    "hobby": ["fishing", "futsal"],
    "references":{
        "reference1":"ahmad",
        "reference2":"abu"
    }
}

//*** object to JSON ****
//console.log(JSON.stringify(student)); 


//****** ambil data dari json file ##vanila javascript## */
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {

//     if(xhr.readyState == 4 && xhr.status == 200){
//         let dataStudent = this.responseText;
//         console.log(dataStudent);
//     }
// }

// xhr.open('GET', 'test.json', true);
// xhr.send();

//****** ambil data dari json file # Jquary- AJAX## */

$.getJSON('test.json', function (data) {
    console.log(data);
    
});