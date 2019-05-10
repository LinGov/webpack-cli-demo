import _ from 'lodash';
import { getStr } from './a';
function append(id, child) {
  document.getElementById(id).append(_.concat(['hello', child]));
}

if (module.hot) {
  module.hot.accept('./a.js', function() {
    console.log('Accepting the updated printMe module!');
    append('app', getStr());
  });
}

// 添加子元素
append('app', getStr());
