var form = document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);


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
}

function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    var li=e.target.parentElement;
    itemList.removeChild(li);
  }
}
