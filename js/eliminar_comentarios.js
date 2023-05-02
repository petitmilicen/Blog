$(document).ready(function() {
    $('.delete-comment').click(function() {
        $(this).closest('.comment').hide();
    });
});