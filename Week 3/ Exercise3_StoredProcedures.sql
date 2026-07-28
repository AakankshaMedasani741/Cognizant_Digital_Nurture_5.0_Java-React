-- ProcessMonthlyInterest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance=Balance+(Balance*0.01)
    WHERE AccountType='Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed successfully.');
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

-- UpdateEmployeeBonus

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary=Salary+(Salary*p_BonusPercent/100)
    WHERE Department=p_Department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Bonus updated successfully.');
END;
/

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/

-- TransferFunds

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccount IN NUMBER,
    p_ToAccount IN NUMBER,
    p_Amount IN NUMBER
)
AS
    v_Balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID=p_FromAccount;

    IF v_Balance>=p_Amount THEN

        UPDATE Accounts
        SET Balance=Balance-p_Amount
        WHERE AccountID=p_FromAccount;

        UPDATE Accounts
        SET Balance=Balance+p_Amount
        WHERE AccountID=p_ToAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');
    END IF;
END;
/

BEGIN
    TransferFunds(1,2,200);
END;
/

SELECT * FROM Accounts;
SELECT * FROM Employees;
SELECT * FROM Customers;
SELECT * FROM Loans;