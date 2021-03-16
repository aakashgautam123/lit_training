
import {LitElement, html} from 'lit-element';

import './post-item'

import '../services/getPosts'
import { getPosts } from '../services/getPosts';

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
   * renders the custom html template 
   * @returns {html}
   */
  render(){
    return html`
    ${this.posts.map(post => html`<post-item .post=${post}></post-item>`)}
    `
  }
  
}

customElements.define('posts-view', PostsView)