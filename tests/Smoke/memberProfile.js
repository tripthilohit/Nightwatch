var downloadImages = function(driver)
{
    driver
    .url("https://burst.shopify.com/")
    .pause(3000)
    .waitForElementVisible('body', 1000)
    .useXpath()
    //download activity badge
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "beach")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("(//div[@class='grid '])[1]/div[2]/div[1]")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@data-ga-action='Download']")
    .pause(4000)
}

var modulememberSigninEmail = require('./memberSigninEmail.js')
//Navigate to member profile from Dashboard
var memberProfilePage = function(driver)
{
  driver
.useXpath()
.click("//div[@class='col-md-3 header-profile']/img[1]")
.pause(2000)
.window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
.pause(2000)
.click("//div[@class='desktop-profile']/ul/li[1]/a")
.pause(2000)
.execute('scrollTo(200,0)')
.pause(2000)
// Upload pic using FB profile( make sure Single click sharing app is been deleted from you FB profile)
.click("(//a[@class='btn btn-facebook-connect btn-md2 btn-block'])[1]")
.click("//input[@id='email']")
.clearValue("//input[@id='email']")
.pause(2000)
.setValue("//input[@id='email']", driver.globals.userNames.facebookEmail)
.click("//input[@id='pass']")
.clearValue("//input[@id='pass']")
.pause(2000)
.setValue("//input[@id='pass']", driver.globals.userNames.facebookPass)
.pause(2000)
.click("//button[@value='1']")
.pause(4000)
.keys(driver.Keys.ENTER)
.pause(2000)
.keys(driver.Keys.ENTER)
.pause(2000)
.keys(driver.Keys.ENTER)
.pause(4000)
.execute('scrollTo(200,0)')
.pause(2000)
// Upload a profile pic using Twitter profile( pls make sure Single click sharing app is revoked on twitter profile)
.click("(//a[@class='btn btn-twitter-connect btn-md2 btn-block'])[1]")
.pause(2000)
.click("//input[@id='username_or_email']")
.clearValue("//input[@id='username_or_email']")
.pause(2000)
.setValue("//input[@id='username_or_email']", driver.globals.userNames.twitterEmail)
.click("//input[@id='password']")
.clearValue("//input[@id='password']")
.pause(2000)
.setValue("//input[@id='password']", driver.globals.userNames.twitterPass)
.pause(2000)
.click("//input[@value='Sign In']")
.pause(4000)
//upload photo using "Browse" button
//.click("//div[@class='btn btn-color profile-upload-btn']")
//.setValue("(//div[@class='btn btn-upload btn-primary'])[1]/input",driver.globals.userNames.path + "beach-pals_925x.jpg")
//.pause(3000)







}

module.exports={
downloadImages: downloadImages,
signinEmail: modulememberSigninEmail.signinEmail, 
memberProfilePage:memberProfilePage
 }