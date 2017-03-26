import { PsykitoolsAppPage } from './app.po';

describe('psykitools-app App', () => {
  let page: PsykitoolsAppPage;

  beforeEach(() => {
    page = new PsykitoolsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
