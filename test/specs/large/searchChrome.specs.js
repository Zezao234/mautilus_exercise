var search = require('../../page/pageSearch.js');

describe('search', function () {

    // browser.driver.manage().window().maximize();

    describe('default window', function () {

        it('should go to url page', function () {
            browser.get(search.getSearchLink());
            expect(browser.getCurrentUrl()).toBe(search.getSearchLink());
        });

        it('should have loader visible', function () {
           expect(search.getLoader().isPresent()).toBeTruthy();
        });

        //Correct problem with loading
        browser.sleep(200);

        it('should have title name', function () {
            expect(browser.getTitle()).toBe(search.getBrowserTitle());
        });

        it('should have search row visible', function () {
            expect(search.getSearchRow().isPresent()).toBeTruthy();
        });

        it('should have results row hidden', function () {
            expect(search.getResultsRow().isDisplayed()).toBe(false);
        });

        it('should have search row border-color', function () {
            expect(search.getInputDiv().getCssValue('border-color')).toBe(search.getDivBorderColour());
        });

        it('should have button border-color', function () {
            expect(search.getSearchButton().getCssValue('border-color')).toBe(search.getButtonBorderColour());
        });


    });

    describe('click search', function () {
        it('should have text insert in search row input', function () {
            expect(search.getSearchRowInput().sendKeys(search.getSearchText()));
            expect(search.getSearchRowInput().getAttribute('value')).toEqual(search.getSearchText());
        });

        it('should click the button', function () {
            expect(search.getSearchButton().click());
        });

        it('should have text in hidden search input', function () {
            expect(search.getResultsInput().getAttribute('value')).toEqual(search.getSearchText());
        });

        it('should have results row visible', function () {
            expect(search.getResultsRow().isDisplayed()).toBe(true);
        });

        it('should have image results visible', function () {
            expect(search.getImageResultsDiv().isDisplayed()).toBe(true);
        });

        it('should have text results visible', function () {
            expect(search.getTextResultsDiv().isDisplayed()).toBe(true);
        });

        it('should have text results border-color', function () {
            expect(search.getTextResultsDiv().getCssValue('border-color')).toBe(search.getDivBorderColour());
        });

        it('should have image results border-color', function () {
            expect(search.getImageResultsDiv().getCssValue('border-color')).toBe(search.getDivBorderColour());
        });


    });

    describe('clearing search field', function () {
       it('should click X in results row', function () {
           expect(search.getSearchRowX().click());
       });

       it('should have results row hidden', function () {
           expect(search.getResultsRow().isDisplayed()).toBe(false);
       });

       it('should have text in hidden input clear', function () {
           expect(search.getResultsInput().getAttribute('value')).toEqual('');
       });

       it('should have text in search input clear', function () {
           expect(search.getSearchRowInput().getAttribute('value')).toEqual('');
       });

    });

    //same code
    describe('click search for the second time', function () {
        it('should have text insert in search row input', function () {
            expect(search.getSearchRowInput().sendKeys(search.getSearchText()));
            expect(search.getSearchRowInput().getAttribute('value')).toEqual(search.getSearchText());
        });

        it('should click the button', function () {
            expect(search.getSearchButton().click());
        });

        it('should have text in hidden search input', function () {
            expect(search.getResultsInput().getAttribute('value')).toEqual(search.getSearchText());
        });

        it('should have results row visible', function () {
            expect(search.getResultsRow().isDisplayed()).toBe(true);
        });

        it('should have image results visible', function () {
            expect(search.getImageResultsDiv().isDisplayed()).toBe(true);
        });

        it('should have text results visible', function () {
            expect(search.getTextResultsDiv().isDisplayed()).toBe(true);
        });

        it('should have text results border-color', function () {
            expect(search.getTextResultsDiv().getCssValue('border-color')).toBe(search.getDivBorderColour());
        });

        it('should have image results border-color', function () {
            expect(search.getImageResultsDiv().getCssValue('border-color')).toBe(search.getDivBorderColour());
        });
    });

});