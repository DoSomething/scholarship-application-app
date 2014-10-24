var $      = require('jquery');
var Panels = require('./panels');
var Modal  = require('./modal');


var $body      = $('body');
var $container = $('#container');
var $content   = $('#content');
var $mainNav   = $('#main-nav');


Panels.init($container, $mainNav);


// If there's a designated content modal, then lets activate it!
var $modals = $container.find('[data-ui="modal"]');

if ($modals.length > 0) {
  $modals.each(function (index, content) {
    // @TODO: allow creation of multiple modals if necessary; maybe place in array()?

    var modal = new Modal(content, $container, $body);
    // console.log(modal);
  });
}

