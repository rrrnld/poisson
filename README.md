# poisson

A Quil sketch implementing poisson disk sampling as described by the always wonderful Daniel Shiffman on [Coding Train](https://www.youtube.com/watch?v=flQgnCUxHlw).

## Usage

Run `lein figwheel` in your terminal. Wait for a while until you see `Successfully compiled "resources/public/js/main.js"`. Open [localhost:3449](http://localhost:3449) in your browser.

You can use this while developing your sketch. Whenever you save your source files the browser will automatically refresh everything, providing you with quick feedback. For more information about Figwheel, check the [Figwheel repository on GitHub](https://github.com/bhauman/lein-figwheel).

## Publishing your sketch

Before you publish your sketch, run `lein do clean, cljsbuild once optimized`. This will compile your code and run Google Closure Compiler with advanced optimizations. Take `resources/public/index.html` and `resources/public/js/main.js` and upload them to server of your choice.

You can publish the build via `gh-pages` with `lein github-cdn $optional-commit-msg`.

## License

Copyright © 2018 Arne Schlüter <arne@schlueter.is>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.
