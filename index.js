$(document).ready(function(){
    $("#lbr").hide();
    $("#gld").hide();
    $("#rag").hide();
    $("#mnc").hide();
    $("#card1").hide();
});

$("#dog").click(function(){
    $("#ct").text('Dog');
    $("#ty").text('Choose');
    $("#lbr").show();
    $("#gld").show();
    $("#rag").hide();
    $("#mnc").hide();
});

$("#cat").click(function(){
    $("#ct").text('Cat');
    $("#ty").text('Choose');
    $("#lbr").hide();
    $("#gld").hide();
    $("#rag").show();
    $("#mnc").show();
});

$("#gld").click(function(){
    $("#ty").text('Golden');
});

$("#lbr").click(function(){
    $("#ty").text('Lebra');
});

$("#rag").click(function(){
    $("#ty").text('Ragdoll');
});

$("#mnc").click(function(){
    $("#ty").text('Munchkin');
});

$("#smt").click(function(){
    $("#card1").show();
    // var ct=$("#ct").val();
    var ty=$("#ty").text();
    if( ty=== "Golden"){
        $("#i1").attr("src","https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KV7Ojj-C");
    }
    else if( ty=== "Lebra"){
        $("#i1").attr("src","https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=vxyPB7L-");
    }
    if( ty=== "Ragdoll"){
        $("#i1").attr("src","https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg");
    }
    if( ty=== "Munchkin"){
        $("#i1").attr("src","https://images.ctfassets.net/440y9b545yd9/gpF8uuzB4e4TfkKHiBBOi/ef63fc7bd56298455365f7bae1af9728/Muchkin_Cat_5_things850.jpg");
    }
    $("#h1").text($("#nm").val() + ", " + $("#ag").val());
    $("#p1").text($("#gender").val());
});