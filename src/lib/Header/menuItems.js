export default [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
    children: [
      { name: 'History', url: '/about/history' },
      { name: 'Education', url: '/about/education' },
    ],
  },
  {
    name: 'Gallery',
    url: '/gallery',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]
