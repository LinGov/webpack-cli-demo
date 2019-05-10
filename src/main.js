import './assets/scss/_global.scss';
import _ from 'lodash';
import 'element-ui';

import img from './assets/images/bilibili.jpeg';
function append(id) {
  const container = document.getElementById(id);

  const div = document.createElement('div');
  div.innerHTML = '111';
  container.appendChild(div);
  const image = new Image();

  image.src = img;
  image.onload = () => {
    container.appendChild(image);
  };
}

append('app');
