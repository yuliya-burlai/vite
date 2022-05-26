const IS_CI = Boolean(process.env.CI);

module.exports = {
    // Configure jest-junit & jest-sonar reporter on CI. Otherwise use default reporter
    reporters: [
        'default',
        ...(IS_CI
            ? [
                  [
                      'jest-junit',
                      {
                          outputDirectory: './reports',
                          outputName: 'junit.xml',
                          classNameTemplate: '{classname}',
                          titleTemplate: '{title}',
                          ancestorSeparator: ' ',
                          suiteNameTemplate: '{filename}',
                      },
                  ],
                  [
                      'jest-sonar',
                      {
                          outputDirectory: './reports',
                          outputName: 'test-report.xml',
                      },
                  ],
              ]
            : []),
    ],

    collectCoverage: IS_CI,

    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        {
            displayName: 'int',
            testEnvironment: 'jsdom',
            roots: ['test/integration'],
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\.css$': 'identity-obj-proxy',
            },
        },
    ],
};
