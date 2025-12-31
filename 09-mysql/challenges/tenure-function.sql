select e.name, e.HIRE_DATE,

	TIMESTAMPDIFF(YEAR,HIRE_DATE,CURDATE()) AS YEARS_EXPERENCE
	CASE
		WHEN TIMESTAMPDIFF(YEAR,HIRE_DATE,CURDATE())>5 THEN 'VERERAN'
		WHEN TIMESTAMPDIFF(YEAR,HIRE_DATE,CURDATE())<2 THEN 'NEW HIRE'
		ELSE 'EXPERIENCED'
	END AS tenure_category

FROM EMPLOYEES;


SELECT
    employee_name,
    hire_date,
    years_employed,
    CASE
        WHEN years_employed >= 5 THEN 'Experienced'
        WHEN years_employed < 2 THEN 'Fresher'
        ELSE 'Intermediate'
    END AS experience_level
FROM (
    SELECT
        employee_name,
        hire_date,
        TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) AS years_employed
    FROM employees
) e;

	
