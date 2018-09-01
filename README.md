# Search

A simple search for image and text

## Using the search

Type some text into the input and press the ``enter`` key or click the button

## Running the tests

![protractor]( https://deerawan.gallerycdn.vsassets.io/extensions/deerawan/vscode-protractor-snippets/1.0.5/1474455426693/Microsoft.VisualStudio.Services.Icons.Default  "Protractor")

The automated tests use [Protractor](http://www.protractortest.org/#/), with jasmine and selenium, which is a framework
for AngularJS apps, but we disabled the AngularJS part for these tests.

We test on Chrome and Firefox.
### What are we testing

We test the specs the designing team gave us (margin, padding...), the visible elements, etc.

    e.g : "Expect margin-left to be 19px"

### Prerequisites

We need to install Protractor to run our test files. Simple run:

    npm install -g protractor

and update

    webdriver-manager update

### Run the tests

Start the Selenium Server with

    webdriver-manager start

And your test configuration file (e.g: _conf.js_) file through your IDE (Webstorm allows Protractor) or simply run

    protractor conf.js

### Notes

We have two configuration files, one for Large and one for XS.

For more information about Protractor Tests check the [Table of Contents](http://www.protractortest.org/#/toc)