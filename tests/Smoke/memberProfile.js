var downloadImages = function(driver)
{
    driver
.url("https://burst.shopify.com/")
.pause(3000)
.waitForElementVisible('body', 1000)
.useXpath()
//download activity badge
.pause(2000)
.setValue("//input[@class='marketing-input search-form__input  search-form__input--jumbo']", "beach")
.pause(1000)
.keys(driver.Keys.ENTER)
.pause(3000)
.click("//img[@alt='blue beach waves']")
.pause(2000)
.click("//label[@for='photo_download_quality_standard']")
.pause(2000)
.click("//button[@class='marketing-button marketing-button--block js-open-contextual-subscribe-modal-on-third']")
.pause(4000)
}


var modulememberSigninEmail = require('./memberSigninEmail.js')
//Navigate to member profile from Dashboard
var memberProfilePage = function(driver)
{
  driver
.useXpath()
.click("//div[@class='col-md-3 header-profile']/img[1]")
.pause(2000)
.window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
.pause(2000)
.click("//div[@class='desktop-profile']/ul/li[1]/a")
.pause(2000)
.execute('scrollTo(200,0)')
.pause(2000)
}

var generalInfo = function(driver)
{
  driver

// Upload pic using FB profile( make sure Single click sharing app is been deleted from you FB profile)
.click("(//a[@class='btn btn-facebook-connect btn-md2 btn-block'])[1]")
.pause(2000)
.click("//input[@id='email']")
.pause(2000)
.setValue("//input[@id='email']", driver.globals.userNames.facebookEmail)
.pause(2000)
.click("//input[@id='pass']")
.pause(2000)
.setValue("//input[@id='pass']", driver.globals.userNames.facebookPass)
.pause(2000)
.click("//button[@value='1']")
.pause(4000)
.keys(driver.Keys.ENTER)
.pause(2000)
.keys(driver.Keys.ENTER)
.pause(2000)
.keys(driver.Keys.ENTER)
.pause(4000)
.execute('scrollTo(200,0)')
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileimage.png')
.pause(2000)
// Upload a profile pic using Twitter profile( pls make sure Single click sharing app is revoked on twitter profile)
.click("(//a[@class='btn btn-twitter-connect btn-md2 btn-block'])[1]")
.pause(2000)
.click("//input[@id='username_or_email']")
.pause(2000)
.setValue("//input[@id='username_or_email']", driver.globals.userNames.twitterEmail)
.pause(2000)
.click("//input[@id='password']")
.pause(2000)
.setValue("//input[@id='password']", driver.globals.userNames.twitterPass)
.pause(2000)
.click("//input[@value='Sign In']")
.pause(4000)
.execute('scrollTo(200,0)')
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileimage1.png')
.pause(2000)
//upload photo using "Browse" button
.execute('scrollTo(200,0)')
.setValue("//div[@class='btn btn-color profile-upload-btn']/input[1]",driver.globals.userNames.path + "blue-beach-waves_925x.jpg")
.pause(3000) 
//About fie
.click("//textarea[@id='member_about']")
.pause(2000)
.setValue("//textarea[@id='member_about']", 'Blogger, Mother, wife and a homemaker')
.pause(2000)
.click("(//input[@class='form-control form-control-lg'])[1]")
.pause(2000)
// Add website
.setValue("(//input[@class='form-control form-control-lg'])[1]", 'https://www.socialmedialink.com/')
.pause(2000)
.keys(driver.Keys.ENTER)
.pause(2000)
//save changes
.click("(//input[@name='commit'])[1]")
.pause(2000)
// Add first name
.click("(//input[@class='form-control form-control-lg'])[2]")
.pause(2000)
.clearValue("(//input[@class='form-control form-control-lg'])[2]")
.pause(2000)
.setValue("(//input[@class='form-control form-control-lg'])[2]",driver.globals.userNames.memberFirstName)
.pause(2000)
//Add last name
.click("(//input[@class='form-control form-control-lg'])[3]")
.pause(2000)
.clearValue("(//input[@class='form-control form-control-lg'])[3]")
.pause(2000)
.setValue("(//input[@class='form-control form-control-lg'])[3]",driver.globals.userNames.memberLastName)
.pause(2000)
//save changes
.click("(//input[@name='commit'])[1]")
.pause(2000)
//connect to instagram
.click("//a[@class='btn btn-instagram-connect btn-md2 btn-block']")
.pause(2000)
.click("//input[@id='id_username']")
.pause(2000)
.setValue("//input[@id='id_username']",driver.globals.userNames.instagramUserName)
.pause(2000)
.click("//input[@id='id_password']")
.pause(2000)
.clearValue("//input[@id='id_password']")
.pause(2000)
.setValue("//input[@id='id_password']",driver.globals.userNames.instagramPass)
.pause(2000)
.click("//input[@type='submit']")
.pause(2000)
.click("//input[@value='Authorize']")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileimage2.png')
.pause(2000)
//Add pinterest username
.click("(//input[@class='form-control form-control-lg'])[4]")
.pause(2000)
.setValue("(//input[@class='form-control form-control-lg'])[4]",driver.globals.userNames.pinterestUserName)
.pause(2000)
//change DOB
.click("(//button[@class='btn-link js-change'])[1]")
.pause(2000)
.click("(//div[@class='col-sm-4'][1])/select")
.pause(2000)
.click("(//div[@class='col-sm-4'][1])/select/option[4]")
.pause(2000)
.click("(//div[@class='col-sm-4'][2])/select")
.pause(2000)
.click("(//div[@class='col-sm-4'][2])/select/option[20]")
.pause(2000)
.click("(//div[@class='col-sm-4'][3])/select")
.pause(2000)
.click("(//div[@class='col-sm-4'][3])/select/option[30]")
.pause(2000)
.click("(//button[@class='btn-link js-change'])[2]")
.pause(2000)
.click("(//label[@class='control-radio'])[3]")
.pause(2000)
//save changes to General info
.click("(//input[@name='commit'])[1]")
.pause(2000)
}

