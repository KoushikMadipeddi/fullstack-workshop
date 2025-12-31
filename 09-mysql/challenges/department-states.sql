-- SELECT
-- department,
-- COUNT(*) AS employee_count,
-- round(avg(salary),2) AS avg_salary,
-- max(salary) AS max_salary
-- FROM employees
-- GROUP BY department
-- HAVING COUNT(*)>2;

SELECT
    d.dept_name AS department,
    COUNT(e.emp_id) AS employee_count,
    ROUND(AVG(e.salary), 2) AS avg_salary,
    MAX(e.salary) AS max_salary
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
GROUP BY d.dept_name
HAVING COUNT(e.emp_id) > 2;
