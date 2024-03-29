import { MD5 } from 'crypto-js';

function createAuthParams(publicKey, privateKey) {
    const ts = new Date().getTime().toString();
    const hash = MD5(ts + privateKey + publicKey).toString();
    return { ts, hash };
}

export default createAuthParams;