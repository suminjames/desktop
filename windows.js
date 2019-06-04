var elemnt;

function dragMouseDown(e) {
    e = e || window.event;
    elemnt = this;
    e.preventDefault();
    //mouse position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call function when mouse moves
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element to the new calculated
    // e.target.style.left = 0;
    // e.target.style.top = 0;
    console.log(elemnt)
    elemnt.style.top = elemnt.offsetTop - pos2 + "px";
    elemnt.style.left = elemnt.offsetLeft - pos1 + "px";
}

function closeDragElement() {
    // stop moving when the mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
}
var ourWindow = function() {
    this.model = {
        height: '500px',
        width: '600px',
        top: '20px',
        left: '100px',
        'z-index': 0,
        state: 'normal'
    }

    this.minimize = function() {

    }

    this.maximize = function() {

    }

    this.restore = function() {

    }

    this.close = function() {

    }

    this.render = function() {
        var originalWindow = $('#originalWindow');
        var cloneWindow = originalWindow.cloneNode(true);
        cloneWindow.style.top = this.model.top;
        cloneWindow.style.height = this.model.height;
        cloneWindow.style.width = this.model.width;
        cloneWindow.style.left = this.model.left;
        cloneWindow.style.zIndex = this.model['z-index'];
        cloneWindow.id = "random";
        cloneWindow.classList.remove('hidden');
        var desktop = $('.desktop');
        cloneWindow.addEventListener('mousedown', dragMouseDown);
        desktop.append(cloneWindow);
    }

}

newWindow = new ourWindow();
newWindow.render();

collection.objects.push(newWindow);