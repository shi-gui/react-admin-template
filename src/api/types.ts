/*
 * @Author: liuhua
 * @Date: 2023-06-13 09:55:59
 * @LastEditors: liuhua
 * @LastEditTime: 2023-06-13 11:11:00
 * @Description: 全局类型定义
 *
 */

/**
 * 接口返回格式
 */
export interface ResponseType {
  code: number;
  msg: string;
  data: any;
  [key: string]: any;
}

/**
 * 分页查询参数
 */
export interface PageParams {
  page: number;
  size: number;
}

/**
 * 分页列表
 */
export interface PageList<T = unknown> {
  page: {
    page: number;
    total: number;
    list: T[];
    size: number;
  };
}

/**
 * 响应列表
 */
export interface DataList<T = unknown> {
  list: T[];
}

/**
 * 响应对象数据
 */
export interface DataEntity<T = unknown> {
  entity: T;
}
