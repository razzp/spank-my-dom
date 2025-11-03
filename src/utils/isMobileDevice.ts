type UserAgentData = {
    readonly mobile?: boolean;
};

declare var navigator: Navigator & {
    readonly userAgentData?: UserAgentData;
};

function isMobileDevice(useExperimental: boolean = false): boolean {
    return useExperimental &&
        typeof navigator.userAgentData?.mobile === 'boolean'
        ? navigator.userAgentData.mobile
        : /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

export { isMobileDevice };

// TODO: JSDOC

// https://www.youtube.com/watch?v=ftDVCo8SFD4
