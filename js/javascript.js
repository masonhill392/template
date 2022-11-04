console.log('js connect');
var string = "."; 
var lineone = ".";
var linetwo = ".";
var linethree = ".";
var linefour = ".";
var linefive = ".";
var buttonid = "null";
var buttonid2 = "null2";

$("#button1").click(function() {
    movelines();
    string = "cat";
    updateMessageDisplay();
});
$("#button2").click(function() {
    movelines();
    string = "dog";
    updateMessageDisplay();

});
$("#button3").click(function() {
    movelines();
    string = "cow";
    updateMessageDisplay();

});
$("#button4").click(function() {
    movelines();
    string = "horse";
    updateMessageDisplay();

});
$("#button5").click(function() {
    movelines();
    string = "pig";
    updateMessageDisplay();

});
function updateMessageDisplay() {
    lineone = string;
    $("#line1").html("1: " + lineone);
    $("#line2").html("2: " + linetwo);
    $("#line3").html("3: " + linethree);
    $("#line4").html("4: " + linefour);
    $("#line5").html("5: " + linefive);
};
function movelines() {
    linefive = linefour;
    linefour = linethree
    linethree = linetwo;
    linetwo = lineone;
}


$("button").click(function() {
    var buttonid2 = this;
    var buttonid = "'." + $(this).attr('id') + "'";
    dothing();
    // $(buttonid) 
});

function dothing() {
    buttonid = $(buttonid).attr('id');
    string = buttonid2;
    movelines();
    updateMessageDisplay();
}

