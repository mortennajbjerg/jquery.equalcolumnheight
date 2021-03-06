/*
* equalcolumnheight
* https://github.com/mortennajbjerg/jquery.equalcolumnheight
*
* Copyright (c) 2013 Morten Najbjerg
* Licensed under the GPLv3 license.
*/

(function($) {

    $.fn.equalcolumnheight = function() {
        
        var $this = $(this),
            heighest = 0;
        
        // Calculate the heighest element and return integer
        var getHeighestValue = function() {
            var heights = getElementsHeight();
            return Math.max.apply($this, heights );
        };
        
        // Return array of all element heights
        var getElementsHeight = function() {
            return $.map( $this , function(e){ return $(e).outerHeight(); });
        };
        
        // Set a height on all elements
        var setElementsHeight = function(value) {
            $this.css('height', value);
        };
        
        var init = function() {
            setElementsHeight('auto');
            heighest = getHeighestValue();
            setElementsHeight(heighest);
        };
        
        // Set resize
        $( window ).resize(function() {
            init();
        });
        
        // Make sure that this works even
        // if the columns has images inside them
        $( window ).load(function() {
            init();
        });
        
        init();
        
    };

}(jQuery));
