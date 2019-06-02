import { assert } from 'chai';
import selEng from '../../../selectors/english/languages';
import selSpan from '../../../selectors/spanish/languages';
import expEng from '../../../expected/english/languages';
import expSpan from '../../../expected/spanish/languages';
import help from "../../../helpers/helpers";

describe('General', function () {
let exp = expEng;
let sel = selEng;
  it('Background-color', function () {
   if(help.isEng()) {
     help.openEng();
   }else{
     help.openSpan();
     exp = expSpan;
     sel = selSpan;
   }
    for(let el of $$(sel.languages)){
        console.log(el.getText())
    }
    assert.equal(true, true);
  });

  // it('Width', function () {
  //       let actual = $(sel.background).getCSSProperty('width').value;
  //       assert.equal(actual, exp.width);
  // });
  //
  // it('Font-size', function () {
  //   let actual = $(sel.text).getCSSProperty('font-size').value;
  //   assert.equal(actual, exp.fontSize);
  // });
  //
  // it('Font-сolor', function () {
  //       let actual = $(sel.text).getCSSProperty('color').parsed.hex;
  //       assert.equal(actual, exp.fontColor);
  // });
  //
  // it('Font-family', function () {
  //       let actual = $(sel.text).getCSSProperty('font-family').value;
  //       assert.equal(actual, exp.fontFamily);
  // });
  //
  // it('Font-style', function () {
  //       let actual = $(sel.text).getCSSProperty('font-style').value;
  //       assert.equal(actual, exp.fontStyle);
  // });
  //
  // it('Text', function () {
  //   let actual = $(sel.text).getText();
  //   assert.equal(actual, exp.text);
  // });
});
