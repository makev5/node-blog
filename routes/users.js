var express = require('express');
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
var router = express.Router();

/* GET users listing. */
router.post('/v1/user/login', (req, res) => {
  const { username, password } = req.body
  const result = login(username, password)
  console.log(result);
  return result.then(data => {
    if(data.username) {
      // set session
      req.session.username = data.username
      // 每次登陆成功后需要把用户信息存储到Redis中去，这样就算服务器重启也不会影响之前的登录信息，因为redis和后端服务器也是分离的
      set(req.sessionId, req.session)
      return new SuccessModel()
    }
    return new ErrorModel('用户登录失败')
  })
});

module.exports = router;
