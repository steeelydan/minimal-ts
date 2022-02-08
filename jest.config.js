export default {
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json',
            useESM: true
        }
    },
    modulePathIgnorePatterns: ['build']
};
