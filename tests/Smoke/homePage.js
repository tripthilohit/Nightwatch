
var modulecreateSurvey = require("./createSurvey.js")

var homepageTemplate1 = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)
	//click 
	.click("(//ul[@class='homepage-layout']/li/label)[1]")
	.pause(1000)
	//add splash headline
	.click("//div[@ng-model='home_page_theme.splash_headline']")
	.pause(1000)
	.setValue("//div[@ng-model='home_page_theme.splash_headline']","Splash Headline")
	.pause(1000)
	//add splash description
	.click("//textarea[@ng-model='home_page_theme.splash_description']")
	.pause(1000)
	.setValue("//textarea[@ng-model='home_page_theme.splash_description']","Splash Description Splash Description Splash Description Splash Description Splash Description")
	.pause(1000)
	.exceute('scrollTo(2000,2000)')
	//add login headline
	.click("//div[@ng-model='home_page_theme.login_headline']")
	.pause(1000)
	.setValue("//div[@ng-model='home_page_theme.login_headline']","Login Headline")
	.pause(1000)
	//add login description
	.click("//textarea[@ng-model='home_page_theme.login_description']")
	.pause(1000)
	.setValue("//textarea[@ng-model='home_page_theme.login_description']","Login description Login description Login description Login description")
	.pause(1000)
	.exceute('scrollTo(3000,3000)')



}


module.exports =
{
	signInAdmin: modulecreateSurvey.signIn,
homepageTemplate1: homepageTemplate1
}