const mediaQuery = window.matchMedia('(min-width: 768px)');
const ticketActiveStatus = document.querySelectorAll('#activeStatus');
const ticketOldPrice  = document.querySelectorAll('#priceOld');


if (mediaQuery.matches) {
    ticketActiveStatus.forEach((activeClass) => {
        activeClass.innerHTML = "до 5 октября";
    });
    ticketOldPrice.forEach((oldPrice) => {
        oldPrice.innerHTML = "10 000 ₽";
    });
} else {
    ticketActiveStatus.forEach((activeClass) => {
        activeClass.innerHTML = "Цена действует до 30 сентября";
    });
    ticketOldPrice.forEach((oldPrice) => {
        oldPrice.innerHTML = "15 000 ₽";
    });
}

const disabledButton = document.querySelectorAll('.ticket__button--disabled');
disabledButton.forEach((disabled) => {
    disabled.innerHTML = "скоро в продаже";
});


if (mediaQuery.matches) {
    let a = document.querySelector('.a');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        a.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
    });

    let b = document.querySelector('.b');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        b.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 100 + 'px)';
    });

    let c = document.querySelector('.c');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        c.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 180 + 'px)';
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJyk7XHJcbmNvbnN0IHRpY2tldEFjdGl2ZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNhY3RpdmVTdGF0dXMnKTtcclxuY29uc3QgdGlja2V0T2xkUHJpY2UgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3ByaWNlT2xkJyk7XHJcblxyXG5cclxuaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG4gICAgdGlja2V0QWN0aXZlU3RhdHVzLmZvckVhY2goKGFjdGl2ZUNsYXNzKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlQ2xhc3MuaW5uZXJIVE1MID0gXCLQtNC+IDUg0L7QutGC0Y/QsdGA0Y9cIjtcclxuICAgIH0pO1xyXG4gICAgdGlja2V0T2xkUHJpY2UuZm9yRWFjaCgob2xkUHJpY2UpID0+IHtcclxuICAgICAgICBvbGRQcmljZS5pbm5lckhUTUwgPSBcIjEwIDAwMCDigr1cIjtcclxuICAgIH0pO1xyXG59IGVsc2Uge1xyXG4gICAgdGlja2V0QWN0aXZlU3RhdHVzLmZvckVhY2goKGFjdGl2ZUNsYXNzKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlQ2xhc3MuaW5uZXJIVE1MID0gXCLQptC10L3QsCDQtNC10LnRgdGC0LLRg9C10YIg0LTQviAzMCDRgdC10L3RgtGP0LHRgNGPXCI7XHJcbiAgICB9KTtcclxuICAgIHRpY2tldE9sZFByaWNlLmZvckVhY2goKG9sZFByaWNlKSA9PiB7XHJcbiAgICAgICAgb2xkUHJpY2UuaW5uZXJIVE1MID0gXCIxNSAwMDAg4oK9XCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZGlzYWJsZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlja2V0X19idXR0b24tLWRpc2FibGVkJyk7XHJcbmRpc2FibGVkQnV0dG9uLmZvckVhY2goKGRpc2FibGVkKSA9PiB7XHJcbiAgICBkaXNhYmxlZC5pbm5lckhUTUwgPSBcItGB0LrQvtGA0L4g0LIg0L/RgNC+0LTQsNC20LVcIjtcclxufSk7XHJcblxyXG5cclxuaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYScpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgeCA9IGUuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCB5ID0gZS5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0OyAgXHJcbiAgICAgICAgYS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0nICsgeCAqIDAgKyAncHgsIC0nICsgeSAqIDAgKyAncHgpJztcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmInKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHggPSBlLmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgeSA9IGUuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodDsgIFxyXG4gICAgICAgIGIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIHggKiAwICsgJ3B4LCAtJyArIHkgKiAxMDAgKyAncHgpJztcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMnKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHggPSBlLmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgeSA9IGUuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodDsgIFxyXG4gICAgICAgIGMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIHggKiAwICsgJ3B4LCAtJyArIHkgKiAxODAgKyAncHgpJztcclxuICAgIH0pO1xyXG59XHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
