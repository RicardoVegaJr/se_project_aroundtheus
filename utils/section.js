export default class Section {
  constructor({ items }, renderer) {
    this._items = items;
    this._renderer = renderer;
  }
  renderItems() {
    //renders all elements on the page. It should iterate through the items array and call the renderer()
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem() {
    //takes DOM El and adds it to the container. This method should be called when adding an individual card to the dom
  }
}
