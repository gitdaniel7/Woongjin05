package day1;

public class Homework2 {
    public static void main(String[] args) {
        String[] words = {"michelle", "john", "daniel"};

        // compareTo 사용해보기
        for (int i = 0; i < words.length - 1; i++) {
            for (int j = 0; j < words.length - 1 - i; j++) {
                if (words[j].compareTo(words[j + 1]) > 0) {
                    // 자리 바꾸기
                    String temp = words[j];
                    words[j] = words[j + 1];
                    words[j + 1] = temp;
                }
            }
        }

        // 결과 출력하는거
        System.out.println("사전순서 정렬:");
        for (String w : words) {
            System.out.println(w);
        }
    }
}
