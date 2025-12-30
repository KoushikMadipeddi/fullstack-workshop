SELECT 
  CONCAT(UPPER(lastname), firstname) AS formatted_name,
  CONCAT(firstname, '.', lastname, '@company.com') AS email,
  CONCAT(UPPER(LEFT(firstname, 1)), UPPER(LEFT(lastname, 1))) AS initials
FROM employees;

/*
  select upper(lastname)+firstname as formatted_name,
  firstname+'.'+lastname+'@company.com' as email,
  upper(left(firstname,1)+left(lastname,1)) as initials from employees;
*/
