


    // $(document).ready(function(){
    //     $("#notifications_button").click(function(){
    //       $("#notifications_wrapper").toggle();
    //     });
    //     setTimeout(function(){
    //         $(document).on("click", function (event){
    //       $("#notifications_wrapper").hide();
    //     });
    //     }, 100);
    //   });
      
      $(document).ready(function () {
    $("#notifications_button").click(function () {
      $("#notifications_wrapper").show();
    });

    $(document).on("click", function (event) {
      const $elementToOpen = $("#notifications_wrapper");
      const $openButton = $("#notifications_button");

      if (!$elementToOpen.is(event.target) && !$openButton.is(event.target)) {
        $elementToOpen.hide();
      }
    });
  });


  // sidebar for ticket list
   $(document).ready(function(){
        $("#toggle_right_sidebar").click(function(){
          $("#right_sidebar").toggle();
        });
   });