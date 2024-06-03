import { useState } from 'react';
import { Form, Input, Select, Button, Table } from 'antd';
import { columns, data } from './data';

export interface SearchTableProps {
  name: string;
  age: number;
  sex: number;
}
function SearchTable() {
  const [form] = Form.useForm();
  // 筛选
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(data);
  const handleSearch = (values: SearchTableProps) => {
    setLoading(true);
    // 模拟数据过滤
    setTimeout(() => {
      const { name, age, sex } = values;
      const resName = name ? data.filter(item => item.name === name) : data;
      const resAge = age
        ? resName.filter(item => item.age === Number(age))
        : resName;
      const result = sex ? resAge.filter(item => item.sex === sex) : resAge;

      setTableData(result);
      setLoading(false);
    }, 2000);
  };
  // 重置
  const handleReset = () => {
    form.resetFields();
    setTableData(data);
  };

  return (
    <div className="bg-white w-full h-full p-4">
      <Form
        layout="inline"
        form={form}
        className="mb-4 flex"
        onFinish={handleSearch}
      >
        <Form.Item name="name" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="sex" label="性别">
          <Select
            style={{ width: 180 }}
            options={[
              { label: '男', value: 0 },
              { label: '女', value: 1 }
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mr-2">
            搜索
          </Button>
          <Button type="default" onClick={handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={tableData}
        loading={loading}
        bordered
      />
    </div>
  );
}

export default SearchTable;
