import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to clean-it-app!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to designcourse!');
>>>>>>> 81bbca514f23760e9ef004090e899127ca0bfd41
  });
});
