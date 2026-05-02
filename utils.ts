export function checkAndGetEnv(name: string) {
    if(!process.env[name]) {
        throw new Error(`Could not find ${name} in .env`);
    }
    return process.env[name];
}
