var  Diaries = [
    {chapter: "1",
     track: "A",
     page: 1,
     link: 'Lucid Diaries Entry Intro page 1.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 2,
     link: 'Lucid Diaries Entry Intro page 2.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 3,
     link: 'Lucid Diaries Entry Intro page 3.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 4,
     link: 'Lucid Diaries Entry Intro page 4.PDF'
    },
     {chapter: "1",
     track: "A",
     page: 5,
     link: 'Lucid Diaries Entry Intro page 5.PDF'
    }
]
var count = 0;



$(document).ready(function () {

  var picz = document.getElementById("#pic")
    $("#hh").css("color","blue");

    $("#next-arrow").click(function(){
        
        $("#pic").animate({opacity: "toggle",height: "toggle"},2000,"swing")
        $("#pic").attr("src", function(){
            count++
            return "" + Diaries[count].link
        });
        $("#pic").animate({opacity: "toggle",height: "toggle"},2000,"swing").delay(3000)
    });
console.log(count);


    















});