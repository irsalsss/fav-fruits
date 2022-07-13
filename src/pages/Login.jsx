import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import shallow from 'zustand/shallow';
import { v4 as uuidv4 } from 'uuid';
import Input from '../components/Input';
import Text from '../components/Text';
import Button from '../components/Button';
import useStoreFavorite from '../store/favorite';
import { isEmpty, setCookie } from '../utils/general';
import { login } from '../services/auth';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const {
    favorite,
    setInitialFavorite,
    setActiveUser
  } = useStoreFavorite(
    (state) => ({
      favorite: state.favorite,
      setInitialFavorite: state.setInitialFavorite,
      setActiveUser: state.setActiveUser
    }),
    shallow
  );

  const onChange = (e) => {
    if (error) {
      setError('')
    }

    setForm(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { username, password } = form;

    if (!username || !password) {
      setError('Username or password should not be empty')
      setIsLoading(false);
      return
    }

    const user = await login(username, password);
    if (!user) {
      setError('Username or password is incorrect')
      setIsLoading(false);
      return
    }

    delete user.password;
    setActiveUser(user);
    setCookie('jwtToken', uuidv4(), { expires: 1 })

    message.success('Successfully login, please wait a moment', 2, () => {
      location.href = '/';
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }

  useEffect(() => {
    if (isEmpty(favorite)) {
      setInitialFavorite()
    }
  }, [])

  return (
    <div id="container-login">
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] custom-border p-[24px] w-[360px]">
        <Text value="Login" level={1} />
        <Input
          value={form.username}
          onChange={onChange}
          label="Username"
          name="username"
          type="username"
          wrapperClassname="mb-[16px]"
        />
        <Input
          value={form.password}
          onChange={onChange}
          label="Password"
          type="password"
          name="password"
          wrapperClassname="mb-[8px]"
        />
        <div className="mb-[16px]">
          <Text
            isTitle={false}
            value={error}
            type="danger"
          />
        </div>
        <Button
          isLoading={isLoading}
          onClick={onSubmitForm}
          value="Submit"
        />
      </div>
    </div>
  )
}

export default Login