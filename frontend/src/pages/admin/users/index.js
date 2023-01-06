// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Modal from '@/admin//components/Modal';
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { useDispatch } from 'react-redux';
import { getUser } from '@/features//user/userActions';

export default function index({ token, users }) {
  // Route
  const navigate = useRouter().push;
  // State
  const [slug, setSlug] = useState('');
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');

  // Toggle Modal
  const toggle = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .then((data) => {
        setUser(data);
      });
  }, []);

  if (user && user.role.id !== 1) {
    navigate('/admin');
  }
  // Set ID
  let id = 1;
  return (
    <Layout>
      <div>
        <header className="flex items-center">
          <h3 className="text-black/90 mr-[1.6rem]">Users</h3>
          <div className="tag">
            <p>
              <Link href="/admin/users/register/">Create New</Link>
            </p>
          </div>
        </header>
        <div className="mt-[2.4rem] border-[.1rem] border-black/10 rounded-[.8rem]">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th className="w-2/6">Email</th>
                <th>Username</th>
                <th>Role</th>
                <th className="@apply rounded-tr-[.8rem] w-[10%] pl-[0]">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{id++}</td>
                    <td className="first-letter:capitalize">{user.first_name + ' ' + user.last_name}</td>
                    <td className="lowercase">{user.email}</td>
                    <td className="lowercase">{user.username}</td>
                    <td>{user.role.name}</td>
                    <td>
                      <div className="flex items-center gap-x-[.8rem] pl-[1.6rem]">
                        <Link href={`/admin/users/${user.username}/`}>
                          <svg className="hover:stroke-green-600">
                            <use href={`/images/sprite.svg#icon-post`} />
                          </svg>
                        </Link>
                        <div onClick={(e) => (e.preventDefault(), setSlug(user.username), setOpen(toggle))}>
                          <svg className="hover:stroke-red-600">
                            <use href={`/images/sprite.svg#icon-trash`} />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal open={open} close={setOpen} modal="users" text={'user'} slug={slug} token={token} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return {
    props: {
      token,
      users: data.users,
    },
  };
}
