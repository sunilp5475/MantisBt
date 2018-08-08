module.exports = {

    tags: ['testcase3'],
  
    'Demo test Mantis BT login' : function (browser) {
  
         browser 
  
         .url('http://localhost:8080/mantisbt/login_page.php') // Go to a url

         .windowMaximize() 
  
         .waitForElementVisible('body', 8000) // wait till page loads
  
          
         .assert.visible('input[name=username]') 
  
         .setValue('input[name=username]', 'administrator') // send values

         
         .assert.visible('input[name=password]') 
  
         .setValue('input[name=password]', 'root') // send values

         .assert.visible('input[value=Login]')
  
         .click('input[value=Login]') // click on search box

        //browser.saveScreenshot('./screenshots/testcase3.jpg')               
         .pause(1000)
  
         .end();
  
       }
  
  };