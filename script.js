var desktop = {
    background: "white",
    height: '100%',
    backgroundPosition: "center",
    backgroundSize: "cover",
    changeBg: function(val) {
        document.querySelector('.desktop').style.background = val;
        this.background = val;
    },
    changeHeight(val) {
        document.querySelector('.desktop').style.height = val;
        this.height = val;
    }
}
desktop.changeBg('blue')
desktop.changeHeight('100%')