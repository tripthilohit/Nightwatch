var adminlogin =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    //.waitForElementVisible('body', 3000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirmAdmin.png')
    .pause(2000)
    //click Mission Hub
    .click("//a[@class='test-nav-hubs']")
    .pause(2000)
    .assert.containsText("//a[@class='test-nav-hubs']", "Mission Hub")
    //click Activity
<<<<<<< HEAD
    .click("//a[@class='rowclick test-hub-link ng-binding'][text()='Sharing Tools']")
=======
    .click("(//a[@class='rowclick test-hub-link ng-binding'])[2]")
>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
    .pause(2000)

  }

var activityMonitoring = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-monitoring']")
  .pause(2000)
  //set calendar start and end dates
  .click("//input[@ng-model='startDate']")
  .pause(2000)
  .click("//td[@class='active day']")
  //.click("//td[@class='active day']/preceding-sibling::td[@class='day'][2]")
  .pause(2000)
  //click flags postive, negetive and adverse
<<<<<<< HEAD
  .click("(//input[@ng-model='share.admin_feedback'])[1]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[5]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[9]")
  .pause(2000)
  //check for adverse event email
  .url("http://yopmail.com")
  .pause(3000)
  .click("//input[@id='login']")
  .pause(1000)
  .setValue("//input[@id='login']", driver.globals.userNames.adminEmail)
  .pause(5000)
  .click("//input[@class='sbut']")
  .pause(4000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/adverseEventEmail.png')
  .pause(2000)
  //navigate back to activity monitoring page
  .execute(function () {
    window.history.back()
   })
  .pause(2000)
  .execute(function () {
   window.history.back()
   })
  .pause(2000)
  //accept a post
  .click("(//button[@class='btn-accept'])[1]")
  .pause(2000)
  .execute('scrollTo(2000,2000)')
  //decline a post with reason
  .click("(//button[@type='button'])[61]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='reason-list'])[12]/li[2]",2000)
  .moveToElement("(//ul[@class='reason-list'])[12]/li[2]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //search using UIN
  .execute('scrollTo(200,0)')
=======
  //.click("(//input[@ng-model='share.admin_feedback'])[1]")
  //.pause(2000)
  //.click("(//input[@ng-model='share.admin_feedback'])[5]")
  //.pause(2000)
  //.click("(//input[@ng-model='share.admin_feedback'])[9]")
  //.pause(2000)
  //check for adverse event email
 // .url("http://yopmail.com")
  //.pause(3000)
  //.click("//input[@id='login']")
  //.pause(1000)
  //.setValue("//input[@id='login']", driver.globals.userNames.adminEmail)
  //.pause(5000)
  //.click("//input[@class='sbut']")
  //.pause(4000)
  //.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/adverseEventEmail.png')
  //.pause(2000)
  //navigate back to activity monitoring page
  //.execute(function () {
  //  window.history.back()
  // })
  //.pause(2000)
  //.execute(function () {
   // window.history.back()
  // })
  //.pause(2000)
  //accept a post
  //.click("(//button[@class='btn-accept'])[1]")
  //.pause(2000)
  //.execute('scrollTo(2000,2000)')
  //decline a post with reason
  //.click("(//button[@type='button'])[61]")
  //.pause(2000)
  //.waitForElementVisible("(//ul[@class='reason-list'])[12]/li[2]",2000)
  //.moveToElement("(//ul[@class='reason-list'])[12]/li[2]",1,1)
  //.pause(2000)
  //.mouseButtonClick(1)
  //.pause(2000)
  //search using UIN
>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
  .click("//input[@ng-model='value']")
  .setValue("//input[@ng-model='value']",driver.globals.userNames.uin)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
<<<<<<< HEAD
  .click("//input[@ng-model='value']")
  .clearValue("//input[@ng-model='value']")
=======
>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
}

  var activityMonitoringFilters =function(driver)
{
    driver
  .useXpath()
  //filter by "All Activities"
  .click("(//button[@data-toggle='dropdown'])[2]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[1]/li[2]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[1]/li[2]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  //filter by "All Sources - facebook"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[2]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[2]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All Sources - facebook page"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[3]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[3]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All Sources - Twitter"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[4]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[4]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All Sources - Face2face"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[5]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[5]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Upload Photo Facebook"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[6]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[6]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Upload Photo Fb Page"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[7]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[7]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Upload Photo Twitter"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[8]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[8]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Blog"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[9]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[9]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Youtube"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[10]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[10]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Pinterest"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[11]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[11]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Instagram"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[12]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[12]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Brandconnect"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[13]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[13]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - Retail Review"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[14]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[14]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "Email Group Invite"
  .click("(//button[@data-toggle='dropdown'])[3]")
<<<<<<< HEAD
  .pause(4000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[15]",4000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[15]",1,1)
  .pause(4000)
  .mouseButtonClick(1)
  .pause(4000)
   //filter by "All Sources - BazaarVoice"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(5000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[16]",5000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[16]",1,1)
  .pause(5000)
  .mouseButtonClick(1)
  .pause(2000)
  .execute('scrollTo(0,100)')
  //filter by"All Sources"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[1]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[1]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  .execute('scrollTo(0,5500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAmPagination.png')
  .execute('scrollTo(200,0)')
 //filter by "All Statuses - Need Review"
  .click("(//button[@data-toggle='dropdown'])[4]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[3]/li[2]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[3]/li[2]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All Statuses - Approved"
  .click("(//button[@data-toggle='dropdown'])[4]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[3]/li[3]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[3]/li[3]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All Statuses - Declined"
  .click("(//button[@data-toggle='dropdown'])[4]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[3]/li[4]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[3]/li[4]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //fliter by All Statuses - deselect
  .click("(//button[@data-toggle='dropdown'])[4]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[3]/li[1]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[3]/li[1]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //filter by "All flags - positive"
  .click("(//button[@data-toggle='dropdown'])[5]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[4]/li[2]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[4]/li[2]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  // filter by "All flags - Negetive"
  .click("(//button[@data-toggle='dropdown'])[5]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[4]/li[3]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[4]/li[3]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  // filter by A"ll flags - Adverse"
  .click("(//button[@data-toggle='dropdown'])[5]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[4]/li[4]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[4]/li[4]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  // filter by "All flags - deselect"
  .click("(//button[@data-toggle='dropdown'])[5]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[4]/li[1]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[4]/li[1]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
  //Add tags
  .click("(//button[@class='shares-tag-add'])[1]")
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifyAmReach.png')
  .click("(//input[@ng-model='tagName'])[1]")
  .pause(2000)
  .setValue("(//input[@ng-model='tagName'])[1]", 'Tag 1')
  .pause(2000)
  .keys(driver.Keys.ENTER)
  .pause(2000)
  .click("(//button[@class='shares-tag-add'])[2]")
  .pause(2000)
  .click("(//input[@ng-model='tagName'])[2]")
  .pause(2000)
  .setValue("(//input[@ng-model='tagName'])[2]", 'Tag 2')
  .pause(2000)
  .keys(driver.Keys.ENTER)
  .pause(2000)
  .execute('scrollTo(200,0)')
  // filter by Tags -Tag1
  .click("//button[@class='event ng-binding']")
  .pause(2000)
  .waitForElementVisible("//ol[@class='all-tags']/li[1]",2000)
  .moveToElement("//ol[@class='all-tags']/li[1]",1,1)
=======
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[15]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[15]",1,1)
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)
   //filter by "All Sources - BazaarVoice"
  .click("(//button[@data-toggle='dropdown'])[3]")
  .pause(2000)
  .waitForElementVisible("(//ul[@class='list-select-menu'])[2]/li[16]",2000)
  .moveToElement("(//ul[@class='list-select-menu'])[2]/li[16]",1,1)
>>>>>>> 98191a44a255c696d57b2889dc1875c15d3da683
  .pause(2000)
  .mouseButtonClick(1)
  .pause(2000)

}

module.exports={
 adminlogin:adminlogin,
 activityMonitoring:activityMonitoring,
 activityMonitoringFilters:activityMonitoringFilters
 }
