/*
* jQuery Table Highlighter plugin
* Simple plugin for adding a class to table rows on the hover event. 
* 
* @version  0.1
* @homepage http://github.com/aaronrussell/jquery-table-highlighter/
* @author   Aaron Russell (http://www.aaronrussell.co.uk)
*
* Copyright (c) 2010 Aaron Russell (aaron@gc4.co.uk)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/

(function($){
  
  $.fn.tableHighlighter = function(options){
    
    options = $.extend({
      hilightClass:   'highlight',
      containsLinks:  true,
      linkSelector:   'a:first'
    }, options);
    
    this.find('tbody > tr').hover(function(){
      $(this).addClass(options.hilightClass);
    }, function(){
      $(this).removeClass(options.hilightClass);
    });
    
    if (options.containsLinks){
      this.find('tbody > tr').click(function(){
        if ($(this).find(options.linkSelector).length){
          document.location.href = $(this).find(options.linkSelector).attr('href');
        }
        return false;
      });
    }
  };
  
})(jQuery);