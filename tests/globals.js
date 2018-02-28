var userNames = {

  memberURL: 'https://tripsprint95t.staging.socialmedialink.com',
  memberEmail: 'lolo@yopmail.com',
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
  sprint: '96b',
  adminURL: 'https://admin.staging.socialmedialink.com/',
  adminEmail: 'tripsprint95t@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'sukada.testmember8@socialmedialink.com',
  facebookPass: 'general1234',
  twitterEmail: 'sukada.ramakrishna@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'sukadar',
  instagramPass: 'general1234',
  superAdminEmail: 'sukada.ramakrishna@socialmedialink.com',
  superAdminPass: 'General1234#',
  account_no: 666,
  path: 'C:/Users/you/Downloads/',
  memberEmailFemale: 'leena@yopmail.com',
  darDate:"(//td[@class='day'])[12]",
  uin:'12340'
 
   };


var cbt = require('cbt_tunnels');

module.exports = {
  beforeEach : function(done) {
    console.log('Starting up tunnel');
    cbt.start({
      'username': 'tripthi.shetty@socialmedialink.com',
      'authkey': 'u283c7d7d4fafeb7'
    }, function(err, data) {
      if (err) {
        done(err);
      } else {
        done(data);
      }
    });
  },
  userNames: userNames,

  afterEach : function(done) {
    console.log('Closing Down Tunnel');
    cbt.stop();
    done();
  }
}