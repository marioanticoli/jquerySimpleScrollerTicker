(function ( $ ) {
	$.fn.ticker=function(options) {
	  //assign this to variable for later use
		var self=this;
		var first;
		var last;
		function scroll_ticker() {
		  //get 1st element of ticker
			first=self.children('.'+options.selectorClass+':first');
			//get last element of ticker
			last=self.children('.'+options.selectorClass+':last');
			//fade out 1st
			first.fadeOut(options.speed,function() {
			  //once element faded move it to the end
				last.after(first.detach());
				//fade in 1st hidden element
				self.children('.'+options.selectorClass+':nth-child('+options.elems+')').fadeIn(options.speed);
			}).promise();

      //repeat in loop
			setTimeout(scroll_ticker,options.speed);						
		}
		//start loop
		scroll_ticker();
		return this;
	};
}( jQuery ));
