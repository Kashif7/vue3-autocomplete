# vue-3 autocomplete

Simple custom autocomplete component developed using Vue 3 composition API, Vuex, and Jest for unit testing.

## Installation

Use npm to install packages.

```bash
npm install
```

## Development

Use the following command to run the dev server.

```bash
npm run serve
```

## Testing

Use the following command to run unit tests.

```bash
npm run test:unit
```

## Production

Use the following command to compile and minify the project.

```bash
npm run build
```

## Notes

- Though composition API is powerful and versatile, the support on web pails in comparison to options API.
- Custom directives help in increasing reusability.
- Logic in BookAutoComplete and CityAutoComplete components could be encapsulated to a composable but I opted against it because it seemed contrived.
- @vue/test-utils does not provide a way to manipulate ref state in a composition API SFC yet.

## License

[MIT](https://choosealicense.com/licenses/mit/)
