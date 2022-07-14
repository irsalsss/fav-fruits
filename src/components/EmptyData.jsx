import React from 'react';
import { Empty } from 'antd';

const EmptyData = ({ desc }) => (
  <Empty description={desc} />
);

EmptyData.defaultProps = {
  desc: 'No Data'
};

export default EmptyData;
