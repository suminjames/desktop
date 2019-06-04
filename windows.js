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
        desktop.append(cloneWindow);
    }

}

newWindow = new ourWindow();
newWindow.render();

collection.objects.push(newWindow);