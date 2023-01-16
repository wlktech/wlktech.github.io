//counting function
function count(){
    let itemString = localStorage.getItem('shops');
    if(itemString){
        let itemArray = JSON.parse(itemString);
  
        if(itemArray != 0){
            //item count
            let count = itemArray.length;
  
            //qty count
            //let count = 0;
            //$.each(itemArray, function(i, v){
                //count += v.qty;
            //})
            $('#count_number').text(count);
  
        }
    }
  }