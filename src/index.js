
import myName from './myName';


function component() {
    const element = document.createElement('div');

    // use your function!
    element.innerHTML = myName('Cody');
    return element;
}

//rr
document.body.appendChild(component()); 