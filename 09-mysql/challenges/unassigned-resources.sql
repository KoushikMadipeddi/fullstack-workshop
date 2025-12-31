SELECT
    e.id as id,
    e.name as name,
    e.department as department
FROM employees e
LEFT JOIN assignments a
    ON e.id = a.employee_id
WHERE a.employee_id IS NULL;
