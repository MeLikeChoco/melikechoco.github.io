module.exports = {

    collectCoverageFrom: [
        '<rootDir>/src/modules/**/*.ts',
        '!<rootDir>/src/modules/**/index.ts',
        '!<rootDir>/src/modules/**/*.module.ts'
    ],

    coverageDirectory: 'coverage',

    coverageReporters: [
        'lcov',
        'text-summary'
    ],

    testPathIgnorePatterns: [
        '<rootDir>/coverage/',
        '<rootDir>/dist/',
        '<rootDir>/e2e/',
        '<rootDir>/node_modules/',
        '<rootDir>/src/app/*.(js|scss)'
    ],

    testMatch: [
        '<rootDir>/src/modules/*.spec.ts',
        '<rootDir>/src/modules/**/*.spec.ts'
    ]
    
};