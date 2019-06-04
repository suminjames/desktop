var desktop = {
    background: "#123333",
    height: '100%',
    width: '100%',
    backgroundPosition: "center",
    backgroundSize: "cover",
    render: function() {
        var desktop = document.querySelector('.desktop');
        desktop.style.height = this.height;
        desktop.style.width = this.width;
        desktop.style.backgroundSize = this.backgroundSize;
        desktop.style.background = this.background;
        desktop.style.backgroundPosition = this.backgroundPosition;
    }
}
desktop.background = 'yellow'
desktop.render();