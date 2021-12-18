//Set date
const todayDisplayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
//Set time
const currentTime = $("#currentTime").text(moment().format("LT"));
const now = moment().hours();

//Save button function & storage
$(document).ready(function () {
    $('.saveBtn').click(function (event) {
        event.preventDefault()
        const input = $(this).siblings('textarea').val()
        const hour = $(this).siblings('div').attr('id')
        console.log(input)
        console.log(hour)
        localStorage.setItem(hour, input)
    })
    $('#00').val(localStorage.getItem('0'))
    $('#01').val(localStorage.getItem('1'))
    $('#02').val(localStorage.getItem('2'))
    $('#03').val(localStorage.getItem('3'))
    $('#04').val(localStorage.getItem('4'))
    $('#05').val(localStorage.getItem('5'))
    $('#06').val(localStorage.getItem('6'))
    $('#07').val(localStorage.getItem('7'))
    $('#08').val(localStorage.getItem('8'))
    $('#09').val(localStorage.getItem('9'))
    $('#010').val(localStorage.getItem('10'))

    function colorBlock() {
        $("#id").each(function () {
            const time = parseInt($(this).parent().attr("id"));
            if (time < now) {
                $(this).addClass("past");
            }
            else if (time === now) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else if (time != now) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }


        });

    }
    colorBlock();
  });



