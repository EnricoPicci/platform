export class PfaPlatformPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pfa-platform-app h1')).getText();
  }
}
