module.exports = {
  tags: ['测试taobao'],
  '第一步，登录' : function(login){
    login
      .url('https://www.taobao.com/')
      .click('.h')
      .click('.forget-pwd.J_Quick2Static')
      .setValue('#TPL_username_1','wenhaowen')
      .setValue('#TPL_password_1','2wsx@WSX')
      .click('#J_SubmitStatic')
      .waitForElementVisible('.site-nav-login-info-nick', 1000)
      .assert.visible('.site-nav-login-info-nick')
      .getText('.site-nav-login-info-nick', function(result) {
        this.assert.equal(result.value, "wenhaowen");
      });
  },

  '第二步，搜索' : function(search){
    search
      .setValue('#q','敏捷软件测试')
      .click('button[type=submit]')
      .assert.visible('#q')
      .getValue('#q', function(result) {
        this.assert.equal(result.value, '敏捷软件测试')
      });
  },

  '第三步，浏览商品' : function(view){
    view
      .click('#J_Itemlist_PLink_527063199763')
      .pause(1000)
      .window_handles(function(result) {
         var handle = result.value[1];
         view.switchWindow(handle);
       })
      .assert.title('敏捷软件测试/测试人员与敏捷团队的实践指南 畅销书籍 计算机-tmall.com天猫')
      .waitForElementVisible('#J_LinkBasket', 1000)
      .assert.visible('#J_LinkBasket')
      .click('#J_LinkBasket')
      .waitForElementVisible('#mc-menu-hd', 5000)
      .assert.visible('#mc-menu-hd')
      .click('#mc-menu-hd')
      .waitForElementVisible('.item-title.J_MakePoint', 5000)
      .assert.visible('.item-title.J_MakePoint')
      .getText('.item-title.J_MakePoint', function(result) {
        this.assert.equal(result.value, '敏捷软件测试/测试人员与敏捷团队的实践指南 畅销书籍 计算机')
      });
    view.end();
  }
}
