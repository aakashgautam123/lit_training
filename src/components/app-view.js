import { LitElement, html } from 'lit-element'

import '../router/router'
import initRouter from '../router/router';


class AppView extends LitElement{
  /**
   * constructor 
   */
  constructor(){
    super();
  }
  /**
   * lifecycle callback initializing router
   */
  firstUpdated() {
    initRouter(this.shadowRoot.querySelector('main'));
  }
  
  //should i write all links here or is there any better way to do this ?
  render(){
    return html`
    <a href="/posts">Posts</a>
    <a href="/post-create">Create Post</a>
    <a href="/not-found">Not Found</a>
    <main>
      
    </main>
    `
  }
}

customElements.define('app-view', AppView)