$(function() {
    $("#check").click(function() {
        if ($(this).prop("checked") == true) {
            $("#billing-address").val($("#shipping-address").val()).attr("readonly", true).addClass("same-address");
            $("#billing-city").val($("#shipping-city").val()).attr("readonly", true).addClass("same-address");
            $("#billing-state").val($("#shipping-state").val()).attr("readonly", true).addClass("same-address");
            $("#billing-zip").val($("#shipping-zip").val()).attr("readonly", true).addClass("same-address");
        }
        else {
            $("#billing-address").attr("readonly", false).removeClass("same-address");
            $("#billing-city").attr("readonly", false).removeClass("same-address");
            $("#billing-state").attr("readonly", false).removeClass("same-address");
            $("#billing-zip").attr("readonly", false).removeClass("same-address");
        }
    })
}) 