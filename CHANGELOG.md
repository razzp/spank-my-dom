# Changelog

## 1.1.1 (2022-08-26)

### Fixed
- `setAttr` and its abstractions now correctly override existing values.

## 1.1.0 (2022-07-22)

### Changed
- `addClass` now accepts an array of tokens.
- `removeClass` now accepts an array of tokens.
- `toggleClass` now accepts an array of tokens.

### Fixed
- Solved illegal invocation errors with the `Proxy` that wraps delegate events.

## 1.0.0 (2022-06-06)

The first major release includes various bug fixes, improvements and additions. Many existing methods have been renamed so that they are more concise and nicer to use.

### Added

- Added `toBoolean()` method.
- Added `toNumber()` method.
- Added `parseJson()` method.
- Added `findOrThrow()` method.
- Added `aria-*` and `data-*` abstractions for all `attribute` methods (see docs).

### Changed

- Renamed `arrayFrom()` to `toArray()`.
- Renamed `getAttribute()` to `getAttr()`.
- Renamed `hasAttribute()` to `hasAttr()`.
- Renamed `removeAttribute()` to `removeAttr()`.
- Renamed `setAttribute()` to `addAttr()`.
- Renamed `toggleAttribute()` to `toggleAttr()`.
- Renamed `addEventListener()` to `on()`.
- Renamed `addDelegateEventListener()` to `onDelegate()`.
- Renamed `removeEventListener()` to `off()`.
- Renamed `removeDelegateEventListener()` to `offDelegate()`.
- Renamed `dispatchNewEvent()` to `dispatch()`.
- Renamed `getClassesContaining()` to `classesContaining()`.
- Renamed `getClassesEndingWith()` to `classesEndingWith()`.
- Renamed `getClassesStartingWith()` to `classesStartingWith()`.
- Renamed `querySelector()` to `find()`.
- Renamed `querySelectorAll()` to `findAll()`.
- Renamed `createElement()` to `create()`.
- Renamed `emptyElement()` to `empty()`.
- Renamed `replaceContents()` to `replace()`.