var moduleAdminSignin = require('./createSurvey.js')
var moduleDownloadImages = require('./downloadImages.js')

var dashboardSettings = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click dashboard link
	.click("//a[@href='/accounts/dashboard']")
	.pause(3000)
	//click edit
	.click("//a[@ng-click='edit()']")
	//edit activities heading
	.click("//input[@ng-model='dashboard_theme.activities_heading']")
	.clearValue("//input[@ng-model='dashboard_theme.activities_heading']")
	.setValue("//input[@ng-model='dashboard_theme.activities_heading']","New for you")
	.pause(1000)
	//edit content feed heading
	.click("//input[@ng-model='dashboard_theme.content_heading']")
	.setValue("//input[@ng-model='dashboard_theme.content_heading']","e")
	.pause(1000)
	//edit quick offer action button
	.click("//input[@ng-model='dashboard_theme.quick_offer_action_text']")
	.clearValue("//input[@ng-model='dashboard_theme.quick_offer_action_text']")
	.setValue("//input[@ng-model='dashboard_theme.quick_offer_action_text']","Check it out")
	.pause(2000)
	//enable hero slides
	.click("//input[@class='switch-input ng-pristine ng-valid']")
	.pause(2000)
	//click to add slides
	.click("//button[@class='btn btn-info btn-lg btn-block']")
	.pause(1000)
	//add hero slide 1
	//add title
	.click("(//input[@ng-model='slide.title'])[1]")
	.clearValue("(//input[@ng-model='slide.title'])[1]")
	.setValue("(//input[@ng-model='slide.title'])[1]","Hero slide title 1")
	//add description
	.click("(//input[@ng-model='slide.description'])[1]")
	.clearValue("(//input[@ng-model='slide.description'])[1]")
	.setValue("(//input[@ng-model='slide.description'])[1]","Hero slide 1 description")
	//add cta title
	.click("(//input[@ng-model='slide.action_title'])[1]")
	.clearValue("(//input[@ng-model='slide.action_title'])[1]")
	.setValue("(//input[@ng-model='slide.action_title'])[1]","CTA title 1")
	//add cta url
	.click("(//input[@ng-model='slide.action_url'])[1]")
	.clearValue("(//input[@ng-model='slide.action_url'])[1]")
	.setValue("(//input[@ng-model='slide.action_url'])[1]","https://www.snuggle.com/")
	.pause(1000)
	//Upload hero Image 1
	.setValue("(//input[@class='hero_image-field'])[1]",driver.globals.userNames.path + "39404802170_a4b44e9066_o.jpg")
	.pause(4000)
	//click to add slides
	.click("//button[@class='btn btn-info btn-lg btn-block']")
	.pause(1000)
	//add hero slide 2
	//add title
	.click("(//input[@ng-model='slide.title'])[2]")
	.clearValue("(//input[@ng-model='slide.title'])[2]")
	.setValue("(//input[@ng-model='slide.title'])[2]","Hero slide title 2")
	//add description
	.click("(//input[@ng-model='slide.description'])[2]")
	.clearValue("(//input[@ng-model='slide.description'])[2]")
	.setValue("(//input[@ng-model='slide.description'])[2]","Hero slide 2 description")
	//add cta title
	.click("(//input[@ng-model='slide.action_title'])[2]")
	.clearValue("(//input[@ng-model='slide.action_title'])[2]")
	.setValue("(//input[@ng-model='slide.action_title'])[2]","CTA title 2")
	//add cta url
	.click("(//input[@ng-model='slide.action_url'])[2]")
	.clearValue("(//input[@ng-model='slide.action_url'])[2]")
	.setValue("(//input[@ng-model='slide.action_url'])[2]","https://www.snuggle.com/")
	.pause(1000)
	//Upload hero Image 1
	.setValue("(//input[@class='hero_image-field'])[2]",driver.globals.userNames.path + "40318479195_b29a7160c8_o.jpg")
	.pause(4000)
	//click group Male 
	.click("(//span[contains(text(),'Male')])[4]")
	.pause(1000)
	//save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
	//Take screen shots
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/dashboardSettings1.png')
    .pause(2000)
    .execute('scrollTo(3000,3000)')
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/dashboardSettings2.png')
    .pause(2000)
	.end()
}

module.exports={
loginFlikr: moduleDownloadImages.loginFlikr,
heroImage1: moduleDownloadImages.heroImage1Download,
heroImage2: moduleDownloadImages.heroImage2Download,
adminSignin : moduleAdminSignin.signIn,
dashboardSettings : dashboardSettings

}