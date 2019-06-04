var $ = function(query) {
    return (document.querySelector(query));
}

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

var menu = {
    changeBg: function() {
        var fileObject = $('.file');
        fileObject.click();

        fileObject.addEventListener('change', function() {
            var reader = new FileReader();

            reader.addEventListener("load", function() {

                desktop.background = "url(" + reader.result + ")";

                desktop.render();
            }, false);

            if (fileObject.files[0]) {
                reader.readAsDataURL(fileObject.files[0]);
            }
        });

    }
}


$('#changeBg').addEventListener('click', menu.changeBg)