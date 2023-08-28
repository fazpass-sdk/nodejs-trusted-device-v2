import TrustedDeviceImpl from './trusted_device_impl.js'


class Fazpass {
    static initialize(pathKey) {
        if (pathKey === null || pathKey === '') {
            throw new Error("private keys must be non-null and not empty.");
        }
        return new TrustedDeviceImpl(pathKey);
    }
}
export default Fazpass;