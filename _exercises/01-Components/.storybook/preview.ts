import { setup } from '@storybook/vue3';
import { createOnyx } from 'sit-onyx';
import { i18n } from '../src/i18n';

import 'sit-onyx/global.css';
import 'sit-onyx/style.css';
import '../src/styles/index.scss';

const preview = {
  // we need to destructure here because as of Storybook 7.6
  // it can not statically analyze that the `preview` variable is an object
  // ...createPreview({
  //   parameters: {
  //     options: {
  //       storySort: {
  //         order: ["atoms", "molecules", "organisms", "layouts", "templates", "views"],
  //       },
  //     },
  //   },
  //   decorators: [withVModelDecorator()],
  // }),
};

export default preview;

setup(app => {
  const onyx = createOnyx({
    i18n: {
      locale: i18n.global.locale,
    },
  });

  app.use(i18n).use(onyx);
});
