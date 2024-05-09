import { http, HttpResponse } from 'msw';
import {faker} from "@faker-js/faker";

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
    })
]