$(document).ready(function () {
	$("#btn").click(function () {
		$("#name").hide(2000, function(){
        $('#name').show();
        });
    });
});
