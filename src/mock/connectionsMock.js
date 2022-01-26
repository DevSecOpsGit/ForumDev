import mock from '../utils/mock';

mock.onGet('/api/connections/followers/adm').reply(200, {
  followers: [
    {
      id: 1,
      user: {
        id: 1,
        name: '',
        username: '',
        avatar: '',
      },
      following: false,
    },
  ],
});

mock.onGet('/api/connections/following/adm').reply(200, {
  following: [
    {
      id: 1,
      user: {
        id: 1,
        name: '',
        username: '',
        avatar: '',
      },
    },
  ],
});
