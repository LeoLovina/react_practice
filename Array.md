# map

```
{articles.map(e=>(
    <li key={e.id}> {e.title} </li>   
))}
```

```
{articles.map((v, i, a)=>{
   return <li key={i}> {v.title} </li> 
})} 
```
