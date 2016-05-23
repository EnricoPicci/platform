import { PfaPlatformPage } from './app.po';

describe('pfa-platform App', function() {
  let page: PfaPlatformPage;

  beforeEach(() => {
    page = new PfaPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pfa-platform works!');
  });
});
