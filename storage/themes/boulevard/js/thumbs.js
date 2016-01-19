$(window).on('k-resize', function() {

	var currentTallest = 0,
		rowDivs = [],
		$el,
		w = $('#albums').width(),
		rowW = 0;

	$('#albums > div').each(function() {

		$el = $(this);
		rowW += $el.width();

		if (rowW > w) {

			$(rowDivs).css('height', currentTallest);

			// set the variables for the new row
			rowDivs = []; // empty the array
			currentTallest = 0;
			rowW = $el.width();

		}

		currentTallest = Math.max(currentTallest, $el.height());
		rowDivs.push(this);

	});

	$.each(rowDivs, function(i, div) {
		$(div).height(currentTallest);
	});

});