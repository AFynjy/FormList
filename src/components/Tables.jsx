import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import Modal from "./Modal";
import FormCards from "./FormCards";

function DarkExample() {
  const [modal, setModal] = useState(false);
  const data = [
    {
      regNomer: "111",
      dataPostupleniyaVMKS: "11/2/22",
      nameDoc: "ТЗ в рамках согласования распоряжения",
      addInf: "",
      FOIV: "Федеральный фонд обязательного медицинского страхования",
      curatorAPRF: "Иванов",
      direction: "Здравоохранение",
      fedProj: "ГИС ГМП",
      typeDoc: "ТЗ",
      solutionDoc: "Согласовано с учётом замечаний",
      currentStatus: "Исполнено",
      finGrade: 50,
      expertGrade: 100,
      requisitesAnsw: 333,
      dateAnsw: "7/4/22",
    },
    {
      regNomer: "222",
      dataPostupleniyaVMKS: "11/2/22",
      nameDoc: "ТЗ в рамках согласования распоряжения",
      addInf: "",
      FOIV: "Федеральный фонд обязательного медицинского страхования",
      curatorAPRF: "Иванов",
      direction: "Здравоохранение",
      fedProj: "ГИС ГМП",
      typeDoc: "ТЗ",
      solutionDoc: "Согласовано с учётом замечаний",
      currentStatus: "Исполнено",
      finGrade: 50,
      expertGrade: 100,
      requisitesAnsw: 333,
      dateAnsw: "7/4/22",
    },
    {
      regNomer: 33,
      dataPostupleniyaVMKS: "11/2/22",
      nameDoc: "ТЗ в рамках согласования распоряжения",
      addInf: "",
      FOIV: "Федеральный фонд обязательного медицинского страхования",
      curatorAPRF: "Иванов",
      direction: "Здравоохранение",
      fedProj: "ГИС ГМП",
      typeDoc: "ТЗ",
      solutionDoc: "Согласовано с учётом замечаний",
      currentStatus: "Исполнено",
      finGrade: 50,
      expertGrade: 100,
      requisitesAnsw: 333,
      dateAnsw: "7/4/22",
    },
  ];

  const namesColumn = [
    "Рег. номер МКС в СЭД",
    "Дата поступления в МКС",
    "Название документа",
    "В дополнение к или взамен (предыстория документа)",
    "ФОИВ",
    "Куратор АПРФ",
    "Направление",
    "Фед. Проект / ГИС",
    "Тип документа",
    "Решение по документу",
    "Текущий статус",
    "Финансовая оценка, тыс. руб.",
    "Экспертная оценка, тыс. руб.",
    "Реквизиты ответа в ведомство",
    "Дата ответа в ведомство",
  ];

  return (
    <>
      <div> {modal && <Modal onClose={() => setModal(false)} title="Форма карточки" ><FormCards /></Modal>}</div>
      <Table striped bordered hover variant="light" size="sm">
        <thead className="table-primary text-center align-text-top" >
          <tr>
            {namesColumn.map((nameColumn, key) => {
              return <th key={key}>{nameColumn}</th>;
            })}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((val, key) => {
            return (
              <tr onClick={() => setModal(true)} key={key}>
                <td>{val.regNomer}</td>
                <td>{val.dataPostupleniyaVMKS}</td>
                <td>{val.nameDoc}</td>
                <td>{val.addInf}</td>
                <td>{val.FOIV}</td>
                <td>{val.curatorAPRF}</td>
                <td>{val.direction}</td>
                <td>{val.fedProj}</td>
                <td>{val.typeDoc}</td>
                <td>{val.solutionDoc}</td>
                <td>{val.currentStatus}</td>
                <td>{val.finGrade}</td>
                <td>{val.expertGrade}</td>
                <td>{val.requisitesAnsw}</td>
                <td>{val.dateAnsw}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default DarkExample;
