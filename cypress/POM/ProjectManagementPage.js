/// <reference types="Cypress" />

import { Common } from "./Common"

export class ProjectManagementPage extends Common {

  //selectors
  filterFormButton = '[class^="sec"]'
  runReport = '[name="FilterForm_applyButton"]'

}

export const projectManagementPage = new ProjectManagementPage();