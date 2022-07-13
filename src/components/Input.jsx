import React from 'react';
import { Input as InputAntd } from 'antd';
import clsx from 'clsx';
import Text from './Text';

const Input = ({
  value,
  type,
  label,
  name,
  description,
  onChange,
  className,
  wrapperClassname,
  placeholder,
  isRequired,
}) => {
  return (
    <div>
      <div className="flex">
        {label && (
          <Text
            level={5}
            value={label}
          />
        )}
        {isRequired && (
          <sup className="text-red-30">*</sup>
        )}
      </div>
      <div className={clsx('relative', wrapperClassname)}>
        <InputAntd
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx('custom-ant-input', className)}
        />
        {description && (
          <Text
            type="microtext1-400"
            value={description}
            className="px-[16px] mt-[8px]"
            color="grey-40"
          />
        )}
      </div>
    </div>
  );
};

Input.defaultProps = {
  type: '',
  value: '',
  label: '',
  name: '',
  description: '',
  className: '',
  wrapperClassname: '',
  placeholder: '',
  onChange: undefined,
  isRequired: false,
};

export default Input;
