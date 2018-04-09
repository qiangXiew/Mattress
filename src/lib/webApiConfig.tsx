let NodeEnv = process.env.NODE_ENV || '';

const baesUrl = {
    development: {
        path: 'http://192.168.0.50:8081'
    },
    production: {
        path: 'http://192.168.0.50:8081'
    }
};

const config = {
    news: {
        path: `${baesUrl[NodeEnv].path}/H5Website/findNewsPage`,
        method: 'GET',
        description: '新闻接口'
    },
    product: {
        path: `./product.json`,
        method: 'GET',
        description: '产品接口'
    }
};
export default config;