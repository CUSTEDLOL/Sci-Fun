// Init App
var myApp = new Framework7({
    modalTitle: "MKB Residency",
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

var calendarDefault = myApp.calendar({
    input: '#calendar-default',
}); 

// Add main view
var mainView = myApp.addView('.view-main', {
});


// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});





/* ===== Swipe to delete events callback demo ===== */
myApp.onPageInit('swipe-delete', function (page) {
    $$('.demo-remove-callback').on('deleted', function () {
        myApp.alert('Thanks, item removed!');
    });
});
myApp.onPageInit('swipe-delete media-lists', function (page) {
    $$('.demo-reply').on('click', function () {
        myApp.alert('Reply');
    });
    $$('.demo-mark').on('click', function () {
        myApp.alert('Mark');
    });
    $$('.demo-forward').on('click', function () {
        myApp.alert('Forward');
    });
});


/* ===== Action sheet, we use it on few pages ===== */
myApp.onPageInit('swipe-delete modals media-lists', function (page) {
    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: 'Choose some action',
                label: true
            },
            // First button
            {
                text: 'Alert',
                onClick: function () {
                    myApp.alert('He Hoou!');
                }
            },
            // Second button
            {
                text: 'Second Alert',
                onClick: function () {
                    myApp.alert('Second Alert!');
                }
            },
            // Another red button
            {
                text: 'Nice Red Button ',
                color: 'red',
                onClick: function () {
                    myApp.alert('You have clicked red button!');
                }
            },
        ],
        // Second group
        [
            {
                text: 'Cancel'
            }
        ]
    ];
    $$('.demo-actions').on('click', function (e) {
        myApp.actions(actionSheetButtons);
    });
    $$('.demo-actions-popover').on('click', function (e) {
        // We need to pass additional target parameter (this) for popover
        myApp.actions(this, actionSheetButtons);
    });
    
});
        
/* ===== Swipebox Gallery Page ===== */

myApp.onPageInit('tariff', function (page) {
     document.getElementById("tariff").innerHTML='<div align="center"><img src="load.gif" style="width:50px; height:50px; margin-top:20%;" /></div>';

	$.ajax({  
				type: "POST",  
				url: "http://www.mkbgrandresidency.in/php/tariff.php",  
				data: { productID: 1},  
				success: function(theResponse) {
					document.getElementById("tariff").innerHTML=theResponse;
				}
	}); 
});

    
myApp.onPageInit('gallery, index', function (page) {
       var mySwiper = myApp.swiper('.swiper-container', {
      speed: 400,
    spaceBetween: 100,
	autoplay:  3000,
    pagination:'.swiper-pagination'
});
	 $('.swipebox' ).swipebox();
	 
});

myApp.onPageInit('profile', function (page) {
        $('.swipebox' ).swipebox();
});
        
        
myApp.onPageInit('index, booking, home, accordion, tariff', function (page) {
   document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
 
	FCMPlugin.onNotification(
            function(data){
                if(data.wasTapped){
                    //Notification was received on device tray and tapped by the user.
                     document.getElementById("asuccess").innerHTML = " <span class='closebtn' onclick='clos();'>&times;</span>  <strong>"+data.title+"</strong> <br>"+data.body;
$('#asuccess').show();
					
                }
				else{
				 document.getElementById("asuccess").innerHTML = " <span class='closebtn' onclick='clos();'>&times;</span>  <strong>"+data.title+"</strong> <br>"+data.body;
$('#asuccess').show();
				}
            }
        );
}
 function clos()
	{
		$('#asuccess').hide();
	}
});







/* ===== Color themes ===== */
myApp.onPageInit('color-themes', function (page) {
    $$(page.container).find('.ks-color-theme').click(function () {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('theme') === 0) classList.remove(classList[i]);
        }
        classList.add('theme-' + $$(this).attr('data-theme'));
    });
    $$(page.container).find('.ks-layout-theme').click(function () {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('layout-') === 0) classList.remove(classList[i]);
        }
        classList.add('layout-' + $$(this).attr('data-theme')); 
    });
});


