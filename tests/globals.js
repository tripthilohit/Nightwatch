var userNames = {
  
  memberURL: 'https://suksmileysp3.socialmedialink.com/',
  memberEmail: 'rad@yopmail.com',
  memberPassword: 'general1234',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
  sprint: '96b',
  member2Email:'Jimysnow@yopmail.com',
  member2Password:'general1234',
  member2FirstName:'Jims',
  member2LastName:'Snow',
  adminURL: 'https://admin-smiley.socialmedialink.com/',
  adminEmail: 'suksmileysp3@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'sukada.testmember8@socialmedialink.com',
  facebookPass: 'general1234',
  facebookEmail2: 'vcsjinc_martinazziescu_1454599736@tfbnw.net',
  facebookPass2: 'general1234',
  twitterEmail: 'sukada.ramakrishna@socialmedialink.com',
  twitterPass: 'general1234',
  twitterEmail2: 'tripthi.testmember20@socialmedialink.com',
  twitterPass2: 'general1234',
  instagramUserName: 'sukadar',
  instagramPass: 'general1234',
  superAdminEmail: 'admin@sml.com',
  superAdminPass: 'Password123!',
  account_no: 161,
  path: 'C:/Users/you/Downloads/',
  memberEmailFemale: 'leena@yopmail.com',
  darDate:"(//td[@class='day'])[23]",
  uin:'20',
  pinterestUserName:'sukadamr',
  usAddressLine1:'45',
  usAddressLine2:'Mohawk Ave',
  usCity:'Rockaway',
  caAddressLine1:'1010',
  caAddressLine2:'EASY ST',
  caCity:'OTTAWA',
  postalCode:'K1A 0B1',
  memberNewEmail: 'sukrao17@yopmail.com',
  memberNewPassword:'12345678',
  memberId:'12'

   };
var cbt = require('cbt_tunnels');

module.exports = {
  beforeEach : function(done) {
    console.log('Starting up tunnel');
    cbt.start({
      'username': 'sukada.ramakrishna@socialmedialink.com',
      'authkey': 'u89e4efd851e17e7'
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