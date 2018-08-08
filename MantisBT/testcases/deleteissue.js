var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['deleteissue'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    
    'Login with admin user': function(browser)
    {
        utils(browser).AdminLogin();

    },
    'update issue field': function(browser)
    {
      
        utils(browser).DeleteIssue();
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