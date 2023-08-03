$(document).ready(function(){

    $('ul').on('click', 'li', function(e) {

        e.preventDefault();

        $(this).toggleClass('riscarTarefa'); 

    });

    $('#btn-add').click(function(e){

        e.preventDefault();

            const addTarefa = $('#adicionaTarefa').val();
            const novaTarefa = $('<li></li>');
            $(`<a>${addTarefa}</a>`).appendTo(novaTarefa);
            $(novaTarefa).appendTo('ul').click(riscarTarefa);
            
            $('#adicionaTarefa').val('');

    })
})