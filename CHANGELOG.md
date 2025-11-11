# Changelog

## 2.0.0 (2025-11-12)

### Added
- Added `delegate()` method.
- Added `onPixelRatioChange()` method.
- Added `onElementAdded()` method.
- Added `formDataToSearchParams()` method.
- Added `getFormData()` method.
- Added `hideElement()` and `showElement()` methods.
- Added `waitAtLeast()` method.
- Added `waitForReadyState()` method.
- Added `getDataOrThrow()` method.

### Changed
- Performance and readability improvements to typings.
- Typings are now rolled up using Microsoft's API Extractor.
- Docs are now generated using API Extractor's companion tool, api-documenter.
- Annotations now adhere to TSDoc specification.
- Replaced ESLint and Prettier with Biome.
- Renamed `toggleAttr()` to `toggleAttribute()`.
- Renamed `create()` to `createElement()` and refactored.
- Renamed `empty()` to `emptyElement()`.
- Renamed `toBoolean()` to `parseBoolean()`.
- `closest()` now optionally matches the target `Element`.
- Default return type for `find()`, `findAll()`, and `findOrThrow()` methods is now `HTMLElement`.
- Rewritten `getData()` method.

### Removed
- Removed `toArray()`.
- Removed `getAria()`, `hasAria()`, `removeAria()`, `setAria()`, `toggleAria()`.
- Removed `hasData()`, `removeData()`, `setData()`, `toggleData()`.
- Removed `getAttr()`, `hasAttr()`, `removeAttr()`, `setAttr()`.
- Removed `addClass()`, `classesContaining()`, `classesEndingWith()`, `classesStartingWith()`, `removeClass()`, `toggleClass()`.
- Removed `onDelegate()`, `offDelegate()`, `dispatch()`.
- Removed `off()`, `on()`.
- Removed `serialise()`.
- Removed `loadImages()`.
- Removed `parseJson()`.
- Removed `replace()`.
- Removed `toNumber()`.

### Fixed

- Exported module now has a discernable name.

### Security

- Major version updates to all NPM packages.

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