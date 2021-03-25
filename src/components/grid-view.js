import {LitElement, html} from 'lit-element'

import  '@vaadin/vaadin-grid'
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js'
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js'

class GridView extends LitElement {

  static get properties(){
    return {
      items : {Array}
    }
  }

  firstUpdated(){
    let grid = this.shadowRoot.querySelector('vaadin-grid')
    grid.addEventListener('selected-items-changed', () => console.log(grid.selectedItems))
  }
  /**
   * constructor
   */
  constructor(){
    super();
    this.items = [
      {
        name : {
          first : "Aakash",
          last : "Gautam"
        },

        location :{
          city : "Kathmandu"
        },
        visitCount : 100

      },
      {
        name : {
          first : "Chori",
          last : "Gautam"
        },

        location :{
          city : "Kathmandu"
        },
        visitCount : 100

      },
      {
        name : {
          first : "Shreya",
          last : "Gautam"
        },

        location :{
          city : "Kathmandu"
        },
        visitCount : 100

      }
    ]
  }
  /**
   * renders custom html template
   * @returns {html}
   */
  render(){
    return html`
    <h1>Grid View Page updated</h1>
    
    <vaadin-grid .items="${this.items}">
      <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
      <vaadin-grid-sort-column path="name.first" header="First name"></vaadin-grid-sort-column>
      <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
      <vaadin-grid-column path="location.city"></vaadin-grid-column>
      <vaadin-grid-column path="visitCount" text-align="end" width="120px" flex-grow="0"></vaadin-grid-column>
    </vaadin-grid>


    `
  }
}

customElements.define('grid-view', GridView);