let start_time = Date.now();

function animation1() {
    let time_elapsed = Date.now() - start_time;
    let opacityhi = Number(window.getComputedStyle(document.getElementById("hi")).getPropertyValue("opacity"));
    let opacityintroduction = Number(window.getComputedStyle(document.getElementById('introduction')).getPropertyValue('opacity'));
    //let opacityyou = Number(window.getComputedStyle(document.getElementById("portrait")).getPropertyValue("opacity"));
    document.getElementById('hi').style.opacity = opacityhi + 0.1;
    if(time_elapsed > 500){
        document.getElementById('introduction').style.opacity = opacityintroduction + 0.1;
        //document.getElementById('you').style.opacity = opacityyou + 0.1
    }
    if(time_elapsed > 2000){
        document.getElementById('introduction').style.opacity = opacityintroduction - 0.1;
        document.getElementById('hi').style.opacity = opacityhi - 0.1;
        //document.getElementById('you').style.opacity = opacityyou - 0.1
    }
    if(time_elapsed > 3000){
        clearInterval(begin_animation);
        let secondanimation = setInterval(function(){ animation2(secondanimation);}, 100,)
    }
}

function animation2() {
    let time_elapsed2 = Date.now() - start_time;
    let opacity2 = Number(window.getComputedStyle(document.getElementById("secondtext1")).getPropertyValue("opacity"));
    document.getElementById('secondtext1').style.opacity = opacity2 + 0.1;
    document.getElementById('secondtext2').style.opacity = opacity2 + 0.1;
    document.getElementById('secondtext3').style.opacity = opacity2 + 0.1;
    if (time_elapsed2 > 6250) {
        document.getElementById('secondtext1').style.opacity = opacity2 - 0.1;
        document.getElementById('secondtext2').style.opacity = opacity2 - 0.1;
        document.getElementById('secondtext3').style.opacity = opacity2 - 0.1;
    }
}

let begin_animation = setInterval(animation1, 100);

