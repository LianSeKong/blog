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

export async function getBlog(id) {
   return await request.get(`/blog/${id}`)
}


export async function postComment(commentInfo) {
    return await request.post(`/comment`, commentInfo)
}

export async function getComments(blogId, page = 1, limit = 10) {
    return await request.get('/comment', {
        params: {
            blogId, page, limit
        }
    })

}