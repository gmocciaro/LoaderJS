# LoaderJS

Show an useful loader written in JS-CSS.

## How to use

Include js and css file in your html page

    <link href="loader.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="loader.js"></script>

Customize your logo, upload it where needed and update the references in the css file.
```loader-background.png``` is used for the background (1x1), you can use your own if needed

### start

    Loader.start(data);

Start the loader, you can pass some html/text in the data variable, to be shown below the logo 

    Loader.start();
    Loader.start('Loading...');
    Loader.start('<span>Hi!</span>');

### updateHTML

    Loader.updateHTML(data, delay);

Updates the data shown by the Loader, you can set up a delay before apply this change

    Loader.updateHTML('My new html/text');
    Loader.updateHTML('My new html/text', 5000);
    Loader.updateHTML('<span>My new html/text</span>', 5000);

### fixLoaderPosition

    Loader.fixLoaderPosition();
    
This method will only fix the div position, based on the length/size of the HTML/text you passed before.
**NB:** This method will trigger automatically so you won't need to use it.

### stop

    Loader.stop();
    
Stop and close the Loader

## Requirement

LoaderJS requires jQuery in order to work
