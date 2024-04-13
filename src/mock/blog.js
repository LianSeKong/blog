import Mock from 'mockjs'
import querystring from 'querystring'

Mock.mock('/api/blogtype', 'get', {
    code: 200,
    msg: '',
    'data|10-20': [
        {
            'id|+1': 1,
            name: '分类@id',
            'articleCount|1-100': 1,
            "order|+1": 1
        },
    ]
})


Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function(options) {
    const q = querystring.parse(options.url)
    return Mock.mock({
        code: 200,
        msg: '',
        'data|10-20': {
            "total|2000-3000": 0,
            [`row|${q.limit || 10}`]: [
                {
                    id: '@guid',
                    title: '@ctitle(10, 50)',
                    description: '@cparagraph(1, 10)',
                    category: {
                        'id|1-10': 0,
                        name: '分类@id'
                    },
                    'scanNumber|0-3000': 0,
                    "commentNumber|0-300": 30,
                    thumb: Mock.Random.image('300x250', '#000', '#fff', 'random image' ),
                    createDate: `@date('T')`
                }
            ]
        }
    })
})

Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    code: 200,
    msg: '',
    data: {
        id: '@guid',
        title: 'CoRS跨域方案详解',
        category: {
            'id|1-10': 0,
            name: '分类@id'
        },
        'scanNumber|0-1000': 0,
        "commentNumber|0-100": 0,
        description: '@cparagraph(1, 10)',
        createDate: `@date('T')`,
        toc: [
            {name: '概述1', anchor: 't1'},
            {name: '概述2', anchor: 't2'},
        ],
        htmlContent: `
            <div>
                test
            </div>
        `
    }
})


Mock.mock(/^\/api\/comment(\?.+)?$/, 'get', function(options) {
    const q = querystring.parse(options.url)
    return Mock.mock({
        code: 200,
        msg: '',
        'data|10-20': {
            "total|50-300": 0,
            [`row|${q.limit || 10}`]: [
                {
                    id: '@guid',
                    title: '@ctitle(10, 50)',
                    description: '@cparagraph(1, 10)',
                    category: {
                        'id|1-10': 0,
                        name: '分类@id'
                    },
                    'scanNumber|0-3000': 0,
                    "commentNumber|0-300": 30,
                    thumb: Mock.Random.image('300x250', '#000', '#fff', 'random image' ),
                    createDate: `@date('T')`
                }
            ]
        }
    })
})

Mock.mock('/api/comment', 'post', {
    code: 200,
    msg: '',
    data: {
        id: '@guid',
        nickname: '@cname',
        content: '@cparagraph(1, 10)',
        createDate: Date.now(),
        'avatar|1': [
            'https://w.wallhaven.cc/full/we/wallhaven-werq3x.jpg',
            'https://w.wallhaven.cc/full/3l/wallhaven-3le9vd.jpg',
            'https://img.icons8.com/pastel-glyph/64/sun--v2.png',
            'https://img.icons8.com/material-outlined/24/pokemon.png',
            'https://img.icons8.com/dusk/64/pokemon.png',
            'https://img.icons8.com/stickers/100/mana.png'
        ]
    }
})