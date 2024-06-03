import { Table } from 'antd';
import { columns, data } from './data';

function BaseTable() {
  return (
    <div className="bg-white w-full h-full p-4">
      <Table columns={columns} dataSource={data} bordered />
    </div>
  );
}

export default BaseTable;
