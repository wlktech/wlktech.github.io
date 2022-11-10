new Vue({
    el: '#app',
    data:{
        todo:"",
        todos:[
            
        ]
    },
    methods:{
        addList:function(){
            this.todo;
            this.todos.push({'text':this.todo, 'status': false});
            this.todo = ""
        },
        edit:function(index){
            if(this.todos[index].status == false){
                this.todos[index].status = true;
            }else{
                this.todos[index].status = false;
            }
        },
        del:function(index){
            this.todos.splice(index);

        }
    }
})

$(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: 'img',
      popupButtonClasses: 'fa fa-smile-o'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });