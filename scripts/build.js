const path = require('path');

function getPublicUrlOrPath(isEnvDevelopment, homepage, envPublicUrl) {
  const stubDomain = 'https://create-react-app.dev';

  if (envPublicUrl) {
    // ensure last slash exists
    envPublicUrl = envPublicUrl.endsWith('/') ? envPublicUrl : envPublicUrl + '/';
    return envPublicUrl;
  }

  if (homepage) {
    // If homepage is not a full URL, prefix with stub domain.
    homepage = homepage.startsWith('.')
      ? homepage
      : new URL(homepage, stubDomain).pathname;

    return homepage.endsWith('/') ? homepage : homepage + '/';
  }

  return '/';
}
