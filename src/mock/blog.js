import Mock from 'mockjs'
import querystring from 'querystring'

Mock.mock('/api/blogtype', 'get', {
    code: 200,
    msg: '',
    'data|10-20': [
        {
            'id|+1': 1,
            name: '分类@id',
            articleCount: 10,
            "order|+1": 1
        },
    ]
})


Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function(options) {
    console.log(options);
    return Mock.mock({
        code: 200,
        msg: '',
        'data|10-20': {
            "total|2000-3000": 0,
            [`row|${querystring.limit || 10}`]: [
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