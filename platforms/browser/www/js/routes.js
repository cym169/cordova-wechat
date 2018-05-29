routes = [
  // 微信首页
  {
    path: '/index/',
    componentUrl: './pages/index.html',
  },
  // 搜索页面
  {
    path: '/resultSearch/',
    componentUrl: './pages/resultSearch.html',
  },
  // 联系人页面
  {
    path: '/contacts/',
    componentUrl: './pages/contacts.html',
  },
  // 发现页面
  {
    path: '/find/',
    componentUrl: './pages/find.html',
  },
  // 我 页面
  {
    path: '/me/',
    componentUrl: './pages/me.html',
  },
  // 聊天页面
  {
    path: '/chat/:id',
    async: function (routeTo, routeFrom, resolve, reject) {
      resolve({
        componentUrl: './pages/chat.html'
      })
    }
  },
  // 聊天详情
  {
    path: '/chatDetail/',
    componentUrl: './pages/chatDetail.html',
  },
  // 个人信息页面
  {
    path: '/meDetail/',
    componentUrl: './pages/meDetail.html',
  },
  {
    path: '/setDetail/',
    componentUrl: './pages/setDetail.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    componentUrl: './pages/404.html',
  },
];