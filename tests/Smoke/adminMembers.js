var modulecreateSurvey=require('./createSurvey.js')
//Navigate to members tab
var memberTab = function(driver)
{
  driver
.useXpath()
//Navigate to Members Tab
.click("//ul[@class='navbar-nav']/li[3]")
.pause(2000)
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
//Filter by Name 
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[3]")
.pause(2000)
//Name-1
.click("(//div[@class='ng-scope'])[3]/input")
.pause(2000)
.setValue("(//div[@class='ng-scope'])[3]/input",driver.globals.userNames.memberFirstName)
.pause(2000)
.click("//li[@class='mf-option-button']/button")
.pause(2000)
//Add another row for Email
.click("//button[@class='mf-option-add']")
.pause(2000)
// Select a group from dropdown - email
.click("(//button[@class='dropdown-select-toggle filter-option'])[2]")
.pause(2000)
.click("(//li[@rel='3'])[2]/a")
.pause(2000)
//Enter Email
.click("//input[@class='filter-field ng-pristine ng-valid']")
.pause(2000)
.setValue("//input[@class='filter-field ng-pristine ng-valid']",driver.globals.userNames.memberEmail)
.pause(2000)
//Click Search
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.execute('scrollTo(0,5000)')
//Remove a row from filters
.click("(//button[@class='mf-option-remove'])[2]")
.pause(2000)
//filter by Gender
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberAgeimage.png')
.execute('scrollTo(0,5000)')
//filter by Race
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
.execute('scrollTo(0,5000)')
//filter by Race - Hispanic (yes)
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





}


module.exports={

signIn: modulecreateSurvey.signIn,
memberTab: memberTab

}