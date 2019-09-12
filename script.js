
var arr = ["js","html","webutveckling","c#",".net"];
var list = document.createElement("ul");
document.body.appendChild(list);

for (var i=0;i<arr.length;i++){
    var item = document.createElement("li");
    var text = document.createTextNode(arr[i]);
    item.appendChild(text);
    list.appendChild(item);
}
