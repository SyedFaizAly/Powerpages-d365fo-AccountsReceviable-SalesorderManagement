
// ✅ Edit Button Logic
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".edit-btn").forEach(initializeEditButton);
});

function initializeEditButton(button) {
  const orderStatus = button.getAttribute("data-order-status")?.toLowerCase();
  const workflowStatus = button.getAttribute("data-workflow-status")?.toLowerCase();
  const dataId = button.getAttribute("data-id");
  
  if (!(orderStatus === "open order" && workflowStatus === "not submitted")) {
    button.disabled = true;
  }

  button.addEventListener("click", function () {
    const url = `/Edit-sales-order-lines/?id=${dataId}`;
    window.location.href = url;
  });
}