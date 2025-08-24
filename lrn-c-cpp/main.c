#include <stdio.h>
#include <sys/ioctl.h>
#include <termios.h>
#include <unistd.h>

void setup_terminal() {
  struct termios term;
  tcgetattr(STDIN_FILENO, &term);
  term.c_lflag &= ~(ICANON | ECHO | ISIG); // Disable canonical mode and echo
  term.c_cc[VMIN] = 1;                     // Read 1 character
  term.c_cc[VTIME] = 0;                    // No timeout
  tcsetattr(STDIN_FILENO, TCSANOW, &term);
}

void restore_terminal() {
  fflush(stdout);
  struct termios term;
  tcgetattr(STDIN_FILENO, &term);
  term.c_lflag |= (ICANON | ECHO | ISIG); // Restore canonical mode and echo
  tcsetattr(STDIN_FILENO, TCSANOW, &term);
}

int main() {
  char c;
  struct winsize w;
  ioctl(STDOUT_FILENO, TIOCGWINSZ, &w);
  int center_x = w.ws_col / 2;
  int center_y = w.ws_row / 2;
  setup_terminal();

  // Clear screen and draw box
  printf("\x1b[2J\x1b[1;1H"); // Clear screen, move to top-left
  printf("\x1b[?25l");
  printf("\x1b[1m \x1b[%d;%dH\x1b[34m┏━━━━━━━━━━━━━┓\x1b[0m\n", center_y - 1,
         center_x); // Blue top border
  printf("\x1b[1m \x1b[%d;%dH\x1b[34m┃\x1b[33m Hello World\x1b[34m ┃\x1b[0m\n",
         center_y, center_x); // Green
  printf("\x1b[1m \x1b[%d;%dH\x1b[34m┗━━━━━━━━━━━━━┛\x1b[0m\n", center_y + 1,
         center_x); // Blue bottom border
  printf("\x1b[%d;%dHPress 'q' to quit\n", center_y + 2, center_x);
  fflush(stdout);

  // Wait for 'q' to quit
  while (read(STDIN_FILENO, &c, 1) == 1) {
    if (c == 'q' || c == 3)
      break;
  }

  printf("\x1b[?25h \x1b[2J \x1b[1;1H");
  restore_terminal();
  return 0;
}
