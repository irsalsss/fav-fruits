import React from 'react';
import { Input as InputAntd } from 'antd';
import clsx from 'clsx';
import Icon from './Icon';
import Text from './Text';

const Input = ({
  value,
  label,
  description,
  onChange,
  onClear,
  className,
  wrapperClassname,
  placeholder,
  isRequired,
}) => {
  return (
    <div>
      <div className="flex mb-[8px]">
        {label && (
          <Text
            type="h7-600"
            value={label}
            className="ml-[16px]"
          />
        )}
        {isRequired && (
          <sup className="text-red-30">*</sup>
        )}
      </div>
      <div className={clsx('relative', wrapperClassname)}>
        <InputAntd
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx('custom-ant-input', className, onClear && 'pr-36px')}
        />
        {description && (
          <Text
            type="microtext1-400"
            value={description}
            className="px-[16px] mt-[8px]"
            color="grey-40"
          />
        )}
        {onClear && (
          <div
            tabIndex={0}
            role="button"
            className="absolute top-[12px] right-[12px]"
            onClick={onClear}
          >
            <Icon
              icon="close"
              iconClass="h-[24px] w-[24px]"
              iconColor="light-grey-30"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Input.defaultProps = {
  value: '',
  label: '',
  description: '',
  className: '',
  wrapperClassname: '',
  placeholder: '',
  onChange: undefined,
  onClear: undefined,
  isRequired: false,
};

export default Input;
