/*
// render the image in our view
function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result
    $('#some_container_div').html("<img src='" + the_url + "' />")
  }

  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}

// handle input changes
$("#the-file-input").change(function() {
    console.log(this.files)

    // grab the first image in the FileList object and pass it to the function
    renderImage(this.files[0])
});
*/

$(document).ready(function(){
  
  //add selector of your checkbox

  var status=$('#opt-2')[0].checked;
  
  console.log(status);
  
    $("#run-selected").click(function(){
        $(this).hide();
		console.log(status);
    });

});

