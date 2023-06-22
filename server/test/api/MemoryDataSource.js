export default class MemoryDataSource {
  async createUser(user) {
    return user;
  }

  async readUsers() {
    return [
      {
        id: 1,
        user_id: 'wngud9646',
        password: 'lee1234',
        username: '이주형',
        email: 'wngud9646@gmail.com',
        role: 'streamer',
        cash: 20000,
        created_at: '23/06/14-09:53:52',
        modified_at: '23/06/14-09:53:52',
      },
      {
        id: 39590,
        user_id: 'ibocok0',
        password: 'eiobhlse',
        username: '김예성',
        email: 'ibocok0@gmail.com',
        role: 'student',
        cash: 0,
        created_at: 'Thu Jun 15 2023 23:35:11 GMT+0900 (대한민국 표준시)',
        modified_at: 'Thu Jun 15 2023 23:35:11 GMT+0900 (대한민국 표준시)',
      },
      {
        id: 48943,
        user_id: 'ibocon',
        username: '김예건',
        password: 'eolidkb53',
        email: 'wlfka1020@gmail.com',
        role: 'developer',
        cash: 9999999999,
        created_at: 'Thu Oct 11 1994 23:35:23 GMT+0900 (대한민국 표준시)',
        modified_at: 'Thu Jun 15 2023 23:35:23 GMT+0900 (대한민국 표준시)',
      },
    ];
  }

  async readUser(userId) {
    return {
      id: userId,
      user_id: 'wngud9646',
      password: 'lee1234',
      username: '이주형',
      email: 'wngud9646@gmail.com',
      role: 'streamer',
      cash: 20000,
      created_at: '23/06/14-09:53:52',
      modified_at: '23/06/14-09:53:52',
    }
  }

  async updateUser(userId) {
    const today = Date(Date.now()).toString();
    return {
      id: userId,
      user_id: 'wngud9646',
      password: 'lee1234',
      username: '존도우',
      email: 'wngud9646@gmail.com',
      role: 'streamer',
      cash: 100,
      created_at: '23/06/14-09:53:52',
      modified_at: today,
    }
  }

  async deleteUser(userId) {
    return {
      id: userId,
      user_id: 'hacker',
      password: 'hacked',
      username: '존도우',
      email: 'doe@gmail.com',
      role: 'streamer',
      cash: 999999,
      created_at: '23/06/14-09:53:52',
      modified_at: '23/06/14-09:53:52',
    }
  }
}
