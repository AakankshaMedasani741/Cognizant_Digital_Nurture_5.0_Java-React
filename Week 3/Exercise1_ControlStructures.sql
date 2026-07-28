-- Scenario 1

BEGIN
    FOR rec IN (
        SELECT c.CustomerID,c.DOB,l.LoanID,l.InterestRate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID=l.CustomerID
    )
    LOOP
        IF MONTHS_BETWEEN(SYSDATE,rec.DOB)/12>60 THEN
            UPDATE Loans
            SET InterestRate=InterestRate-1
            WHERE LoanID=rec.LoanID;

            DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ID: '||rec.CustomerID);
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 2

BEGIN
    FOR rec IN (SELECT CustomerID,Balance FROM Customers)
    LOOP
        IF rec.Balance>10000 THEN
            UPDATE Customers
            SET IsVIP='TRUE'
            WHERE CustomerID=rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer '||rec.CustomerID||' promoted to VIP');
        ELSE
            UPDATE Customers
            SET IsVIP='FALSE'
            WHERE CustomerID=rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

-- Scenario 3

BEGIN
    FOR rec IN (
        SELECT c.Name,l.LoanID,l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID=l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE+30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
        'Reminder: Loan '||rec.LoanID||
        ' for '||rec.Name||
        ' is due on '||TO_CHAR(rec.EndDate,'DD-MON-YYYY'));
    END LOOP;
END;
/