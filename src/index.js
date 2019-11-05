import './css/style.css'

import initiateQrScan from './js/qrscan';

initiateQrScan();

if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
