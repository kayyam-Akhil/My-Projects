/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

int main()
{
    int a=5, b=7, temp;
    temp = a; // temp = 5
    a = b; // a =7
    b = temp; // b = 5
    printf("%d %d", a,b);

    return 0;
}

