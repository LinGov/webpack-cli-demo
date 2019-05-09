import _ from 'lodash';
function append(id, child) {
  document.getElementById(id).append(_.concat(['hello', child]));
}

append('app', 'hello,world');
