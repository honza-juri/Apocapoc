const config = module.exports


class Config {
    user = "root";
    password = "";
    database = "";
    host = "localhost";
    constructor() {
        return { host: this.host, user: this.user, password: this.password, database: this.database };
    }
}

config.database = new Config();