# 🌐 Power Pages + Dynamics 365 F&O – Sales Order Management Portal

This repository demonstrates a robust **Sales Order Management Portal** built using **Microsoft Power Pages**, **Power Automate**, and **Dynamics 365 Finance & Operations (D365 F&O)**.

The portal is designed for **Accounts Receivable (AR)** operations and enables users to:

- 📄 View, create, edit, submit, or cancel Sales Orders
- ✅ Trigger internal workflows in D365 F&O
- ⛓ Filter Sales Order data by customer for each user
- 🔐 Authenticate securely via Azure AD B2C
- ⚙️ Manage integration with D365 via Virtual Entities and custom APIs

---

## 📊 Key Functionalities

### 🔐 Secure Role-Based Login
- Portal uses **Azure AD B2C** for secure authentication.
- Users see only data tied to their assigned customer(s).

### ⛰️ Customer-Based Data Filtering
- Admins assign specific customers to users.
- Sales orders are **filtered** based on these assignments.

### 📉 Real-Time Sales Order Visibility
- Sales order headers and lines shown via **Virtual Entities**.
- Always displays up-to-date D365 F&O records.

### ✍️ Create & Edit Sales Orders
- Use Power Pages custom forms to:
  - Create new sales orders
  - Edit existing orders with validation
  - Manage Sales Lines using inline editors

### ⏳ Submit & Cancel Workflows
- Submit or cancel Sales Orders via the portal.
- Triggers **Power Automate flows** that call D365 custom services.

---

## 🏗 Architecture & Integration

| Component          | Description                                               |
|-------------------|-----------------------------------------------------------|
| Power Pages        | Frontend user portal                                      |
| Dataverse          | Holds staging data and user-customer mappings             |
| Power Automate     | Connects portal actions with D365 APIs                    |
| D365 F&O           | Backend ERP – handles business logic & processing         |
| Virtual Entities   | Real-time sync of Sales Orders from D365 F&O              |
| Azure AD B2C       | Handles user login and access control                     |

---

## 💡 Custom Forms & Tables

This portal includes multiple **custom Power Pages forms** and **Dataverse tables** integrated with D365 F&O.

### 🔧 Custom Tables
- `CustomSalesOrderHeader`
- `CustomSalesOrderLine`

These act as **staging buffers** before pushing data to D365 F&O.

### 📜 Custom Forms
- **Create Sales Order** – collects header & line info
- **Edit Sales Order** – supports inline edits
- **Sales Line Manager** – add/edit multiple lines
- **Approval Trigger** – submits/cancels sales orders

Each form includes:
- Validation logic
- Conditional visibility
- Real-time sync via Power Automate

---

## 📁 File Structure

PowerPages_SalesOrderPortal/
│
├── power-pages-site/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── power-automate-flows/
├── d365fo-api/
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore
