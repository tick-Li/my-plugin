(function ($){
    $.fn.backTop = function(options){
        var defaults = {
            default: 'body',
            clickWho : 'who',
            whatHeight: '800',
            fadeInOut: '800',
            scrollSpeed: '520',
            showHide: true
        };
        var options = $.extend(defaults, options);
        this.each(function(){
             if(options.showHide){
                $(options.clickWho).css('display','none');
                    $(window).scroll(function(){
                        if ($(window).scrollTop()>options.whatHeight){
                            $(options.clickWho).fadeIn(options.fadeInOut);
                        }else{
                            $(options.clickWho).fadeOut(options.fadeInOut);
                        }
                    });
            }else{
                $(options.clickWho).css('display','block');
            }
            $(options.clickWho).click(function(){
                $(options.default).animate({scrollTop:0},options.scrollSpeed);
                return false;
            });
        });
    }
})(jQuery)