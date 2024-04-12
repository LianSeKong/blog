import request from '../utils/request'
export async function getBlogs(page=1, limit=10, categoryid = -1) {
    return await request.get('/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
}


export async function getBlogType() {
    return await request.get('/blogtype')
}