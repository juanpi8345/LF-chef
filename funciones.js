jQuery(document).ready(listo); /* Una vez que nuestra web esta lista vamos a hacer cosas con los elementos*/

function listo(){

   

   jQuery("a").click(function(){

   	var dev = jQuery(this).attr("href")

   	jQuery("html,body").animate({
   		"scrollTop": jQuery(dev).offset().top -76
   	})
   })

}

