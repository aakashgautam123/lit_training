import {LitElement, html, css } from 'lit-element';

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class PostItem extends LitElement {
  /**
   * styles for the component
   */
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
  /**
   * properties for the component 
   * post - Object containing post details 
   */
  static get properties(){
    return {
      post: {type: Object},
      _updatePost : Function
    }
  }
  /**
   * constructor
   */
  constructor(){
    super();
    this.post = {userId: '', id: '', title: '', body: ''}
    this._updatePost = () => {}
  }
  /**
   * renders custom html template for the component 
   * @returns {html}
   */
  render(){
    return html`
    <paper-card heading="Emmental" image="http://placehold.it/100x30/FFC107/000000" alt="Emmental">
      <div class="card-content">
       ${this.post.title}
       ${this.post.body}
      </div>
      <div class="card-actions">
        <paper-button class="indigo"><a href="/post/edit/${this.post.id}">Edit</paper-button>
        <paper-button raised class="pink">Delete</paper-button>
      </div>
    </paper-card>
    `
  }
}

customElements.define('post-item', PostItem)