// 🔁 Filter & Sort
function filterOrders() {
  const orderDate = document.getElementById("searchOrderDate").value;
  const orderStatusInput = document.getElementById("searchOrderStatus").value.toLowerCase();
  const orderNumberInput = document.getElementById("searchOrderNumber").value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const rowOrderDate = new Date(row.querySelector("td:nth-child(4)").textContent).toISOString().split('T')[0];
    const rowOrderStatus = row.querySelector("td:nth-child(5)").textContent.toLowerCase();
    const rowOrderNumber = row.querySelector("td:nth-child(1)").textContent.toLowerCase();

    const matchesDate = !orderDate || rowOrderDate === orderDate;
    const matchesStatus = !orderStatusInput || rowOrderStatus.includes(orderStatusInput);
    const matchesNumber = !orderNumberInput || rowOrderNumber.includes(orderNumberInput);

    row.style.display = matchesDate && matchesStatus && matchesNumber ? "" : "none";
  });
}

function sortTable(order) {
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const tableBody = document.querySelector("tbody");

  rows.sort((rowA, rowB) => {
    const dateA = new Date(rowA.querySelector("td:nth-child(4)").textContent);
    const dateB = new Date(rowB.querySelector("td:nth-child(4)").textContent);
    return order === "asc" ? dateA - dateB : dateB - dateA;
  });

  rows.forEach(row => tableBody.appendChild(row));
}

document.getElementById("searchOrderDate").addEventListener("change", filterOrders);
document.getElementById("searchOrderStatus").addEventListener("keyup", filterOrders);
document.getElementById("searchOrderNumber").addEventListener("keyup", filterOrders);
document.getElementById("sortAsc").addEventListener("click", () => sortTable("asc"));
document.getElementById("sortDesc").addEventListener("click", () => sortTable("desc"));
document.getElementById("clearFilters").addEventListener("click", function () {
  document.getElementById("searchOrderDate").value = "";
  document.getElementById("searchOrderStatus").value = "";
  document.getElementById("searchOrderNumber").value = "";
});

// ✅ Edit Button Logic
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".edit-btn").forEach(initializeEditButton);
  document.querySelectorAll(".submit-btn").forEach(initializeSubmitButton);
  document.querySelectorAll(".cancel-btn").forEach(initializeCancelButton);
});

function initializeEditButton(button) {
  const orderStatus = button.getAttribute("data-order-status")?.toLowerCase();
  const workflowStatus = button.closest("tr").querySelector("td:nth-child(9)").textContent.trim().toLowerCase();
  const dataId = button.getAttribute("data-id");
  
  if (!(orderStatus === "open order" && workflowStatus === "not submitted")) {
    button.disabled = true;
  }

  button.addEventListener("click", function () {
    const url = `/Edit-sales-order-header/?id=${dataId}`;
    window.location.href = url;
  });
}

function initializeSubmitButton(button) {
  const row = button.closest("tr");
  const orderStatus = row.querySelector("td:nth-child(5)").textContent.trim().toLowerCase();   
  const workflowStatus = button.closest("tr").querySelector("td:nth-child(9)").textContent.trim().toLowerCase();
  const salesOrderNumber = button.getAttribute("data-order-number");
  const flowUrl = "https://prod-44.westeurope.logic.azure.com:443/workflows/6d07539c5f104e74b4745efa22fa591c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Awluvntdx8rMCwZLMRc0AVUzdjkWQNcQ0tRy8hiX9H0";

   if (!(orderStatus === "open order" && workflowStatus === "not submitted")) {
    button.disabled = true;
    button.title = "Order must be 'Open order' and Workflow must be 'Not Submitted' to proceed.";
    return;
  }

  // ✅ Add click event
  button.addEventListener("click", function () {
    const data = {
      _salesId: salesOrderNumber,
      _company: "ASEB"
    };

    // Call Power Automate
    fetch(flowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        alert("Workflow submitted successfully!");
        location.reload();
      } else {
        alert("Error submitting workflow.");
      }
    })
    .catch(error => {
      console.error("Submission failed:", error);
      alert("Network error submitting workflow.");
    });
  });
}

function initializeCancelButton(button) {
  const row = button.closest("tr");
  const orderStatus = row.querySelector("td:nth-child(5)").textContent.trim().toLowerCase();   
  const workflowStatus = button.closest("tr").querySelector("td:nth-child(9)").textContent.trim().toLowerCase();
  const salesOrderNumber = button.getAttribute("data-order-number");
  const flowUrl = "https://default0bccb0fe0f7c4f75ba17cee328d68b.eb.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/8c745b5616e846d7a8de8f27533012ff/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=Default-0bccb0fe-0f7c-4f75-ba17-cee328d68beb&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vte25ixdC8DZEaLS4n-XmkkWUwG1dqRmZKalzQmnLNY";

   if (!(orderStatus === "open order" && workflowStatus === "not submitted")) {
    button.disabled = true;
    button.title = "Order must be 'Open order'";
    return;
  }

  // ✅ Add click event
  button.addEventListener("click", function () {
    const data = {
      _salesId: salesOrderNumber,
      _company: "ASEB"
    };

    // Call Power Automate
    fetch(flowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        alert("Sales order cancelled successfully!");
        location.reload();
      } else {
        alert("Error cancelling sales order.");
      }
    })
    .catch(error => {
      console.error("Cancelation failed:", error);
      alert("Network error cancelling sales order.");
    });
  });
}





