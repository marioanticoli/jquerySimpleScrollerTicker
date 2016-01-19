# jquerySimpleScrollerTicker
a simple attempt at a ticker scroller
 
Usage:

$('#container').ticker({
  selectorClass:class_name,
  elems:number_elements,
  speed:animation_speed
});

Example:
HTML
<div id="eq_ticker">
    <span class="ticker_item">aaaaaa</span>
    <span class="ticker_item">bbbbbb</span>
    <span class="ticker_item">cccccc</span>
    <span class="ticker_item">dddddd</span>
    <!-- set display:none for elements not to show at start -->
    <span class="ticker_item hidden">eeeeee</span>
    <span class="ticker_item hidden">ffffff</span>
</div>

CSS
#eq_ticker {
    background-color: #888888;
    width: 100%;
}

.ticker_item {
    margin: 10px;
}

.hidden {
    display: none;
}

JS
var els = 4; //number elements to display at the time
var spd = 2000; //speed in ms for animation
$('#eq_ticker').ticker({
    selectorClass: "ticker_item",
    elems: els,
    speed: spd
});

demo: https://jsfiddle.net/marioanticoli/sg53kme1/3/#&togetherjs=OFgpNhFtAR
