//For Dark and Light Mode
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mylight')
}

//For Coupon
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
}
