var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['assignissue'],

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
      
        utils(browser).AssignIssue()
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