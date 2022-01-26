import mock from '../utils/mock';

mock.onGet('/api/connections/followers/lucasnhimi').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/avatar_10.png',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/lucasnhimi').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Fernanda Souza',
        username: 'fersouza10',
        avatar: '/images/avatars/avatar_10.png',
      },
    },
  ],
});
