$(document).ready(function(){


    loadQs();

})


function loadQs(){
    console.log("Trying to reach api");
    $.get("/api/getqs", function( data ) {
        console.log(data);
        console.log(data.toString())
       let grr = data.toString();
       console.log(grr);
      });


}