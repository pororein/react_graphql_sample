module.exports = {
    "roots": [
        "src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "coveragePathIgnorePatterns": [
        "node_modules/",
        "src/types",
        "src/**/types.ts",
    ]
}