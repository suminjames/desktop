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
    elemnt.style.top = elemnt.offsetTop - pos2 + "px";
    elemnt.style.left = elemnt.offsetLeft - pos1 + "px";
}

function closeDragElement() {
    // stop moving when the mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
}
var ourWindow = function() {
    this.viewObject = null;
    this.model = {
        id: 0,
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
        var newThis = this;
        this.viewObject.remove();

        collection.objects = collection.objects.filter(function(item) {
            return (item.model.id != newThis.model.id)
        })

        delete(this);
    }

    this.render = function() {
        var thisWindow = this;
        var originalWindow = $('#originalWindow');
        this.viewObject = originalWindow.cloneNode(true);
        this.viewObject.style.top = this.model.top;
        this.viewObject.style.height = this.model.height;
        this.viewObject.style.width = this.model.width;
        this.viewObject.style.left = this.model.left;
        this.viewObject.style.zIndex = this.model['z-index'];
        this.viewObject.id = "random";
        this.viewObject.classList.remove('hidden');
        var desktop = $('.desktop');
        this.viewObject.querySelector('.fa-times').addEventListener('click', function() {
            thisWindow.close();
        });
        this.viewObject.addEventListener('mousedown', dragMouseDown);
        desktop.append(this.viewObject);
    }

}

newWindow = new ourWindow();
originalWindow.cloneNode(true);
newWindow.render();

collection.objects.push(newWindow);