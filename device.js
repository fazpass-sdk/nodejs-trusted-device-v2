class Device {
    constructor(
        fazpassId,
        isActive,
        scoring,
        riskLevel,
        timeStamp,
        platform,
        isRooted,
        isEmulator,
        isGpsSpoof,
        isAppTempering,
        isVpn,
        isCloneApp,
        isScreenSharing,
        isDebug,
        application,
        deviceId,
        simSerial,
        simOperator,
        geolocation,
        clientIp
    ) {
        this.fazpassId = fazpassId;
        this.isActive = isActive;
        this.scoring = scoring;
        this.riskLevel = riskLevel;
        this.timeStamp = timeStamp;
        this.platform = platform;
        this.isRooted = isRooted;
        this.isEmulator = isEmulator;
        this.isGpsSpoof = isGpsSpoof;
        this.isAppTempering = isAppTempering;
        this.isVpn = isVpn;
        this.isCloneApp = isCloneApp;
        this.isScreenSharing = isScreenSharing;
        this.isDebug = isDebug;
        this.application = application;
        this.deviceId = deviceId;
        this.simSerial = simSerial;
        this.simOperator = simOperator;
        this.geolocation = geolocation;
        this.clientIp = clientIp;
    }
}

export default Device;