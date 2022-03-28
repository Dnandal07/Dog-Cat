$(document).ready(function () {
    $("#lbr").hide();
    $("#gld").hide();
    $("#rag").hide();
    $("#mnc").hide();
});

$("#dog").click(function () {
    $("#ct").text('Dog');
    $("#ty").text('Choose');
    $("#lbr").show();
    $("#gld").show();
    $("#rag").hide();
    $("#mnc").hide();
});

$("#cat").click(function () {
    $("#ct").text('Cat');
    $("#ty").text('Choose');
    $("#lbr").hide();
    $("#gld").hide();
    $("#rag").show();
    $("#mnc").show();
});

$("#gld").click(function () {
    $("#ty").text('Golden');
});

$("#lbr").click(function () {
    $("#ty").text('Lebra');
});

$("#rag").click(function () {
    $("#ty").text('Ragdoll');
});

$("#mnc").click(function () {
    $("#ty").text('Munchkin');
});

var count = 1;
$("#smt").click(function () {
    if($("#nm").val()!="" && $("#ag").val()!="" && $("#ct").text()!="Select"){
    var ct = $("#ct").text();
    $(".rght").append(`<div class="card col-12 my-2" style="width:400px" id="card${count}">
    <h2 class="mx-auto"><span class="badge badge-secondary">${ct}</span></h2>
    <div class="row">
    <div class="col-7">
    <img class="card-img-left" src="" alt="Card image" style="width:60%" id="i${count}">
    </div>
    <div class="card-body col-5">
        <h4 class="card-title text-center" id="h${count}"></h4>
        <h4 class="card-title text-center" id="hag${count}"></h4>
        <p class="card-text text-center" id="p${count}"></p>
    </div>
    </div>
</div>`)
    var ty = $("#ty").text();
    if (ty === "Golden") {
        $("#i" + count).attr("src", "https://www.ctvsh.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=KV7Ojj-C");
    }
    else if (ty === "Lebra") {
        $("#i" + count).attr("src", "https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=vxyPB7L-");
    }
    if (ty === "Ragdoll") {
        $("#i" + count).attr("src", "https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg");
    }
    if (ty === "Munchkin") {
        $("#i" + count).attr("src", "https://images.ctfassets.net/440y9b545yd9/gpF8uuzB4e4TfkKHiBBOi/ef63fc7bd56298455365f7bae1af9728/Muchkin_Cat_5_things850.jpg");
    }
    $("#h" + count).text("Name: " + $("#nm").val());
    $("#hag" + count).text('Age: '+ $("#ag").val())
    var male = $("#male").prop("checked");
    var female = $("#female").prop("checked");
    if (male == true) {
        $("#p" + count).text("Male");
    }
    if (female == true) {
        $("#p" + count).text("Female");
    }
    }
    $("#nm").val('');
    $("#ag").val('');
    $("#ct").text('Select');
    $("#ty").text('Choose');
    $("#male").prop("checked", false);
    $("#female").prop("checked", false);
    count++
});


$("#filter_dog").click(function () {
    $("#filter").text('Dog');
    for (i = 1; i < 15; i++) {
        var v = $("#card" + i).children().find('span').text();
        var fil = v.charAt(0);
        if (fil === 'C') {
            $("#card" + i).hide();
        }
        else if (fil === 'D') {
            $("#card" + i).show();
        }
    }
});

$("#filter_cat").click(function () {
    $("#filter").text('Cat');
    for (i = 1; i < 15; i++) {
        var v = $("#card" + i).children().find('span').text();
        var fil = v.charAt(0);
        if (fil === 'C') {
            $("#card" + i).show();
        }
        else if (fil === 'D') {
            $("#card" + i).hide();
        }
    }
});
