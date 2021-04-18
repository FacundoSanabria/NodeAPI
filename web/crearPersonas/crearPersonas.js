$(function() {
  $('#crearPersonasForm').on("submit",function(e) {
    e.preventDefault(); // cancel the actual submit

    var data = $('#crearPersonasForm').serializeJSON(); 
    console.log(data);
    
    /*$.post("http://localhost:3000/api",   // url
    data, // data to be submit
         );*/
    $.ajax({
      url: 'http://localhost:3000/api',
      type: "POST", 
      dataType: "json",
      data: data,
      success: function (result) {
        $(".result-p").text("POST realizado con exito");
        console.log("success");
        console.log(request.responseText);
      },
      error: function (request, status, error) {
        $(".result-p").text("no se pudo realizar POST con exito");
        console.log(request.responseText);
      }
    });
  })
});
