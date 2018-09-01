
exports.config = {
    framework : 'jasmine',
    seleniumAddress : 'http://localhost:4444/wd/hub',
    multiCapabilities: [
        {
            'browserName': 'chrome',
            'specs': [
                '../specs/xs/searchChrome.specs.js',

            ]
        // },
        // {
        //     'browserName': 'firefox',
        //     'specs': [
        //         '../specs/xs/searchFirefox.specs.js'
        //     ]
        }
    ],
    jasmineNodeOpts: {
        showColors : true
    },
    onPrepare: function() {

        //Redimension browser
        browser.driver.executeScript(function() {
            return {
                width: 550,
                height: window.screen.availHeight
            };
        }).then(function(result) {
            browser.driver.manage().window().setSize(result.width, result.height);
        });

        browser.ignoreSynchronization = true;
    }

};