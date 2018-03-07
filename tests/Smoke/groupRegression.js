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
var createListUploadingCSV = function(driver)
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
var segmentBySurveyQualifications = function(driver)
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
    .setValue("//input[@ng-show='isEdit']","Segment by survey qualification")
    .pause(1000)
    //scroll to the bottom
    .execute('scrollTo(3000,3000)')
    //add condition
    .click("//a[@class='sl-btn-select-answer test-group-condition-add']")
    .pause(1000)
    //choose survey mission hub
  .click("//li[contains(text(), 'Survey smoke')]")
    .pause(500)
    //choose survey name
    .click("//li[contains(text(), 'survey smoke name')]")
    .pause(500)
    //choose select
    .click("//button[@class='btn btn-default test-group-past-add-save']")
    .pause(1000)
    //click accepted radio option
    .click("//label[@for='radio_survey_result_0_accepted']")
    .pause(1000)
    //click done
    .click("//button[@class='btn btn-primary test-group-past-edit-save']")
   .pause(1000)
   //scroll to the top
    .execute('scrollTo(0,0)')
    .click("//a[@class='btn btn-default test-group-save']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createGroupSegmentBySurveyQualifications.png')
    .pause(4000)
}
var segmentBySurveyPastAnswers = function(driver)
{
    driver
   .useXpath()
    //click groups and lists
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
    .setValue("//input[@ng-show='isEdit']","Segment by survey past answers")
    .pause(1000)
    //scroll to the bottom
    .execute('scrollTo(3000,3000)')
    //add condition
    .click("//a[@class='sl-btn-select-answer test-group-condition-add']")
    .pause(1000)
    //choose survey mission hub
    .click("//li[contains(text(), 'Survey smoke')]")
    .pause(500)
    //choose survey name
    .click("//li[contains(text(), 'survey smoke name')]")
    .pause(500)
    //choose select
    .click("//button[@class='btn btn-default test-group-past-add-save']")
    .pause(1000)
    .execute('scrollTo(1000,1000)')
    .pause(2000)
    //click answers tab
    .click("//button[contains(text(), 'Answers')]")
    .pause(1000)
    //click question 1's answer options
    .click("//button[contains(text(), 'answer 1')]")
    .pause(1000)
    //choose option 2
    .click("(//ul[@class='inline-select-menu'])[3]/li[2]")
    .pause(1000)
    //click done
    .click("//button[@class='btn btn-primary test-group-past-edit-save']")
    .pause(1000)
    //scroll to the top
    .execute('scrollTo(0,0)')
    .click("//a[@class='btn btn-default test-group-save']")
   .pause(2000)
   .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createGroupSegmentBySurveyPastAnswers.png')
    .pause(4000)
}

var splitLists = function(driver)
{
    driver
    .useXpath()
    //click groups and lists
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    //click a list
    .click("//a[@class='test-groups-item-link ng-binding'][contains(text(),'Test list upload')]")
    .pause(3000)
   //click create lists to split
    .click("//a[@class='btn btn-default btn-icon-add']")
    .pause(2000)
    //click ok to split into 2
    .click("//div[@class='ng-binding']")
    .pause(5000)
   // .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/splitListBeforeRefresh.png')
    //.pause(4000)
    //.url("https://admin.staging.socialmedialink.com/members_groups")
   .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/splitListAfterRefresh.png')
    .pause(10000)

}
var splitGroup = function(driver)
+{
    driver
    .useXpath()
    .url("https://admin.staging.socialmedialink.com")
    .pause(3000)
    //click groups and lists
    .click("//a[@class='test-nav-groups']")
   .pause(4000)
    //.execute('scrollTo(5000,5000)')
    //click a list
    .click("//a[@class='test-groups-item-link ng-binding'][contains(text(),'Male')]")
    .pause(4000)
    //click create lists to split
    .click("//a[@class='btn btn-default btn-icon-add']")
    .pause(2000)
    //click ok to split into 2
    .click("//div[@class='ng-binding']")
    .pause(5000)
   // .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/splitListBeforeRefresh.png')
    //.pause(4000)
    //.url("https://admin.staging.socialmedialink.com/members_groups")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/splitListAfterRefresh.png')
    .pause(4000)
}
var createListAddMembers = function(driver)
{
    driver
    .useXpath()
    .url("https://admin.staging.socialmedialink.com")
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
    .setValue("//input[@ng-show='isEdit']","Test list by adding members")
   .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(1000)
    //click add members
    .click("//a[contains(text(),'Add members')]")
    .pause(2000)
    //add member 1
    .click("(//label[@class='control-checkbox'])[1]")
    .pause(1000)
    //add member 2
    .click("(//label[@class='control-checkbox'])[2]")
    .pause(1000)
    //add member 3
    .click("(//label[@class='control-checkbox'])[3]")
    .pause(1000)
    .click("//a[@class='btn btn-default']")
    .pause(1000)
    //click groups
    .click("//a[@class='test-nav-groups']")
    .pause(4000)
    .click("//a[contains(text(),'Test list by adding members')]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/createListAddMembers.png')
    .pause(2000)
}
module.exports = {
    downloadList: downloadList,
    signinEmail: signinEmail,
   createGroupMale: createGroupMale,
   createListUploadingCSV: createListUploadingCSV,
    createGroupExcludeState: createGroupExcludeState,
    createGroupCanada: createGroupCanada,
    segmentBySurveyQualifications: segmentBySurveyQualifications,
    segmentBySurveyPastAnswers: segmentBySurveyPastAnswers,
    splitLists: splitLists,
    splitGroup: splitGroup,
    createListAddMembers: createListAddMembers
}

