var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['viewissue'],

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
       utils(browser).ViewIssue();
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