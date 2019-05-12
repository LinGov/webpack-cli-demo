import './assets/scss/_global.scss';
import _ from 'lodash';
import 'element-ui';

import img from './assets/images/bilibili.jpeg';
function append(id) {
  const container = document.getElementById(id);

  const div = document.createElement('div');
  div.innerHTML = '1111111';

  container.appendChild(div);
  const image = new Image();

  image.src = img;
  image.onload = () => {
    container.appendChild(image);
  };

  var xmlHttp = new XMLHttpRequest();

  xmlHttp.open('GET', '/api/test', true);

  xmlHttp.onload = () => {
    if (xmlHttp.status === 200) {
      console.log(xmlHttp.responseText);
    }
  };

  xmlHttp.send();
}

append('app');
