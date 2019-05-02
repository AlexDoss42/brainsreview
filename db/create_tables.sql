create table users (
    user_id serial primary key,
    firstName varChar(50),
    lastName varChar(50),
    email varChar(50)
);

create table user_login (
    login_id serial PRIMARY KEY,
    username varChar(50),
    password text
);

create table balances (
    balance_id serial PRIMARY KEY,
    balance INTEGER
);
