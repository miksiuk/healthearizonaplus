import { assert } from 'chai';
import mergeImg from 'merge-img';
import help from "../../helpers/helpers";
import expSpanL from "../../expected/spanish/languages";
import selSpanL from "../../selectors/spanish/languages";
import expEngL from "../../expected/english/languages";
import selEngL from "../../selectors/english/languages";
import expEngW from "../../expected/english/warning";
import selEngW from "../../selectors/english/warning";
import expSpanW from "../../expected/spanish/warning";
import selSpanW from "../../selectors/spanish/warning";

describe('Screenshots', function () {
  let exp;
  let sel;
  it('languages', function () {
      if (help.isEng()) {
        help.openEng();
        exp = expEngL;
        sel = selEngL;
      } else {
        help.openSpan();
        exp = expSpanL;
        sel = selSpanL;
      }
      $(sel.background).scrollIntoView();
    let res = browser.checkElement($(sel.background), 'languages');
    if (res > 0) {
      mergeImg(['./screenshots/baseline/languages.png',
          './screenshots/actual/languages.png',
        './screenshots/diff/languages.png'])
        .then((img) => {
          img.write('./merge/languages.png');
        });
    }
    assert.equal(res, 0);
  });

  it('warning', function () {
      if(help.isEng()) {
        exp = expEngW;
        sel = selEngW;
      }else{
        exp = expSpanW;
        sel = selSpanW;
      }
      $(sel.background).scrollIntoView();
      let res = browser.checkElement($(sel.background), 'warning');
    if (res > 0) {
      mergeImg(['./screenshots/baseline/warning.png',
        './screenshots/actual/warning.png',
        './screenshots/diff/warning.png'])
          .then((img) => {
            img.write('./merge/warning.png');
          });
    }
    assert.equal(res, 0);
  });


});

describe('Bug Report Screenshots', function () {



});
