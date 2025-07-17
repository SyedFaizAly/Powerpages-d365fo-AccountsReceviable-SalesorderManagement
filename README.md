🌐 Power Pages + Dynamics 365 F&O – Sales Order Management Portal

This repository demonstrates a robust Sales Order Management Portal built using Microsoft Power Pages, Power Automate, and Dynamics 365 Finance & Operations (D365 F&O).

The portal is designed for Accounts Receivable (AR) operations, offering a seamless interface to:

📄 View, edit, submit, or cancel Sales Orders

✅ Trigger internal workflows in D365 F&O

⚙️ Create new Sales Orders using integrated custom forms

⛓ Filter data per logged-in user/customer access using role-based security

📊 Key Functionalities

🔐 Secure Role-Based Login

Users log in via secure Azure AD B2C authentication.

Only authorized users can access the portal.

Role-based visibility restricts data access.

⛰️ Customer-Based Data Filtering

Each user is assigned specific customers.

Sales Orders shown in the portal are filtered based on assigned customers.

📉 Real-Time Sales Order Visibility

View existing sales orders with customer-level filtering.

Sales order headers and lines displayed via Virtual Entities.

✍️ Create and Edit Sales Orders

Create new sales orders using custom Power Pages forms.

Edit existing orders inline using enhanced UX forms.

Conditional fields, validation logic, and line-item editors included.

⏳ Submit & Cancel Workflows

Submit or cancel sales orders directly from the portal.

Workflow triggers handled via Power Automate calling D365 custom services.

💡 Architecture & Integration

Component

Description

Power Pages

Frontend user portal

Dataverse

Stores staging data, forms, and user access mappings

Power Automate

Connects portal with D365 custom service APIs

D365 F&O

Backend ERP for workflow and order logic

Virtual Entities

Live read-only sync of Sales Order data

Azure AD B2C

Handles user authentication & authorization

💡 Custom Forms & Tables for Sales Order Management

This portal includes multiple custom Power Pages forms and custom Dataverse tables tailored for deep integration with D365 F&O's Sales Order process:

🔧 Custom Tables

CustomSalesOrderHeader

CustomSalesOrderLine

These tables mirror the structure of D365 F&O entities and act as staging buffers before syncing with the ERP system.

📜 Custom Forms

Create Sales Order – collects header & line information

Edit Sales Order – supports inline edits, validation, and updates

Sales Line Manager – manage multiple line items with row-level logic

Approval Trigger – initiate internal workflows for selected orders

Each form includes:

Validation logic

Conditional visibility

Power Automate integration for real-time sync

📁 File Structure

/SalesOrderPortal/
│
├── /power-pages-site/              # Power Pages web files (HTML, Liquid, JS)
│   ├── /pages/
│   │   ├── Customers.en-US.webpage.html
│   │   ├── SalesOrderLines.en-US.webpage.html
│   │   ├── EditSalesOrderLines.en-US.webpage.html
│   │   ├── Editsalesorderheader.en-US.webpage.html
│   │   ├── CreateSalesOrder.en-US.webpage.html
│   │   └── SalesOrders.en-US.webpage.html
│   ├── /scripts/
│   │   ├── SalesOrders.en-US.customjs.js
│   │   └── SalesOrderLines.en-US.customjs
│   ├── /styles/
│   │   ├── SalesOrderLines.en-US.customcss
│   │   └── SalesOrders.en-US.customcss.css
│
├── /power-automate-flows/         # Power Automate flows (ZIP or JSON)
│   ├── SubmitSalesOrderFlow.zip
│   ├── TriggerApprovalFlow.zip
│
├── /d365fo-api/                    # D365FO custom service contracts/classes
│   ├── SalesOrderServiceContract.xpp
│   ├── SalesOrderServiceController.xpp
│
├── /screenshots/                   # Portal and flow screenshots
│   ├── login.png
│   ├── sales-order-list1.png
│   ├── sales-order-list2.png
│   ├── create-form.png
│   ├── EditSalesOrder.png
│   ├── Customers.png
│   ├── EditSalesOrderLines.png
│   ├── SalesOrderLines.png
│
├── README.md
├── LICENSE
└── .gitignore

📷 Screenshots

🔓 Secure Login



🔍 Filtered Sales Order List



➕ Create New Sales Order Form



🌐 Power Automate Flow Trigger



