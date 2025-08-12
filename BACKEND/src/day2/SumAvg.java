package day2;


public class SumAvg {

    // 가변인자 사용 메소드
    public static void printSumAndAverage(int... numbers) {
        if (numbers.length == 0) {
            System.out.println("숫자가 없습니다.");
            return;
        }

        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        double avg = (double) sum / numbers.length;

        System.out.println("합계: " + sum);
        System.out.println("평균: " + avg);
//        위아래 나누기 용
        System.out.println("-------------------");
    }


    public static void main(String[] args) {
        // 가변 인자를 이용해 원하는 만큼 숫자 전달 가능
        printSumAndAverage(1, 2, 3);
        printSumAndAverage(5, 15, 25, 35, 45);
        printSumAndAverage(100);
    }



}
