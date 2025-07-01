# lowkeyframes-portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Before running the tests, make sure the Angular CLI is available. Install it globally with:

```bash
npm install -g @angular/cli
```

Alternatively, you can use `npx ng` without a global install.

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## AWS S3 Configuration

Edit `src/environments/environment.ts` with your bucket settings so
`AwsS3Service` can access the images:

- `region`
- `bucket`

Since the bucket is public, access keys are no longer required.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

