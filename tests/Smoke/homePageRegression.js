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
	//click template 1
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
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate1AdminSettings1.png')
    .pause(2000)
    //logout
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(1000)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)


}
var verifyMemberSideT1 = function(driver)
{
	driver
	.useXpath()
	//redirect to member side
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate1SplashHeadline.png')
    .pause(2000)
    .click("(//a[@class='btn login themed-button'])[2]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageLoginHeadlineDescription.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageLoginWithHeadlineHeadline.png')
    .pause(2000)
    .click("(//a[contains(text(),'Create an Account')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageCreateAccountHeadlineHeadline.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageCreateAccountWithHeadlineHeadline.png')
    .pause(2000)

}

var homePageTemplate2 = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)
	//click template 2
	.click("(//ul[@class='homepage-layout']/li/label)[2]")
	.pause(1000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate2.png')
    .pause(2000)
    //save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
	//logout
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(1000)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)

}
var verifyMemberSideT2 = function(driver)
{
	driver
	.useXpath()
	//redirect to member side
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate2MemberVerify.png')
    .pause(2000)
}
var homePageTemplate3 = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)
	//click template 3
	.click("(//ul[@class='homepage-layout']/li/label)[3]")
	.pause(1000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate3.png')
    .pause(2000)
    //save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
	//logout
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(1000)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
}
var verifyMemberSideT3 = function(driver)
{
	driver
	.useXpath()
	//redirect to member side
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageTemplate3MemberVerify.png')
    .pause(2000)
}
var previewDesktopMobile = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)

	//click template 3
	.click("(//ul[@class='homepage-layout']/li/label)[3]")
	.pause(1000)
	//preview desktop for template 3
	.click("(//a[@class='btn btn-cancel'])[1]")
	.pause(4000)
	//switch from admin to preview desktop screen t3
	.window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .windowMaximize("current")
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageDesktopPreviewT3.png')
    .pause(2000)
    //switch from preview desktop to admin screen t3
    .window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})
    //preview mobile for template 3
	.click("(//a[@class='btn btn-cancel'])[2]")
	.pause(2000)
	//switch from admin to preview mobile screen t3
	.window_handles(function(result) {
    var handle = result.value[2];
    this.switchWindow(handle);})
    .pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageMobilePreviewT3.png')
   	.pause(2000)
   	//switch from preview mobile to admin screen t3
   	.window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})

   	//click template 2
	.click("(//ul[@class='homepage-layout']/li/label)[2]")
	.pause(1000)
   	//preview desktop for template 2
	.click("(//a[@class='btn btn-cancel'])[1]")
	.pause(2000)
	//switch from admin to preview desktop screen t2
	.window_handles(function(result) {
    var handle = result.value[3];
    this.switchWindow(handle);})
    .windowMaximize("current")
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageDesktopPreviewT2.png')
    .pause(2000)
    //switch from preview desktop to admin screen t2
    .window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})
    //preview mobile for template 2
	.click("(//a[@class='btn btn-cancel'])[2]")
	.pause(4000)
	//switch from admin to preview mobile t2
	.window_handles(function(result) {
    var handle = result.value[4];
    this.switchWindow(handle);})
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageMobilePreviewT2.png')
   	.pause(2000)
   	//switch drom preview mobile to admin t2
   	.window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})

   	//click template 1
	.click("(//ul[@class='homepage-layout']/li/label)[1]")
	.pause(1000)
   	//preview desktop for template 1
	.click("(//a[@class='btn btn-cancel'])[1]")
	.pause(4000)
	//switch from admin to preview desktop t1
	.window_handles(function(result) {
    var handle = result.value[5];
    this.switchWindow(handle);})
    .windowMaximize("current")
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageDesktopPreviewT1.png')
    .pause(2000)
    //switch from preview desktop to admin t1
    .window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})
    .pause(2000)
    //preview mobile for template 1
	.click("(//a[@class='btn btn-cancel'])[2]")
	.pause(4000)
	//switch from admin to preview mobile t1
	.window_handles(function(result) {
    var handle = result.value[6];
    this.switchWindow(handle);})
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePageMobilePreviewT1.png')
   	.pause(2000)
   	//switch from preview mobile to admin t1
   	.window_handles(function(result) {
    var handle = result.value[0];
    this.switchWindow(handle);})
    .pause(1000)

   	//logout
    .click("//button[@class='topbar-menu-toggle test-nav-user']")
    .pause(1000)
    .click("//a[@class='test-nav-logout']")
    .pause(2000)
}
var verifyBeforeSave = function(driver)
{
	driver
	.useXpath()
	//redirect to member side
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/homePagePreviewBeforeSave.png')
    .pause(2000)
}
var hideFunctionMobile = function(driver)
{
	driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)
	//click to hide splah headline and description
	.click("//input[@ng-model='home_page_theme.hide_splash_on_mobile_view']")
	.pause(1000)
	//scroll down
	.execute('scrollTo(250,250)')
	//click to hide login headline and description
	.click("//input[@ng-model='home_page_theme.hide_login_on_mobile_view']")
	.pause(1000)
	//click to hide Lohgin with 
	.click("//input[@ng-model='home_page_theme.hide_login_with_on_mobile_view']")
	.pause(1000)
	//click to hide create account headline and description
	.click("//input[@ng-model='home_page_theme.hide_create_account_on_mobile_view']")
	.pause(1000)
	//click to hide create account with
	.click("//input[@ng-model='home_page_theme.hide_create_account_with_on_mobile_view']")
	.pause(1000)
	//save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
}
var verifyHideFunctionMobile = function(driver)
{
	driver
	.useXpath()
	//preview mobile
	.click("(//a[@class='btn btn-cancel'])[2]")
	.pause(2000)
	//switch to preview mobile frame
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/hideMobileSplashHeadline.png')
    .pause(2000)
    .click("(//a[@class='btn login themed-button'])[2]")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/hideMobileLoginHeadlineDescription.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/hideMobileLoginWithHeadlineHeadline.png')
    .pause(2000)
    .click("(//a[contains(text(),'Create an Account')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/hideMobileCreateAccountHeadlineHeadline.png')
    .pause(2000)
    .click("(//div[contains(text(),'Email')])[6]")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/hideMobileCreateAccountWithHeadlineHeadline.png')
    .pause(2000)

}
module.exports =
{
	
	//downloadImages:downloadImages,
	signInAdmin: modulecreateSurvey.signIn,
	/*
homePageTemplate1: homePageTemplate1,
verifyMemberSideT1: verifyMemberSideT1,
signInAdmin2: modulecreateSurvey.signIn,
homePageTemplate2: homePageTemplate2,
verifyMemberSideT2: verifyMemberSideT2,
signInAdmin3: modulecreateSurvey.signIn,
homePageTemplate3: homePageTemplate3,
verifyMemberSideT3: verifyMemberSideT3,
signInAdmin4: modulecreateSurvey.signIn,
previewDesktopMobile: previewDesktopMobile,
verifyBeforeSave: verifyBeforeSave
*/
hideFunctionMobile: hideFunctionMobile,
verifyHideFunctionMobile: verifyHideFunctionMobile
}