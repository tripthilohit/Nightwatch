var loginFlikr = function(driver)
{
    driver
    .url("https://www.flickr.com")
    .pause(3000)
    .waitForElementVisible('body', 1000)
    .windowMaximize("current")
    .useXpath()
    //click login
    .click("//a[@data-track='gnSignin']")
    .pause(2000)
    //add username
    .click("//input[@name='username']")
    .setValue("//input[@name='username']",'tripthi.shetty@socialmedialink.com')
    .click("//input[@id='login-signin']")
    .pause(1000)
    //add password
    .click("//input[@id='login-passwd']")
    .setValue("//input[@id='login-passwd']", 'general1234')
    //click submit
    .click("//button[@id='login-signin']")
    .pause(2000)
    //click you
    .click("//a[@class='gn-title you']")
    .pause(2000)
    //click albums
    .click("(//a[contains(text(),'Albums')])[3]")
    .pause(2000)
    //click album nightwatchScript
    .click("//div[@data-albumid='72157667151238758']")
    .pause(2000)
}
var activityBadgeDownload = function(driver)
{   driver
    .useXpath()
    //download activity badge file name: 26178156097_45d2e82dc7_o.jpg
    .click("//a[@aria-label='activityBadge by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var surveyBadgeDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41048785701_18c40b237f_o.jpg
    .click("//a[@aria-label='surveyBadge by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}

var memberFooterDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41048785571_f5607df05c_o.gif
    .click("//a[@aria-label='memberFooter by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var faviconDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41048785521_3ea7cf7e5f_o.png
    .click("//a[@aria-label='favicon by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var adminAccountLogoDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41048785471_78a1712ced_o.png
    .click("//a[@aria-label='adminAccountLogo by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var memberThemeDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41048785611_28841c877f_o.jpg
    .click("//a[@aria-label='memberTheme by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var memberLoginLogoDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 27177269248_175d86e6f2_o.png
    .click("//a[@aria-label='memberLoginLogo by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var memberAccountLogoDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 27177269168_38479996c7_o.png
    .click("//a[@aria-label='memberAccountLogo by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var topicImageDownload = function(driver)
{   driver
    .useXpath()
    //download  file name: 26178156247_498e856204_o.jpg
    .click("//a[@aria-label='topicImage by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var brandConnectMemberImageDownload = function(driver)
{   driver
    .useXpath()
    //download  file name: 26178156117_66bec49a72_o.jpg
    .click("//a[@aria-label='brandConnectMemberImage by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var pinterestDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 27177269308_6c5e111e1a_o.jpg
    .click("//a[@aria-label='pinterest by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var desktopBackgroundDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41056929091_a713d349c0_o.png
    .click("//a[@aria-label='desktopBackground by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
var mobileBackgroundDownload = function(driver)
{   driver
    .useXpath()
    //download file name: 41056931631_537265ebe1_o.png
    .click("//a[@aria-label='mobileBackground by YOU!']")  
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click original 
    .click("//li[@class='Original']/a")
    .pause(2000)
    //click download
    .click("//i[@class='ui-icon-download']")
    .pause(2000)
    //click back to album
    .url("https://www.flickr.com/photos/156280374@N06/sets/72157667151238758")
    .pause(1000)
}
module.exports={
loginFlikr: loginFlikr,
activityBadgeDownload: activityBadgeDownload,
surveyBadgeDownload: surveyBadgeDownload,
memberFooterDownload: memberFooterDownload,
faviconDownload: faviconDownload,
adminAccountLogoDownload: adminAccountLogoDownload,
memberThemeDownload: memberThemeDownload,
memberLoginLogoDownload: memberLoginLogoDownload,
memberAccountLogoDownload: memberAccountLogoDownload,
topicImageDownload: topicImageDownload,
brandConnectMemberImageDownload: brandConnectMemberImageDownload,
pinterestDownload: pinterestDownload,
desktopBackgroundDownload:desktopBackgroundDownload,
mobileBackgroundDownload:mobileBackgroundDownload
}