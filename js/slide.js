/**
 * Created by Administrator on 2015/9/27.
 */
define(function(require,exports,module){

    var $ = require('jquery');

    var slide =function(source){

        this.source = source;
        this.currentPage = 0;
        this.totalPages = $(this.source).length;


    };
    slide.prototype={
        constructor:slide,
        init:function(){
            var curSource = this.source[this.currentPage],
             bigImg = $('[data-slide=big-img]'),
             tinyUl = $('[data-slide=tiny-ul]');

            bigImg.css({'background-image':'url('+curSource.url+')'}).attr({href:curSource.href});
            for(var i in this.source){
                tinyUl.append(this._getListHtml(this.source[i].tinyUrl));
            }

        },
        nextPage:function(){

        },
        prevPage:function(){

        },
        _getListHtml:function(smallImg){
            return '<li class="slide-tiny-item"><img src="'+smallImg+'"/></li>';
        }


    };


    module.exports = slide;

});
