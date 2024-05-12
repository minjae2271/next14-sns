import { http, HttpResponse } from 'msw';
import {faker} from "@faker-js/faker";

const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg'},
  {id: 'leoturtle', nickname: '레오', image: faker.image.avatar()},
]

export const handlers = [ 
    http.post('/api/users', async () => {
      console.log('회원가입');
      // return HttpResponse.text(JSON.stringify('users_exists'), {
      //   status: 403,
      // })
      return HttpResponse.json({id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'}, {
        headers: {
          'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
        }
      })
    }),
    http.post('/api/login', () => {
        console.log('로그인');
        return HttpResponse.json({id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'}, {
          headers: {
            'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
          }
        })
    }),
    http.post('/api/logout', () => {
      console.log('로그아웃');
      return new HttpResponse(null, {
        headers: {
          'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
        }
      })
    }),
    http.get('api/postRecommends', () => {
      console.log("게시글");
      return HttpResponse.json(
        [
          {
            postId: 1,
            User: {
              id: 'elonmusk',
              nickname: 'Elon',
              image: '/yRsRRjGO.jpg',
            },
            content: 'take her 2 pound town',
            Images: [
              {
                ImageId: 1,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 2,
            User: {
              id: 'saitama',
              nickname: 'hero',
              image: '/yRsRRjGO.jpg',
            },
            content: '진심 펀치',
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 3,
            User: {
              id: 'agumon',
              nickname: 'digimon',
              image: '/yRsRRjGO.jpg',
            },
            content: '태일아 진화 시켜줘',
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
        ]
      )
    }),
    http.get('api/followingPosts', () => {
      console.log("팔로잉 게시글");
      return HttpResponse.json(
        [
          {
            postId: 1,
            User: {
              id: 'elonmusk',
              nickname: 'Elon',
              image: '/yRsRRjGO.jpg',
            },
            content: 'stop following me!',
            Images: [
              {
                ImageId: 1,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 2,
            User: {
              id: 'saitama',
              nickname: 'hero',
              image: '/yRsRRjGO.jpg',
            },
            content: 'stop following me!',
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 3,
            User: {
              id: 'agumon',
              nickname: 'digimon',
              image: '/yRsRRjGO.jpg',
            },
            content: 'stop following me!',
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
        ]
      )
    }),
    http.get('api/search/:tag', ({request, params}) => {
      console.log("검색 게시글");
      const tag = params.tag
      return HttpResponse.json(
        [
          {
            postId: 1,
            User: {
              id: 'elonmusk',
              nickname: 'Elon',
              image: '/yRsRRjGO.jpg',
            },
            content: `search result ${tag}`,
            Images: [
              {
                ImageId: 1,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 2,
            User: {
              id: 'saitama',
              nickname: 'hero',
              image: '/yRsRRjGO.jpg',
            },
            content: `search result ${tag}`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 3,
            User: {
              id: 'agumon',
              nickname: 'digimon',
              image: '/yRsRRjGO.jpg',
            },
            content: `search result ${tag}`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
        ]
      )
    }),
    http.get('/api/users/:userId/posts', ({request, params}) => {
      console.log("유저 게시글");

      const {userId} = params;

      return HttpResponse.json(
        [
          {
            postId: 1,
            User: {
              id: 'elonmusk',
              nickname: 'Elon',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId}의 글`,
            Images: [
              {
                ImageId: 1,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 2,
            User: {
              id: 'saitama',
              nickname: 'hero',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId}의 글`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 3,
            User: {
              id: 'agumon',
              nickname: 'digimon',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId}의 글`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
        ]
      )
    }),
    http.get('/api/users/:userId', ({request, params}) => {
      console.log("사용자");

      const {userId} = params;

      const found = User.find((v) => v.id === userId);
      if (found) {
        return HttpResponse.json(
          found,
        )
      }
      
      return HttpResponse.json({
        message: 'no-such-user'
      }, {
        status: 404,
      })
    }),
    http.get('/api/posts/:postId', ({request, params}) => {
      console.log("게시글");

      const {postId} = params;

      if (parseInt(postId as string) > 10) {

      }

      return HttpResponse.json(
        {
          postId: 1,
          User: {
            id: 'elonmusk',
            nickname: 'Elon',
            image: '/yRsRRjGO.jpg',
          },
          content: `게시글 ${postId}`,
          Images: [
            {
              ImageId: 1,
              link: faker.image.urlLoremFlickr()
            }
          ],
          createdAt: new Date(Date.now())
        }
      )
    }),
    http.get('/api/posts/:postId/comments', ({request, params}) => {
      console.log("댓글");

      const {userId, postId} = params;

      return HttpResponse.json(
        [
          {
            postId: 1,
            User: {
              id: 'elonmusk',
              nickname: 'Elon',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId} 글의 답 ${postId}`,
            Images: [
              {
                ImageId: 1,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 2,
            User: {
              id: 'saitama',
              nickname: 'hero',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId} 글의 답 ${postId}`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
          {
            postId: 3,
            User: {
              id: 'agumon',
              nickname: 'digimon',
              image: '/yRsRRjGO.jpg',
            },
            content: `${userId} 글의 답 ${postId}`,
            Images: [
              {
                ImageId: 2,
                link: faker.image.urlLoremFlickr()
              }
            ],
            createdAt: new Date(Date.now())
          },
        ]
      )
    }),
    http.get('api/followRecommends', ({request, params}) => {
      return HttpResponse.json(User);
    }),
    http.get('api/trends', ({request, params}) => {
      return HttpResponse.json(
        [
          {tagId: 1, title: "제로초", count: 1234},
          {tagId: 2, title: "원초", count: 1235},
          {tagId: 3, title: "투초", count: 1236},
        ]
      )
    })
]