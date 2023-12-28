var str = '{"names":[' +                    // create JSON obj
    '{"first":"Hakuna","lastN":"Matata" }, ' +
    '{"first":"Jane","lastN":"Doe" },' +
    '{"first":"Air","last":"Jordan" }]}';

myObj = JSON.parse(str);                    // parse
document.write(myObj.names[1].first);       // access
var myJSON = JSON.stringify(myObj);         // stringify
localStorage.setItem("testJSON", muJSON);   // storing data
text = localStorage.getItem("testJSON");    // retrieving data