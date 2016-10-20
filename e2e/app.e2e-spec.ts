import { HouseholdManagerPage } from './app.po';

describe('household-manager App', function() {
  let page: HouseholdManagerPage;

  beforeEach(() => {
    page = new HouseholdManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
