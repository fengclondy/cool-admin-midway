import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';

/**
 * 本地开发 npm run prod 读取的配置文件
 */
export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '10.34.109.73',
        port: 3306,
        username: 'root',
        password: '123456!@#$%^ABc',
        database: 'cool',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: true,
        // 打印日志
        logging: false,
        // 字符集
        charset: 'utf8mb4',
        // 是否开启缓存
        cache: true,
        // 实体路径
        entities: ['**/modules/*/entity'],
      },
    },
  },
  cool: {
    eps: true,
    initDB: false,
  } as CoolConfig,
} as MidwayConfig;
