const eslintrc = {
  env: {
    es2021: true,
    node: true
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/await-thenable": "off"
  }
}

export default eslintrc