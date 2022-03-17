const fs = require('fs');
const LICENSE_PATH = `${__dirname}/LICENSE`;
let LICENSE_HEADER;

if (fs.existsSync(LICENSE_PATH)) {
  LICENSE_HEADER = fs.readFileSync(LICENSE_PATH, 'UTF-8');
}

LICENSE_HEADER = '/**\n' + LICENSE_HEADER;
LICENSE_HEADER = LICENSE_HEADER.split('\n').join('\n * ');
LICENSE_HEADER += '\n */';

module.exports = {
  extends: ['../../.eslintrc.js'],
  overrides: [

    /**
     * Files that require Thales license headers
     */
    {
      files: ['**/*.{js,ts,tsx}'],
      rules: {
        '@kbn/eslint/require-license-header': [
          'error',
          {
            license: LICENSE_HEADER,
          },
        ],
        '@kbn/eslint/disallow-license-headers': [
          'error',
          {
            licenses: []
          },
        ],
      },
    }
  ]

};
