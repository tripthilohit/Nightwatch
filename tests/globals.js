var userNames = {
  
  memberURL: 'https://suksprint95.socialmedialink.com/',
  memberEmail: 'sukrao10@yopmail.com',
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',

  sprint: '96a',
  adminURL: 'https://admin-smiley.socialmedialink.com/',
  adminEmail: 'sur@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'sukada.testmember8@socialmedialink.com',
  facebookPass: 'general1234',
  twitterEmail: 'sukada.ramakrishna@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'sukadar',
  instagramPass: 'general1234',
  superAdminEmail: 'sukada.ramakrishna@socialmedialink.com',
  superAdminPass: 'General1234#',
  account_no: 667,
  path: 'C:/Users/you/Downloads/',
  darDate:"(//td[@class='day'])[27]",
  uin:'12448',
  pinterestUserName:'sukadamr',
  usAddressLine1:'6010',
  usAddressLine2:'Boulevard East',
  usCity:'West NewYork',
  caAddressLine1:'1010',
  caAddressLine2:'EASY ST',
  caCity:'OTTAWA',
  postalCode:'K1A 0B1',
  memberNewEmail: 'sukrao10@yopmail.com',
  memberNewPassword:'general1234',



 
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