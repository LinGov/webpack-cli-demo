import _ from 'lodash';
import 'element-ui';
import { getStr } from './a';
function append(id, child) {
  document.getElementById(id).append(_.concat(['hello', child]));
}

append('app', 'hello,world');
if (module.hot) {
  module.hot.accept('./a.js', function() {
    console.log('Accepting the updated printMe module!');
    append('app', getStr());
  });
}
append('app', getStr());
