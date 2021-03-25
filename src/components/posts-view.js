
import {LitElement, html} from 'lit-element';

import './post-item'

import '../services/getPosts'
import { getPosts, updatePost } from '../services/getPosts';

class PostsView extends LitElement {
  /**
   * properties for the custom element 
   * posts - array of posts
   */
  static get properties(){
    return {
      posts: {type: Array},
    }
  }
  /**
   * constructor
   */
  constructor(){
    super();
    this.posts = []
  }
  /**
   * lifecycle callback for calling the service to get posts
   */
  async firstUpdated(){
    this.posts = await getPosts()
  }
  /**
   * _updatePost 
   * calls service for updating the post
   * 
   * @param {Object} post 
   */
  async _updatePost(post){
    const response = await updatePost(post)
    console.log(response);
  }

  
  /**
   * renders the custom html template 
   * @returns {html}
   */
  render(){
    console.log('rendered')
    return html`
    ${this.posts.map(post => html`<post-item .post=${post} ._updatePost = ${this._updatePost}></post-item>`)}
    `
  }
  
}

customElements.define('posts-view', PostsView)