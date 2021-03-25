import { LitElement, html, css } from 'lit-element';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

import {updatePost, getPost} from '../services/getPosts'


class PostEdit extends LitElement {
  static get styles(){
    return css`
      paper-button.pink {
        background-color: var(--paper-pink-a200);

    }
      paper-button.indigo {
        background-color: var(--paper-indigo-500);

    }
    `
  }

  static get properties(){
    return {
      post: {type: Object}
    }
  }
  constructor(){
    super();
    this.post = { id : '', title : '', body : '', userId : '' }

  
  }

 async _updatePost () {
    const response = await updatePost(this.post);
    console.log(response);
  }

 async _getpostDetails(){
    const response = await 
 } 

  render(){
    return html`
      <h1>Edit Post</h1>
      <input type="hidden" value="${this.post.id}"/>
      <input type="text" value="${this.post.userId}"/>
      <paper-input  label="Title" value="${this.post.title}"></paper-input>
      <paper-input label="Body" value="${this.post.body}"></paper-input>
      <paper-button class="pink" @click="${this._updatePost}">Update</paper-button>

      

    `
  }
}
customElements.define('post-edit', PostEdit);