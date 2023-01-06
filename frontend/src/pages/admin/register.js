// React
import { useState, useEffect } from 'react';
// Next JS
import { useRouter } from 'next/router';
// Components
import Input from '@/admin//element/Input';
import Select from '@/admin//element/Select';
import Button from '@/admin//element/Button';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/features//user/userActions';
//
export default function Register() {
  const navigate = useRouter().push;

  const { error, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(1);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (success === true) {
      toast.success(`Success: User created`);
      setTimeout(() => {
        navigate('/admin/login');
      }, 5000);
    }
  }, [navigate, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      role_id: role,
    };
    dispatch(registerUser(data));
  };
  return (
    <div id="admin">
      <div className="register">
        <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
        <section>
          <header>
            <figure>
              <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V17C13 15.8954 13.8954 15 15 15H19C20.1046 15 21 15.8954 21 17V19ZM11 19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11H9C10.1046 11 11 11.8954 11 13V19ZM21 11C21 12.1046 20.1046 13 19 13H15C13.8954 13 13 12.1046 13 11V5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V11ZM11 7C11 8.10457 10.1046 9 9 9H5C3.89543 9 3 8.10457 3 7V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V7Z"
                  fill=""
                />
              </svg>
            </figure>
            <h2>
              Admin <br />
              Dashboard
            </h2>
          </header>
          <p>To register an account kindly enter your credentials below</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex gap-x-[2.4rem] justify-between">
              <Input
                type={'text'}
                placeholder={'First Name'}
                classButton={'top-[.8rem] invisible'}
                label={'First Name'}
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'Last Name'}
                classButton={'top-[.8rem] invisible'}
                label={'Last Name'}
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="flex gap-x-[2.4rem] justify-between">
              <Input
                type={'email'}
                placeholder={'Email'}
                classButton={'top-[.8rem] invisible'}
                label={'Email'}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'Username'}
                classButton={'top-[.8rem] invisible'}
                label={'Username'}
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Input
                type={'text'}
                placeholder={'Role '}
                classButton={'top-[.8rem] invisible'}
                label={'Role'}
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={'hidden'}
              />
            </div>
            <div className="flex gap-x-[2.4rem] justify-between">
              <Input
                type={'password'}
                placeholder={'Password'}
                classButton={'top-[.8rem] invisible'}
                label={'Password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type={'password'}
                placeholder={'Confirm Password'}
                classButton={'top-[.8rem] invisible'}
                label={'Confirm Password'}
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <Button className={'mt-[.8rem]'}>Register</Button>
          </form>
        </section>
      </div>
    </div>
  );
}
