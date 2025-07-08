function abc()
{
    alert("welcome");
}


$(document).ready(function(){

    $("#one_btn").click(function(){

        // $("#one").hide(1000);
        $("#one").hide(1000,function(){
            $("#one").show(700);
        });
    });

    $("#one_btn1").click(function(){
        $("#one").toggle(700);
    })


})

