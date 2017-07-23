require('bootstrap');

var  Diaries = [
    {chapter: "Intro",
     track: "X",
     page: 1,
     link: 'Lucid Diaries Entry Intro page 1.PDF'
    },
     {chapter: "Intro",
     track: "X",
     page: 2,
     link: 'Lucid Diaries Entry Intro page 2.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 1,
     link: 'Lucid Diaries Entry Chapter 1 A page 1.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 2,
     link: 'Lucid Diaries Entry Chapter 1 A page 2.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 3,
     link: 'Lucid Diaries Entry Chapter 1 A page 3.PDF'
    }
]
var count = 0;



$(document).ready(function () {

  var picz = document.getElementById("#pic")
    $("#hh").css("color","black");

    $("#next-arrow").click(function(){
        
        $("#pic").animate({opacity: "toggle",height: "toggle"},2000);

        $("#pic").attr("src", function(){
            count++
            return "" + Diaries[count].link
        })
        $("#pic").animate({opacity: "toggle",height: "toggle"},2000);
    });



    















});