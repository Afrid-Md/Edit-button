

document.getElementById('my-form').addEventListener('submit',function (event){
       event.preventDefault();

       const Name=document.getElementById('name').value;
       const Email=document.getElementById('email').value;

       var userInfo = {
              Name : Name,
              Email : Email
       }

       localStorage.setItem("userinfo", JSON.stringify(userInfo)); 
       nextli(userInfo);
    
});

function nextli(userInfo){

const parentElement = document.getElementById('users');
const childElement = document.createElement('li');

childElement.id="item";

childElement.textContent=+userInfo.Name+'-'+userInfo.Email;

const deletebutton=document.createElement('input');
deletebutton.id='delete';
deletebutton.type='button';
deletebutton.value='Delete';
deletebutton.onclick=()=>{
       localStorage.removeItem(userInfo.Email);
       parentElement.removeChild(childElement);
}
childElement.appendChild(deletebutton);
parentElement.appendChild(childElement);

const parE = document.getElementById('delete');

const editButton = document.createElement("button");
editButton.id='edit';
editButton.type='button';
editButton.value='Edit';
editButton.onclick=()=>{
       localStorage.removeItem(userInfo.Email);
       parentElement.removeChild(childElement);
       const n =document.getElementById('name');
       n.value=userInfo.Name;
       const e =document.getElementById('email');
       e.value=userInfo.Email;
}

parE.appendChild(editButton);

}

