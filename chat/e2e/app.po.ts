import { browser, element, by } from 'protractor';

export class ChatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('casific-root h1')).getText();
  }
}
