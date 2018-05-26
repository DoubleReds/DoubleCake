const $phone = $(".input1");
const $psd = $(".input2");
const $psdagain = $(".input3");
const $btn = $("#btn");
$btn.on("click",()=>{
    const $phonevalue = $phone.val();
    const $psdvalue = $psd.val();
    const $psdagainvalue = $psdagain.val();
    const $obj={
        "getphone":$phonevalue,
        "getpsd":$psdvalue,
        "getpsdagain":$psdagainvalue
    }
    $.ajax({
        "url":"http://localhost/cake/AMD/dist/php/register.php",
        "type":"post",
        "data":$obj
        
    })
})