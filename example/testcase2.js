module.exports ={
    'tags': ['testcase2'],
    'Open home page and click on image': function(browser)
    {
     var Uname;   
browser
    .url('http://localhost:8080/mantisbt/login_page.php') 
    browser.resizeWindow(1400,960)
    .waitForElementVisible('body', 8000)
    .assert.visible('img[alt=MantisBT]') 
    .click('img[alt=MantisBT]')
    .pause(3000)  
    .end();   
    }

}