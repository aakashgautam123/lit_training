const API_URL = 'https://jsonplaceholder.typicode.com'
/**
 * getPosts 
 * service for fetching posts from the api
 * @returns {Promise}
 */
export const getPosts = () => {
  return new Promise((resolve, reject) => {

    fetch(`${API_URL}/posts`).then(res => res.json()).then(res => resolve(res)).catch(err => reject(err))
  
  })
}
/**
 * Updates Post 
 * 
 * @param {Object} post 
 * @returns {Promise}
 */

export const updatePost =  (post) => {
  return new Promise((resolve, reject) => {
    const params = {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
      }
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, params).then(res => res.json()).then(res => resolve(res)).catch(err => reject(err))
})
}

export const getPost = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => resolve(json)).catch(err => reject(err))
  })
}