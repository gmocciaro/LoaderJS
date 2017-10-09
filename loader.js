var Loader = {
    start : function(html){
        // Avoiding start overflow
        if($('loader').length > 0){
            return false;
        }

        var body = $('body');
        var loader = $('<loader></loader>');

        //body.css("overflow", "hidden");
        body.append(loader);

        // Adding empty html section
        var HtmlSpace = $("<div></div>");
        loader.append(HtmlSpace);

        // Taking element
        var loaderDiv = $("loader > div");

        if (typeof html != "undefined"){
            loaderDiv.html(html);
        }

        loader.fadeIn();

        // fixing left margin & padding
        this.fixLoaderPosition();
    },

    stop : function(){
        var loader = $('loader');

        if(loader.length > 0){
            loader.fadeOut("Fast", function () {
                loader.remove();
            });
        }
    },

    updateHTML : function(html, timeout){
        var loader = $('loader');
        var loaderDiv = $("loader > div");

        if(loader && loaderDiv && typeof html != 'undefined'){

            var that = this;

            if (typeof timeout == 'number' && timeout > 0){
                setTimeout(function(){
                    that.updateHTML(html, 0);
                }, timeout);
            } else {
                // Pushing new HTML inside loader
                loaderDiv.html(html);

                // fixing left margin
                this.fixLoaderPosition();
            }
        }
    },

    fixLoaderPosition : function(){
        var loaderDiv = $("loader > div");
        if (loaderDiv) {
            var padding = 0;

            // Checking if there is actually html inside the div
            if (loaderDiv.html() != ''){
                loaderDiv.css("padding", 15);
                loaderDiv.css('margin-left', '-' + ((loaderDiv.width() + 30) / 2) + 'px');
            } else {
                loaderDiv.css("padding", 0);
            }
        }
    }
};

