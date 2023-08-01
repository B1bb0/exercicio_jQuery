$(document).ready(function(){

    $('#btn-add').click(function(e){
        
        e.preventDefault();

            const addTarefa = $('#addTarefa').val();
            const novaTarefa = $('<ul></ul>');
            $(`<li>${addTarefa}</li>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul').click();
    })
})