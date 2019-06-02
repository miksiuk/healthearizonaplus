import { assert } from 'chai';
import selEng from '../../../selectors/english/languages';
import selSpan from '../../../selectors/spanish/languages';
import expEng from '../../../expected/english/languages';
import expSpan from '../../../expected/spanish/languages';
import help from "../../../helpers/helpers";

describe('Other Languages', function () {
    let exp = expEng;
    let sel = selEng;
    it('Background-color', function () {
        if (help.isEng()) {
            help.openEng();
        } else {
            help.openSpan();
            exp = expSpan;
            sel = selSpan;
        }
        let actual = $(sel.background).getCSSProperty('background').parsed.hex;
        assert.equal(actual, exp.backgroundColor);
    });

    it('Background-width', function () {
        let actual = $(sel.background).getCSSProperty('width').value;
        assert.equal(actual, exp.width);
    });

    it('Header-font-size', function () {
        let actual = $(sel.header).getCSSProperty('font-size').value;
        assert.equal(actual, exp.headFontSize);
    });

    it('Header-font-сolor', function () {
        let actual = $(sel.header).getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.headFontColor);
    });

    it('Header-font-family', function () {
        let actual = $(sel.header).getCSSProperty('font-family').value;
        assert.equal(actual, exp.headFontFamily);
    });

    it('Header-font-weight', function () {
        let actual = $(sel.header).getCSSProperty('font-weight').value;
        assert.equal(actual, exp.headFontWeight);
    });

    it('Header-text', function () {
        let actual = $(sel.header).getText();
        assert.equal(actual, exp.headText);
    });

    it('Languages-font-size', function () {
        let flag = true;
        for (let el of sel.languages){
            if($(el).getCSSProperty('font-size').value!==exp.langFontSize) {
            flag=false;
            break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-font-сolor', function () {
        let flag = true;
        for (let el of sel.languages){
            if($(el).getCSSProperty('color').parsed.hex!==exp.langFontColor) {
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-font-family', function () {
        let flag = true;
        for (let el of sel.languages){
            if($(el).getCSSProperty('font-family').value!==exp.langFontFamily) {
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-font-weight', function () {
        let flag = true;
        for (let el of sel.languages){
            if($(el).getCSSProperty('font-weight').value!==exp.langFontWeight) {
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-text', function () {
        let flag = true;
        for (let i=0; i<sel.languages.length; i++){
            if($(sel.languages[i]).getText()!==exp.nameLanguages[i]) {
                console.log($(sel.languages[i]).getText());
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-column-width', function () {
        let flag = true;
        console.log($$(sel.column)[0].getCSSProperty('width'));
        for (let el of $$(sel.column)){
            if(el.getCSSProperty('width').value!==exp.columnWidth) {
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });

    it('Languages-column-margin', function () {
        let flag = true;
        console.log($$(sel.column)[0].getCSSProperty('margin'));
        let column = $$(sel.column);
        for (let el of column){
            if(el.getCSSProperty('margin').value!==exp.columnMargin) {
                flag=false;
                break;
            }
        }
        assert.equal(flag,true);
    });


});

  // it('Width', function () {
  //     for(let el of $$(sel.languages)){
  //         console.log(el.getText())
  //     }
  //     assert.equal(true, true);
  // });