/* ===== Calendar ===== */
myApp.onPageInit('profile todoadd', function (page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default2',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format2',
        dateFormat: 'DD, MM dd, yyyy'
    });
});	

myApp.onPageInit('register', function (page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default2',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format2',
        dateFormat: 'DD, MM dd, yyyy'
    });
});	

myApp.onPageInit('calendar todo', function (page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'DD, MM dd, yyyy'
    });
    // With multiple values
    var calendarMultiple = myApp.calendar({
        input: '#ks-calendar-multiple',
        dateFormat: 'M dd yyyy',
        multiple: true
    });
    
    // Inline with custom toolbar
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#ks-calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        header: false,
        footer: false,
        toolbarTemplate: 
            '<div class="toolbar calendar-custom-toolbar">' +
                '<div class="toolbar-inner">' +
                    '<div class="left">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                    '</div>' +
                    '<div class="center"></div>' +
                    '<div class="right">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        onOpen: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function () {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function () {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        }
    });
});



myApp.onPageInit('booking', function (page) {
	(function (exports) {
    function valOrFunction(val, ctx, args) {
        if (typeof val == "function") {
            return val.apply(ctx, args);
        } else {
            return val;
        }
    }

    function InvalidInputHelper(input, options) {
        input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

        function changeOrInput() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
               input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
// the next line is required to work around a bug in WebKit (Chrome / Safari)
                var myelement = input.id;
   var el = document.getElementById(myelement);
    el.scrollIntoView(false);

            } else {
               console.log("INVALID!"); input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    }
    exports.InvalidInputHelper = InvalidInputHelper;
})(window);



InvalidInputHelper(document.getElementById("email"), {
    defaultText: "Please enter an email address!",
    emptyText: "Please enter an email address!",
    invalidText: function (input) {
        return 'The email address "' + input.value + '" is invalid!';
    }
});
var options = { 
    beforeSend: function()
    {

        //Simple validation to make sure user entered something
        //If error found, add hightlight class to the text field
          $('#loading1').show();
		 
		
    },
    uploadProgress: function()
    {
       $('#loading1').show();
 
    },
	
	complete: function(response) 
	{
		$('#loading1').hide();
	
					if($.trim(response.responseText).toUpperCase() == "VERIFY")
					{
						document.getElementById("page1").innerHTML='<div align="center" style="color:#fff;">&quot; Thank you for Submitting your details. We will contact your shortly &quot; </div>';
						$('html, body').animate({scrollTop:$('#page1').position().top}, 'slow');
					}
					
				$('#name').val('');
				$('#email').val('');
				$('#mobile').val('');
				$('#address').val('');
				$('#arrfrom').val('');
				$('#arrival').val('');
				$('#departure').val('');
				$('#adults').val('');
				$('#childrens').val('');
				$('#purpose').val('');

		
	},
	error: function()
	{
		$('#loading1').hide();
		$("#page1").show();
		$("#page1").html("<font color='red'> ERROR: unable to Login</font>");
		$("#page1").fadeOut(5000);

	}
     
}; 

     $("#myForm").ajaxForm(options);
});
/* ===== masonary Gallery Page ===== */
myApp.onPageInit('masonry', function (page) {
     
      	   
    $(".galleryone").click(function(){
        $(".grid").addClass("one");
        $(".grid").removeClass("two three");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
    
    $(".gallerytwo").click(function(){
        $(".grid").addClass("two");
        $(".grid").removeClass("one three");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
    
    $(".gallerythree").click(function(){
        $(".grid").addClass("three");
        $(".grid").removeClass("two one");
        $('.grid').masonry({
          itemSelector: '.grid-item'
        });
    });
	
	$('.swipebox' ).swipebox();
			
});

/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});



$$('.panel-left, .panel-right').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});
