const NOTARYS = {
  Податки: {
    appointment: [
      "101 ЄСВ з підприємця",
      "101 ЄСВ з найманих осіб",
      "101 військовий збір",
      "101 Акцизний податок",
      "101 Єдиний податок",
      "101 ПДФО",
      "101 Плата за ліцензію на право роздріб торг алкогол напоями",
      "101 Плата за ліцензію на право торг тютюн виробами",
      "101 ПДФО",
      "101 ПДФО",
      "101 Земельний податок з фіз осіб",
    ],
    mfo: [
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
    ],
    bankAc: [
      "UA708999980000355649204020919",
      "UA888999980000355639201020919",
      "UA898999980313020063000009001",
      "UA148999980314060531000009660",
      "UA038999980314070699000009660",
      "UA618999980333119340000009660",
      "UA278999980334109825000009660",
      "UA278999980334109825000009660",
      "UA978999980333159342000009660",
      "UA918999980333189341000009660",
      "UA608999980334179813000009660",
    ],
    getBank: [
      "Казначейство України ЕАП",
      "Казначейство України ЕАП",
      "ГУК в ІВ ФР обл/Ів Фр обл/11011000",
      "ГУК в ІВ ФР обл/ТГ Снятин/14040000",
      "ГУК в ІВ ФР обл/ТГ Снятин/18050400",
      "ГУК в ІВ ФР обл/ТГ Снятин/11010100",
      "ГУК в ІВ ФР обл/ТГ Снятин/22011100",
      "ГУК в ІВ ФР обл/ТГ Снятин/22011100",
      "ГУК в ІВ ФР обл/ТГ Снятин/11010400",
      "ГУК в ІВ ФР обл/ТГ Снятин/11010500",
      "ГУК в ІВ ФР обл/ТГ Снятин/18010700",
    ],
    zkpo: [
      "43968084",
      "43968084",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
    ],
  },
  Заболотів: {
    appointment: [
      "101 Земельний податок з фіз осіб",
      "101 Єдиний податок з фіз осіб",
      "101 ПДФО",
      "101 ПДФО",
      "101 ПДФО",
      "101 ЄСВ з підприємця",
      "101 ЄСВ з найманих осіб",
      "101 військовий збір",
    ],
    mfo: [
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
      "899998",
    ],
    bankAc: [
      "UA538999980334179813000009592",
      "UA938999980314070699000009592",
      "UA548999980333119340000009592",
      "UA908999980333159342000009592",
      "UA848999980333189341000009592",
      "UA708999980000355649204020919",
      "UA888999980000355639201020919",
      "UA898999980313020063000009001",
    ],
    getBank: [
      "ГУК в ІВ ФР обл/ТГ Заболотів/18010700",
      "ГУК в ІВ ФР обл/ТГ Заболотів/18050400",
      "ГУК в ІВ ФР обл/ТГ Заболотів/11010100",
      "ГУК в ІВ ФР обл/ТГ Заболотів/11010400",
      "ГУК в ІВ ФР обл/ТГ Заболотів/11010500",
      "Казначейство України ЕАП",
      "Казначейство України ЕАП",
      "ГУК в ІВ ФР обл/Ів Фр обл/11011000",
    ],
    zkpo: [
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "37951998",
      "43968084",
      "43968084",
      "37951998",
    ],
  },
  Комуналка: {
    appointment: [
      "Плата за газ ос рах №",
      "Оплат води та канал ос рах №",
      "Плата за розп газу ос рах №",
      "Оплата за вивезення сміття ос рах",
      "Оплата за електр ос рах №",
    ],
    mfo: ["300465", "380805", "336503", "305299", "336503"],
    bankAc: [
      "UA893004650000000260323012042",
      "UA293808050000000026001227244",
      "UA053365030000026037313004592",
      "UA903052990000026007005504648",
      "UA883365030000026034300046328",
    ],
    getBank: [
      "ТОВ Нафтогаз Укр",
      "Снятин КП Водоканал",
      "АТ Іван-Франкгаз Снят від",
      "ТЗОВ АВЕ ІВАН-ФРАНК",
      "ТОВ ПРИКАРПАТЕНЕРГОТРЕЙД",
    ],
    zkpo: ["40121452", "31982870", "03361046", "35889312", "42129720"],
  },
  Курилюк: {
    appointment: [
      "ІФ041135/13 ПН Курилюк Л.М.Витяг з Держр обт рух майна",
      "Збір з операц придбавання (купівлі-продажу) нерух майна",
      "Курилюк Л.М.2753023227 Платіж на картку 5168742230280004",
      "Адм збір за держ реєстр реч прав на нер майно та їх обтяж",
      "Фінанс забезп нотар за держ реєстр речов прав на нерух майно та їх обтяж",
      "ІФ041135 ПН Курилюк Л.М. Безпосер доступ до держ реєстру прав",
      "ІФ041135/17 ПН Курилюк Л.М. Витяг/Інф дов зі Спад реєсстру",
      "ІФ041135/16 ПН Курилюк Л.М. Реєстрац свід про прав на спадщину",
    ],
    mfo: [
      "899998",
      "899998",
      "305299",
      "899998",
      "305299",
      "899998",
      "899998",
      "899998",
    ],
    bankAc: [
      "UA878999980333299300041009660",
      "UA288999980313080156000009660",
      "UA203052990000026201678936944",
      "UA368999980313070001000009660",
      "UA383052990000026218035500122",
      "UA878999980333299300041009660",
      "UA878999980333299300041009660",
      "UA878999980333299300041009660",
    ],
    getBank: [
      "ГУК в Ів.-Фр.об/ТГ Снятин/22012700",
      "ГУК в Ів.-Фр.об/ТГ Снятин/24140500",
      "Курилюк Леся Михайлівна",
      "ГУК в Ів.-Фр.об/ТГ Снятин/22012600",
      "Курилюк Леся Михайлівна",
      "ГУК в Ів.-Фр.об/ТГ Снятин/22012700",
      "ГУК в Ів.-Фр.об/ТГ Снятин/22012700",
      "ГУК в Ів.-Фр.об/ТГ Снятин/22012700",
    ],
  },
  zkpo: [
    "37951998",
    "37951998",
    "2753023227",
    "37951998",
    "2753023227",
    "37951998",
    "37951998",
    "37951998",
  ],
  РАЦС: {
    appointment: [
      "ІФ84441",
      "41 &quotМЮУ&quot для зарах надх за ККДБ Пл за ін адм послуг/ Апостиль",
      "Державне мито",
      "Плата за над відом з ін держ реєстр 41 МЮУ / Витяг",
    ],
    mfo: ["820172", "899998", "899998", "899998"],
    bankAc: [
      "UA158201720313291002201159506",
      "UA558999980334109879041026001",
      "UA988999980314080537000009660",
      "UA878999980333299300041009660",
    ],
    getBank: [
      "Південно-Західне МРУ МЮ/25010100",
      "ГУК в м. Києві/(м.Київ)/22012500",
      "ГУК в ІВ ФР обл/ТГ Снятин/22090100",
      "ГУК в ІВ ФР обл/ТГ Снятин/22012700",
    ],
    zkpo: ["43316386", "37993783", "37951998", "37951998"],
  },
};

