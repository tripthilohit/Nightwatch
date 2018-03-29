var moduledownloadImages =require('./downloadImages.js')

var modulecreateSurvey=require('./createSurvey.js')

var activity = function(driver)
{
    driver
 //create a Mission hub   
.click("//a[@class='test-nav-hubs']")
.pause(4000)
.assert.containsText("//h1[@class='pull-left']", "Mission Hubs")
.click("//a[@class='btn btn-default btn-icon-add test-hub-new']")
.pause(2000)
.click("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input")
.pause(2000)
.setValue("//div[@id='new_mission_hub']/div/div/div[2]/div/div/input", "Manage Members Activity")
.pause(2000)
.click("//div[@class='modal-footer ng-scope']/button")
.pause(2000)
//Navigate to manage Members Activity
.click("//li[@class='q-builder-click test-hub-new-activity']")
.pause(2000)
//Navigate to survey and Activities pages
.click("//a[@class='rowclick test-hub-structure-item-link ng-binding']")
.pause(2000)
.click("//button[@class='btn-edit']")
// Add Activity Name
.pause(2000)
.clearValue("//div[@class='ng-isolate-scope ng-pristine ng-valid']/input")
.pause(2000)
.setValue("//div[@class='ng-isolate-scope ng-pristine ng-valid']/input", "Manage Members Activity")
.pause(2000)
// Add Mission Activity Name
.click("//textarea[@class='mission-page-title test-activity-name ng-pristine ng-valid placeholder']")
.pause(2000)
.setValue("//textarea[@class='mission-page-title test-activity-name ng-pristine ng-valid placeholder']", "Manage Members Activity name")
.pause(2000)
//Add mission offer name
.click("//textarea[@class='q-field q-field-medium test-activity-tagline ng-pristine ng-valid placeholder']")
.pause(2000)
.setValue("//textarea[@class='q-field q-field-medium test-activity-tagline ng-pristine ng-valid placeholder']", "Mission offer")
.pause(2000)
// Add Mission details
.click("//sml-medium-editor[@ng-model='activity.page.description']/div/div[1]")
.pause(2000)
.setValue("//sml-medium-editor[@ng-model='activity.page.description']/div/div[1]", "Mission Details")
.pause(2000)
//Add Background image
.click("//input[@id='switch_cb_activity.page.show_image']")
.pause(2000)
.click("//input[@id='switch_cb_activity.page.show_details']")
.pause(2000)
//Enable a sharing tool -Face2Face
.click("//input[@id='switch_cb_face2face']")
.pause(2000)
//click save
.click("//button[@ng-click='save()']")
.pause(1000)
//navigate to Mission logic
.click("//div[@class='topbar']/ul/li[3]")
.pause(4000)
.click("//nav[@class='survey-navbar affix-top']/ul/li[3]")
.pause(4000)
.click("//a[@class='mlogic-link test-hub-logic-item-view ng-scope']")
.pause(1000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/missionLogicPage.png')
.pause(2000)
//Select Start date
.click("//input[@id='date-start']")
.pause(2000)
.click("//td[@class='active day']/preceding-sibling::td[@class='day'][1]")
.pause(2000)
//Add a group - male
.click("//button[@class='mlogic-add-group']")
.pause(2000)
.click("//span[text()='Male']")
.pause(2000)
.click("//button[@class='btn btn-primary test-hub-logic-item-group-save']")
.pause(2000)
// check featured
.click("(//label[@class='control-checkbox control-checkbox-primary'])[2]")
.pause(2000)
//enable and save
.click("//label[@class='switcher ng-scope']")
.pause(2000)
.click("//button[@class='btn btn-default pull-right test-hub-logic-save']")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/missionLogicSaved.png')
.assert.visible("//button[@class='btn btn-default pull-right test-hub-logic-save']")
.pause(5000)
//Navigate to mission hub
.click("//a[@class='test-hub-index-link']")
.pause(5000)
    
}



module.exports = {
    loginFlikr: moduledownloadImages.loginFlikr,
    activityBadgeDownload:moduledownloadImages.activityBadgeDownload,
    signIn: modulecreateSurvey.signIn,
    activity: activity,
    

}
