// app/kata.js

// Insert code here
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
  }

  itemCount() {
    return this.collection.length
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage)
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1) return -1
    else if (pageIndex < this.pageCount() - 1) return this.itemsPerPage
    else return this.itemCount() % this.itemsPerPage
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1
    else if ((itemIndex + 1) % this.itemsPerPage === 0) return (itemIndex + 1) / this.itemsPerPage - 1
    else return Math.floor((itemIndex + 1) / this.itemsPerPage)
  }
}

module.exports = PaginationHelper;
