import './App.css';

function AppJSX() {
  const name = '엘리'
  const list =['우유', '딸기', '바나나', '요거트']
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
       {
        list.map(item => <li>{item}</li>)
       }
       {
        list.map((item)=>(<li>{item}</li>))
       }
       {
          list.map((item)=>(
          <li>{item}</li>
       ))}
      </ul>
      <img style={{width:'500px', height:'400px'}} src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
    </>
  );
}

export default AppJSX;
