import pg from "pg"

const { Pool } = pg

const connection = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "vo55topo",
    database: "movies"
});

export { connection };
