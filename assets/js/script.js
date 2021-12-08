//Set date
const todayDisplayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
//Set time
const currentTime = $("#currentTime").text(moment().format("LT"));




//Save button function & storage
$('.saveBtn').click(function(event){

        event.preventDefault()
        var input = $(this).siblings('textarea').val()
        var hour = $(this).siblings('textarea').siblings('.hours').val()
        localStorage.setItem('textarea', 'hours');
)};




   