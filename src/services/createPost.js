const API_URL = 'https://jsonplaceholder.typicode.com'
/**
 * getPosts 
 * service for fetching posts from the api
 * @returns {Promise}
 */

export const createPost = (data) => {
  console.log(data);
  return new Promise((resolve, reject)=> {
    fetch(`${API_URL}/posts`,{method:'post', body:data}).then(res => res.json()).then(res => resolve(res)).catch(err => reject(err))
  })
}


