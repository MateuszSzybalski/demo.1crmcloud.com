/// <reference types="cypress" />

import { Common } from "./Common"

export class ReportsAndSettingPage extends Common {

  //selectors
  detailLink = '.detailLink'

}

export const reportsAndSettingPage = new ReportsAndSettingPage();