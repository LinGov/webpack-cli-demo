import _ from 'lodash';
import 'element-ui';

import img from './assets/images/bilibili.jpeg';
function append(id) {
  const container = document.getElementById(id);

  const image = new Image();

  image.src = img;
  image.onload = () => {
    container.appendChild(image);
  };
}

append('app');
