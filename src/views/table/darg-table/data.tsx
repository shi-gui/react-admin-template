import type { TableProps } from 'antd';
import { SexEnum } from '@/enums';

interface DataType {
  key: string;
  name: string;
  age: number;
  sex: 0 | 1;
  address: string;
  job: string;
  updateTime: string;
}

export const columns: TableProps<DataType>['columns'] = [
  {
    title: '序号',
    dataIndex: 'key'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    render: (sex: DataType['sex']) => {
      return SexEnum[sex];
    }
  },
  {
    title: '住址',
    dataIndex: 'address'
  },
  {
    title: '职业',
    dataIndex: 'job'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime'
  }
];

export const data: DataType[] = [
  {
    key: '1',
    name: '张三',
    age: 18,
    sex: 0,
    address: '广东省广州市海珠区',
    job: '前端工程师',
    updateTime: '2024-01-01 12:00:00'
  },
  {
    key: '2',
    name: '李四',
    age: 21,
    sex: 1,
    address: '四川省成都市高新区',
    job: '后端工程师',
    updateTime: '2024-03-02 11:10:24'
  },
  {
    key: '3',
    name: '王五',
    age: 24,
    sex: 0,
    address: '北京市朝阳区',
    job: '前端工程师',
    updateTime: '2024-02-01 12:00:00'
  },
  {
    key: '4',
    name: '赵六',
    age: 16,
    sex: 1,
    address: '重庆市渝北区',
    job: '后端工程师',
    updateTime: '2024-05-01 12:00:00'
  },
  {
    key: '5',
    name: '孙七',
    age: 18,
    sex: 0,
    address: '四川省巴中市巴州区',
    job: '前端工程师',
    updateTime: '2024-04-21 12:00:00'
  },
  {
    key: '6',
    name: '周八',
    age: 18,
    sex: 1,
    address: '福建省福州市鼓楼区',
    job: '后端工程师',
    updateTime: '2024-02-09 12:00:00'
  },
  {
    key: '7',
    name: '吴九',
    age: 18,
    sex: 0,
    address: '浙江省杭州市西湖区',
    job: '前端工程师',
    updateTime: '2024-06-01 12:00:00'
  },
  {
    key: '8',
    name: '郑十',
    age: 18,
    sex: 1,
    address: '陕西省西安市莲湖区',
    job: '后端工程师',
    updateTime: '2024-05-31 12:00:00'
  },
  {
    key: '9',
    name: '李明',
    age: 21,
    sex: 1,
    address: '北京市朝阳区',
    job: 'UI设计师',
    updateTime: '2024-05-18 12:00:00'
  },
  {
    key: '10',
    name: '刘禅',
    age: 321,
    sex: 1,
    address: '四川省成都市成华区',
    job: '皇帝',
    updateTime: '2024-06-02 12:00:00'
  },
  {
    key: '11',
    name: '大风起',
    age: 19,
    sex: 1,
    address: '天津市和平区',
    job: '自由职业者',
    updateTime: '2024-06-06 12:00:00'
  }
];
