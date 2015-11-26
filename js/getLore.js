$(document).ready(function () {

$('#ajax').click(function() {

        var key = "7fd3b97d-df0c-4ced-b7d8-810a89c8e874";
        var champName = $('#champ_name').val();  //TODO: get the champion name
        alert(champName);
        $.ajax({
            url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=lore&api_key=7fd3b97d-df0c-4ced-b7d8-810a89c8e874',
            type: 'GET',
            dataType: 'json',
            data: {
            },
            success: function (json) {
              var id = json.data[champName].lore;
              document.getElementById("champLore").innerHTML = id;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("error");
            }
        });            
});

});
