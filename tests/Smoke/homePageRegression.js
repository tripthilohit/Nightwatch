var moduledownloadImages = require('./downloadImages.js')

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
	.setValue("//input[@class='background-field']",driver.globals.userNames.path + "41056929091_a713d349c0_o.png")
	.pause(4000)
	//Upload Desktop Mobile Background Image
	.setValue("//input[@class='mobile_background-field']",driver.globals.userNames.path + "41056931631_537265ebe1_o.png")
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
    //close notifications
    .click("(//i[@class='material-icons notification-cancel'])[1]")
    .pause(500)
    .click("(//i[@class='material-icons notification-cancel'])[2]")
    .pause(500)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyHideMobileSplashHeadline.png')
    .pause(2000)

}

var lcnAltIDAdminSettings = function(driver)
{
driver
	.useXpath()
	//click administration
	.click("(//a[@class='test-nav-config'])[2]")
	.pause(3000)
	//click home page link
	.click("//a[@href='/accounts/home_page']")
	.pause(3000)
	//scroll down
	.execute('scrollTo(2000,2000)')
	.pause(2000)
	//enable lcn
	.click("//input[@id='home_page_theme.require_loyalty_card_number']")
	.pause(1000)
	//enable alt id
	.click("//input[@id='home_page_theme.require_alt_id']")
	.pause(1000)
	//disable FB login
	.click("//input[@id='home_page_theme.allow_facebook_login']")
	.pause(1000)
	//disable TW login
	.click("//input[@id='home_page_theme.allow_twitter_login']")
	.pause(1000)
	//save
	.execute('scrollTo(0,0)')
	.pause(2000)
	.click("//a[@class='btn btn-default']")
	.pause(4000)
}
var previewQuickOfferDisableFbTw = function(driver)
{
	driver
	.useXpath()
	//click mission hubs link
	.click("//a[@class='test-nav-hubs']")
	.pause(2000)
	//click quick offer mission
	.click("//a[contains(text(),'Quick offer')]")
	.pause(2000)
	//click the survey and activity page link
	.click("//a[@class=' test-hub-nav-structure']")
	.pause(1000)
	//click to go to quick offer page
	.click("//a[@class='rowclick test-hub-structure-item-link ng-binding']")
	.pause(2000)
	//click preview offered
	.click("(//span[@class='translation_missing'])[1]")
	.pause(1000)
	//switch to preview frame
	.window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .pause(4000)
    .click("//div[@class='facebook']/img")
    .pause(1000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/quickOfferPreviewFBVerification.png')
    .pause(2000)
}
var lcnAltIDMemberSignup = function(driver)
{
	driver
	.useXpath()
	//redirect to member side
	.url(driver.globals.userNames.memberURL)
	.pause(2000)
	.click("(//a[@class='btn create-account themed-button'])[2]")
	.pause(1000)
	.click("(//div[@class='button-label'])[6]")
	.pause(1000)
	.click("(//input[@type='email'])[6]")
	.setValue("(//input[@type='email'])[6]","lcnaltid@yopmail.com")
	.click("(//input[@type='password'])[6]")
	.setValue("(//input[@type='password'])[6]","12345678")
	.click("(//input[@id='member_loyalty_card_number'])[6]")
	.setValue("(//input[@id='member_loyalty_card_number'])[6]","123456789012")
	.click("(//input[@id='age_requirement'])[6]")
	.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/lcnAltIDMemberSignupForm.png')
    .pause(2000)
    .click("(//button[@type='submit'])[6]")
    .pause(1000)
    //redirect to yopmail
    .url("http://yopmail.com")
    .pause(3000)
    .click("//input[@id='login']")
    .pause(1000)
    .setValue("//input[@id='login']", "lcnaltid@yopmail.com")
    .pause(5000)
    .click("//input[@class='sbut']")
    .pause(4000)
    .frame('ifmail')
    .pause(2000)
    .click("//td[@class='mcnButtonContent']/a")
    .pause(4000)
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[2]/input")
    .pause(1000)
    //add first name
    .setValue("(//form[@id='edit_member'])[6]/div[2]/input", driver.globals.userNames.memberFirstName)
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[3]/input")
    .pause(1000)
    //add last name
    .setValue("(//form[@id='edit_member'])[6]/div[3]/input", driver.globals.userNames.memberLastName)
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[5]/input")
    .pause(1000)
    //add zipcode
    .setValue("(//form[@id='edit_member'])[6]/div[5]/input", driver.globals.userNames.zipCode)
    .pause(1000)
    //select month
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div/select")
    .pause(1000)
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div/select/option[2]")
    .pause(2000)
    //select day
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div[2]/input")
    .pause(1000)
    .setValue("(//form[@id='edit_member'])[6]/div[6]/div/div[2]/input","15")
    .pause(1000)
    //select year
    .click("(//form[@id='edit_member'])[6]/div[6]/div/div[3]/input")
    .pause(500)
    .setValue("(//form[@id='edit_member'])[6]/div[6]/div/div[3]/input","1991")
    .pause(1000)
    //select gender
    .click("(//form[@id='edit_member'])[6]/div[7]/select")
    .pause(1000)
    .click("(//form[@id='edit_member'])[6]/div[7]/select/option[2]")
    .pause(2000)
    .click("(//button[@class='btn login themed-button'])[6]")
    .pause(4000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/lcnAltIDMemberSignupRegister.png')
    .pause(2000)
    .end()
}

module.exports =
{
	loginFlikr: moduledownloadImages.loginFlikr,
	desktopBackgroundDownload: moduledownloadImages.desktopBackgroundDownload,
	mobileBackgroundDownload: moduledownloadImages.mobileBackgroundDownload,
	signInAdmin: modulecreateSurvey.signIn,
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
verifyBeforeSave: verifyBeforeSave,
signInAdmin5: modulecreateSurvey.signIn,
hideFunctionMobile: hideFunctionMobile,
verifyHideFunctionMobile: verifyHideFunctionMobile,
lcnAltIDAdminSettings: lcnAltIDAdminSettings,
previewQuickOfferDisableFbTw: previewQuickOfferDisableFbTw,
lcnAltIDMemberSignup: lcnAltIDMemberSignup

}