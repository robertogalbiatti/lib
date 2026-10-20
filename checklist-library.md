# Checklist — React Component Library

> Goal: build a reusable, accessible, well-typed React component library that is easy to maintain.
>
> **Legend:** `[x]` completed · `[ ]` pending

## 1. Project foundation

- [ ] Define the library's name, purpose, and scope
- [ ] Configure React and TypeScript
- [ ] Configure SCSS Modules
- [ ] Define a consistent folder structure
- [ ] Configure ESLint
- [ ] Configure Prettier
- [ ] Configure development, build, lint, and test scripts
- [ ] Configure Git and branch/PR rules
- [ ] Define naming, exports, and file conventions
- [ ] Define React version compatibility policy

## 2. Components already implemented

- [x] Button
- [x] Chip
- [x] Checkbox
- [x] Text Field
- [x] Text Area
- [x] RadioGroup
- [x] Select

### Review existing components

- [ ] Review TypeScript prop definitions
- [ ] Forward relevant native attributes and events
- [ ] Check disabled, focus, hover, and active states
- [ ] Verify keyboard behavior
- [ ] Validate accessibility and accessible names
- [ ] Check responsiveness and styles across themes
- [ ] Add unit tests
- [ ] Add usage examples
- [ ] Document props, variants, and states
- [ ] Verify visual consistency across all three components

## 3. Next components — high priority

- [ ] **Spinner / Loading** — accessible loading indicator
- [ ] **Alert** — informational, success, warning, and error messages
- [ ] **Typography** — headings, paragraphs, captions, and helper text
- [ ] **Divider** — visual separation with appropriate semantics

## 4. Components — medium priority

- [ ] **Avatar** — image, initials, and fallback
- [ ] **Badge** — count or status indicator
- [ ] **Tooltip** — accessible description for mouse and keyboard users
- [ ] **Card** — reusable content container
- [ ] **Icon** — consistent icon strategy
- [ ] **Toggle / Switch** — accessible on/off control
- [ ] **Progress** — determinate and indeterminate progress
- [ ] **Skeleton** — loading placeholder
- [ ] **Accordion** — expand and collapse content
- [ ] **Tabs** — navigation between panels
- [ ] **Pagination** — page navigation
- [ ] **Breadcrumb** — navigation hierarchy

## 5. Complex components — future priority

- [ ] **Modal / Dialog** — focus management, Escape key, dismissal, and accessibility
- [ ] **Drawer** — side panel and focus management
- [ ] **Dropdown Menu** — actions and keyboard navigation
- [ ] **Toast / Notification** — accessible temporary messages
- [ ] **Autocomplete / Combobox** — suggestions and keyboard selection
- [ ] **DatePicker** — dates, localization, and accessible navigation
- [ ] **Table** — headers, rows, empty states, and responsiveness
- [ ] **Form Field** — composition of label, control, help text, and error

## 6. Requirements for every component

Use this checklist as the definition of done for each component.

- [ ] Well-typed props and a simple API
- [ ] Documented default values
- [ ] Required variants and sizes
- [ ] Disabled state and other relevant states
- [ ] `className` support where appropriate
- [ ] Appropriate HTML attributes and ARIA
- [ ] Keyboard support and visible focus
- [ ] Responsive layout
- [ ] Styles isolated from other components
- [ ] Rendering and behavior tests
- [ ] Relevant accessibility tests
- [ ] Usage examples
- [ ] Prop documentation
- [ ] Visual review of default, focus, and error states

## 7. Testing and quality

- [ ] Choose and configure a test runner (e.g., Vitest or Jest)
- [ ] Configure React Testing Library
- [ ] Test basic rendering for each component
- [ ] Test user interactions
- [ ] Test disabled and error states
- [ ] Test important attributes and events
- [ ] Test keyboard navigation
- [ ] Add automated accessibility checks where appropriate
- [ ] Set a useful coverage target without relying on the percentage alone
- [ ] Run lint, tests, and build in CI
- [ ] Add visual regression tests if needed

## 8. Design system and styling

- [ ] Define a color palette and semantic tokens
- [ ] Define typography and type scales
- [ ] Define spacing tokens
- [ ] Define borders, radii, and shadows
- [ ] Define responsive breakpoints
- [ ] Define visible focus and interaction states
- [ ] Plan light/dark theme support if needed
- [ ] Ensure sufficient color contrast
- [ ] Avoid duplicating visual values across components
- [ ] Document SCSS Modules conventions

## 9. Public API and library build

- [ ] Define public exports for each component
- [ ] Create a public entry point (`index.ts`)
- [ ] Configure a library build (e.g., tsup, Vite Library Mode, or Rollup)
- [ ] Generate the required output formats (ESM and, if needed, CJS)
- [ ] Generate TypeScript declaration files (`.d.ts`)
- [ ] Configure `package.json` (`main`, `module`, `types`, and `exports`)
- [ ] Set React and React DOM as `peerDependencies`
- [ ] Configure SCSS/CSS handling in the published package
- [ ] Keep development dependencies out of the final bundle
- [ ] Test package installation in a clean consumer project
- [ ] Verify tree-shaking and individual component imports
- [ ] Review license and package metadata

## 10. Documentation and demos

- [ ] Create a README covering purpose and installation
- [ ] Document requirements and compatibility
- [ ] Provide import and usage examples
- [ ] Document props, variants, and events
- [ ] Demonstrate disabled, loading, error, and focus states
- [ ] Create a demo page
- [ ] Consider Storybook for an interactive component catalog and documentation
- [ ] Include accessibility guidance
- [ ] Document contribution and testing workflows

## 11. Release and maintenance

- [ ] Choose an initial version (`0.1.0` or `1.0.0`, depending on maturity)
- [ ] Configure Semantic Versioning (SemVer)
- [ ] Maintain a changelog
- [ ] Create a CI workflow for linting, tests, and builds
- [ ] Configure npm publishing if that is the goal
- [ ] Test publishing in a test environment or with a prerelease package
- [ ] Create Git tags for releases
- [ ] Document the breaking-change policy
- [ ] Define a process for bugs, issues, and contributions

## 12. First-release readiness criteria

- [ ] Priority components are implemented and documented
- [ ] Every published component has relevant tests
- [ ] The library passes linting, tests, and build checks
- [ ] Basic accessibility has been reviewed
- [ ] The package has been installed and tested in another project
- [ ] Styles work correctly in the consuming project
- [ ] Documentation explains installation, usage, and compatibility
- [ ] A process for releases and fixes is in place

---
