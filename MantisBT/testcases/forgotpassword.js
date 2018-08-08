var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['forgotpassword'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    'Go to login page': function(browser)
    {
     utils(browser).ForgotPassword();

    },
    
    'Close browser': function(browser)
    {
        utils(browser).CloseBrowser();

    }
};