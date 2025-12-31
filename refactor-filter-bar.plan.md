# Refactor Search and Categories into Unified Filter Bar

## Goals
- Collapse Search + Categories into one responsive filter bar
- Remove redundant wrapper divs
- Normalize spacing with consistent tokens
- Convert Categories to full-width accordion with limited height
- Improve alignment, accessibility, and consistency across breakpoints

## Current Issues
1. Unnecessary wrapper divs (shop-search-wrapper, shop-category-wrapper, product__sidebar-single)
2. Excessive spacing pushing content below fold
3. Search and Categories not visually aligned
4. Dropdown opens too tall, overlapping content
5. Icons and paddings inconsistent
6. "Showing results" text has too much vertical gap
7. No accessibility labels
8. Inconsistent behavior across breakpoints

## Implementation Plan

### 1. Restructure Component HTML
**File**: `src/components/pages/ProductsContent.tsx`

- Remove wrapper divs: `shop-search-wrapper`, `shop-category-wrapper`, nested `row` div
- Create unified `.product-filter-bar` container
- Place Search input and Categories trigger side-by-side in single container
- Remove `product__sidebar-single` classes
- Simplify structure to: filter-bar > search + categories (inline)

### 2. Convert Categories to Accordion
**File**: `src/components/pages/ProductsContent.tsx`

- Change dropdown to accordion behavior
- Add `max-height` constraint (e.g., 300px) with `overflow-y: auto`
- Ensure accordion is full-width
- Add smooth expand/collapse animation
- Highlight active category with distinct styling

### 3. Normalize Spacing
**File**: `src/app/globals.css`

- Define spacing tokens: 8px, 12px, 16px, 20px
- Apply consistent margins/padding:
  - Filter bar top: 12px
  - Gap between search and categories: 12px
  - Filter bar to results: 12px
  - Results to view toggles: 8px
  - View toggles to product grid: 12px
- Remove excessive padding from cards

### 4. Align Icons and Reduce Button Sizes
**File**: `src/app/globals.css`

- Align search icon to input baseline
- Reduce button sizes: search button 36px, clear button 20px
- Ensure icons are vertically centered with input text
- Consistent icon sizing across breakpoints

### 5. Tighten Vertical Gaps
**File**: `src/app/globals.css`

- Reduce margin-bottom on `.product__showing-result` from 30px to 12px
- Reduce spacing between filter bar sections
- Compact accordion padding
- Reduce gaps between result count, view toggles, and grid

### 6. Add Accessibility Labels
**File**: `src/components/pages/ProductsContent.tsx`

- Add `aria-label` to search input
- Add `aria-label` to search button
- Add `aria-label` to clear button
- Add `aria-expanded` to categories accordion trigger
- Add `aria-controls` linking trigger to accordion panel
- Add `role="button"` to accordion trigger
- Add `aria-label` to view toggle buttons

### 7. Ensure Consistent Breakpoint Behavior
**File**: `src/app/globals.css`

- Mobile (≤767px): Side-by-side filter bar, compact spacing
- Tablet (768px-991px): Stacked or side-by-side based on space
- Desktop (≥992px): Side-by-side, more spacing, hover interactions
- Consistent accordion behavior across all breakpoints

### 8. Highlight Active Category
**File**: `src/app/globals.css`

- Add distinct background color for active category
- Add border or indicator for selected state
- Ensure active state is clearly visible
- Apply to both category and subcategory

## CSS Structure

```css
.product-filter-bar {
  /* Unified container */
}

.product-filter-bar__search {
  /* Search input section */
}

.product-filter-bar__categories {
  /* Categories accordion section */
}

.product-filter-bar__categories-accordion {
  /* Accordion panel with max-height and scroll */
}
```

## Component Structure

```tsx
<div className="product-filter-bar">
  <div className="product-filter-bar__search">
    {/* Search input with buttons */}
  </div>
  <div className="product-filter-bar__categories">
    <button className="product-filter-bar__categories-trigger">
      {/* Categories trigger */}
    </button>
    <div className="product-filter-bar__categories-accordion">
      {/* Accordion content */}
    </div>
  </div>
</div>
```

