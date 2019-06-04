var desktop = {
    background: "#123333",
    height: '90%',
    width: '100%',
    backgroundSize: "auto",
    render: function() {
        var desktop = $('.desktop');
        desktop.style.height = this.height;
        desktop.style.width = this.width;
        desktop.style.background = this.background;
        desktop.style.backgroundSize = this.backgroundSize;

        $('#addWindow').onclick = function() {
            var newWindow = new ourWindow();
            newWindow.model.top = parseInt(newWindow.model.top) + 12 + 'px';
            newWindow.model.left = parseInt(newWindow.model.left) + 12 + 'px';
            newWindow.render();
        }
        console.log(desktop.style.backgroundSize);
    },

    save: function() {
        var model = {
            background: this.background,
            height: this.height,
            width: this.width,
            backgroundSize: this.backgroundSize
        }

        localStorage.setItem('desktop', JSON.stringify(model))
    },

    // contextmenu: function(event) {
    //     var menu = $('.menu');
    //     menu.classList.toggle("hidden");
    //     menu.style.top = event.clientY - 15 + "px";
    //     menu.style.left = event.clientX + "px";
    // }
}