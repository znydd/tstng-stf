# JavaScript Variable Declarations

## 1. var
- **Scope**: Function-scoped
- **Hoisting**: Declaration hoisted, accessible before declaration (returns `undefined` until assigned)
- **Redeclaration**: Allowed within same scope
- **Example**:
  ```javascript
  console.log(x); // undefined
  var x = 5;
  var x = 10; // Redeclares
  ```

## 2. let
- **Scope**: Block-scoped (limited to `{}` block)
- **Hoisting**: Not hoisted; accessing before declaration causes `ReferenceError`
- **Redeclaration**: Not allowed in same scope
- **Example**:
  ```javascript
  let y = 2;
  if (true) {
    let y = 3; // Different y, block-scoped
    //let y = 5; // Error
  }
  console.log(y); // 2
  ```

## 3. const
- **Scope**: Block-scoped
- **Hoisting**: Not hoisted; accessing before declaration causes `ReferenceError`
- **Redeclaration/Assignment**: Neither allowed after initialization
- **Example**:
  ```javascript
  const z = 3;
  // z = 4; // Error: Assignment to constant
  ```
