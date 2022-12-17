function count(){
    let itemString = localStorage.getItem('shops');
    if(itemString){
        let itemArray = JSON.parse(itemString);

        if(itemArray != 0){
            let count = itemArray.length;

            $('#count_number').text(count);
        }
    }
}