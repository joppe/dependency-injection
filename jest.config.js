module.exports = {
    moduleNameMapper: {
        "^@apestaartje/dependency-injection/(.*)$": "<rootDir>/src/$1"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!@apestaartje).+(js|jsx)$"
    ],
};
