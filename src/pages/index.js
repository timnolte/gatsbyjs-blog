import React from 'react';
import Layout from '../components/layouts/Home';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Main from '../components/Main';

const posts = [
  {
    title: 'Title of a longer featured blog post',
    date: 'Jan 26',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading...',
  },
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'Continue reading...',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'Continue reading...',
  },
];

export default function Index() {
  return (
    <React.Fragment>
      <Layout>
        <Main posts={posts} />
      </Layout>
    </React.Fragment>
  );
}
