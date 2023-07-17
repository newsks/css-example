import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick=(event)=>{
    console.log(event)
    alert("버튼이 클릭됨")
  }
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar image='https://plus.unsplash.com/premium_photo-1688125414822-c1daf8543ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
      isNew={true}
      />
      <Profile 
        image='https://plus.unsplash.com/premium_photo-1688125414822-c1daf8543ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' 
        name='elice_o.o' 
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile 
        image='https://plus.unsplash.com/premium_photo-1688045530445-66a06a5e9ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' 
        name='elice_o.o' 
        title='웹디자이너'
      />
      <Profile 
        image='https://images.unsplash.com/photo-1688371464319-0fb102189aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=678&q=80' 
        name='elice_o.o' 
        title='공인중개사'
      /> 
    </>
  );
}

export default AppProfile;
