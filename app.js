const search = () =>{
    const searchbox = document.getElementById("toSearch").value.toUpperCase();
    const items = document.getElementById("product-list")
    const prods = document.querySelectorAll(".product")
    const prodName = items.getElementsByTagName("h2")

    for(let i=0;i<prodName.length;i++){
        let match = prods[i].getElementsByTagName('h2')[0];
        if(match){
           let textVal =  match.textContent || match.innerHTML
           if(textVal.toUpperCase().indexOf(searchbox) > -1){
                prods[i].style.display = "";
           }
           else{
            prods[i].style.display = "none";
           }
        }
    }
}