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
      let res;
      if (help.isEng()) {
    res = browser.checkElement($(sel.background), 'languagesEng');
          if (res > 0) {
              mergeImg(['./screenshots/baseline/languagesEng.png',
                  './screenshots/actual/languagesEng.png',
                  './screenshots/diff/languagesEng.png'])
                  .then((img) => {
                      img.write('./merge/languagesEng.png');
                  });
          }
      } else{
    res = browser.checkElement($(sel.background), 'languagesSpan');
          if (res > 0) {
              mergeImg(['./screenshots/baseline/languagesSpan.png',
                  './screenshots/actual/languagesSpan.png',
                  './screenshots/diff/languagesSPan.png'])
                  .then((img) => {
                      img.write('./merge/languagesSpanpng');
                  });
          }
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
      let res;
      if (help.isEng()) {
          res = browser.checkElement($(sel.background), 'warningEng');
          if (res > 0) {
              mergeImg(['./screenshots/baseline/warningEng.png',
                  './screenshots/actual/warningEng.png',
                  './screenshots/diff/warningEng.png'])
                  .then((img) => {
                      img.write('./merge/warningEng.png');
                  });
          }
      } else{
          res = browser.checkElement($(sel.background), 'warningSpan');
          if (res > 0) {
              mergeImg(['./screenshots/baseline/warningSpan.png',
                  './screenshots/actual/warningSpan.png',
                  './screenshots/diff/warningSpan.png'])
                  .then((img) => {
                      img.write('./merge/warningSpan.png');
                  });
          }
      }
    assert.equal(res, 0);
  });


});

describe('Bug Report Screenshots', function () {



});
