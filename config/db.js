// 该项目是模拟实际的开发情形，因此我们需要根据不同的运行环境来进行区分不同的配置，当然在这里我们其实只有一种运行环境，那就是本地环境，但是我们写的需要规范
const env = process.env.NODE_ENV  // 环境参数

let MYSQL_CONF
let REDIS_CONF
let ELASTICSEARCH_CONF

// 本地环境
if (env === 'dev') {
    // mysql 配置
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'blog',
        port: 3306
    }
    // redis 配置
    REDIS_CONF = {
        port: 6379,
        host: 'localhost'
    }
    // elasticsearch 配置
    ELASTICSEARCH_CONF = {
        port: 9200,
        host: 'localhost'
    }
}

// 线上环境
if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'blog',
        port: 3306
    }
    // redis 配置
    REDIS_CONF = {
        port: 6379,
        host: 'localhost'
    }
   // elasticsearch 配置
   ELASTICSEARCH_CONF = {
        port: 9200,
        host: 'localhost'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF,
    ELASTICSEARCH_CONF
}
