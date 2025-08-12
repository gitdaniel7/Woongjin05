package day1;

public class Main {
    public static void main(String[] args) {
        String savedId = "Daniel";   // 저장된 아이디
        String inputId = "daniel";   // 로그인 때 입력한 아이디

//        대소문자무시비교: equalsIgnoreCase() 이용해봄
        if (savedId.equalsIgnoreCase(inputId)) {
            System.out.println("로그인 성공!");
        } else {
            System.out.println("아이디가 일치하지 않습니다.");
        }
    }
}
