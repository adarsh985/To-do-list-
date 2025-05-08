document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  

    addBtn.addEventListener("click", () => {
      const task = taskInput.value.trim();
  
      if (task === "") return;
  
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.className = "delete-btn";
  
      // Delete event
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    });
  
    // Add task on Enter key
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addBtn.click();
      }
    });
  });
  