module.exports = {
    coverageDirectory: "coverage",
    moduleNameMapper: {
        "^@apestaartje/dependency-injection/(.*)$": "<rootDir>/src/$1"
    },
    // transform: {
    //     "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    // },

    transformIgnorePatterns: [
        "/node_modules/(?!@apestaartje).+(js|jsx)$"
    ],
    // moduleFileExtensions: ["web.js", "js", "json", "web.jsx", "jsx", "node"],
    // modulePaths: ["src"]
};
