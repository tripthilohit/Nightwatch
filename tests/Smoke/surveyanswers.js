
var modulememberSigninEmail = require('./memberSigninEmail.js')
  
var ansSurvey= function(driver)
  {
    driver
.useXpath()
//click on a survey
.click("//div[@class='action']/button")
.pause(2000)
//Accept survey
.click("(//div[@class='overflow'])/a[1]")
.pause(2000)
//Ans Single answer question
.click("(//label[@class='control-radio ng-binding'])[1]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsSingleAnsimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Multiple answer question
.click("(//label[@class='control-checkbox ng-binding'])[1]")
.pause(2000)
.click("(//label[@class='control-checkbox ng-binding'])[2]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsMultiAnsimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Matrix single question
.click("(//label[@class='control-radio'])[1]")
.pause(2000)
.click("(//label[@class='control-radio'])[4]")
.pause(2000)
.click("(//label[@class='control-radio'])[7]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsMatrixSingleimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Matrix muliple question
.click("(//label[@class='control-checkbox'])[1]")
.pause(2000)
.click("(//label[@class='control-checkbox'])[2]")
.pause(2000)
.click("(//label[@class='control-checkbox'])[4]")
.pause(2000)
.click("(//label[@class='control-checkbox'])[5]")
.pause(2000)
.click("(//label[@class='control-checkbox'])[7]")
.pause(2000)
.click("(//label[@class='control-checkbox'])[8]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsMatrixMultiimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Yes or No question
.click("(//label[@class='control-radio ng-binding'])[1]")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsYesimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Text question 
.click("//textarea[@class='q-field ng-pristine ng-valid']")
.pause(2000)
.setValue("//textarea[@class='q-field ng-pristine ng-valid']",'Text answer')
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsTextimage.png')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
//Ans Number Question
.click("//input[@class='form-control form-control-number ng-pristine ng-valid ng-valid-number ng-valid-min']")
.pause(2000)
.setValue("//input[@class='form-control form-control-number ng-pristine ng-valid ng-valid-number ng-valid-min']",'4')
//click next button
.click("//div[@class='np-bar']/button")
.pause(2000)
.saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifysurveyAnsNumberimage.png')

}

module.exports={
    signinEmail: modulememberSigninEmail.signinEmail, 
    ansSurvey: ansSurvey
}