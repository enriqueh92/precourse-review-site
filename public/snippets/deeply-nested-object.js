const nestedObj = {
  foo: {
    bar: {
      baz: {
        quux: {
          quuux: {
            quuuux: {
              'quuuuux!': 'you got me'
            }
          }
        }
      }
    }
  }
};

const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux;
document.write(`<h4>${nestedObjValue}</h4>`);


nestedObj.foo.bar.baz.quux.quuux.quuuux = nestedObjValue

//I tried to change the text as seen above but the code just shows up as text.

