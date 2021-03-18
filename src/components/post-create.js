import { LitElement, html } from 'lit-element';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-input/paper-input.js';
import {createPost} from '../services/createPost'

class PostCreate extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      body: { type: String }
    }
  }
  constructor() {
    super();
    this.title = '';
    this.body = '';
  }
  render(){
    return html`
     <iron-form>
      <form method="post" id="iron-form"> 
      <paper-input always-float-label autoValidate label="Title" name="title" size="40" @input=${this.titleInput}></paper-input>
      <paper-input always-float-label autoValidate label="Body" name="body" size="200" @input=${this.bodyInput}></paper-input>
      <paper-button raised @click=${(e) => this.submitForm(e)}>Submit</paper-button>
      </form>
    </iron-form>`
  }
  async submitForm(event) {
    let result = await createPost({title: this.title, body: this.body, userId: 10});
    console.log(result);
    this.title="";
    this.body="";
  }
  titleInput(e) {
    this.title = e.target.value;
  }

  bodyInput(e) {
    this.body = e.target.value;
  }
}

customElements.define('post-create', PostCreate);