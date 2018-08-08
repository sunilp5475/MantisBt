var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['report'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    'Go to login page': function(browser)
    {
     utils(browser).home();

    },
    'Login with admin user': function(browser)
    {
        utils(browser).AdminLogin();

    },
    'Navigate to report issue page':function(browser)
    {
        utils(browser).LinkPresent()
    },
    'Report issue': function(browser)
    {
        utils(browser).ReportIssue()
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