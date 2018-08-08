var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['login'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    
    'Login with admin user': function(browser)
    {
        utils(browser).AdminLogin();

    },
    'Close browser': function(browser)
    {
        utils(browser).CloseBrowser();

    }
};