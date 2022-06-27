
var x=1;
x=parseInt(x);
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var sound = this.innerHTML;
            meow(sound);
    });

    document.addEventListener("keypress" , function(event){
        var sound2= event.key;
        meow(sound2);
    })
    function meow(sound)
    {
        // alert("Hi.. this is "+ 1 + "th key");
        if(sound=="W")
        {
        var audio= new Audio("sounds/CW946QX-guitar-bam.mp3");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="A")
        {
        var audio= new Audio("sounds/mixkit-atmospheric-wind-drum-roll-swoosh-576.wav");
        audio.play();
        document.querySelector("."+sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+sound).classList.remove("pressed");
        } , 200);
        }

        if(sound=="S")
        {
        var audio= new Audio("sounds/mixkit-drum-roll-566.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="D")
        {
        var audio= new Audio("sounds/mixkit-horror-tunnel-drum-554.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="J")
        {
        var audio= new Audio("sounds/mixkit-musical-guitar-string-clink-2327.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="K")
        {
        var audio= new Audio("sounds/mixkit-toy-drums-and-bell-ding-560.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="L")
        {
        var audio= new Audio("sounds/mixkit-ominous-drums-227.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="I")
        {
        var audio= new Audio("sounds/mixkit-clown-horn-at-circus-715.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="M")
        {
        var audio= new Audio("sounds/mixkit-ball-bouncing-to-a-stop-2089.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="N")
        {
        var audio= new Audio("sounds/mixkit-cinematic-tribal-flute-2306.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="O")
        {
        var audio= new Audio("sounds/mixkit-melodical-flute-music-notification-2310.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="T")
        {
        var audio= new Audio("sounds/mixkit-musical-flute-alert-2308.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="Z")
        {
        var audio= new Audio("sounds/mixkit-successful-horns-fanfare-722.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }

        if(sound=="X")
        {
        var audio= new Audio("sounds/mixkit-warfare-horn-2289.wav");
        audio.play();
        document.querySelector("." + sound).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("." + sound).classList.remove("pressed");
        }, 200);
        }
    }
    x++;
}
