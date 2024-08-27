# Bundle & Save UI

## Overview

This project is a React-based UI component that mimics a "Bundle & Save" option typically found in e-commerce websites. It features dynamically expanding and collapsing bundle options, styled with Tailwind CSS, and is responsive to various screen sizes. The component also includes functionality for selecting sizes and colors within each bundle.

## Table of Contents

- [Features](#features)
- [Project Directory Structure](#project-directory-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic bundle selection with expandable and collapsible options.
- Styled with Tailwind CSS for a modern and responsive UI.
- Dropdowns for selecting size and color.
- Total price calculation based on the selected bundle.
- Fully responsive design.

## Project Directory Structure

. ├── public/ # Static assets ├── src/ │ ├── components/ # Reusable React components │ │ ├── AddToCartButton.js │ │ ├── BundleDropdowns.js │ │ └── BundleOption.js │ ├── App.js # Main application file │ ├── index.css # Global styles │ └── index.js # Entry point for React ├── tailwind.config.js # Tailwind CSS configuration ├── package.json # Project metadata and dependencies └── README.md # Project documentation



## Installation

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (version 14.x or higher)
- npm or yarn (for package management)

### Setup

1. **Clone the Repository:**

    ```bash
    git clone git@github.com:HarshRajMishra1995/BundleAndSave.git
    cd BundleAndSave
    ```

2. **Install Dependencies:**

    If you're using npm:

    ```bash
    npm install
    ```

    If you're using yarn:

    ```bash
    yarn install
    ```

3. **Configure Tailwind CSS:**

    Tailwind CSS is already configured in the project. You can find the configuration in `tailwind.config.js`.

## Running the Project

To start the project locally:

```bash
npm start
