import { Orange88DesktopAppPage } from './app.po';

describe('orange88-desktop-app App', function() {
  let page: Orange88DesktopAppPage;

  beforeEach(() => {
    page = new Orange88DesktopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
