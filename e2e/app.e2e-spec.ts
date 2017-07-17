import { DragTestPage } from './app.po';

describe('drag-test App', () => {
  let page: DragTestPage;

  beforeEach(() => {
    page = new DragTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
