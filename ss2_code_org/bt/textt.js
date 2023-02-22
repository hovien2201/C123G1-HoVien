let productsList=["sony","oppo","iphone"];
function showProducts(){
    let conten="";
    for(let i=0;i<productsList.length;i++){
        conten =conten+'<tr>'
        +'<td>'+productsList[i]+'</td>'
        +'<td>sua</td>'
        +'<td>xoa</td>'
        +'</tr>';
    }
    document.getElementById("products").innerHTML = conten;
}
showProducts();
function addProducts(){
    let newP =document.getElementById("newP").value;
    productsList.push(newP);
    showProducts();
}