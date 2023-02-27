$(document).ready(function() {
    // Ẩn modal khi tải trang
    $('.modal').hide();
    
    // Xử lý sự kiện khi click vào nút Login
    $('#login-btn').click(function() {
        $('.modal').show();
        $('.log-modal').show();
        $('.res-modal').hide();
    });
    
    // Xử lý sự kiện khi click vào nút Register
    $('#register-btn').click(function() {
        $('.modal').show();
        $('.res-modal').show();
        $('.log-modal').hide();
    });
    
    // Xử lý sự kiện khi click vào nút đóng modal hoặc khoảng trống
    $('.close').click(function() {
        $('.modal').hide();
    });
});