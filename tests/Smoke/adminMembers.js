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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberRaceimage.png')
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
//filter by Marital Status
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberMarriedimage.png')
.execute('scrollTo(0,5000)')
//filter by Children
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberChildrenimage.png')
.execute('scrollTo(0,5000)')
//filter by Household income
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberIncomeimage.png')
.execute('scrollTo(0,5000)')
//filter by Zipcode
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberZipcodeimage.png')
.execute('scrollTo(0,5000)')
//filter by State
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberStateimage.png')
.execute('scrollTo(0,5000)')
//filter by Country
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
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminMemberCountryimage.png')
.execute('scrollTo(0,5000)')


}


module.exports={

signIn: modulecreateSurvey.signIn,
memberTab: memberTab

}
