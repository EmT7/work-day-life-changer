$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        const val = $(this).siblings('textarea').val()
        const hour = $(this).siblings('textarea').siblings('.hours').val()
        console.log(hour)
        localStorage.setItem('', val)
    })
})