var personalInfo = function(driver)
{
  driver
.useXpath()
// Origin- decent 
.click("(//button[@class='btn-link js-change'])[3]")
.pause(2000)
.click("(//div[@class='form-group'])[15]")
.pause(2000)
//Race/Ethnicity - Asian or Pacific Islander
.click("(//div[@class='form-group']/select/option[@value='yes'])")
.pause(2000)
.click("(//button[@class='btn-link js-change'])[4]")
.pause(2000)
// Marital Status - married
.click("(//div[@class='limited-changes-field-edit ng-scope'])[4]/p[2]/label")
.pause(2000)
.click("(//div[@class='form-group'])[17]/p[1]/label[1]")
.pause(2000)
.click("(//div[@class='form-group'])[18]/p[1]/label[1]")
.pause(2000)
// Have Children- yes
.click("(//div[@class='form-group'])[19]/select")
.pause(2000)
.click("(//div[@class='form-group'])[19]/select/option[4]")
.pause(2000)
.click("(//div[@class='form-group'])[20]/div[2]/div/div[1]/select/option[3]")
.pause(2000)
.click("(//div[@class='form-group'])[20]/div[2]/div/div[2]/select/option[7]")
.pause(2000)
.click("(//div[@class='form-group'])[20]/div[3]/div/div[1]/select/option[6]")
.pause(2000)
.click("(//div[@class='form-group'])[20]/div[3]/div/div[2]/select/option[4]")
.pause(2000)
//Have a Blog - yes
.click("(//div[@class='form-group'])[21]/p[1]/label")
.pause(2000)
.click("(//div[@class='form-group'])[22]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[22]/input",'https://www.socialmedialink.com/')
.pause(2000)
.click("(//div[@class='form-group'])[23]/select/option[10]")
.pause(2000)
.click("(//div[@class='form-group'])[24]/select/option[5]")
.pause(2000)
//Household income
.click("(//div[@class='form-group'])[25]/select/option[7]")
.pause(2000)
// Save personal info
.click("(//input[@name='commit'])[2]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfilePersonalInfo.png')
.pause(2000)

}

var shippingInfoCa = function(driver)
{
  driver
.useXpath()
//Select Country - Canada
.click("//div[@class='form-group js-country']/select/option[2]")
.pause(2000)
//Address line -1 for Canada
.click("(//div[@class='form-group'])[26]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[26]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[26]/input",driver.globals.userNames.caAddressLine1)
.pause(2000)
//Address Line2- Canada
.click("(//div[@class='form-group'])[28]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[28]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[28]/input",driver.globals.userNames.caCity)
.pause(2000)
//city -Canada
.click("(//div[@class='form-group'])[27]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[27]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[27]/input",driver.globals.userNames.caAddressLine2)
.pause(2000)
//Province
.click("//div[@class='form-group js-state']/select/option[9]")
.pause(2000)
//postal code
.click("//div[@class='form-group js-zip-code']/input")
.pause(2000)
.clearValue("//div[@class='form-group js-zip-code']/input")
.pause(2000)
.setValue("//div[@class='form-group js-zip-code']/input",driver.globals.userNames.postalCode)
.pause(2000)
//Save Shipping Address
.click("(//input[@name='commit'])[3]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileCaAddress.png')
.pause(2000)
}

var shippingInfoUs = function(driver)
{
  driver
.useXpath()
//Select Country- USA
.click("//div[@class='form-group js-country']/select/option[1]")
.pause(2000)
// Address line-1
.click("(//div[@class='form-group'])[26]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[26]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[26]/input",driver.globals.userNames.usAddressLine1)
.pause(2000)
//Address Line2- USA
.click("(//div[@class='form-group'])[28]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[28]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[28]/input",driver.globals.userNames.usCity)
.pause(2000)
//city -USA
.click("(//div[@class='form-group'])[27]/input")
.pause(2000)
.clearValue("(//div[@class='form-group'])[27]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[27]/input",driver.globals.userNames.usAddressLine2)
.pause(2000)
//state
.click("//div[@class='form-group js-state']/select/option[37]")
.pause(2000)
//zipcode
.click("//div[@class='form-group js-zip-code']/input")
.pause(2000)
.clearValue("//div[@class='form-group js-zip-code']/input")
.pause(2000)
.setValue("//div[@class='form-group js-zip-code']/input",driver.globals.userNames.zipCode)
.pause(2000)
//save shipping address
.click("(//input[@name='commit'])[3]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileUsAddress.png')
.pause(2000)

}

var memberHistory = function(driver)
{
  driver
.useXpath()
.click("//div[@class='profile-bar hidden-xs affix']/ul/li[6]/a")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileHistory.png')
.pause(2000)

}

var emailAndPassword = function(driver)
{
  driver
.useXpath()
.click("(//div[@class='form-group'])[30]/input")
.pause(2000)
.setValue("(//div[@class='form-group'])[30]/input",driver.globals.userNames.memberNewEmail)
.pause(2000)
//Save new email
.click("(//input[@name='commit'])[4]")
.pause(2000)
//logout 
.click("//a[@class='header-logout']")
.pause(2000)
//Yopmail-confirm account
.url("http://yopmail.com")
.pause(3000)
.click("//input[@id='login']")
.pause(1000)
.setValue("//input[@id='login']", driver.globals.userNames.memberEmail)
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
.execute('scrollTo(0,2000)')
.pause(2000)
.click("(//button[@class='btn login themed-button'])[6]")
.pause(4000)
.click("//ul[@class='header-menu']/li[1]/a[1]")
.pause(2000)
}

//Navigate to member Profile page - by calling the module under module exports

var memberChangePassword = function(driver)
{
  driver
//Enter current password
.click("//input[@name='member[current_password]']")
.pause(2000)
.setValue("//input[@name='member[current_password]']",driver.globals.userNames.memberPassword)
.pause(2000)
// Enter new password
.click("//input[@name='member[password]']")
.pause(2000)
.clearValue("//input[@name='member[password]']")
.pause(2000)
.setValue("//input[@name='member[password]']",driver.globals.userNames.memberNewPassword)
.pause(2000)
//Confirm new password
.click("//input[@name='member[password_confirmation]']")
.pause(2000)
.clearValue("//input[@name='member[password_confirmation]']")
.pause(2000)
.setValue("//input[@name='member[password_confirmation]']",driver.globals.userNames.memberNewPassword)
.pause(2000)
//Save new password
.click("(//input[@name='commit'])[4]")
.pause(2000)
//logout 
.click("//a[@class='header-logout']")
.pause(2000)
}

var memberSigninNewPassword = function(driver)
{
  driver
.url(driver.globals.userNames.memberURL)
.windowMaximize("current")
.useXpath()
.click("(//a[contains(text(), 'Login')])[2]")
.pause(1000)
.click("(//div[contains(text(), 'Email')])[6]")
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
.pause(1000)
.setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmail)
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/div[2]/input")
.pause(1000)
.setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/input",driver.globals.userNames.memberNewPassword)
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/button")
.pause(4000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileNewMemberConfirm.png')
.pause(2000)
}

var deactivateAccount = function(driver)
{
  driver
.useXpath()
.click("//c-deactivate-prompt[@class='ng-isolate-scope']")
.pause(2000)
.window_handles(function(result) {
 var handle = result.value[1];
 this.switchWindow(handle);})
.pause(2000)
.click("(//div[@class='ng-scope'])[18]/label")
.pause(2000)
.click("(//div[@class='modal-footer'])[2]/a")
.pause(2000)
.window_handles(function(result) {
 var handle = result.value[1];
 this.switchWindow(handle);})
.click("(//div[@class='modal-footer'])[2]/a")
.pause(2000)
//signin to check the member is deactivated
.click("(//a[contains(text(), 'Login')])[2]")
.pause(1000)
.click("(//div[contains(text(), 'Email')])[6]")
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
.pause(1000)
.setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.memberEmail)
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/div[2]/input")
.pause(1000)
.setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/input", driver.globals.userNames.memberNewPassword)
.pause(1000)
.click("//div[@class='desktop-container ng-scope']/div/form/button")
.pause(4000)
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileDeactivatedMember.png')
.pause(2000)

}


var modulecreateSurvey=require('./createSurvey.js')

var adminMember = function(driver)
{
  driver
.useXpath()
.click("//ul[@class='navbar-nav']/li[3]")
.pause(2000)
.click("//div[@class='dropdown-select ng-pristine ng-valid']")
.pause(2000)
.click("//ul[@class='dropdown-select-menu']/li[4]")
.pause(2000)
.click("//div[@class='ng-scope']/input")
.pause(2000)
.setValue("//div[@class='ng-scope']/input", driver.globals.userNames.memberEmail)
.pause(2000)
.click("//li[@class='mf-option-button']/button")
.pause(2000)
.click("//tr[@class='row-click test-members-item-0 table-members-inactive']/td[2]/a")
.pause(2000)
.click("//div[@class='tabs-buttons']/button")
.pause(2000)
.window_handles(function(result) {
 var handle = result.value[1];
 this.switchWindow(handle);})
.pause(2000)
.click("//nav[@class='alertify-buttons']/button[1]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyadminActivatedMember1.png')
.pause(2000)

}

// Signup member 2

var SigningEmail2= function(driver)
  {
    driver
    .url(driver.globals.userNames.memberURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 3000)
    .useXpath()
    .click("(//a[contains(text(), 'Create Account')])[2]")
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/div[1]/a[1]/div")
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[1]/input")
    .pause(2000)
    .setValue('//div[@class="desktop-container ng-scope"]/div/form/div[1]/input', driver.globals.userNames.member2Email)
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[2]/div/input[1]")
    .pause(2000)
    .setValue("//div[@class='desktop-container ng-scope']/div/form/div[2]/div/input[1]", driver.globals.userNames.member2Password)
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/form/div[3]/div/div/div/input")
    .pause(2000)
    .click("//div[@class='desktop-container ng-scope']/div/button")
    .pause(4000)
    .url("http://yopmail.com")
    .pause(3000)
    .click("//input[@id='login']")
    .pause(2000)
    .setValue("//input[@id='login']", driver.globals.userNames.member2Email)
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
    .setValue("(//form[@id='edit_member'])[6]/div[2]/input", driver.globals.userNames.member2FirstName)
    .pause(2000)
    .click("(//form[@id='edit_member'])[6]/div[3]/input")
    .pause(1000)
    //add last name
    .setValue("(//form[@id='edit_member'])[6]/div[3]/input", driver.globals.userNames.member2LastName)
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
    //Clcik on Dashboard button
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
    .click("//div[@class='text-center']/a")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/registrationSignupSuccessfulViaEmail.png')
    .pause(2000)
  }

// Call member profile page in module exports.
var connectFbAndTw = function(driver)
  {
    driver
//connect to Facebook
.click("(//a[@class='btn btn-facebook-connect btn-md2 btn-block'])[2]")
.pause(2000)
.click("//input[@id='email']")
.pause(2000)
.setValue("//input[@id='email']", driver.globals.userNames.facebookEmail2)
.pause(2000)
.click("//input[@id='pass']")
.pause(2000)
.setValue("//input[@id='pass']", driver.globals.userNames.facebookPass2)
.pause(2000)
.click("//button[@value='1']")
.pause(4000)
.keys(driver.Keys.ENTER)
.pause(3000)
.keys(driver.Keys.ENTER)
.pause(3000)
.keys(driver.Keys.ENTER)
.pause(4000)
.execute('scrollTo(200,0)')
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileConnectFbimage.png')
.pause(2000)
//connect to Twitter
.click("(//a[@class='btn btn-twitter-connect btn-md2 btn-block'])[2]")
.pause(2000)
.click("//input[@id='username_or_email']")
.pause(2000)
.setValue("//input[@id='username_or_email']", driver.globals.userNames.twitterEmail2)
.pause(2000)
.click("//input[@id='password']")
.pause(2000)
.setValue("//input[@id='password']", driver.globals.userNames.twitterPass2)
.pause(2000)
.click("//input[@value='Sign In']")
.pause(4000)
.execute('scrollTo(200,0)')
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyMemberProfileConnectTwimage1.png')
.pause(2000)
.click("//div[@class='text-center']/a")
.pause(2000)
}

module.exports={
downloadImages: downloadImages,
//signinEmail: modulememberSigninEmail.signinEmail, 
//memberProfilePage: memberProfilePage,
//generalInfo: generalInfo,
//personalInfo: personalInfo,
//shippingInfoCa: shippingInfoCa,
//shippingInfoUs: shippingInfoUs,
//memberHistory:memberHistory,
//memberChangePassword: memberChangePassword,
//memberSigninNewPassword: memberSigninNewPassword,
//memberProfilePage1: memberProfilePage,
//deactivateAccount: deactivateAccount,
//signIn: modulecreateSurvey.signIn,
//adminMember: adminMember,
//signinEmail: modulememberSigninEmail.signinEmail, 
//memberProfilePage: memberProfilePage,
//emailAndPassword: emailAndPassword,
SigningEmail2: SigningEmail2,
memberProfilePage2: memberProfilePage,
connectFbAndTw: connectFbAndTw,
}