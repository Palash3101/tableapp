# Table Application

This is a dynamic and editable table application built with React, TypeScript, and Vite. It showcases a flexible and feature-rich table component that can handle various data types and user interactions.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

## File Structure

The project is organized into several directories, each with a specific purpose:

-   **`public/`**: Contains static assets that are publicly accessible, such as icons.
-   **`src/`**: The main source code for the application.
    -   **`assets/`**: Contains static assets used within the application, such as images and SVGs.
    -   **`components/`**: Contains all the React components.
        -   **`Cells/`**: Holds components for different types of table cells (e.g., `CurrencyCell`, `DateCell`, `TextCell`).
        -   **`subcomponents/`**: Contains components that are used within other components, like table headers.
        -   **`Row.tsx`**: Renders a single row in the table.
        -   **`Table.tsx`**: The main table component.
        -   **`TitleRow.tsx`**: Renders the title row of the table.
        -   **`TopBar.tsx`**: The top navigation bar of the application.
    -   **`data/`**: Contains sample data for the application.
    -   **`helpers/`**: Contains helper functions and utility scripts.
    -   **`types/`**: Contains TypeScript type definitions.
    -   **`App.tsx`**: The main application component that brings everything together.
    -   **`main.tsx`**: The entry point of the application.

## The `Table` Component

The `Table` component (located in `src/components/Table.tsx`) is the core of this application. It is responsible for rendering the data in a tabular format and handling user interactions.

### Key Features

-   **Dynamic Cell Rendering**: The `Table` component uses a `renderCell` function to dynamically render different types of cells based on the `type` property of a column. This allows for a flexible and extensible table that can display various data formats like text, dates, currency, status, etc.

-   **Custom Cell Components**: Each cell type has its own dedicated component (e.g., `TextCell`, `DateCell`, `StatusCell`). These components are responsible for rendering the cell's content and handling editing when a cell is selected.

-   **State Management**: The `Table` component receives its data (`data`), column definitions (`columns`), and the currently selected cell's state (`selectedCell`) as props from the main `App` component. It also receives setter functions (`setData`, `setColumns`, `setSelectedCell`) to update the state in the parent component, following the principle of lifting state up.

-   **Integration with `react-table`**: The component uses the `useTable` hook from the `react-table` library to manage table state and props, although the primary rendering logic is custom-built to support the dynamic cell types.

### Cell Types

The table supports the following cell types, each with its own component in `src/components/Cells/`:

-   **`IndexCell`**: Displays the row number.
-   **`TextCell`**: A simple text input field.
-   **`StatusCell`**: A dropdown to select a status (e.g., "In-process", "Complete").
-   **`DateCell`**: A date picker.
-   **`URLCell`**: A field for URLs.
-   **`PriorityCell`**: A dropdown for selecting priority (e.g., "Low", "Medium", "High").
-   **`CurrencyCell`**: A field for currency values.

### State and Props

The `Table` component receives the following props:

-   `columns`: An array of column definitions.
-   `data`: An array of row data.
-   `selectedCell`: An object containing the `accessor` and `rowIndex` of the currently selected cell.
-   `setSelectedCell`: A function to update the `selectedCell` state.
-   `setData`: A function to update the table's data.
-   `setColumns`: A function to update the column definitions.
-   `columnHeader`: An array of column header definitions.
-   `setColumnHeader`: A function to update the column header definitions.

This setup allows the `Table` component to be highly interactive and easily adaptable to different data structures and presentation requirements.


## desicions Trade Offs

### 1. Custom Table Rendering vs. Using a Library

-   **Decision**: While `react-table` is used for its headless logic (hooks for state management), the rendering of the table, rows, and cells is completely custom.
-   **Trade-offs**:
    -   **Pros**: This approach provides maximum control over the markup and styling of the table. It allows for easy integration of custom cell components and complex interaction logic, such as the cell selection and editing features.
    -   **Cons**: It requires writing and maintaining more code compared to using a full-featured table library like AG-Grid or Material-UI Table. Features like virtualization, advanced sorting, and filtering would need to be implemented manually. Which is a bit buggy, and needs to bot resolved 

### 2. Dynamic Cell Rendering with a Switch Statement

-   **Decision**: The `Table` component uses a `switch` statement within a `renderCell` function to determine which cell component to render based on the column type.
-   **Trade-offs**:
    -   **Pros**: This method is straightforward and easy to understand for a limited number of cell types. It keeps the rendering logic for different cells co-located and simple to follow.
    -   **Cons**: This approach can become cumbersome as the number of cell types increases. It violates the Open/Closed Principle, as the `renderCell` function must be modified each time a new cell type is added. A more scalable solution might involve a mapping object or a factory pattern to decouple the `Table` component from the specific cell implementations.
