import React from 'react';
import { Button, Result } from 'antd';
import useRoute from '../hook/useRoute';

const NotFound = () => {
  const { to } = useRoute()
  return (
    <div className="flex flex-1 justify-center grow items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={() => to('')} type="primary">Back Home</Button>}
      />
    </div>
  )
}

export default NotFound