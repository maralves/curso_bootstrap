$(document).ready(function(){

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA,{
        
        color: '#65daf9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to:   { color: '#65daf9' },

        step: function(state,circle){

            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);

        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB,{
        
        color: '#65daf9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA'},
        to:   { color: '#65daf9' },

        step: function(state,circle){

            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);

        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC,{
        
        color: '#65daf9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA'},
        to:   { color: '#65daf9' },

        step: function(state,circle){

            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD,{
        
        color: '#65daf9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to:   { color: '#65daf9' },

        step: function(state,circle){

            circle.path.setAttribute('stroke',state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);

        }
    });

    let dataAreaOffset = $('#data').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 200) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }

    });

    /* paralax */
    setTimeout(function(){

        $('#data').parallax({imageSrc:'img/cidadeparallax.png'});

    },250);

    
});