[{
        "React": "Basic code coverage",
        "link": "https://www.youtube.com/watch?v=hQAHSlTtcmY",
        "node -v": "verify notes is install. expected result: v14.3.0",
        "npx create-react-app .": "Creates react folder applications:\n node_modules\n public\n src\n .gitignore\n package-lock.json\n package.json\n README.md",
        "npm start": "Used for starting the development",
        "npm run build": "Used for creating a production site",
        "public//index.html": "contains only <div id=\"root\"><//div> where all the application will be sent to for display",
        "src": [{
            "Purpose": "contains all of the main applications are stored",
            "index.js": [{
                "Purpose": "Starting application",
                "ReactDOM.render(<App />, document.getElementbyId(\'root\'))": "Take the code from App.js component and send its content to the id=\'root\', which can be found in the public//index.html"
            }],
        }],
        "npm start": "Application will start and open ",
        "App.js": [{
            "Learn React": "change \'Learn React\' to /'Learn React Today \' will update the browser automatically",
            "component": "referring to a js file and it does not include it\'s extention. example: <TodoList //>",
            "ES7 React//Redux//GraphQL//React-Native snippets": "Extension file",
            "rfc TAB": "Auto fill the page and able to create the webpage for index.html",
            "return": [{
                "Purpose": "Can only return one element",
                "Fragment element": "<>...<//>. This allows the code to send multiple elements as one element",
                "Example": "<> <TodoList /> <input type=\"text\" //> <button>Add Todo <//button> <//>",
                "TodoList": "component TodoList.js"
            }],
            "useState": [{
                "Purpose": "Call useState module to change all components when changes are made",
                "import": "import React, { useState } from \'react\' ",
                "function returns an array": "const[todos, setTodos]] = useState([])",
                "todos": "Everone of the todos within the state tree",
                "setTodos": "function called to update the todos",
                "Example passing data": "const [todos, setTodos] = ([\'Todo 1\', \'Todo 2\'])",
            }],
            "props": [{
                "Definition": "passing data through a function",
                "example": "<TodoList todos={todos} //>",
                "TodoList": "calling the TodoList.js",
                "todos": "passing the value from {todos}",
                "TodoList.js": "export default function TodoList( {todos}) {...}"
            }],

            "Object destructing": "ways to modify arrays",
            "passing js to another js file": "import Todo from /'.//Todo/'",
            "useRef": [{
                "Purpose ": "Allow us to reference elements inside our html ",
                "const todoNameRef = use(Ref()": "declare variable",
                "<input ref={todoNameRef} tyhpe=\"text\"": "call the function todoNameRef",
                "function handleAddTodo(e) { todoNameRef.current.value}": "sends the element todoNameRef variable to the function"
            }],
            "setTools": [{
                "function": "setTools (preTodos => {return [...preTodos, {id: 1, name: name, complete,: false}})",
                "setTools": "function that allows elements to be set in the html",
                "preTool": "function call that calls the previous values ex: setTools (preTodos => {return [...preTodos, {id: 1, name: name, complete,: false}})",
                "[...preTodos]": "the three does taks all the array variables",
                "alternate way to clear all todos": "setTodos([])",
                "": ""
            }],
            "npm i uuid": [{
                "purpose": "generate a random & unique id",
                "import from module 1": "import uuidv4 from \'uuid//v4\'",
                "alternate way to call from module": "import {v4 as uuidv4} from 'uuid'",
                "": ""
            }],
            "useEffect": [{
                "purpose": "used to save the todos values within a local storage",
                "const LOCAL_STORAGE_KEY = \'todoApp.todos\'": "",
                "useEffect(() => {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringfy(todos))}, [todos])": "",
                "...}, [todos])": "contains an array of dependencies form todos and anytime this changes this function is executed",
                "localStorage": "save the values from todos"
            }],
            "useEffect(() => {...}, [])": "Load the todos values and because the array [] is blank it will only execute it once",
            "const newTodos \ [...todos]": "Create a copy of the todos from an array",
            "": ""}]
        }]