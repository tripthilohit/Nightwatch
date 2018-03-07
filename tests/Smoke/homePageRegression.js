var downloadImages = function(driver)
{
    driver
    .url("https://burst.shopify.com/")
    .pause(3000)
    .waitForElementVisible('body', 1000)
    .useXpath()
    //download Desktop Background Image
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "desktop background")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("//img[@alt='pink hearts background']")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@class='marketing-button marketing-button--block js-open-contextual-subscribe-modal-on-third']")
    .pause(4000)
    //download Desktop Background Image
    .url("https://burst.shopify.com/")
    .pause(2000)
    .setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "mobile background")
    .pause(1000)
    .keys(driver.Keys.ENTER)
    .pause(3000)
    .click("//img[@alt='abstract phone wallpaper']")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@class='marketing-button marketing-button--block js-open-contextual-subscribe-modal-on-third']")
    .pause(4000)
}

var modulecreateSurvey = require('./createSurvey.js')

var homePageTemplate1 = function(driver)
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
	.pause(1000)
	//Login with headline
	.click("//div[@ng-model='home_page_theme.login_with_headline']")
	.pause(1000)
	.setValue("//div[@ng-model='home_page_theme.login_with_headline']","Login with headline")
	//login with headline description
	.click("//textarea[@ng-model='home_page_theme.login_with_description']")
	.pause(1000)
	.setValue("//textarea[@ng-model='home_page_theme.login_with_description']","Login with description Login with description Login with description Login with description ")
	.pause(2000)
	//create account headline
	.click("//div[@ng-model='home_page_theme.create_account_headline']")
	.pause(1000)
	.setValue("//div[@ng-model='home_page_theme.create_account_headline']","create account headline")
	//create account description
	.click("//textarea[@ng-model='home_page_theme.create_account_description']")
	.pause(1000)
	.clearValue("//textarea[@ng-model='home_page_theme.create_account_description']")
	.setValue("//textarea[@ng-model='home_page_theme.create_account_description']","create account description create account description create account description create account description")
	.pause(1000)
	//create account with headline
	.click("//div[@ng-model='home_page_theme.create_account_with_headline']")
	.pause(1000)
	.setValue("//div[@ng-model='home_page_theme.create_account_with_headline']","create account with headline")
	//create account  with description
	.click("//textarea[@ng-model='home_page_theme.create_account_with_description']")
	.pause(1000)
	.clearValue("//textarea[@ng-model='home_page_theme.create_account_with_description']")
	.setValue("//textarea[@ng-model='home_page_theme.create_account_with_description']","create account with description create account with description create account with description ")
	.pause(1000)
	//Upload Desktop Background Image
	.setValue("//input[@class='background-field']",driver.globals.userNames.path + "pink-hearts-background_925x.jpg")
	.pause(4000)
	//Upload Desktop Mobile Background Image
	.setValue("//input[@class='mobile_background-field']",driver.globals.userNames.path + "abstract-phone-wallpaper_925x.jpg")
	.pause(4000)
	//change the font style
	.click("//label[@for='radio_basic_helvetica']/span")
	.pause(1000)
	//set Footer Link Text color
	.click("//input[@ng-model='home_page_theme.style_bar_footer_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_bar_footer_color']")
	.setValue("//input[@ng-model='home_page_theme.style_bar_footer_color']","#484848")
	.pause(1000)
	//set Footer background color
	.click("//input[@ng-model='home_page_theme.style_footer_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_footer_color']")
	.pause(1000)
	//set other link text color
	.click("//input[@ng-model='home_page_theme.style_bar_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_bar_color']")
	.setValue("//input[@ng-model='home_page_theme.style_bar_color']","#484848")
	.pause(1000)
	//set login button color
	.click("//input[@ng-model='home_page_theme.style_main_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_main_color']")
	.setValue("//input[@ng-model='home_page_theme.style_main_color']","#0068b2")
	.pause(1000)
	//set login button text color
	.click("//input[@ng-model='home_page_theme.style_buttons_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_buttons_color']")
	.setValue("//input[@ng-model='home_page_theme.style_buttons_color']","#ffffff")
	.pause(1000)
	//set splash headline or description of the text color
	.click("//input[@ng-model='home_page_theme.style_text_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_text_color']")
	.setValue("//input[@ng-model='home_page_theme.style_text_color']","#0068b2")
	.pause(1000)
	//set splash box color
	.click("//input[@ng-model='home_page_theme.style_splash_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_splash_color']")
	.setValue("//input[@ng-model='home_page_theme.style_splash_color']","#ffffff")
	.pause(1000)
	//set splash background color
	.click("//input[@ng-model='home_page_theme.style_background_color']")
	.pause(1000)
	.clearValue("//input[@ng-model='home_page_theme.style_background_color']")
	.setValue("//input[@ng-model='home_page_theme.style_background_color']","#ffffff")
	.pause(1000)
	//save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate1AdminSettings1.png')
    .pause(2000)
    .execute('scrollTo(4000,4000)')
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageTemplate1AdminSettings1.png')
    .pause(2000)

}
var verifyMemberSideT1 = function(driver)
{
	driver
	.useXpath()
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageTemplate1SplashHeadline.png')
    .pause(2000)
    .click("(//a[@class='btn login themed-button'])[2]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageLoginHeadlineDescription.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageLoginWithHeadlineHeadline.png')
    .pause(2000)
    .click("(//a[contains(text(),'Create an Account')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageCreateAccountHeadlineHeadline.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprimt+'/homePageCreateAccountWithHeadlineHeadline.png')
    .pause(2000)

}

var homePageTemplate2 = function(driver)
{
	driver
	.useXpath()
	.
}

module.exports =
{
	//downloadImages:downloadImages,
	//signInAdmin: modulecreateSurvey.signIn,
//homePageTemplate1: homePageTemplate1,
//verifyMemberSideT1: verifyMemberSide,
homePageTemplate2: homePageTemplate2,
verifyMemberSideT2: verifyMemberSideT2

}