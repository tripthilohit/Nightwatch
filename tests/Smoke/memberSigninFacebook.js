var  SigninginFacebook=function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("(//a[@class='btn login themed-button'])[2]")
    .pause(1000)
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[2]/div")
    .pause(1000)
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
    .execute('scrollTo(0,400)')
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSigninSuccessfulViaFacebook.png')
    .pause(2000)
    
  }
module.exports = {
    SigninginFacebook: SigninginFacebook
  
}
