import { Angular2HeroesPage } from './app.po';

describe('angular2-heroes App', () => {
  let page: Angular2HeroesPage;

  beforeEach(() => {
    page = new Angular2HeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
