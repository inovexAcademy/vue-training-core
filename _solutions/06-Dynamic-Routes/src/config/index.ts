import packageJson from '@/../package.json';
import { Log } from 'oidc-client-ts';

/** Global app configuration. */
const config = {
  app: {
    name: 'Vue Training Basics',
    version: packageJson.version,
    baseUrl: import.meta.env.BASE_URL,
  },
  api: {
    host: import.meta.env.BACKEND_URI,
  },
  auth: {
    idp: import.meta.env.AUTH_IDP,
    clientId: import.meta.env.AUTH_CLIENT_ID,
    disabled: import.meta.env.VITE_AUTH_DISABLED === 'true',
    logLevel: getLogLevel(),
    useDecryptedAccessToken: false, // set to true if your backend requires a decrypted token to read out user data
  },
};

function getLogLevel(): Log {
  const { MODE } = import.meta.env;
  if (MODE === 'development') return Log.DEBUG;
  if (MODE === 'test') return Log.NONE;
  return Log.ERROR;
}

export default config;
