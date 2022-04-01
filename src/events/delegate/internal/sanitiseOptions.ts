import type { SanitisedListenerOptions } from '../interfaces/SanitisedListenerOptions';

/**
 * Given an input of either a boolean or a list of options, sanitise it into a
 * model that is consistent and contains all the data we need.
 */
function sanitiseOptions(
    options?: boolean | AddEventListenerOptions
): SanitisedListenerOptions {
    // We will implement some of the options ourselves. In these instances we
    // will obfuscate the properties so that we still have references, however
    // they'll be safely ignored by any native code.
    const mappings = new Map([
        ['once', 'origOnce'],
        ['signal', 'origSignal'],
    ]);

    return typeof options === 'object'
        ? // Clone and map (if needed) the options object.
          Object.entries(options).reduce(
              (result, [key, value]) => ({
                  ...result,
                  [mappings.get(key) ?? key]: value,
              }),
              {} as Record<string, unknown>
          )
        : // Sanitise `undefined` or legacy `useCapture`.
          { capture: Boolean(options) };
}

export { sanitiseOptions };
