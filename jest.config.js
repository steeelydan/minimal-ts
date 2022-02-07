export default {
    preset: 'ts-jest/presets/default-esm',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json'
        }
    },
    modulePathIgnorePatterns: ['build']
};
