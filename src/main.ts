import './style.css'

document.addEventListener("DOMContentLoaded", (): void => {
  const writeTodo: HTMLInputElement | null = document.getElementById("taskLabel") as HTMLInputElement
  const addTodo: HTMLButtonElement | null = document.getElementById("addTask") as HTMLButtonElement
  const taskContent: HTMLElement | null = document.getElementById("taskContent")

  let uniqueID: number = 0

  addTodo?.addEventListener("click", (): void => {
    if (writeTodo && writeTodo.value.trim() !== "" && taskContent) {
      uniqueID++

      const newTodo: HTMLDivElement = document.createElement("div") as HTMLDivElement
      const myLabel: HTMLLabelElement = document.createElement("label") as HTMLLabelElement

      const myCheckbox: HTMLInputElement = document.createElement("input") as HTMLInputElement
      myCheckbox.type = "checkbox"

      const mySpan: HTMLSpanElement = document.createElement("span") as HTMLSpanElement
      mySpan.textContent = writeTodo.value

      myLabel.appendChild(myCheckbox)
      myLabel.appendChild(mySpan)

      newTodo.appendChild(myLabel)

      const removeTodo: HTMLButtonElement = document.createElement("button") as HTMLButtonElement
      removeTodo.textContent = "Delete"
      removeTodo.className = "delTodo"

      newTodo.appendChild(removeTodo)
      taskContent.appendChild(newTodo)

      writeTodo.value = ""

      removeTodo.addEventListener("click", (): void => {
        newTodo.remove()
      })

      myCheckbox.addEventListener("change", () => {
        mySpan.classList.toggle("strikethrough", myCheckbox.checked)
      })
    }
  }
  )
})
