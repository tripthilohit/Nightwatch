
var modulecreateSurvey=require('./createSurvey.js')

//Add as Accepted script
var manageMembersAct=function(driver)
{
 driver
 //Click Mission Hubs
 .click("//a[@class='test-nav-hubs']")
 .pause(2000)
 //click Activity
.click("//a[@class='rowclick test-hub-link ng-binding'][text()='Manage Members Activity']")
.pause(2000)   
//click Overview Tab
//.click("(//a[@class=' test-hub-nav-overview'])[1]")
//.pause(2000)
//Click Manage Members link
.click("//a[@class='mission-item-manage-link']")
.pause(2000)
//Click Add member
.click("(//a[@class='btn btn-default'])[1]")
.pause(2000)
// Add Members - filter by email
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[4]")
.pause(2000)
//Enter Email
.click("//input[@class='filter-field ng-pristine ng-valid']")
.pause(2000)
.setValue("//input[@class='filter-field ng-pristine ng-valid']",driver.globals.userNames.memberEmailFemale)
.pause(2000)
//Click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
//Select the member
.click("(//label[@class='control-checkbox'])[1]")
.pause(2000)
//Click "Add as Accepted"
.click("//button[@class='btn btn-default']")
.pause(2000)
//Send Offer
//Click Add member
.click("(//a[@class='btn btn-default'])[1]")
.pause(2000)
// Add Members - filter by email
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[4]")
.pause(2000)
//Enter Email
.click("//input[@class='filter-field ng-valid ng-dirty']")
.pause(2000)
.clearValue("//input[@class='filter-field ng-valid ng-dirty']")
.pause(2000)
.setValue("//input[@class='filter-field ng-valid ng-dirty']",driver.globals.userNames.facebookEmail)
.pause(2000)
//Click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
//Select the member
.click("(//label[@class='control-checkbox'])[1]")
.pause(2000)
//Click "Send Offer"
.click("//button[@class='btn btn-invert']")
.pause(2000)
}

var modulebrandConnectRegression = require('./brandConnectRegression.js')
var memberAccepted=function(driver)
{

    driver
//navigate to in progress tab
.click("//span[@class='name']")
.pause(2000)
.execute('scrollTo(0,400)')
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberActivityProgressimage.png')

}
// Login via Facebook to see send offers worked
var modulememberSigninFacebook = require('./memberSigninFacebook.js')


module.exports = {
//signIn: modulecreateSurvey.signIn,
//manageMembersAct: manageMembersAct,
//signinFemale:modulebrandConnectRegression.signinFemale,
//memberAccepted:  memberAccepted,
SigninginFacebook: modulememberSigninFacebook.SigninginFacebook,

}