let selectAppoint = "";
let selectedNotary = "";
let chooseMFO = "";
let chooseBankAc = "";
let chooseGetBank = "";
let chooseZKPO = "";

const add = document.getElementById("btn-add");
const ipn = document.getElementById("ipn");
const sum = document.getElementById("sum");
const username = document.getElementById("username");
const userTable = document.getElementById("table");
const download = document.getElementById("btn");
const notary = document.getElementById("notary");
const select = document.getElementById("select");
const post = document.querySelector(".post");

// operation select
const defaultSelect = () => {
  select[0].selected = true;
  sum.value = "";
  username.value = "";
  ipn.value = "";
};

const selectApp = (e, index) => {
  add.disabled = false;
  selectAppoint = e.target.value;
  index = e.target.selectedIndex - 1;
  chooseMFO = NOTARYS[selectedNotary].mfo[index];
  chooseBankAc = NOTARYS[selectedNotary].bankAc[index];
  chooseGetBank = NOTARYS[selectedNotary].getBank[index];
  chooseZKPO = NOTARYS[selectedNotary].zkpo[index];
};

const changeNotary = (e) => {
  defaultSelect();
  select.innerHTML = `<option id="defaultCountry" label="Призначення" disabled selected></option>`;
  selectedNotary = e.target.value;
  createOption(NOTARYS[e.target.value].appointment, select);
  sum.disabled = false;
  username.disabled = false;
  ipn.disabled = false;
  select.disabled = false;
};
//operation create

function createListUser(appoint, usernames, ipns) {
  const elTr = document.createElement("tr");
  elTr.className = "trTable";

  elTr.innerHTML = `<td>${sum.value}</td>
      <td>${username.value}</td>
      <td>${ipn.value}</td>
      <td></td>
      <td>${appoint + " " + usernames.value + " " + ipns.value}</td>
      <td>${chooseMFO}</td>
      <td>${chooseBankAc}</td>
      <td>${chooseGetBank}</td>
      <td>${chooseZKPO}</td>
      <div><button class="del"><img src="./icon/862px-Delete-button.svg.png" alt="del"></button><button class="copy"><img src="./icon/png-clipart-computer-icons-cut-copy-and-paste-copying-symbol-emoticon-research-miscellaneous-text-thumbnail.png" alt="copy">
      </button></div>
      `;

  post.append(elTr);
}

function visible(item) {
  item.style.display = "flex";
}

const addItem = () => {
  if (selectedNotary === "Комуналка") {
    createListUser(selectAppoint, ipn, username);
    visible(userTable);
    defaultSelect();
    return;
  } else createListUser(selectAppoint, username, ipn);
  visible(userTable);
  defaultSelect();
};

const createOption = (notSelect, appointSelect) => {
  for (let i = 0; i < notSelect.length; i++) {
    let el = document.createElement("option");
    el[i] += `<option value="${notSelect[i]}">${notSelect[i]}</option>`;
    appointSelect.innerHTML += el[i];
  }
};
//operation button

const operationBtn = (e) => {
  if (e.target.className === "del") {
    const delEl = e.target.closest(".trTable");
    delEl.remove();
  } else if (e.target.className === "copy") {
    const selectElement = e.target.closest(".trTable");
    const copyEl = selectElement.cloneNode(true);
    post.append(copyEl);
  }
};
// download exel
function htmlTableToExcel(type) {
  let data = document.getElementById("tblToExcl");
  let excelFile = XLSX.utils.table_to_book(data, { sheet: "sheet1" });
  XLSX.write(excelFile, { bookType: type, bookSST: true, type: "base64" });
  XLSX.writeFile(excelFile, "edFile." + type);
}

function downloadActive() {
  htmlTableToExcel("xlsx");
  const trT = document.querySelectorAll(".trTable");
  for (const key of trT) {
    userTable.style.display = "none";
    key.remove();
  }
}

userTable.addEventListener("click", operationBtn);
select.addEventListener("change", selectApp);
notary.addEventListener("change", changeNotary);
add.addEventListener("click", addItem);
download.addEventListener("click", downloadActive);
