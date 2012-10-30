function resize(){
    jQuery('.resizecut img').each(function(){
      var padre = jQuery('.resizecut');
      var hijo = jQuery(this);
        padre.css({position:'relative'});  
        hijo.css({position:'absolute'});
      var widthelement = hijo.width();
      var heightelement = hijo.height();
      var newwidth = padre.width();
      var newheight = padre.height();
        if( widthelement < heightelement ){
    		newheight = heightelement / ( widthelement / newwidth );
            hijo.css({
    			width: newwidth,
                top: (( padre.height() / 2 ) - ( newheight / 2 )) + 'px',
    			left: '0px'
            });
        } 
        else {
            newwidth = widthelement / ( heightelement / newheight );
    	    hijo.css({
                height: newheight,
                left: (( padre.width() / 2 ) - ( newwidth / 2 )) + 'px'
            });
        }
    });
}