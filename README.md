# @kristijorgji/eslint-config-react-typescript

Eslint and prettier rules for ReactJS Typescript projects.

## Usage

### Install deps
Install the correct versions of each package, which are listed by the command:
```shell
yarn add --dev @kristijorgji/eslint-config-react-typescript@latest
```

If you are migrating old service to new plugin first please make sure to first remove old dependencies that are duplicates like example `yarn remove eslint prettier @typescript-eslint/eslint-plugin etc`

### Config
Add the following to your `.eslintrc.js`:
```js
module.exports = {
    extends: ['@kristijorgji/eslint-config-react-typescript'],
};

```

## Develop
More info on how to develop your custom eslint config can be found here: https://eslint.org/docs/developer-guide/shareable-configs

To develop locally you can install with `yarn add --dev pathtolocalfile` example
`yarn add --dev /Users/kristi.jorgji/Desktop/fl-lite/eslint-config-react-typescript`
 
You need to run the above command after every plugin change.

## How to publish a new version

To publish a new package version you have to  create a release tag in this repository.

## License

[MIT](LICENSE)
