var form = document.getElementById('addForm');
var itemList=document.getElementById('items');
var clearBtn=document.getElementById('clearAll');


form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
window.onload=loadItem();
clearBtn.addEventListener('click',removeAll);


function loadItem()
{
  for(var i=0;i<localStorage.length;i++)
  {
    var key=localStorage.key(i);
    var item=localStorage.getItem(key);

    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(item));

    var delBtn=document.createElement('button');
    delBtn.className='btn btn-danger float-right delete';
    delBtn.appendChild(document.createTextNode('Remove'));
    li.appendChild(delBtn);
    itemList.appendChild(li);
  }
}

function addItem(e)
{
  e.preventDefault();
  var li=document.createElement('li');
  li.className='list-group-item';
  var newItem=document.getElementById('item').value;
  li.appendChild(document.createTextNode(newItem));
  var delBtn=document.createElement('button');
  delBtn.className='btn btn-danger float-right delete';
  delBtn.appendChild(document.createTextNode('Remove'));
  li.appendChild(delBtn);
  itemList.appendChild(li);
  window.localStorage.setItem(newItem,newItem);
  location.reload();

}

function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    console.log(e.target);
    var li=e.target.parentElement;
    li.removeChild(e.target);

    localStorage.removeItem(li.innerText);
    itemList.removeChild(li);
  }
}


function removeAll()
{
  localStorage.clear();
  itemList.style.display='none';

}
