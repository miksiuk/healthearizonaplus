import { assert } from 'chai';
import selEng from '../../../selectors/warningEng';
import selSpan from '../../../selectors/warningSpan';
import expEng from '../../../expected/warningEng';
import expSpan from '../../../expected/warningSpan';
import help from "../../../helpers/helpers";

describe('Warning', function () {
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
    let actual = $(sel.background).getCSSProperty('background').parsed.hex;
    assert.equal(actual, exp.background);
  });

  it('Font-size', function () {
    let actual = $(sel.text).getCSSProperty('font-size').value;
    assert.equal(actual, exp.fontSize);
  });

  it('Text', function () {
    let actual = $(sel.text).getText();
    console.log(actual);
    assert.equal(actual, exp.text);
  });
  //
  // it('Max Characters + 1', function () {
  //   let actual = help.maxInput(sel.email, exp.maxLength + 1);
  //   assert.equal(actual, exp.maxLength);
  // });
  //
  // it('Font size', function () {
  //   let actual = $(sel.email).getCSSProperty('font-size').value;
  //   assert.equal(actual, exp.fontSize);
  // });
  //
  // it('Font weight', function () {
  //   let actual = $(sel.email).getCSSProperty('font-weight').value;
  //   assert.equal(actual, exp.fontWeight);
  // });
  //
  // it('Font family', function () {
  //   let actual = $(sel.email).getCSSProperty('font-family').value;
  //   assert.equal(actual, exp.fontFamily);
  // });
  //
  // it('Font color', function () {
  //   let actual = $(sel.email).getCSSProperty('color').parsed.hex;
  //   assert.equal(actual, exp.fontColor);
  // });
  //
  // it('Box shadow', function () {
  //   $(sel.email).addValue('S');
  //   let actual = $(sel.email).getCSSProperty('box-shadow').parsed.hex;
  //   $(sel.email).clearValue();
  //   assert.equal(actual, exp.shadowColor);
  // });
});
