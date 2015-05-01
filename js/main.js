$(document).ready(function(){
    
    var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var myEmail = $('#email');
    
    myEmail.focus(function(){
        if( $(this).val() == $(this).attr('defaultValue') ){
            $(this).val("");
        }
    });
    
    myEmail.blur(function(){
        var userEmail = $(this).val();
        
        if( userEmail = ""){
            $(this).val( $(this).attr('defaultValue') )
        }
    });

    
});