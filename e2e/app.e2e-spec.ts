import { ExampleApp2Page } from './app.po';

describe('example-app2 App', () => {
  let page: ExampleApp2Page;

  beforeEach(() => {
    page = new ExampleApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
