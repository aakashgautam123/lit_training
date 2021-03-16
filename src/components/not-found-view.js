import {LitElement, html} from 'lit-element'

class NotFoundView extends LitElement {
  /**
   * constructor
   */
  constructor(){
    super();
  }
  /**
   * renders custom html template
   * @returns {html}
   */
  render(){
    return html`
    <h1>Page Not Found</h1>
    `
  }
}

customElements.define('not-found-view', NotFoundView);