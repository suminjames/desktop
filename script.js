bootloader = function() {
    storeddata = localStorage.getItem('desktop');
    actualData = JSON.parse(storeddata);
    if (!!actualData) {
        desktop.background = actualData.background;
        desktop.height = actualData.height;
        desktop.width = actualData.width;
        desktop.backgroundSize = actualData.backgroundSize;
    }
}
debugger
bootloader();
desktop.render();

setInterval(() => {
    desktop.save()
}, 2000);

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
    },

    changeBgSize: function() {
        desktop.backgroundSize = "contain";
        desktop.render();
    },

    changeBgSizeCover: function() {
        desktop.backgroundSize = "cover";
        desktop.render();
    }
}


$('#changeBg').addEventListener('click', menu.changeBg);
$('#bgSizeContain').addEventListener('click', menu.changeBgSize);
$('#bgSizeCover').addEventListener('click', menu.changeBgSizeCover);

var menu = $('.menu');
$('.desktop').addEventListener('contextmenu', function() {
    menu.classList.toggle("hidden");
    menu.style.top = event.clientY - 15 + "px";
    menu.style.left = event.clientX + "px";
})

$('.desktop').addEventListener('click', function() {
    menu.classList.add("hidden");
})