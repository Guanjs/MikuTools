import pinyin from './pinyin';

export default {
    title: 'MiqiTools',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'www.miqitools.com'
            : 'miqitools',
    description: '一个轻量的工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://www.miqitools'
            : 'https://miqitools',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://www.miqitools:3001'
            : 'https://api.miqitools',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://api.miqitools'
};
