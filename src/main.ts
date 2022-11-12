import ZenUml from "@/core";

// find the fist element with tag `pre` and class `zenuml`
const elm = document.querySelector('pre.zenuml');
// get the code from the element
const code = elm?.textContent?.trim() || 'A.method';
// @ts-ignore
const zenUml = new ZenUml(elm);
zenUml.render(code, 'default').then(r => {
  console.log(r);
});
// @ts-ignore
window.zenUml = zenUml;