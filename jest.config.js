module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: {
                inlineSourceMap: true,
                module: 'commonjs',
                paths: {
                    '@apestaartje/dependency-injection/*': [
                        'src/*',
                    ],
                },
                sourceMap: false,
            },
        },
    },
    moduleNameMapper: {
        '^@apestaartje/dependency-injection/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@apestaartje).+(js|jsx)$',
    ],
};
