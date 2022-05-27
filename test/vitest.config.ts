import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['./test/unit/**/*.test.{ts,tsx}', './test/integration/*.test.{ts,tsx}'],
        setupFiles: ['./test/setupTests.ts'],
        mockReset: true,
        reporters: ['default', 'junit'],
        outputFile: './reports/junit.xml',
        coverage: {
            enabled: false,
            reporter: 'lcov',
            reportsDirectory: 'coverage',
            cleanOnRerun: true,
            extension: ['ts', 'tsx'],
        },
    },
});