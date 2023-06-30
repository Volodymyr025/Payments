const load = document.getElementById('load-page')
const userTable = document.getElementById('table')
const download = document.getElementById('btn')
const add = document.getElementById('btn-add')
const notary = document.getElementById('notary')
const sum = document.getElementById('sum')
const username = document.getElementById('username')
const ipn = document.getElementById('ipn')


function visible (item) {
  item.style.display = 'flex'
}

function createListUser (appoint, not){
  const post = document.querySelector('.post')
    const elTr = document.createElement('tr')
    elTr.innerHTML = `<td>${sum.value}</td>
    <td>${username.value}</td>
    <td>${ipn.value}</td>
    <td></td>`
    post.append(elTr)
  }


addItem = () =>{
  createListUser()
  visible(userTable)
}

function htmlTableToExcel(type){
  let data = document.getElementById('tblToExcl');
  let excelFile = XLSX.utils.table_to_book(data, {sheet: "sheet1"});
  XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
  XLSX.writeFile(excelFile, 'ExportedFile.' + type);
 }
 
function downloadActive(){
  htmlTableToExcel('xlsx')
}



add.addEventListener('click',addItem)
download.addEventListener('click',downloadActive)
