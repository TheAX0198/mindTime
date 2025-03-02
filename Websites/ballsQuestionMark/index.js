const circ = document.querySelectorAll('circle');
const svg = document.querySelector('svg');

let connect = false;

svg.addEventListener('click', (evt) => {
    const rect = svg.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    
    //elm.setAttribute('cx', x);
    //elm.setAttribute('cy', y);
});

svg.addEventListener('mouseup', () => {
    connect = false;
});

svg.addEventListener('mouseleave', () => {
    connect = false;
});


circ.forEach((elm) => {

    elm.addEventListener('mousemove', (evt) => {
        if(connect){
            const rect = svg.getBoundingClientRect();
            const x = evt.clientX - rect.left;
            const y = evt.clientY - rect.top;
            
            elm.setAttribute('cx', x);
            elm.setAttribute('cy', y);
        }
    });
    
    elm.addEventListener('mouseenter', () => {
        elm.setAttribute('stroke', 'royalblue');
        elm.setAttribute('fill', 'rgb(0,200,0)');
    });
    
    elm.addEventListener('mouseleave', () => {
        elm.setAttribute('stroke', 'white');
        elm.setAttribute('fill', 'rgb(0,255,0)');
    });
    
    elm.addEventListener('mousedown', () => {
        connect = true;
        svg.append(elm);
        elm.setAttribute('stroke', 'crimson');
        elm.setAttribute('fill', 'rgb(255,200,0)');
    });
    
    elm.addEventListener('mouseup', () => {
        elm.setAttribute('stroke', 'royalblue');
        elm.setAttribute('fill', 'rgb(0,200,0)');
    });

});
