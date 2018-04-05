//cc
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
//Call Sigin in to admin application.
//Navigate to Manage members
var deleteMemberAccepted=function(driver)
{

    driver
//click mission hubs
.click("//a[@class='test-nav-hubs']")
.pause(2000)
 //click Activity
.click("//a[@class='rowclick test-hub-link ng-binding'][text()='Manage Members Activity']")
.pause(2000)
//click Manage members
.click("//a[@class='mission-item-manage-link']")
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
//delete member from activity
.click("//tr[@ng-repeat='member in members']/td[1]")
//Provide reason
.window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
.click("//textarea[@id='add_reason_field']")
.pause(2000)
.setValue("//textarea[@id='add_reason_field']", 'Member not interested in the activity')
.pause(2000)
.click("//button[@class='btn btn-default']")
.pause(2000)
}
// Call signin female to check the activity is deleted
// Then login to admin for filter by select criteria
var NavigateManageMembersAct=function(driver)
{
 driver
 //Click Mission Hubs
 .click("//a[@class='test-nav-hubs']")
 .pause(2000)
 //click Activity
.click("//a[@class='rowclick test-hub-link ng-binding'][text()='Manage Members Activity']")
.pause(2000)   
//Click Manage Members link
.click("//a[@class='mission-item-manage-link']")
.pause(2000)
}
//Filter by Criteria -manage Members
var manageMemberFilters=function(driver)
{

 driver
 //Filter by Group
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[2]")
.pause(2000)
// Select a group from dropdown
.click("(//div[@class='dropdown-select ng-pristine ng-valid']/button)[2]")
.pause(2000)
.click("(//ul[@class='dropdown-select-menu'])[2]/li[2]/a")
.pause(2000)
//Click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
.pause(2000)
//Filter by Name
.execute('scrollTo(200,0)')
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[3]")
.pause(2000)
 //Enter Name
.click("//input[@class='filter-field ng-pristine ng-valid']")
.pause(2000)
.setValue("//input[@class='filter-field ng-pristine ng-valid']",driver.globals.userNames.memberFirstName)
.pause(2000)
//Click search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberName.png')
//Filter by Email
.execute('scrollTo(200,0)')
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[4]")
.pause(2000)
 //Enter Email
.click("//input[@class='filter-field ng-pristine ng-valid']")
.pause(2000)
.setValue("//input[@class='filter-field ng-pristine ng-valid']",driver.globals.userNames.memberEmail)
.pause(2000)
//Click search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberEmail.png')
//filter by Gender
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[5]")
.pause(2000)
//Select gender - Male
.click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
.pause(2000)
//click search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
//filter by age
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[6]")
.pause(2000)
//Enter age range
.click("//div[@class='filter-range-item ng-scope']/input[1]")
.pause(2000)
.setValue("//div[@class='filter-range-item ng-scope']/input[1]",driver.globals.userNames.ageRange1)
.pause(3000)
.click("//div[@class='filter-range-item ng-scope']/input[2]")
.pause(3000)
.setValue("//div[@class='filter-range-item ng-scope']/input[2]",driver.globals.userNames.ageRange2)
.pause(2000)
//click search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberAge.png')
.execute('scrollTo(0,5000)')
//filter by Race
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[7]")
.pause(2000)
//Select Race
.click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberRace.png')
.execute('scrollTo(0,5000)')
//filter by Race - Hispanic (yes)
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[8]")
.pause(2000)
//Select-yes
.click("(//label[@class='control-checkbox control-checkbox-primary'])[3]") 
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
//filter by Marital Status
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[9]")
.pause(2000)
//Select- Married
.click("(//label[@class='control-checkbox control-checkbox-primary'])[1]") 
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberMarriedimage.png')
.execute('scrollTo(0,5000)')
//filter by Children
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[10]")
.pause(2000)
//Select- yes
.click("(//label[@class='control-checkbox control-checkbox-primary'])[1]") 
.pause(2000)
//No of children
.click("//input[@ng-model='item.data.value.from']")
.pause(2000)
.setValue("//input[@ng-model='item.data.value.from']",'1')
.pause(3000)
.click("//input[@ng-model='item.data.value.to']")
.pause(2000)
.setValue("//input[@ng-model='item.data.value.to']",'2')
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberChildrenimage.png')
.execute('scrollTo(0,5000)')
//filter by Household income
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[11]")
.pause(2000)
// select range - 50K to 60K
.click("(//label[@class='control-checkbox control-checkbox-primary'])[8]")
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberIncomeimage.png')
.execute('scrollTo(0,5000)')
//filter by Zipcode
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[12]")
.pause(2000)
//Enter Zipcode
.click("//input[@ng-model='row.value']")
.pause(2000)
.setValue("//input[@ng-model='row.value']",driver.globals.userNames.zipCode)
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberZipcodeimage.png')
.execute('scrollTo(0,5000)')
//filter by State
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[13]")
.pause(2000)
//Enter State
.click("//input[@ng-model='item.data.value']")
.pause(2000)
.setValue("//input[@ng-model='item.data.value']",driver.globals.userNames.state)
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberStateimage.png')
.execute('scrollTo(0,5000)')
//filter by Country
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[14]")
.pause(2000)
//Select Country - US
.click("(//label[@class='control-checkbox control-checkbox-primary'])[2]")
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberCountryimage.png')
.execute('scrollTo(0,5000)')
//filter by id
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[15]")
.pause(2000)
//Enter id
.click("//input[@ng-model='item.data.value']")
.pause(2000)
.setValue("//input[@ng-model='item.data.value']",driver.globals.userNames.memberId)
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMembermemberIdimage.png')
.execute('scrollTo(0,5000)')
//filter by Active Status
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[16]")
.pause(2000)
//Select - Active
.click("(//label[@for='checkbox_active_active'])[1]")
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberActiveimage.png')
.execute('scrollTo(0,5000)')
//filter by Member Flags
.execute('scrollTo(200,0)')
.click("//button[@class='dropdown-select-toggle filter-option']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[17]")
.pause(2000)
//Select a flag
.click("(//label[@class='control-checkbox control-checkbox-primary'])[1]")
.pause(2000)
//click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifymanageMemberMemberFlagimage.png')
.execute('scrollTo(0,5000)')
}







module.exports = {
signIn: modulecreateSurvey.signIn,
manageMembersAct: manageMembersAct,
signinFemale:modulebrandConnectRegression.signinFemale,
memberAccepted:  memberAccepted,
SigninginFacebook: modulememberSigninFacebook.SigninginFacebook,
signIn1: modulecreateSurvey.signIn,
deleteMemberAccepted: deleteMemberAccepted,
signinFemaledel:modulebrandConnectRegression.signinFemale,
signIn2: modulecreateSurvey.signIn,
NavigateManageMembersAct: NavigateManageMembersAct,

manageMemberFilters: manageMemberFilters


}