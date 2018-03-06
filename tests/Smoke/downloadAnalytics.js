//comment 1
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
    .click("(//div[@class='grid '])[1]/div[2]/div[1]")
    .pause(2000)
    .click("//label[@for='photo_download_quality_standard']")
    .pause(2000)
    .click("//button[@data-ga-action='Download']")
    .pause(4000)
}

var adminlogin =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    //.waitForElementVisible('body',3000)
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
   .click("//a[@class='rowclick test-hub-link ng-binding'][text()='Sharing Tools']")
   .pause(2000)

  }
  
   

var activityMonitoring = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-monitoring']")
  .pause(2000)
  //click flags postive
  .click("(//input[@ng-model='share.admin_feedback'])[1]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[4]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[7]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[10]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[13]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[16]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[19]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[22]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[25]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[28]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[31]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[34]")
  .pause(2000)

}

var OverviewTab = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-overview']")
  .pause(2000)
  .click("//a[@class='mission-item-analytics-link']")
  .pause(2000)
}


    
var downloadAnalytics = function(driver)
{
  driver

    // DAR admin Page
    .click("//input[@ng-model='ctrl.report.start_date']")
    .pause(2000)
    .click("//input[@ng-model='ctrl.report.end_date']")
    .pause(2000)
    .click("//td[@class='active day']/preceeding-sibling::td[@class='day'][1]")
    .pause(5000)
    .click("//input[@ng-model='ctrl.report.start_date']")
    .pause(2000)
    .click("//input[@ng-model='ctrl.report.end_date']")
    .pause(2000)
    .click("//td[@class='active day']")
    .pause(5000)
    //add your team
    .click("//input[@class='js-autocomplete ui-autocomplete-input']")
    .pause(2000)
    .waitForElementVisible("//li[@class='ui-menu-item']/a",2000)
    .moveToElement("//li[@class='ui-menu-item']/a",1,1)
    .pause(2000)
    .mouseButtonClick(1)
    .pause(2000)
    .click("(//input[@ng-model='admin.position'])[1]")
    .pause(2000)
    .setValue("(//input[@ng-model='admin.position'])[1]",'QA')
    .pause(2000)
    //add logo
    .click("(//button[@ng-click='deleteImage()'])[1]")
    .pause(2000)
    .setValue("(//div[@class='btn btn-upload btn-primary'])[1]/input",driver.globals.userNames.path + "beach-pals_925x.jpg")
    .pause(3000)
    // enable benchmarks switch
    .click("//input[@id='switch_cb_ctrl.report.benchmarks_enabled']")
    .pause(2000)
    //add biweekly mission clicks
    .click("//input[@ng-model='report.third_party.shared_links_clicked']")
    .pause(2000)
    .setValue("//input[@ng-model='report.third_party.shared_links_clicked']",'24500')
    .pause(2000)
    //add biweekly impressions
    .click("//input[@ng-model='report.third_party.mission_impression']")
    .pause(2000)
    .setValue("//input[@ng-model='report.third_party.mission_impression']",'24500')
    .pause(2000)
    //add cumulative shares count
    .click("//input[@ng-model='report.benchmarks.shares_count']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.shares_count']",'550')
    .pause(2000)
    //add cumulative mission clicks
    .click("//input[@ng-model='report.benchmarks.shared_links_clicked']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.shared_links_clicked']",'250')
    .pause(2000)
    //add cumulative impressions
    .click("//input[@ng-model='report.benchmarks.mission_impression']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.mission_impression']",'12500')
    .pause(2000)
    // save all actions
    .click("(//button[@class='btn btn-sidebar btn-primary w100 test-activity-save'])[1]")
    .pause(2000)
    //remove 2 popular keywords
    .click("//button[@ng-click='ctrl.open()']")
    .pause(2000)
    .click("(//label[@class='ng-binding'])[1]")
    .pause(2000)
    .click("(//label[@class='ng-binding'])[2]")
    .pause(2000)
    .click("//button[@ng-click='ok()']")
    .pause(2000)
    //mission highilights
    .click("//input[@ng-model='report.mission_highlights.heading']")
    .pause(2000)
    .setValue("//input[@ng-model='report.mission_highlights.heading']",'mission_highlights heading')
    .pause(2000)
    .click("//div[@data-placeholder='Mission Highlights']")
    .pause(2000)
    .setValue("//div[@data-placeholder='Mission Highlights']",'Mission Highlights description')
    .pause(2000)
    .click("//input[@ng-model='report.mission_highlights.hashtag']")
    .pause(2000)
    .setValue("//input[@ng-model='report.mission_highlights.hashtag']",'#Mission')
    .pause(2000)
    // add milestone
    .click("//input[@ng-model='ctrl.new_milestone.title']")
    .pause(2000)
    .setValue("//input[@ng-model='ctrl.new_milestone.title']",'Twitter Party')
    .pause(2000)
    .click("//input[@ng-model='ctrl.new_milestone.date']")
    .pause(2000)
    //custom date set in globals
    .useXpath()
    .click(driver.globals.userNames.darDate)
    .pause(2000)
    .click("//button[@ng-click='ctrl.add()']")
    .pause(2000)
    //adding top member content using UIN, set UIN value in globals
    .click("//input[@ng-model='shareId']")
    .pause(2000)
    .setValue("//input[@ng-model='shareId']",driver.globals.userNames.uin)
    //.waitForElementVisible("//ul[@id='ui-id-3']/li/a",2000)
    .moveToElement("//ul[@id='ui-id-3']/li/a",1,1)
    .pause(2000)
    .mouseButtonClick(1)
    //adding top member content using "Add" button
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[1]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[2]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[3]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[4]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[5]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[6]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[7]")
    .pause(4000)
    .click("(//button[@ng-click='ctrl.add(share)'])[2]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[4]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[6]")
    .pause(2000)
    .click("(//button[@class='btn btn-sidebar btn-primary w100 test-activity-save'])[1]")
    .pause(2000)
  }

var downloadAnalyticsPreviewButton = function(driver)
{
  driver

    .click("//button[@class='btn btn-invert btn-invert-preview']")
    .pause(2000)
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
   
  }

var downloadAnalyticsPreview = function(driver)
{
  driver
  .execute('scrollTo(0,400)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview1.png')
  .pause(2000)
  .execute('scrollTo(0,800)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview2.png')
  .execute('scrollTo(0,1000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview3.png')
  .pause(2000)
  .execute('scrollTo(0,1500')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview4.png')
  .pause(2000)
  .execute('scrollTo(0,2000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview5.png')
  .pause(2000)
  .execute('scrollTo(0,2500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview6.png')
  .pause(2000)
  .execute('scrollTo(0,3000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview7.png')
  .pause(2000)
  .execute('scrollTo(0,3500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview8.png')
  .pause(2000)
  .execute('scrollTo(0,4000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview9.png')
  .pause(2000)
  .execute('scrollTo(0,4500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview10.png')
  .pause(2000)
  .execute('scrollTo(0,5000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview11.png')
  .pause(2000)
  .execute('scrollTo(0,5500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview12.png')
  .pause(2000)
  .execute('scrollTo(0,6000)')
  .pause(2000)
 
}

module.exports={
  downloadImages: downloadImages,
  adminlogin:adminlogin,
  activityMonitoring:activityMonitoring,
  OverviewTab:OverviewTab,
  downloadAnalytics:downloadAnalytics,
  downloadAnalyticsPreviewButton:downloadAnalyticsPreviewButton,
  downloadAnalyticsPreview:downloadAnalyticsPreview
}