// jest.config.js
import nextJest from 'next/jest';

const createJestConfig = nextJest( {
  dir: './',
} );

const customJestConfig = {
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/state/(.*)$': '<rootDir>/src/state/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/fonts/(.*)$': '<rootDir>/src/fonts/$1',
    '^@/theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => ( {
  ...( await createJestConfig( customJestConfig )() ),
  transformIgnorePatterns: esModules.length
    ? [`<rootDir>/node_modules/(?!${ esModules.join( '|' ) })`]
    : [],
} );
