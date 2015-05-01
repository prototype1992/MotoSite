$(document).ready(function(){
    
    $('#div_for_img img').toggle(function(e){
        if(e.shiftKey){
            $(this).css({ outline: '4px solid #cc0000' });
        }
        else{
            $(this).css({ outline: '4px solid #333333' });
        }
    }, function(){
        $(this).css({ outline: '0 solid #cc0000' });
    });
    
    
    $('#my_button').click(function(event){
        var myAnswer = confirm("Вы уверены, что хотите отправить форму?");
        if( !myAnswer ){ return false; }
    });
    
    
    // Делаем сдайдшоу
    var bigImg = $('#big img'), smallA = $('#small a');
    
    smallA.click(function(event){
        if( bigImg.attr('src') != $(this).attr('href') ){
            bigImg.hide().attr('src', $(this).attr('href'));
            bigImg.load(function(){ $(this).fadeIn(2000); });
        }
        return false;
    });
    
    $('#small a img').click(function(){
        $('#small a img').removeClass('small-img');
        $(this).addClass('small-img')
    });
    
    
    $('#hsGallery').toggle(function(){
        $('#gallery').slideDown(2000);
    }, function(){
        $('#gallery').slideUp(2000);
    });    
    
    var daysSelect = $('#daysSelect');
    var motoSelect = $('#motoSelect');
    var shlem = $('#shlem');
    var bag = $('#bag');
    var od = $('#od');
    
    motoSelect.change(function(e){
        // Выводим ЧТо выбрал пользователь
        var myChoise = $('#motoSelect :selected').val();
        
        if(myChoise == 1){
            daysSelect.html('<option value="1">1</option><option value="2">2</option>');
            od.attr('disabled', 'disabled');
            bag.attr('disabled', 'disabled');
        }
        
        else if(myChoise == 2){
            daysSelect.html('<option value="1">1</option>');
            bag.attr('disabled', 'disabled');
        }
        
        else if(myChoise == 3){
            daysSelect.html('<option value="1">1</option><option value="2">2</option><option value="3">3</option>');
        }
        
        else if(myChoise == 4){
            daysSelect.html('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>');
        }
    });
    
});