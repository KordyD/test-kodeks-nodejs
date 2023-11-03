SELECT departments.id FROM departments LEFT JOIN dep_names ON departments.id = dep_names.department_id WHERE dep_names.id IS NULL GROUP BY departments.id;

SELECT departments.id FROM departments LEFT JOIN dep_names ON departments.id = dep_names.department_id GROUP BY departments.id HAVING COUNT(dep_names.id) >= 2;

SELECT * FROM departments LEFT JOIN dep_names ON departments.id = dep_names.department_id GROUP BY departments.id HAVING MIN(dep_names.id);
