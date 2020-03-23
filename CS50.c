#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int age = get_int("What's your age?\n");
    if(age > 30) {
        printf("Whatever you say, Boomer!\n");
    } else {
        printf("Okay, Zoomer.\n");
    }
}
