const switchContainer = document.getElementById("switch")
const checkbox = document.getElementById("checkbox")

const darkTheme = {
   "--bg-main":  "hsl(230, 17%, 14%)",
   "--bg-pattern": " hsl(232, 19%, 15%)",
   "--bg-card": "hsl(228, 28%, 20%)",
   "--bg-card-hover": "hsl(229, 20%, 31%)",
   "--text-1": "hsl(228, 34%, 66%)",
   "--text-2": "hsl(0, 0%, 100%)"
}

const lightTheme = {
   "--bg-main":  "hsl(0, 0%, 100%)",
   "--bg-pattern": "hsl(225, 100%, 98%)",
   "--bg-card": "hsl(227, 47%, 96%)",
   "--bg-card-hover": "hsla(227, 22%, 87%, 0.917)",
   "--text-1": "hsl(228, 12%, 44%)",
   "--text-2": "hsl(230, 17%, 14%)"
}

document.addEventListener("DOMContentLoaded", () =>{
   const theme = localStorage.getItem("theme")
   if(theme == "darkTheme") {
      changeTheme(darkTheme)
      checkbox.checked = true
   }else {
      changeTheme(lightTheme)
      checkbox.checked = false
   }
})

switchContainer.addEventListener("click", () =>{
   if(checkbox.checked) {
      changeTheme(darkTheme)
      localStorage.setItem("theme", "darkTheme")
   }else {
      changeTheme(lightTheme)
      localStorage.setItem("theme", "lightTheme")
   }
})

const changeTheme = theme =>{
   const customStyles = Object.keys(theme)
   for(const style of customStyles) {
      document.documentElement.style.setProperty(style, theme[style])
   }
}