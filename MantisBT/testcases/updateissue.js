var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['updateissue'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    
    'Login with admin user': function(browser)
    {
        utils(browser).AdminLogin();

    },
    'view issue': function(browser)
    {
       utils(browser).UpdateIssue();
    },
    'Logout Mantis BT':function(browser)
    {
      utils(browser).Logout()
    },
    'Close browser': function(browser)
    {
        utils(browser).CloseBrowser();

    }
};