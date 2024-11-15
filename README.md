# GadgetHaven - E-commerce Platform

GadgetHaven is an e-commerce platform designed to provide a seamless and interactive shopping experience for tech enthusiasts. The platform allows users to browse and purchase gadgets, manage their cart and wishlist, and explore various product categories with rich details and pricing information.

## Demo

You can view the live website here:   
irritatinghhh-earth.surge.sh
## Requirements Document

figma link: https://www.figma.com/design/qr7hizhQyfmitEimBC6blK/Assignment-8?node-id=0-1&node-type=canvas&t=7Sr6v8i3wIN015u6-0

## Features

1. **Structured Navbar**: Includes Logo, Brand Name, Dashboard, and Stats with active route indication.
2. **Product Categories Sidebar**: Browse gadgets by category (e.g., computers, phones, smart watches).
3. **Product Cards**: Display products with image, name, price, and a “Details” button leading to a detailed product page.
4. **Cart and Wishlist System**: Manage cart and wishlist via Context API, with LocalStorage for persistence.
5. **Sorting & Filtering**: Sort products by price, and filter products based on categories and availability.
6. **Modal for Purchase Confirmation**: After purchasing, show a modal congratulating the user, then clear the cart.
7. **Toast Notifications**: Display toasts when items are added to the cart or wishlist with appropriate success messages.
8. **Statistics Page**: A Price vs. Product Name chart that shows pricing and product ratings.

## React Concepts Used

- **Context API** for managing global state (cart and wishlist).
- **React Router** for routing between pages (home, product details, dashboard, etc.).
- **useState and useEffect** for managing component state and fetching data.
- **React Toastify** for showing toasts and alerts.
- **useNavigate** for navigating programmatically (for modal and purchase functionality).
- **useLocation** for detecting and modifying the background color of pages based on route.

## Data Management

- **Context API** is used to manage the cart and wishlist, ensuring that the state is accessible across components.
- **LocalStorage** is used to persist cart and wishlist data between page reloads, ensuring the user's data is saved.

