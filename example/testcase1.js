module.exports ={
    'tags': ['testcase1'],
    'Open home page and click on image': function(browser)
    {
browser
    .url('http://localhost:8080/mantisbt/login_page.php')
    browser.resizeWindow(1400,960) 
    .waitForElementVisible('body', 8000)
    .assert.visible('input[name=username]') 
    .elementIdText('input[name=username]') 
    .pause(3000)  
    .end()   
    }

}

