import forge from 'node-forge';
import crypto from 'crypto';
import Device from "./device.js";

class Utils {
    constructor(privateKey) {
        this.privateKey = privateKey;
    }

     decryptResponse(encryptedMeta) {
        try {
            const encryptedBytes = Buffer.from(encryptedMeta, 'base64');
            const privateKey = this.getPrivateKey(this.privateKey);
            const decrypted = crypto.privateDecrypt(privateKey, encryptedBytes);
            const jsonString = decrypted.toString('utf8');
            return JSON.parse(jsonString);
        } catch (error) {
            console.error(error);
            return new Device();
        }
    }

    getPrivateKey(base64PrivateKey) {
        const privateKey = forge.pki.privateKeyFromPem(base64PrivateKey);
        return {
            key: forge.pki.privateKeyToPem(privateKey),
            padding: crypto.constants.RSA_PKCS1_PADDING
        };
    }
}

export default Utils;