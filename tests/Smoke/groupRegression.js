var signinEmail = function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    //.waitForElementVisible('body', 2000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirmAdmin.png')
    .pause(2000)
    
}
var createGroupMale = function(driver)
{
    //click Groups
    driver
    .useXpath()
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    .click("//a[@class='btn btn-default btn-icon-add test-group-add']")
    .pause(4000)
    .click("//button[@class='btn-edit']")
    .pause(2000)
    //edit name of the group
    .clearValue("//input[@ng-show='isEdit']")
    .pause(500)
    .setValue("//input[@ng-show='isEdit']","Male")
    .pause(1000)
    //click to add gender
    .click("//a[@class='test-group-gender-link']")
    .pause(2000)
    //click Male checkbox
    .click("//label[@for='checkbox_criterias.gender_male']")
    .pause(1000)
    //save gender filter
    .click("//button[@class='btn btn-primary btn-xs test-group-gender-save']")
    .pause(1000)
    //save group 
    .click("//a[@class='btn btn-default test-group-save']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createGroupMale.png')
    .pause(2000)

}
module.exports = {
  
    signinEmail: signinEmail,
    createGroupMale: createGroupMale

}
