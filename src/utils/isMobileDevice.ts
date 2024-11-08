type UserAgentData = {
    readonly mobile?: boolean;
};

type NavigatorWithExperimental = Navigator & {
    readonly userAgentData?: UserAgentData;
};

function isMobileDevice(useExperimental: boolean = false): boolean {
    const { userAgent, userAgentData } = navigator as NavigatorWithExperimental;

    return useExperimental && typeof userAgentData?.mobile === 'boolean'
        ? userAgentData.mobile
        : /Mobi|Android|iPhone/i.test(userAgent);
}

export { isMobileDevice };
