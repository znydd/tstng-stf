- single line(after c99) and multi-line comments(we can't nest multiline comments)
- #define preporcessor macro
- enums
- Header files and function prototypes-> main.c <-import-- library.h --import and implementation--> library.c
- we make header like below:

**library.h**
```c
#ifndef LIBRARY_H
#define LIBRARY_H

//function prototypes

#endif
```
- char is a single byte data type 'A' -> it saves the ASCII value of 'A'
```c
char num = 65;
printf("%c\n", num); // Output: A
printf("%d\n", num); // Output: 65
```

- int argc is # arguments(flags) and char** argv is array of those arguments but on index 0 is name of program and argv[1] is first argument
- sizeof(int) tells the size in bytes and we can save them in `size_t` type
-
