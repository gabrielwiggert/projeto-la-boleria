CREATE TABLE cakes (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL UNIQUE,
  price NUMERIC NOT NULL,
  image varchar NOT NULL,
  description TEXT
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  address varchar NOT NULL,
  phone varchar(11) NOT NULL
);

CREATE TABLE orders (
   id SERIAL PRIMARY KEY,
   "clientId" INT NOT NULL REFERENCES clients(id),
   "cakeId" INT NOT NULL REFERENCES cakes(id),
   quantity INT NOT NULL,
   "createdAt" TIMESTAMP DEFAULT NOW(),
   "totalPrice" NUMERIC NOT NULL
);