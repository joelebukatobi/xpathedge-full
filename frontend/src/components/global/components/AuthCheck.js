// Next JS
import { useRouter } from 'next/router';
// Redux Toolkit
import { useSelector } from 'react-redux';
// Components
import Loading from '@/admin//components//Loading';
export const AuthCheck = (props) => {
  const { data } = useSelector((state) => state.user);
  const pathname = useRouter.pathname;
  const navigate = useRouter().push;

  // if (!data) return <Loading />;
  if (pathname === '/admin' && !data) {
    navigate('/admin/login');
  }

  return props.children;
};
