import React, { useState } from "react";
//import "./Home.css";

import "antd/dist/antd.css";

import { Layout, message, Modal } from "antd";

import {
  SelectS,
  ButtonS,
  FlexFooter,
  ContentLayoutS,
  TitleS,
  TableS,
} from "./style";

import HeaderAnt from "../../components/Header";
import FooterAnt from "../../components/Footer";

import * as usersJson from "../../users.json";

const { Option } = SelectS;

//import * as companies from "../../companies.json";

const { Content } = Layout;

const columns = [
  {
    title: "NOME",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "CPF",
    dataIndex: "cpf",
  },
  {
    title: "SALÁRIO DISPONÍVEL",
    dataIndex: "salary",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
  },

  {
    title: "Empresa",
    dataIndex: "companyId",
  },
];

function Home() {
  const [selectedRowId, setSelectedRowId] = useState([]);
  const [users, setUser] = useState(usersJson.data);
  const [selectedSelect, setSelectedSelect] = useState("Escolha uma Ação");
  const [visibleModal, setVisibleModal] = useState(false);

  const onSelectChange = (selectedRowId) => {
    setSelectedRowId(selectedRowId);
  };

  const rowSelection = {
    selectedRowId,
    onChange: onSelectChange,
  };

  function onChangeSelectS(value) {
    setSelectedSelect(value);
  }

  function handleValidationClick() {
    if (!selectedRowId.length > 0) {
      message.info(`Você deve selecionar uma linha`);
      handleCancel();
      return false;
    }

    if (selectedSelect === "Escolha uma Ação") {
      message.info(`Você deve selecionar uma opção`);
      handleCancel();
      return false;
    }
    return true;
  }

  function handleClick(value) {
    switch (selectedSelect) {
      case "archive":
        message.info(`Clicou no ${selectedSelect} e o CB é ${selectedRowId}`);
        filterUser();
        handleCancel();
        break;
      case "approve":
        message.info(`Clicou no ${selectedSelect} e o CB é ${selectedRowId}`);
        filterUser();
        handleCancel();
        break;
      default:
        message.info(`Você deve selecionar uma opção`);
        handleCancel();
    }
    function filterUser() {
      setUser(
        users.filter((keyUser) => {
          return !selectedRowId.includes(keyUser.key);
        })
      );
    }
  }

  function handleShowModal() {
    if (!handleValidationClick()) {
      return;
    }

    setVisibleModal(true);
  }

  function handleCancel() {
    setVisibleModal(false);
  }

  function footer() {
    return (
      <FlexFooter>
        <SelectS
          placeholder="Escolha uma Ação"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={onChangeSelectS}
        >
          <Option value="archive">Arquivar</Option>
          <Option value="approve">Aprovar</Option>
        </SelectS>

        <ButtonS onClick={() => handleShowModal()}>{selectedSelect}</ButtonS>
        <Modal
          title={`Aceitar ${selectedRowId.length} solicitações`}
          visible={visibleModal}
          onOk={() => handleClick([selectedRowId])}
          onCancel={() => handleCancel()}
        >
          <p>
            Você tem colaboradores {selectedRowId.length} selecionados em todas
            páginas. Tem certeza que deseja aceitar todas as solicitações?
          </p>
        </Modal>
      </FlexFooter>
    );
    //return "Here is footer";
  }

  return (
    <Layout
      breakpoint={{
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
      }}
      className="layout"
    >
      <HeaderAnt />
      <Content style={{ padding: "0 50px" }}>
        <ContentLayoutS>
          <TitleS>Solicitação de Emprestimo</TitleS>
          <div>
            <TableS
              footer={() => footer()}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={users}
              Pagination={{
                total: 29,
                defaultPageSize: 10,
                defaultCurrent: 1,
              }}
            />
          </div>
        </ContentLayoutS>
      </Content>
      <FooterAnt />
    </Layout>
  );
}

export default Home;
