# jQuery Table Highlighter plugin

jQuery plugin that adds a class to table rows on the `hover` event. In addition, if a link exists in the row then optionally the entire row can become clickable for that link.

* version - 0.1
* homepage - [http://github.com/aaronrussell/jquery-table-highlighter/](http://github.com/aaronrussell/jquery-table-highlighter/)
* author - [Aaron Russell](http://www.aaronrussell.co.uk)

## Usage

Simple usage:

    $('#my_table').tableHighlighter();

Advanced usage:

    $('#my_table').tableHighlighter({
        hilightClass:   'highlight',
        containsLinks:  true,
        linkSelector:   'a:first'
    });

## Options

* `hilightClass` - The class to be applied to table rows on `hover`. Defaults to `highlight`.
* `containsLinks` - Whether the row contains any clickable links. Boolean defaults to `true`.
* `linkSelector` - A jQuery selector to match the link on the table row. Defaults to `a:first`.

## License

Dual licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2010 [Aaron Russell](http://www.aaronrussell.co.uk).