'use strict';
/**
 * code by PomeloCloud
 * 文件工具类
 */
const fs = require('fs');

module.exports = {
  /**
   * 获取JSON文件数据
   * @param path 路径
   * @param names 文件名数组
   * @returns {*[]|any} 数据集合
   */
  getJsonFileData(path = '', names = []) {
    const result = [];
    if (path && names.length > 0) {
      names.forEach(name => result.push(this.readFile(path + name)));
    } else if (path) {
      return this.readFile(path);
    }
    return result;
  },
  getFileData(path) {
    return path ? fs.readFileSync(path).toString() : null;
  },
  checkFile(file) {
    if (typeof file === 'object') {
      for (const key in file) {
        file[key] = this.checkPath(file[key]);
      }
    } else if (typeof file === 'string') {
      file = this.checkPath(file);
    }
    return file;
  },
  readFile(path) {
    let fileSync = fs.readFileSync(path);
    return JSON.parse(fileSync.toString());
  },
  checkPath(path) {
    if (path.indexOf('\\') !== -1) {
      path = path.replace(/\\/g, '/');
    }
    return path;
  },
};

