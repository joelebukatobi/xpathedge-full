// React
import { useEffect, useState } from 'react';
// Next JS
import Link from 'next/link';
// Components
import Card from '@/admin//components//Card';
import Layout from '@/admin//layouts/Layout';
// Config & Helpers
import { API_URL } from '@/config/index';
// External Libraries
import moment from 'moment/moment';

export default function index({ posts, categories, tags }) {
  // Set ID
  let id = 1;
  return (
    <Layout>
      <div className="flex justify-between">
        <Card caption={'posts'} total={`${posts.length}`} svg={'icon-post'} />
        <Card caption={'tags'} total={`${tags.length}`} svg={'icon-tag'} />
        <Card caption={'categories'} total={`${categories.length}`} svg={'icon-category'} />
        <Card caption={'users'} total={'2'} svg={'icon-user'} />
      </div>
      <div className="mt-[4rem]">
        <div className=" border-[.1rem] border-black/10 rounded-[.8rem]">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Category</th>
                <th>Published Date</th>
                <th>Author</th>
                <th className="@apply rounded-tr-[.8rem] w-[10%] pl-[0]">Edit</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{id++}</td>
                    <td className="capitalize">{post.title}</td>
                    <td className="first-letter:capitalize">{post.category.name}</td>
                    <td>{moment(post.created_at).format('L')}</td>
                    <td>{post.user.first_name + ' ' + post.user.last_name}</td>
                    <td>
                      <div className="flex items-center gap-x-[.8rem]">
                        <Link href={`/admin/posts/${post.slug}/`}>
                          <svg className="hover:stroke-green-600">
                            <use href={`/images/sprite.svg#icon-post`} />
                          </svg>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  // const { token } = parseCookies(req);
  const res = await Promise.all([
    fetch(`${API_URL}/api/posts`),
    fetch(`${API_URL}/api/categories`),
    fetch(`${API_URL}/api/tags`),
  ]);

  const data = await Promise.all(res.map((res) => res.json()));

  return {
    props: {
      posts: data[0].posts,
      categories: data[1].categories,
      tags: data[2].tags,
    },
  };
}
