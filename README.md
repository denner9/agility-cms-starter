# Denner Portuguez V - Agility CMS + NextJS Starter Project

### Mainly technologies in the project
- **Node**: v18.16.0 (Current LTS)
- **NextJS**: v13.0.3
- **ReactJS**: v18.2.0
- **SASS**: v1.62.1
- **Tailwind CSS**: v3.3.2
- **Agility CMS**

## How to start with this project:

- Clone the git repo
- Install the dependencies: `npm install`
- Copy the **.env.local.example** file and create **.env.local**, fulfill the variables.
- Run the project: `npm run dev`

### *Note: this project uses .editorconfig please continue using it for a better code standarization.*

## How we should handle the components

Create a folder with the component's name, there handle the index.tsx, styles modules, also in case it's just for this component add interfaces.ts files too. Example: 
- /components/Button/
  - index.tsx
  - styles.module.scss
  - interfaces.ts
  - buttonSlice.ts (Redux Slice)

## Redux
The project has redux to share the app's state among all the project and access to the state in a easier way. This is how
we will handle redux structure.

- /lib/state
  - store.ts = Here add the reducers created in the slices archives.
  - actions/ = Folder to add actions and call them in the slice archive. This applies more for complex functions or async functions.

- Slices: add the slice in the respective component (at the same level) with the next name structure componentNameSlice.ts

## Unit Testing with Jest
Create your Unit Tests for testing components in **/tests/** folder. Tests name should be like this: **MyComponent.test.tsx / MyComponent.test.ts**

## Styles
* **globals.css**: CSS by default for global styles
* **variables.module.scss**: To add all the variables that can be repetitive through the project styles.

Note: Please allways use SASS with the **.scss** extension for all the styles modules.

## How to work with modules that have ModuleWithInit
To get the data before initialize the module use ModuleWithInit. Create the file in the next directory:
- **/lib/module-data/**
- The file name will be: **ModuleNameInit.ts**

After that import the file name into the index.ts and added to the **allModules** array, and will be ready to be used.

<hr>

## *Last update of this information: 28-04-2023*
