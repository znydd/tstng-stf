#include <stdio.h>
#include <stdlib.h>

int main() {
  printf("Sizes\n");
  int myInt;
  float myFloat;
  double myDouble;
  char myChar;

  printf("%zu\n", sizeof(myInt));
  printf("%zu\n", sizeof(myFloat));
  printf("%zu\n", sizeof(myDouble));
  printf("%zu\n", sizeof(myChar));

  int *ptr_1 = malloc(sizeof(myInt));

  return 0;
}
