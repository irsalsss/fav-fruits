import React from 'react';
import { Typography } from 'antd';

const { Text: TextAntd, Title } = Typography;

const Text = ({
  type,
  level,
  value,
  isTitle,
  className
}) => {
  if (!isTitle) {
    return (
      <TextAntd
        type={type}
        className={className}
      >
        {value}
      </TextAntd>
    )
  }

  return (
    <Title
      level={level}
      className={className}
    >
      {value}
    </Title>
  )
};

Text.defaultProps = {
  type: '',
  level: null,
  label: '',
  isTitle: true,
  className: '',
};

export default Text;