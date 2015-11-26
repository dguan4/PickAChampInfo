$(document).ready(function(){
    var champ = $(/** input function name here **/).val)();
    $.post("../php/app.php", {action: /** see what action to do **/, champion: champ}, function(data) {
        //load the images from the returned array
    }
}
        
