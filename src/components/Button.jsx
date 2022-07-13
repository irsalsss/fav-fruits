import React from 'react';
import { Button as ButtonAntd } from 'antd';

const Button = ({
  type,
  isLoading,
  value,
  size,
  htmlType,
  onClick
}) => {
  return (
    <ButtonAntd 
      type={type}
      loading={isLoading}
      size={size}
      htmlType={htmlType}
      onClick={onClick}
    >
      {value}
    </ButtonAntd>
  )
}

Button.defaultProps = {
  type: 'primary',
  isLoading: false,
  value: '',
  size: 'middle',
};

export default Button