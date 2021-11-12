$('#menu-bar').load('/views/partials/menu_bar.htm', function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success")
    {
        // console.log(document.getElementById("myfeed-menu-bar-item").style.fontFamily);
        // document.getElementById("myfeed-menu-bar-item").style.fontFamily = "roboto-bold";
    }
});