# Myapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular Component Life-Cycle-Hooks

##### ngOnChange

--> This is first hook after constructor ngOnChange use interface when you use ngOnChange implementes interface and this hooks pass arrguments. this is only hook pass the arrguments

**constructor(){ --- }**

**ngOnchange(changes: simpleChanges){ --- }**

**ngOnInit(){ --- }**

--------------Calling-------------

**1. constructor**

**2. ngOnChange**

**3. ngOnInit**

**Implmentation Steps := Child Component type this code**

```child.component.ts

constructor() {
    console.log('constructor call');
  }
  @Input() userinput: string = '';
  ngOnInit() {
    console.log('ngOnInit call');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges call');
    console.log(changes['userinput'].currentValue);
  }
```

ngOnChanges have 3 Values = 

1.current value:

2.firstchanges:

3.previous value:
