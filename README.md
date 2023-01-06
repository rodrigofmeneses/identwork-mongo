# Manage your employees with IdentWork

## Main idea
Quero guardar os dados dos funcionários do LAP. 
Para isso quero fazer um CRUD para 2 recursos

employees e companies.

Esses recursos representarão o funcionário e a as empresas que os mesmos trabalham.

Além do CRUD, quero ser capaz de filtrar os funcionários por:
- Matrícula
- Nome
- Company

Também quero ser capaz de selecionar um subconjunto de funcionários e gerar um arquivo a partir disso.

## Detalhes sobre as coleções.

Employees:

registration - Number - Unique
name - String
war_name - String
role - String
identification - Number - Unique
admission_date - Date
company - fk

Company:

name - String - Unique

Isso é o suficiente.