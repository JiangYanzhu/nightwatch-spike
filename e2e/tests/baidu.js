module.exports = {
  '@disabled': true,
  tags: ['测试baidu'],
  'Step One' : function(client){
    client
      .url('http://www.baidu.com')
      .waitForElementVisible('body',1000)
      .assert.title('百度一下，你就知道')
      .assert.visible('input[id=kw]')
      .assert.visible('input[id=su]')
      .setValue('input[id=kw]','nightwatch')
      .waitForElementVisible('input[id=su]',1000)
      client.pause(5000);
  },

  'Step Two' : function(client){
    client
      .click('input[id=su]');
      client.pause(5000);
      client.end();
  }
}
