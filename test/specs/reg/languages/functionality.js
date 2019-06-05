import { assert } from 'chai';
import selEng from '../../../selectors/english/languages';
import selSpan from '../../../selectors/spanish/languages';
import expEng from '../../../expected/english/languages';
import expSpan from '../../../expected/spanish/languages';
import help from "../../../helpers/helpers";

describe('Functionality other languages', function () {
let exp = expEng;
let sel = selEng;
  it('additional information', function () {
   if(help.isEng()) {
     help.openEng();
   }else{
     help.openSpan();
     exp = expSpan;
     sel = selSpan;
   }
   let flag = true;
    for(let i = 0; i<sel.languages.length; i++){
        $(sel.languages[i]).click();
        $(sel.addInfo).waitForDisplayed(5000);
        $(sel.background).scrollIntoView();
        let actual = $(sel.addInfo).getText();
        if (actual!==exp.textLanguages[i]) {
            flag = false;
            break;
        }
    }
    assert.equal(flag, true);
  });
});
