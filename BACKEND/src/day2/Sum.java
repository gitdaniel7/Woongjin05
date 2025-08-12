package day2;

import java.util.Scanner;

public class Sum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("n 값 입력: ");
        int n = sc.nextInt();

//        짝수 합
        int evenSum = 0;
//        홀수 합
        int oddSum = 0;

//        반복문 사용
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
//                짝수
                evenSum += i;
            } else {
//                홀수
                oddSum += i;
            }
        }

        System.out.println("짝수 합: " + evenSum);
        System.out.println("홀수 합: " + oddSum);

        sc.close();
    }
}
