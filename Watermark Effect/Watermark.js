$(function() {
    $("#fname").val("First Name");
    $("#lname").val("Last Name");
})
$(document).ready(function() {
    $("#fname").blur(function() {
        if ($.trim($(this).val()) == "") {
            $(this).val("First Name");
            $(this).addClass("watermark");
        }
    });
    $("#fname").focus(function() {
        if ($(this).val() == "First Name") {
            $(this).val("");
            $(this).removeClass("watermark");
        }
    });
    $("#lname").blur(function() {
        if ($.trim($(this).val()) == "") {
            $(this).val("Last Name");
            $(this).addClass("watermark");
        }
    });
    $("#lname").focus(function() {
        if ($(this).val() == "Last Name") {
            $(this).val("");
            $(this).removeClass("watermark");
        }
    });
})