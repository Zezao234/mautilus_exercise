var search = function () {
    "use strict";

    //Links
    const searchLink = 'http://localhost:8080/mautilus_exercise/index.html';

    //Elements
    const loader = $('#loader');
    const inputDiv = $('#gsc-iw-id1');
    const searchRow = $('.search-row');
    const searchRowInput = $('.search-row input');
    const searchButton = $('.search-row button');
    const resultsInput = $('.image-search input');
    const resultsRow = $('.results-row');
    const imageResultsDiv = $('.image-search');
    const textResultsDiv = $('.text-search');
    const searchRowX = $('.search-row span');
    const resultsRowX = $('.results-row span');

    //Values
    const browserTitle = 'Search';
    const borderSize = ' 3px';
    const divBorderColour = 'rgb(229, 228, 233)';
    const buttonBorderColour = 'rgb(228, 230, 228)';
    const cursorPageColour = 'rgb(132, 132, 132)';

    const searchText = 'Mautilus';

    const sleepTime = 3500;

    /*===================
            GETTERS
    =====================*/

    // LINKS
    this.getSearchLink = function () {
        return searchLink;
    };

    // ELEMENTS

    this.getLoader = function() {
        return loader;
    };

    this.getInputDiv = function() {
      return inputDiv;
    };

    this.getSearchRow  = function() {
       return searchRow;
    };

    this.getSearchRowInput  = function() {
       return searchRowInput;
    };

    this.getSearchButton = function() {
        return searchButton;
    };

    this.getImageResultsDiv = function() {
        return imageResultsDiv;
    };

    this.getTextResultsDiv = function() {
        return textResultsDiv;
    };

    this.getSearchRowX = function() {
        return searchRowX;
    };

    this.getResultsRowX = function() {
        return resultsRowX;
    };


    // VALUES

    this.getBrowserTitle = function() {
      return browserTitle;
    };

    this.getBorderSize = function() {
        return borderSize;
    };

    this.getDivBorderColour  = function() {
        return divBorderColour;
    };

    this.getButtonBorderColour   = function() {
        return buttonBorderColour;
    };

    this.getCursorPageColour  = function() {
        return cursorPageColour;
    };

    this.getSearchText  = function() {
        return searchText;
    };

    this.getResultsInput  = function() {
        return resultsInput;
    };

    this.getResultsRow  = function() {
        return resultsRow;
    };



    this.getSleepTime  = function() {
        return sleepTime;
    };




};

module.exports = new search();