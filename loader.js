var loader = {
    start : function(html, namespace){
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

        //if (!$$et.empty(namespace)){
        //    loader.attr('namespace', namespace);
        //}

        loader.fadeIn();

        // fixing left margin & padding
        fixLoaderDiv(loaderDiv);
    },

    stop : function(){
        var loader = $('loader');

        if(loader.length > 0){
            loader.fadeOut("Fast", function () {
                loader.remove();
            });
        }
    },

    updateHTML : function(html, scope){
        var loader = $('loader');
        var loaderDiv = $("loader > div");

        if(loader && loaderDiv && typeof html != 'undefined'){

            // Pushing new HTML inside loader
            loaderDiv.html(html);

            // fixing left margin
            fixLoaderDiv(loaderDiv);
        }
    }
};