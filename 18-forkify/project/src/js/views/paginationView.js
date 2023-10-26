import View from './view.js';
import icons from 'url:../../img/icons.svg'; //Parcel@2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _errorMessage = 'Error with selecting corrent page!';
  _message = '';

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1, and there are NO other pages
    if (curPage === 1 && numPages === 1)
      return this._generateMarkupButton(curPage, false, false);

    //Page 1, and there are other pages
    if (curPage === 1 && numPages > 1)
      return this._generateMarkupButton(curPage, false, true);

    //Other page
    if (curPage > 1 && curPage < numPages)
      return this._generateMarkupButton(curPage, true, true);

    //Last page
    if (curPage === numPages)
      return this._generateMarkupButton(curPage, true, false);
  }

  _generateMarkupButton(curPage, prev = false, next = true) {
    const btnPrevMarkup = `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        `;

    const btnNextMarkup = `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;

    return `
    ${prev ? btnPrevMarkup : ''} 
    ${next ? btnNextMarkup : ''}
    `;
  }
}

export default new PaginationView();
