package day3;

public class Main {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount("111-111", "이혜웅", 10000);
        BankAccount account2 = new BankAccount("222-222", "김수현", 7000);

        // 계좌 정보 출력
        account1.printAccountInfo();
        account2.printAccountInfo();

        System.out.println("\n--- 거래 내역 ---");
        account1.deposit(3000);      // 입금
        account1.withdraw(2000);     // 출금
        account1.transfer(account2, 4000); // 이체

        System.out.println("\n--- 최종 계좌 정보 ---");
        account1.printAccountInfo();
        account2.printAccountInfo();
    }
}
