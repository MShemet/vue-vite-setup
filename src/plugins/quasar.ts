import { App as Application } from 'vue';
// import { Quasar, Cookies, Notify } from 'quasar';
import { Quasar, Cookies } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

export default function setUiFramework(app: Application): void {
  app.use(Quasar, {
    plugins: {
      Cookies,
      // Notify,
    },
    // config: {
    //   notify: {
    //     position: 'bottom',
    //   },
    // },
  });
}
