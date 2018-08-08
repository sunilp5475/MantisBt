var utils = require('../../../Pages/utils');

module.exports=
{
    tags: ['home'],

    before: function(browser)
    {
        utils(browser).Openbrowser();
    },
    'Go to login page': function(browser)
    {
     utils(browser).home();

    },
    
    'Close browser': function(browser)
    {
        utils(browser).CloseBrowser();

    }
};