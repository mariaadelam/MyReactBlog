# BackEnd React BLOG

## Git + GitHub

```
git init
git remote add origin https: //github.com/USERGITHUB/reactBlog.git
git remote -v

```

## MySQL

### reactblog.sql

## NodeJs + TypeScript

```
mkdir backend
cd backend/
node -v , npm -v
tsc -v
npm init --yes
//sau npm init –y  =>package.js

npx tsc --init //=> tsconfig.json
```

### Instalam modulele necesare

```
npm install express dotenv cors body-parser mysql2
npm i -D typescript @types/express @types/node
//npm install --dev typescript @types/express @types/node
npm install --save-dev  @types/body-parser @types/mysql @types/dotenv
npm install --save-dev  @types/cors
npm i --save bcryptjs

npm i --save  @types/bcryptjs
npm i --save jsonwebtoken
npm i --save @types/jsonwebtoken
npm i --save express-session
npm i --save @types/express-session
npm i --save express-validator
npm i --save @types/express-fileupload express-fileupload

```

### In fisierul tsconfig.json

```
"compilerOptions": {
    "outDir": "./dist"
}
```
```
touch .gitignore
touch .env
```
### .env

```
PORT=3002
DB_HOST="localhost"
DB_USER="root"
DB_PWD=""
DB_NAME="reactblog"

SECRET_KEY= "reactblog-secret-key"
```

### Facem folderele necesare

```
mkdir models routes types
touch models/post.ts models/user.ts models/contact.ts
touch routes/adminRouter.ts routes/postRouter.ts routes/userRouter.ts routes/contactRouter.ts
touch types/Post.ts types/User.ts types/Contact.ts

touch types/Comment.ts types/Category.ts
touch models/comment.ts models/category.ts
touch routes/commentRouter.ts
```

### Facem fisierul: server.ts

```
touch server.ts
touech jwt.ts
```

### Modificam fisieul package.json

```
"scripts": {
    "build": "npx tsc",
    "start": "node dist/server.js",
}


npm run build
npm run start
```

# Back-End+MySql

### db.ts conexiunea la baza de date

```
touch db.ts
```

```
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});
```


Modificam fisierul server.ts

npm run dev
http: //localhost:3002/users

# Frontend React BLOG

## Frontend React CRUD

```
npm create vite@latest frontend -- --template react-ts
cd frontend
npm view react version
npm install
```
##

``` //vite.config.ts
    server: {
        port: 3000,
},
```
```
npm run dev
```



### Instalam modulele necesare

```


npm i --save react-bootstrap@next bootstrap@5.3 react-router-dom axios formik npm date-fns
npm install --save-dev @types/react-router-dom
npm install bootstrap-icons

<!-- nu rulez urm 3 comenzi -->

npm install @tiptap/react @tiptap/starter-kit
npm install @tiptap/extension-underline @tiptap/extension-strike @tiptap/extension-code @tiptap/extension-blockquote @tiptap/extension-link
npm install @tiptap/extension-color @tiptap/extension-text-style @tiptap/extension-font-size

<!-- nu rulez -->


npm install lexical @lexical/react @lexical/rich-text
npm install @lexical/list
npm install @lexical/link
npm install @lexical/table
npm install @lexical/code

<!-- ori cu tiptap, ori cu lexical -->

```


###src/main.tsx
```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
```

### Structura 
# Creează directoarele
``` 
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/services
mkdir -p src/types
mkdir -p src/context
```
# Componente Creează fișierele în directoare
##### CREATE
```bash
touch src/components/UserForm.tsx
touch src/components/CreateUser.tsx
```
##### Read
```bash
touch src/components/UserList.tsx
touch src/components/UserTableRow.tsx
```
##### Update
```bash
touch src/components/EditUser.tsx
```
##### CREATE
```bash
touch src/components/CreatePost.tsx
```
```
##### Read
```bash
touch src/components/Post.tsx

```
##### Update
```bash
touch src/components/EditPost.tsx
```

```bash
touch src/components/Layout.tsx
touch src/components/NavBar.tsx
touch src/components/Header.tsx
touch src/components/Footer.tsx
```
##### Pagini
touch src/pages/HomePage.tsx
touch src/pages/Contact.tsx
touch src/pages/Login.tsx
touch src/pages/Register.tsx
touch src/pages/PostList.tsx
touch src/pages/Posts.tsx
touch src/pages/SinglePost.tsx
touch src/pages/NotFound.tsx

touch src/services/apiUsers.ts
touch src/services/apiPosts.ts
touch src/types/User.ts
touch src/types/Post.ts
touch src/routes.tsx
touch src/config.ts
touch src/context/authContext.tsx


### Edit App.tsx


- definim meniul si rutele respective

### Edit App.css

### La final

```
npm run build
```





### Varianta veche
```
npm i create-react-app -g
npm view react version
```

```
cd ..
create-react-app frontend
sau
npx create-react-app frontend
cd frontend
npm start
```

### Instalam modulele necesare

```
npm i --save react-bootstrap@next bootstrap@5.3 react-router-dom axios formik yup date-fns
npm i --save env-cmd
npm i --save-dev @babel/plugin-proposal-private-property-in-object

npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
 // pt editor rich-text
npm i react-quill
```

### Facem un folder components si adaugam componentele

```
mkdir components
touch components/Layout.jsx components/NavBar.jsx components/Header.jsx components/Footer.jsx
```

### Facem un folder pages si adaugam componentele

```
mkdir pages
touch pages/Home.jsx pages/Login.jsx pages/Register.jsx pages/Posts.jsx pages/SinglePost.jsx pages/NoPage.jsx pages/Contact.jsx
```

### In App.js adaugam rutele

```
<BrowserRouter>
    <Routes>
        <Route  element={<Layout />
}>
            <Route index  element={<Home />
} />
            <Route path="posts" element={<Posts />
} />
            <Route path="contact" element={<Contact />
} />
            <Route path="post/:id" element={<SinglePost />
} />
            <Route path="mylogin" element={<Login />
} />
            <Route path="myregister" element={<Register />
} />

            <Route path="*" element={<NoPage />
} />
        </Route>
    </Routes>
</BrowserRouter>
```

### facem context/authContext.jsx si modificam index.js

```
 mkdir context
 touch context/authContext.jsx

import { AuthContexProvider
} from './context/authContext';
<AuthContexProvider>
    <App />
</AuthContexProvider>

```
