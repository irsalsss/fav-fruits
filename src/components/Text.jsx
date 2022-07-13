import React from 'react';
import { Typography } from 'antd';
const { Text: TextAntd, Title } = Typography;

const Text = ({
  type,
  level,
  value,
  isTitle
}) => {
  if (!isTitle) {
    return (
      <TextAntd type={type}>{value}</TextAntd>
    )
  }

  return (
    <Title level={level}>{value}</Title>
  )
};

Text.defaultProps = {
  type: '',
  level: null,
  label: '',
  isTitle: true,
};

export default Text;