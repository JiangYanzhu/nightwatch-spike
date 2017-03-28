module.exports = {
  tags: ['测试baidu'],
  'Test Baidu' : function(client){
    client
      .url('http://www.baidu.com')
      .assert.title('百度一下，你就知道')
      .assert.visible('input[id=kw]')
      .assert.visible('input[id=su]')
      .setValue('input[id=kw]','nightwatch')
      .click('input[id=su]');

      client.pause(5000);

      client.end();
  }
}
