package day3;

public class BankAccount {
    private String accountNumber; // 문자열,계좌번호
    private String owner;         // 문자열,예금주
    private int balance;          // 정수,잔액

    // 생성자: 계좌번호, 예금주, 초기 잔액 받아서 초기화
    public BankAccount(String accountNumber, String owner, int initialBalance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
//        초기잔액 0이상 0이상 아닐 시 0으로 초기화
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            System.out.println("초기 잔액은 0 이상이어야 합니다. 0으로 설정합니다.");
            this.balance = 0;
        }
    }

    // 디포짓
    public void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + "원이 입금되었습니다. 현재 잔액: " + balance + "원");
        } else {
            System.out.println("입금 금액은 0보다 커야 합니다.");
        }
    }

    // 윗드로우
    public void withdraw(int amount) {
        if (amount <= 0) {
            System.out.println("출금 금액은 0보다 커야 합니다.");
        } else if (amount > balance) {
            System.out.println("잔액이 부족합니다. 현재 잔액: " + balance + "원");
        } else {
            balance -= amount;
            System.out.println(amount + "원이 출금되었습니다. 현재 잔액: " + balance + "원");
        }
    }

    // 이체기능 추가
    public void transfer(BankAccount target, int amount) {
        if (amount <= 0) {
            System.out.println("이체 금액은 0보다 커야 합니다.");
            return;
        }
        if (amount > balance) {
            System.out.println("잔액이 부족합니다. 현재 잔액: " + balance + "원");
            return;
        }
        this.balance -= amount;
        target.balance += amount;
        System.out.println(this.owner + "님이 " + target.owner + "님에게 " +
                amount + "원을 이체했습니다.");
        System.out.println("보내는 사람 잔액: " + this.balance + "원");
        System.out.println("받는 사람 잔액: " + target.balance + "원");
    }

    // 현재 잔액 반환
    public int getBalance() {
        return balance;
    }

    // BankAccount끼리 이체 기능 추가 계좌 정보
    public void printAccountInfo() {
        System.out.println("계좌번호: " + accountNumber);
        System.out.println("예금주: " + owner);
        System.out.println("현재 잔액: " + balance + "원");
    }
}
