# Changelog

All notable changes to this project will be documented in this file.

## [1.3.2] - 2026-03-17

### Added

- updateCompatibleList public function for client side rendering of Compatible List after products have been added to the collection. The delayCompatibleListInitialization will ensure a spinner is shown until updateCompatibleList is called.
- Compatible List now shows Wait State messages if data-current-count and data-total-count are provided by the client.
- New Translations (Compatible List Wait State)

### Changed

- Updated Translations (Bike Selector Footer)

### Fixed

---

## [1.2.12] - 2026-03-12

### Added

- Accessibility label added to the Bikon web component

### Changed

- Find Products in Virtual Workshop now shows up to 500 results
- loDash removed
- All pngs removed and now sourced from cdn

### Fixed

- Bike Card name length fixed
- Flashing modal on Safari and Firefox fixed - animation changed to gsap

---

## [1.2.7] - 2026-02-20

### Added

- Added updateCompatibleList public function for client side rendering of Compatible List
- Ignore null SKUs in products collection in config for Compatible List
- Custom Bike Name now displays on all Bike Cards

### Changed

### Fixed

---

## [1.2.5] - 2026-02-10

### Added

### Changed

### Fixed

- Logic update for Collection Result

---

## [1.2.4] - 2026-02-06

### Added

### Changed

- Example project and documentation updates (for url to /bike/v3 and npm package to 1.2)

### Fixed

- Logic update for Collection Result

---

## [1.2.3] - 2026-01-19

### Added

### Changed

- Update from 2nd/3rd largest chainring to Second/Third largest chainring in Virtual Workshop
- Update how compatibility notes are shown in Virtual Workshop Update Part section

### Fixed

- Fix in translation for third largest chainring category name in Virtual Workshop
- Fix in showing results in the a Shopify Search page

---

## [1.2.2] - 2025-12-18

### Added

### Changed

### Fixed

- Brake Lever location in Virtual Workshop changed to Brakes from Drivetrain

---

## [1.2.1] - 2025-11-21

### Added

### Changed

- Products which have a blacklisted sku (\*) do not show "No Compatibility Information"

### Fixed

- Check added on skusToCheck in order to prevent compatibility request firing when the array is empty
- Space added between translations on Variant Selector Question
- Collection result fallback option switched to unavailable

---

## [1.1.50] - 2025-09-26

### Added

### Changed

### Fixed

- makeRequest uses url.href in fetch method for better backwards compatibility

---

## [1.1.49] - 2025-09-24

### Added

- A new BikeChanging event fires before the bike changes. BikeChanged event fires after the bike has changed

### Changed

### Fixed

-- Type error in dedupe fixed

---

## [1.1.48] - 2025-09-23

### Added

- Config setting for internalLink.
- Select bike by providing Bike Matrix Bike Id via bikematrixid.

### Changed

- Added de-duplicate logic for the Browse page buttons.

### Fixed

- Compatible Variants handle empty SKUs i.e. '-'.
- Compatible Variants handle full width where no compatible variants.
- Translation update for Bike Lounge.
- Fix GetBrandProductCategories error flashing whilst no bike id is selected
- Fix for bug when adding first bike the user would have an error
- Fix for non-awaited function affecting find bike by id

---

## [1.1.46] - 2025-08-10

### Added

-

### Changed

- Get Bike BOM error handling to ensure it is a Bike Matrix ID. Moved to bottom of bike selector.

### Fixed

- PLP pages should now set setCompatibleList. If this is set to false, the session state for the current collection will not be saved (which could incorrectly be set to empty).

---

> This file follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Versioning](https://semver.org/).
