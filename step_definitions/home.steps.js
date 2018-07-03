var chai = require('chai')
var expect = chai.expect
var chaiAsPromised = require('chai-as-promised')
var home = require('./../page_objects/home.page.js')
var {defineSupportCode} = require('cucumber');
chai.use(chaiAsPromised);

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(20 * 1000);
});

defineSupportCode(({Given, When, Then}) => {
  Given(/^That I entered Expedia\.com$/, function () {
    return browser.get('https://www.expedia.com/');
  });

  Then(/^I should should see Expedia\.com logo$/, function () {
    return expect(home.isLogoDisplayed()).to.eventually.equal(true);
  })

  Given(/^That I am at the home page$/, function () {
   return expect(home.isHomeTabSelected()).to.eventually.equal('Currently selected');
  })

  Then(/^I should have search tabs$/, function () {
   return expect(home.isSearchTabShown()).to.eventually.equal(true);
  })
});
