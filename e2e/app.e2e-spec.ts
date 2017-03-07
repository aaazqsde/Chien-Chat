import { ChienChatPage } from './app.po';

describe('chien-chat App', function() {
  let page: ChienChatPage;

  beforeEach(() => {
    page = new ChienChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
