$(document).ready(function() {
    var over18 = confirm("Are you at least 18 years of age?");

    if (over18) {
        $('.over18').show();
    } else {
        $('.under18').show();
    }
});
