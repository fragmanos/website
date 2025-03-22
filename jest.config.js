// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
    return {
        "testEnvironment": "jsdom",
        "testPathIgnorePatterns": [
            "dist",
            "jest.setup.ts",
            "test-utils.tsx"
        ],
        "moduleNameMapper": {
            "\\.(css)$": "identity-obj-proxy",
            "^@project-name/(.*)/(.*)/(.*)$": "<rootDir>/../../packages/$1/src/$2/$3",
            "^@project-name/(.*)/(.*)$": "<rootDir>/../../packages/$1/src/$2",
            "^@project-name/(.*)$": "<rootDir>/../../packages/$1/src"
        },
        "globals": {
            "ts-jest": {
                "tsconfig": {
                    "jsx": "preserve"
                },
                "babelConfig": {
                    "presets": [
                        "next/babel"
                    ],
                    "plugins": [
                        "macros"
                    ]
                }
            }
        }
    };
}