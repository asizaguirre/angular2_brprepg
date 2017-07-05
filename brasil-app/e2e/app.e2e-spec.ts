import { BrasilAppPage } from './app.po';

describe('brasil-app App', function() {
  let page: BrasilAppPage;

  beforeEach(() => {
    page = new BrasilAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
