(function (){
    'use strict';

    //scripts from API

    //text script
    (function() {
        'use strict';
        var cx = '012505910828746587310:clwosv6c3e4';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();

    //text script
    (function() {
        'use strict';
        var cx = '012505910828746587310:wz_p9uplk2c';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();

    //UI Controller
    var UIController = (function(){
        'use strict';

        //String Elements
        var resultsRowEl, searchButtonEl, textResultsEl, imageResultsEl, textSearchInputEl, loaderEl, searchRowEl, textResultsIdDOM, imageButtonEl, searchRowSpanEl, imageResultSpanEl;

        //Values
        var innerHeightValue, resultsBottomDistance;

        //DOM Elements
        var searchRowDOM, textColDOM, imageColDOM, resultsRowDOM, textSearchInputDOM , loaderDOM;


        //strings for outside access
        resultsRowEl = '.results-row';
        searchButtonEl = '.gsc-search-button';
        textResultsEl = '.text-search';
        imageResultsEl = '.image-search';
        searchRowEl = '.search-row';
        searchRowSpanEl = searchRowEl+' span';
        imageResultSpanEl = imageResultsEl+ ' span';
        imageButtonEl = '.image-search input';
        textSearchInputEl = 'gsc-i-id1';
        loaderEl= 'loader';

        //elements for inside access
        textColDOM = document.querySelector('.text-search');
        imageColDOM = document.querySelector('.image-search');
        resultsRowDOM = document.querySelector(resultsRowEl);
        loaderDOM = document.getElementById(loaderEl);
        //Init values

        resultsBottomDistance = 10; //in px

        return {

            //When click the search button
            addOverflow : function(){
                if(textSearchInputDOM.value !== '') {
                    loaderDOM.classList.remove('hidden');
                    textColDOM.classList.add('overflow-auto');
                    imageColDOM.classList.add('overflow-auto');

                    document.querySelector(imageButtonEl).value = document.querySelector(searchRowEl + ' '+ 'input').value;
                    document.querySelector('.image-search .gsc-search-button-v2').click();

                    resultsRowDOM.classList.remove('hidden');
                    loaderDOM.classList.add('hidden');
                }
            },

            clearImageResults : function(){
                document.querySelector(imageResultSpanEl).click();
            },

            //Get Elements from our HTML
            getDOMElements: function(){
                return {
                    resultsRow : resultsRowEl,
                    searchButton : searchButtonEl,
                    textResults : textResultsEl,
                    imageResults: imageResultsEl,
                    searchRowSpanEl : searchRowSpanEl,
                    textSearchInputEl : textSearchInputEl,
                    loaderDOM : loaderDOM
                }
            },

            //Resize the height of results row to apply overflow
            resizeResultsRow : function () {
                    innerHeightValue = window.innerHeight;
                    searchRowDOM = document.querySelector(searchRowEl);

                    document.querySelector(resultsRowEl).style.height = innerHeightValue - searchRowDOM.getBoundingClientRect().bottom - resultsBottomDistance +'px';

            },

            //Get Search Elements which only appear after load
            getSearchElements: function () {
                textSearchInputDOM = document.getElementById(textSearchInputEl);
            }

        }

    })();

    //Controller of the Application
    var Controller = (function(uiCtrl){
        'use strict';
        var elements;

        return {
            init: function(){
                elements = uiCtrl.getDOMElements();
                uiCtrl.getSearchElements();

                document.querySelector(elements.searchButton).addEventListener('click',uiCtrl.addOverflow);
                document.querySelector(elements.searchRowSpanEl).addEventListener('click',uiCtrl.clearImageResults);


                uiCtrl.resizeResultsRow();

                if(window.performance.navigation.type === 1) document.querySelector(elements.searchRowSpanEl).click();


                window.addEventListener('resize',uiCtrl.resizeResultsRow);


                //When input is focus and enter is pressed
                document.getElementById(elements.textSearchInputEl).onkeyup = function (el) {
                    'use strict';

                    //If enter is pressed
                    if(el.keyCode === 13) {
                        document.querySelector(elements.searchButton).click();
                    }
                };

                elements.loaderDOM.classList.add('hidden');

            }
        }
    })(UIController);

    window.onload =function (){
        'use strict';
        Controller.init();
    };

})();