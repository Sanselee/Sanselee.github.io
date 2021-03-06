const name = 'Sanselee',
    repo = 'Sanselee.github.io'

module.exports = {
    owner: name,
    repo: repo,
    email: '326178275@qq.com',
    cdn: `https://cdn.jsdelivr.net/gh/${name}/${repo}@latest`,
    timeStamp: new Date().getTime(),
    avatar: 'favicon.svg',
    corner: 'Simple code,Simple life',
    homeTitle: '清予生 淡予时',
    rss: {
        title: `${name}的博客`,
        description: `${name}的博文Rss`,
        categories: 'Blog/Web development',
        ttl: 3600,
        count: 20,
        /** Time By
         @create: 创建
         @update: 更新
         */
        timeBy: 'create'
    }
}