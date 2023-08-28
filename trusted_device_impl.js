import fs from 'fs';
import TrustedDevice from './trusted_device.js';
import Utils from './utils.js';
class TrustedDeviceImpl extends TrustedDevice {
    constructor(pathKey) {
        super();
        try {
            this.privateKey = this.readKeyFromFile(pathKey);

        } catch (error) {
            throw new Error("key not found");
        }
    }

    readKeyFromFile(filePath) {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        return data;
    }

     extract(meta) {
        const u = new Utils(this.privateKey);
        return u.decryptResponse(meta);
    }
}

export default TrustedDeviceImpl;