module.exports = {
  tags: ['测试taobao'],
  '第一步，登录' : function(login){
    login
      .url('https://www.taobao.com/')
      .click('a[class=h]')
      .click('i[id=J_Quick2Static]')
      .setValue('input[name=TPL_username]','wenhaowen')
      .setValue('input[name=TPL_password]','2wsx@WSX')
      .click('button[id=J_SubmitStatic]')
      //.pause(1000)
      .assert.visible('a[class=site-nav-login-info-nick]','wenhaowen')
      //login.pause(1000);
  },

  '第二步，搜索' : function(search){
    search
      .setValue('input[name=q]','敏捷软件测试')
      //.pause(1000)
      .click('button[type=submit]')
      .assert.visible('input[name=q]','敏捷软件测试')
  },

  '第三步，浏览商品' : function(view){
    view
      .click('img[id=J_Itemlist_Pic_527063199763]')
      .click('a[rel=nofollow]')
      .click('a[id=mc-menu-hd]')
      .assert.visible("a[class='item-title J_MakePoint']",'敏捷软件测试/测试人员与敏捷团队的实践指南 畅销书籍 计算机')
      view.end();
  }
}
