<!-- AJax for DropDown Effect of Abstract and BibTex -->

$(document).ready(function(){
    const str = $(this).attr('id');

    $(".bibliography-button").click(function(){
        const str = $(this).attr('id');
        const ret = str.split("_");
        const id = ret[1];
        $('#' + id).toggle();
    });
});