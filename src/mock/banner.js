import Mock from 'mockjs'


Mock.mock('/api/banner', 'get', {
    code: 403,
    msg: '',
    data: [
        {
            id: 1,
            midImg: 'https://w.wallhaven.cc/full/qz/wallhaven-qz8z3d.jpg',
            bigImg: 'https://w.wallhaven.cc/full/qz/wallhaven-qz8z3d.jpg',
            title: '1',
            description: ''
        },
        {
            id: 2,
            midImg: 'https://w.wallhaven.cc/full/p9/wallhaven-p9x8rm.jpg',
            bigImg: 'https://w.wallhaven.cc/full/p9/wallhaven-p9x8rm.jpg',
            title: '1',
            description: ''
        },
        {
            id: 3,
            midImg: 'https://w.wallhaven.cc/full/5g/wallhaven-5g8w27.jpg',
            bigImg: 'https://w.wallhaven.cc/full/5g/wallhaven-5g8w27.jpg',
            title: '1',
            description: ''
        },
        {
            id: 4,
            midImg: 'https://w.wallhaven.cc/full/ex/wallhaven-exrj5r.jpg',
            bigImg: 'https://w.wallhaven.cc/full/ex/wallhaven-exrj5r.jpg',
            title: '1',
            description: ''
        },
        {
            id: 5,
            midImg: 'https://w.wallhaven.cc/full/o5/wallhaven-o5v8pm.png',
            bigImg: 'https://w.wallhaven.cc/full/o5/wallhaven-o5v8pm.png',
            title: '1',
            description: ''
        },

    ]
})