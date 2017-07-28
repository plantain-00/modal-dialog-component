module.exports = {
  build: [
    `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`,
    `rimraf dist/`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `lessc src/modal-dialog.less > dist/modal-dialog.css`,
    `cleancss -o dist/modal-dialog.min.css dist/modal-dialog.css`,
    `cleancss -o demo/index.bundle.css dist/modal-dialog.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `webpack --config demo/webpack.config.js`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx"`,
    `standard "**/*.config.js"`,
    `stylelint "src/**/*.less"`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
