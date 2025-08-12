package day2;

import java.util.Scanner;

public class Cal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 첫 번째 숫자
        System.out.print("첫 번째 숫자를 입력하세요: ");
        double num1 = sc.nextDouble();

        // 연산자
        System.out.print("연산자 입력 (+, -, *, /): ");
        char operator = sc.next().charAt(0);

        // 두 번째 숫자
        System.out.print("두 번째 숫자를 입력하세요: ");
        double num2 = sc.nextDouble();

        double result;
        boolean valid = true; // 유효 연산자인지 확인용

        // switch문
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("0으로 나눌 수 없습니다!");
                    valid = false;
                    result = 0;
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                System.out.println("지원하지 않는 연산자입니다.");
                valid = false;
                result = 0;
        }

        // 결과
        if (valid) {
            System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
        }

        sc.close();
    }
}
