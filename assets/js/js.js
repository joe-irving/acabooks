const update = () => {
  console.log("clicked")
  var values = $('form.book-filters').serializeArray();
  var possibleValues = values[0].value.split(" ");
  values.shift()
  var show = [];
  for (i in values){
      show.push(values[i].name);
  }
  for (i in possibleValues){
    if (show.includes(possibleValues[i])){
      $("."+possibleValues[i]).show();
    }else{
      $("."+possibleValues[i]).hide()
    }
  }
}

$( document ).ready(function(){
  $("section.books").show()
  $("#search-input").keyup(function(){
    console.log("Key up")
    console.log(this.val())
  })
  $(".book-filters").click(function(){
    console.log("clicked")
    update()
  })
})
