function postTocta1(){var e=$("#namect1").val(),t=$("#phoncta1").val(),a=$("#emalcta1").val(),o=$("#coursecta1").val(),l=$("#queryca1").val(),n=$("#subcta1").val();""==e?(setflag=!1,alert("Namemust be filled out"),document.getElementById("namcta1").focus()):/^[a-zA-Z\s]+$/.test(e)?""==t?(setflag=!1,alert("Phone number must be filled out"),document.getElementById("phoneta1").focus()):/^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){10,24}$/.test(t)?""==a?(setflag=!1,alert("Email must be filled out"),document.getElementById("emaicta1").focus()):/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(a)?""==o?(setflag=!1,alert("Please Choose our Courses"),document.getElementById("coursscta1").focus()):(setflag=!0,e=$("#naecta1").val(),t=$("#ponecta1").val(),a=$("#mailcta1").val(),o=$("#cousescta1").val(),l=$("#queryta1").val(),n=$("#subjca1").val(),$.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSeyxwkS4-WTyggwDDxp5y_4OnYcoPebrAFjQ9c0a3yWrLgtfw/viewform",data:{"entry.933588634":e,"entry.28726764":t,"entry.2032038599":a,"entry.1072877526":o,"entry.1684867532":l,"entry.356863521":n},type:"POST",dataType:"xml",statusCode:{0:function(){window.location.replace("thank-you.php")},200:function(){window.location.replace("thank-you.php")}}})):(setflag=!1,alert("Please enter a valid email address."),document.getElementById("emailcta1").focus()):(setflag=!1,alert("Invalid Phone Number"),document.getElementById("phoneta1").focus()):(alert("Invalid characters, Only alphabets allowed"),document.getElementById("namecta1").focus())}function postTocta2(){var e=$("#namecta2").val(),t=$("#phoecta2").val(),a=$("#emailcta2").val(),o=$("#courescta2").val(),l=$("#quercta2").val(),n=$("#subjcta2").val();""==e?(setflag=!1,alert("Name must be filled out"),document.getElementById("naecta2").focus()):/^[a-zA-Z\s]+$/.test(e)?""==t?(setflag=!1,alert("Phone number must be filled out"),document.getElementById("phonecta2").focus()):/^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){10,24}$/.test(t)?""==a?(setflag=!1,alert("Email must be filled out"),document.getElementById("emaicta2").focus()):/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(a)?""==o?(setflag=!1,alert("Please Choose Your Courses"),document.getElementById("courescta2").focus()):(setflag=!0,e=$("#naecta2").val(),t=$("#phoecta2").val(),a=$("#emalcta2").val(),o=$("#cursesta2").val(),l=$("#qurcta2").val(),n=$("#sbjcta2").val(),$.ajax({url:"https://docs.google.com/forms/d/e/1FAIpQLSeyxwkS4-/viewform",data:{"entry.933588634":e,"entry.28726764":t,"entry.2032038599":a,"entry.1072877526":o,"entry.1684867532":l,"entry.356863521":n},type:"POST",dataType:"xml",statusCode:{0:function(){window.location.replace("thank-you.php")},200:function(){window.location.replace("thank-you.php")}}})):(setflag=!1,alert("Please enter a valid email address."),document.getElementById("emailcta2").focus()):(setflag=!1,alert("Invalid Phone Number"),document.getElementById("phonecta2").focus()):(alert("Invalid characters, Only alphabets allowed"),document.getElementById("namcta2").focus())}$(document).ready(function(){$(".cont").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),$(".modalBtn").click(function(e){e.preventDefault();var t=$(this).data("id");$(t).modal({fadeDuration:500,fadeDelay:.5})}),$(".video-player-button").modalVideo({youtube:{controls:0,nocookie:!0,autoplay:!0}}),$(".placement-slider").owlCarousel({margin:10,dots:!1,nav:!1,loop:!0,autoHeight:!0,autoplay:!0,autoplayTimeout:2e3,responsive:{0:{items:3},480:{items:4},1e3:{items:6}}}),$(".gallery-slider").owlCarousel({margin:30,dots:!1,nav:!1,loop:!0,autoHeight:!0,autoplay:!0,autoplayTimeout:3e3,responsive:{0:{items:3,margin:10},480:{items:4},1e3:{items:3}}}),$(".gallery-slider-new").owlCarousel({margin:30,dots:!1,nav:!1,loop:!0,autoHeight:!0,autoplay:!0,autoplayTimeout:3e3,responsive:{0:{items:1,margin:10},480:{items:1},1e3:{items:1}}})});