# hexo-renderer-Twig

Add support for [Twig](https://github.com/justjohn/twig.js).

## Why not Nunjucks

Nunjucks is weird, like it's name. e.g.: 

```nunjucks
{{ "true" if foo else "false" }}
```

Here in twig, much better:

```twig
{{ foo ? "true" : "false" }}
```

## Installation

``` bash
$ npm install hexo-renderer-twig --save
```

[Twig]: https://github.com/justjohn/twig.js

