jQuery(document).ready(function($){
    $("a#observacao_link").fancybox({
        'hideOnContentClick': true,
        'autoDimensions': false,
        'height':300,
        'width':300,
        'onClosed': function(){
            $("#observacoes_popup").hide();
        }
    });
    $("#observacao_link").trigger('click');
    $("#observacoes_popup").show();
});
