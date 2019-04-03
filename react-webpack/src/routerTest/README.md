react router 是一個 routing library, 利用此library, react 會自行控制 URL, 而這些URL並不一定存在, 當你按下此 link 時, react 會先收到這個 request, 接著解析這個需求, 再載入對應的component並且改變 URL. 如下例: 當按下 Home 會找尋符合條件的 Route, 並且載入對應的 component
```javascript
 <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfount} />
      </Switch>
    </div>
  </Router>
```



# install 
```
npm install --save react-router-dom
```

# Error
- Could not find a declaration file for module 'react-router-dom'.
當使用typescript 時, 若用 `npm install --save react-router-dom` 安裝 package, 會出現此錯誤
可以改用 `npm install --save @types/react-router-dom` 
