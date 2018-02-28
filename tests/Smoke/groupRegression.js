var downloadList = function(driver)
{
    driver
    //downloading upload list csv
    .url("https://s3.amazonaws.com/sml-demo/uploads/nightwatch/uploadList.csv")
    .pause(2000)
}
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
    //click add group
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
var createList = function(driver)
{
    driver
    .useXpath()
    //click groups
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    //click add list
    .click("//a[@class='btn btn-default btn-icon-add']")
    .pause(4000)
    //click edit to change name
    .click("//button[@class='btn-edit']")
    .pause(2000)
    //edit name of the list
    .clearValue("//input[@ng-show='isEdit']")
    .pause(500)
    .setValue("//input[@ng-show='isEdit']","Test list upload")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(1000)
    .setValue('//input[@type="file"]', driver.globals.userNames.path + "uploadList.csv")
    .pause(2000)
    .click("//a[contains(text(),'Test list upload')]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createListUpload.png')
    .pause(2000)
}
var createGroupExcludeState = function(driver)
{
    //click Groups
    driver
    .useXpath()
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    //click add group
    .click("//a[@class='btn btn-default btn-icon-add test-group-add']")
    .pause(4000)
    .click("//button[@class='btn-edit']")
    .pause(2000)
    //edit name of the group
    .clearValue("//input[@ng-show='isEdit']")
    .pause(500)
    .setValue("//input[@ng-show='isEdit']","Exclude State")
    .pause(1000)
    //click country link to add canada
    .click("//a[@class='test-group-country-link']")
    .pause(1000)
    .click("//label[@for='checkbox_criterias.country_CA']")
    .pause(1000)
    .click("//button[@class='btn btn-primary btn-xs test-group-country-save']")
    .pause(1000)
    //click US states link
    .click("//a[@class='test-group-us_states-link']")
    .pause(1000)
    //click all to open the drop down menu
    .click("(//button[@class='dropdown-select-toggle filter-option'])[1]")
    .pause(1000)
    //click 'All except'
    .click("(//ul[@class='dropdown-select-menu'])[1]/li[2]")
    .pause(2000)
    .click("(//button[@class='dropdown-select-toggle filter-option'])[2]")
    .pause(1000)
    //add nj to exclude
    .click("(//ul[@class='dropdown-select-menu'])[2]/li[37]")
    .pause(2000)
    //click add
    .click("(//button[@class='btn-range btn-range-plus'])[1]")
    .pause(1000)
    //click done
    .click("//button[@class='btn btn-primary btn-xs test-group-us_states-save']")
    .pause(1000)
    //click save group
    .execute('scrollTo(0,0)')
    .pause(1000)
    .click("//a[@class='btn btn-default test-group-save']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createGroupExcludeState.png')
    .pause(2000)
    //click members
    .click("//a[@class='test-nav-members']")
    .pause(4000)

}
var createGroupCanada = function(driver)
{
    driver
    .useXpath()
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    //click add group
    .click("//a[@class='btn btn-default btn-icon-add test-group-add']")
    .pause(4000)
    .click("//button[@class='btn-edit']")
    .pause(2000)
    //edit name of the group
    .clearValue("//input[@ng-show='isEdit']")
    .pause(500)
    .setValue("//input[@ng-show='isEdit']","Canada group")
    .pause(1000)
    //click country link to add canada
    .click("//a[@class='test-group-country-link']")
    .pause(1000)
    //check CA
    .click("//label[@for='checkbox_criterias.country_CA']")
    .pause(1000)
    //uncheck USA
    .click("//label[@for='checkbox_criterias.country_US']")
    .pause(1000)
    //click done
    .click("//button[@class='btn btn-primary btn-xs test-group-country-save']")
    .pause(1000)
    //click save group
    .pause(1000)
    .click("//a[@class='btn btn-default test-group-save']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createGroupCanada.png')
    .pause(2000)
    //click members
    .click("//a[@class='test-nav-members']")
    .pause(4000)
}
var segmentBySurveyAnswers = function(driver)
{
    driver
    .useXpath()
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    //click add group
    .click("//a[@class='btn btn-default btn-icon-add test-group-add']")
    .pause(4000)
    .click("//button[@class='btn-edit']")
    .pause(2000)
    //edit name of the group
    .clearValue("//input[@ng-show='isEdit']")
    .pause(500)
    .setValue("//input[@ng-show='isEdit']","Segment by survey answers group")
    .pause(1000)
    //scroll to the bottom
    .execute('scrollTo(3000,3000)')
    .click("//a[@class='sl-btn-select-answer test-group-condition-add']")
    .pause(1000)
    
}
module.exports = {
    //downloadList: downloadList,
    signinEmail: signinEmail,
    //createGroupMale: createGroupMale,
    //createList: createList,
    //createGroupExcludeState: createGroupExcludeState,
    createGroupCanada: createGroupCanada
}
