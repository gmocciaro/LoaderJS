# LoaderJS

Show an useful loader written in JS-CSS.

## How to use

Include js and css file in your html page

```
<link href="loader.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="loader.js"></script>
```

Customize your logo, upload it where needed and update the references in the css file.
```loader-background.png``` is used for the background (1x1), you can use your own if needed

```Loader.start(html)```

Start the loader, you can pass some html/text in the extra variable, to be shown below the logo (e.g. ```Loader.start('Loading...')``)

### Requirement

LoaderJS requires jQuery in order to work