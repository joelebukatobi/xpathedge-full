// React
import { useState } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Link from 'next/link';
// Redux Toolkit
import { useDispatch } from 'react-redux';
import { userLogout } from '@/features///user/userActions';

export default function Sidebar({ user }) {
  // State
  console.log(user);
  const [open, setOpen] = useState(false);
  //
  const pathname = useRouter().pathname;
  const navigate = useRouter().push;
  // Logout Dispatch
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => navigate('/admin/login'));
  };

  // Toggle Menu
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="sidebar">
      <div className="">
        <ul>
          <li
            className={`
            ${pathname === '/admin' ? ' text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${pathname === '/admin' ? ' stroke-black' : 'stroke-black/70'}`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 22V12H15V22" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <Link href="/admin">Dashboard</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${pathname === '/admin/posts' || pathname.includes('posts') ? 'text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/posts' || pathname.includes('posts') ? ' stroke-black' : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link href="/admin/posts">Posts</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/categories' || pathname.includes('categories')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/categories' || pathname.includes('categories')
                      ? 'stroke-black'
                      : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="17" cy="17" r="3" stroke="" strokeWidth="2" />
                  <path
                    d="M4 19V15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M4 9V5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z"
                    stroke=""
                    strokeWidth="2"
                  />
                  <path
                    d="M14 9V5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9Z"
                    stroke=""
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <Link href="/admin/categories">Categories</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${pathname === '/admin/tags' || pathname.includes('tags') ? ' text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/tags' || pathname.includes('tags') ? ' stroke-black' : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link href="/admin/tags">Tags</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/services' || pathname.includes('services')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/services' || pathname.includes('services')
                      ? ' stroke-black fill-black'
                      : 'stroke-black/70 fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_723_4)">
                    <path
                      d="M19.3665 7.59317C19.0388 5.87954 18.1239 4.33378 16.7794 3.22199C15.4348 2.1102 13.7447 1.50195 12 1.50195C10.2553 1.50195 8.56524 2.1102 7.22068 3.22199C5.87612 4.33378 4.96123 5.87954 4.63352 7.59317C3.24929 7.83955 2.00762 8.59566 1.15338 9.71238C0.299137 10.8291 -0.105671 12.2254 0.018785 13.6258C0.143241 15.0263 0.787928 16.3293 1.82571 17.2779C2.86349 18.2264 4.21903 18.7517 5.62502 18.7502H6.00002V17.2502H5.62502C4.55443 17.253 3.52477 16.8391 2.7539 16.0962C1.98304 15.3533 1.53146 14.3396 1.49472 13.2696C1.45799 12.1997 1.83897 11.1574 2.55707 10.3634C3.27516 9.56932 4.27401 9.08582 5.34227 9.01517L5.96927 8.97242L6.03676 8.34767C6.19681 6.87789 6.89402 5.51898 7.99459 4.53175C9.09516 3.54452 10.5215 2.99851 12 2.99851C13.4785 2.99851 14.9049 3.54452 16.0054 4.53175C17.106 5.51898 17.8032 6.87789 17.9633 8.34767L18.0308 8.97242L18.6578 9.01592C19.7239 9.08937 20.7198 9.57399 21.4355 10.3676C22.1511 11.1611 22.5307 12.2016 22.494 13.2696C22.4573 14.3376 22.0073 15.3496 21.2389 16.0922C20.4704 16.8349 19.4436 17.25 18.375 17.2502H18V18.7502H18.375C19.781 18.7517 21.1365 18.2264 22.1743 17.2779C23.2121 16.3293 23.8568 15.0263 23.9812 13.6258C24.1057 12.2254 23.7009 10.8291 22.8467 9.71238C21.9924 8.59566 20.7507 7.83955 19.3665 7.59317Z"
                      className={`${
                        pathname === '/admin/services' || pathname.includes('services')
                          ? '  fill-black'
                          : ' fill-black/70'
                      }`}
                    />
                    <path
                      d="M17.25 16.5V15H15.6743C15.5775 14.5305 15.3911 14.0841 15.1252 13.6852L16.2427 12.5677L15.1823 11.5073L14.0648 12.6248C13.6659 12.3589 13.2195 12.1725 12.75 12.0757V10.5H11.25V12.0757C10.7805 12.1725 10.3341 12.3589 9.93525 12.6248L8.81775 11.5073L7.75725 12.5677L8.87475 13.6852C8.60888 14.0841 8.42248 14.5305 8.32575 15H6.75V16.5H8.32575C8.42248 16.9695 8.60888 17.4159 8.87475 17.8148L7.75725 18.9323L8.81775 19.9927L9.93525 18.8752C10.3341 19.1411 10.7805 19.3275 11.25 19.4243V21H12.75V19.4243C13.2195 19.3275 13.6659 19.1411 14.0648 18.8752L15.1823 19.9927L16.2427 18.9323L15.1252 17.8148C15.3911 17.4159 15.5775 16.9695 15.6743 16.5H17.25ZM12 18C11.555 18 11.12 17.868 10.75 17.6208C10.38 17.3736 10.0916 17.0222 9.92127 16.611C9.75097 16.1999 9.70642 15.7475 9.79323 15.311C9.88005 14.8746 10.0943 14.4737 10.409 14.159C10.7237 13.8443 11.1246 13.63 11.561 13.5432C11.9975 13.4564 12.4499 13.501 12.861 13.6713C13.2722 13.8416 13.6236 14.13 13.8708 14.5C14.118 14.87 14.25 15.305 14.25 15.75C14.2494 16.3466 14.0122 16.9185 13.5903 17.3403C13.1685 17.7622 12.5966 17.9994 12 18Z"
                      className={`${
                        pathname === '/admin/services' || pathname.includes('services')
                          ? '  fill-black'
                          : ' fill-black/70'
                      }`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_723_4">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <Link href="/admin/services">Services</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/careers' || pathname.includes('careers') ? ' text-black font-bold' : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/careers' || pathname.includes('careers') ? ' fill-black' : 'fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17ZM6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16H8Z"
                    className={`${
                      pathname === '/admin/careers' || pathname.includes('careers') ? ' fill-black' : 'fill-black/70'
                    }`}
                  />
                </svg>
              </div>
              <Link href="/admin/careers">Careers</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/contacts' || pathname.includes('contacts')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/contacts' || pathname.includes('contacts') ? ' fill-black' : 'fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14C12.55 14 13.021 13.804 13.413 13.412C13.8043 13.0207 14 12.55 14 12C14 11.45 13.8043 10.979 13.413 10.587C13.021 10.1957 12.55 10 12 10C11.45 10 10.9793 10.1957 10.588 10.587C10.196 10.979 10 11.45 10 12C10 12.55 10.196 13.0207 10.588 13.412C10.9793 13.804 11.45 14 12 14ZM8 18H16V17.425C16 17.025 15.8917 16.6583 15.675 16.325C15.4583 15.9917 15.1583 15.7417 14.775 15.575C14.3417 15.3917 13.896 15.25 13.438 15.15C12.9793 15.05 12.5 15 12 15C11.5 15 11.0207 15.05 10.562 15.15C10.104 15.25 9.65833 15.3917 9.225 15.575C8.84167 15.7417 8.54167 15.9917 8.325 16.325C8.10833 16.6583 8 17.025 8 17.425V18ZM18 22H6C5.45 22 4.97933 21.8043 4.588 21.413C4.196 21.021 4 20.55 4 20V4C4 3.45 4.196 2.979 4.588 2.587C4.97933 2.19567 5.45 2 6 2H14L20 8V20C20 20.55 19.8043 21.021 19.413 21.413C19.021 21.8043 18.55 22 18 22ZM18 20V8.85L13.15 4H6V20H18Z"
                    className={`${
                      pathname === '/admin/contacts' || pathname.includes('contacts') ? ' fill-black' : 'fill-black/70'
                    }`}
                  />
                </svg>
              </div>
              <Link href="/admin/contacts">Contacts</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${pathname === '/admin/teams' || pathname.includes('teams') ? ' text-black font-bold' : 'text-black/70'}`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/teams' || pathname.includes('teams') ? ' stroke-black' : 'stroke-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link href="/admin/teams">Teams</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li
            className={`
            ${
              pathname === '/admin/projects' || pathname.includes('projects')
                ? ' text-black font-bold'
                : 'text-black/70'
            }`}
          >
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className={`${
                    pathname === '/admin/projects' || pathname.includes('projects') ? ' fill-black' : 'fill-black/70'
                  }`}
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16H16V14H18V12H16V10H14V12H12V14H14V16ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H10L12 6H20C20.55 6 21.021 6.196 21.413 6.588C21.8043 6.97933 22 7.45 22 8V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM4 6V18H20V8H11.175L9.175 6H4Z"
                    className={`${
                      pathname === '/admin/projects' || pathname.includes('projects') ? ' fill-black' : 'fill-black/70'
                    }`}
                  />
                </svg>
              </div>
              <Link href="/admin/projects">Projects</Link>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <path
                d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          {user && user.role.id === 1 ? (
            <li
              className={`${
                pathname === '/users' || pathname.includes('users')
                  ? ' text-black font-bold no-highlight'
                  : 'text-black/70'
              }`}
              onClick={toggle}
            >
              <div className="flex items-center">
                <div className="h-[2rem]">
                  <svg
                    className={`${
                      pathname === '/user' || pathname.includes('user') ? ' stroke-black' : 'stroke-black/70'
                    }`}
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Users
              </div>
              <svg
                className={`${
                  open && (pathname === '/users' || pathname.includes('users'))
                    ? ' stroke-black rotate-180'
                    : 'stroke-black/70'
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <ul className={open ? 'block no-highlight' : 'hidden'}>
                <li>
                  <Link href="/admin/users">All Users</Link>
                </li>
                <li>
                  <Link href={`/admin/users/${user.username}`}>My Profile</Link>
                </li>
              </ul>
            </li>
          ) : (
            <li
              className={`${
                pathname === '/users' || pathname.includes('users') ? ' text-black font-bold' : 'text-black/70'
              }`}
            >
              <div className="flex items-center">
                <div className="h-[2rem]">
                  <svg
                    className={`${
                      pathname === '/users' || pathname.includes('users') ? ' stroke-black' : 'stroke-black/70'
                    }`}
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke=""
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Link href={`/admin/users/${user.username}`}>Profile</Link>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden"
              >
                <path
                  d="M6.19043 9.36914L12.1904 15.3691L18.1904 9.36914"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          )}
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-black/70 hover:text-black">
            <div className="flex items-center">
              <div className="h-[2rem]">
                <svg
                  className="stroke-black/70 hover:stroke-black"
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.2959 21.5586H5.2959C4.76547 21.5586 4.25676 21.3479 3.88168 20.9728C3.50661 20.5977 3.2959 20.089 3.2959 19.5586V5.55859C3.2959 5.02816 3.50661 4.51945 3.88168 4.14438C4.25676 3.76931 4.76547 3.55859 5.2959 3.55859H9.2959"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2959 17.5586L21.2959 12.5586L16.2959 7.55859"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.2959 12.5586H9.2959"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                onClick={(e) => (
                  e.preventDefault(),
                  setTimeout(() => {
                    logout();
                  }, 1500)
                )}
              >
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
