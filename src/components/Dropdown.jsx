import React, { useMemo } from 'react'
import { Dropdown as DropdownAntd, Menu } from 'antd';

const Dropdown = ({
  children,
  placement,
  onClick,
  options
}) => {

  const menu = useMemo(() => (
    <Menu onClick={onClick}>
      {options.map((v) => (
        <Menu.Item key={v.key}>{v.label}</Menu.Item>
      ))}
    </Menu>
  ), [options]);
  
  return (
    <DropdownAntd
      overlay={menu}
      placement={placement}
      arrow={{
        pointAtCenter: true,
      }}
    >
      <div>
        {children}
      </div>
    </DropdownAntd>
  )
}

export default Dropdown