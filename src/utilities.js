export function createElement(element, className,text){
    let elementtoCreate = document.createElement(element);
    elementtoCreate.textContent = text
    if(className != ''){
        elementtoCreate.classList.add(className)
    }
    return elementtoCreate;
}

export function createImages(className, src){
    let img = document.createElement('img');
    img.classList.add(className);
    img.src = src
    return img;
}

export function setActive(e){
    document.getElementsByClassName('active')[0].classList.toggle('active');
     e.target.classList.toggle('active') ;
}