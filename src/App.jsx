import React from "react";
import Sidebar from "./components/Sidebar";
import { getInitialData } from "./utils";
import CardCatatan from "./components/CardCatatan";
import CatatanLayout from "./layouts/CatatanLayout";
import CreateCatatan from "./components/CreateCatatan";

class App extends React.Component {
  constructor(props) {
    super(props);

    // inisiasi state
    this.state = {
      querySearch: "",
      judul: "",
      maxKarakter: 50,
      sisaKarakter: 50,
      catatan: "",
      isShowModal: false,
      listCatatan: getInitialData(),
    };

    this.onChangeQuerySearch = this.onChangeQuerySearch.bind(this);
    this.onArsipCatatan = this.onArsipCatatan.bind(this);
    this.onMoveCatatan = this.onMoveCatatan.bind(this);
    this.onDeleteCatatan = this.onDeleteCatatan.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.onChangeFormCatatan = this.onChangeFormCatatan.bind(this);
  }

  onChangeFormCatatan = (e) => {
    if (e.target.name == "judul") {
      this.setState({
        judul: e.target.value,
        sisaKarakter: this.state.maxKarakter - e.target.value.length,
      });
    } else if (e.target.name == "catatan") {
      this.setState({
        catatan: e.target.value,
      });
    }
  };

  handleCreateCatatan = (e) => {
    e.preventDefault();
    this.setState({
      listCatatan: [
        ...this.state.listCatatan,
        {
          id: new Date(),
          title: this.state.judul,
          body: this.state.catatan,
          archived: false,
          createdAt: new Date(),
        },
      ],
      judul: "",
      catatan: "",
      sisaKarakter: this.state.maxKarakter,
    });

    this.handleModal();
  };

  handleModal = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };

  onDeleteCatatan = (id) => {
    const temp = this.state.listCatatan.filter((item) => item.id !== id);

    this.setState({
      listCatatan: temp,
    });
  };

  onMoveCatatan = (id) => {
    const temp = this.state.listCatatan.filter((item) => item.id === id)[0];

    temp.archived = false;

    this.setState({
      listCatatan: [
        ...this.state.listCatatan.filter((item) => item.id !== id),
        temp,
      ],
    });
  };

  onArsipCatatan = (id) => {
    const temp = this.state.listCatatan.filter((item) => item.id === id)[0];

    temp.archived = true;

    this.setState({
      listCatatan: [
        ...this.state.listCatatan.filter((item) => item.id !== id),
        temp,
      ],
    });
  };

  onChangeQuerySearch = (event) => {
    this.setState({
      querySearch: event.target.value,
    });
  };

  render() {
    return (
      <div className="flex bg-gray-100 min-h-screen">
        <CreateCatatan
          onFormChange={this.onChangeFormCatatan}
          isShow={this.state.isShowModal}
          judul={this.state.judul}
          catatan={this.state.catatan}
          handleShow={this.handleModal}
          handleForm={this.handleCreateCatatan}
          sisaKarakter={this.state.sisaKarakter}
        />
        <div className="flex w-full max-w-[1200px] mx-auto flex-col pb-12">
          <Sidebar
            onChangeSearch={this.onChangeQuerySearch}
            querySearch={this.state.querySearch}
            handleModal={this.handleModal}
          />
          <CatatanLayout
            onArsip={this.onArsipCatatan}
            title={"Catatan Saya"}
            onDeleteCatatan={this.onDeleteCatatan}
            listCatatan={
              this.state.querySearch != ""
                ? this.state.listCatatan
                    .filter((item) =>
                      item.title
                        .toLocaleLowerCase()
                        .includes(this.state.querySearch.toLowerCase())
                    )
                    .filter((item) => !item.archived)
                    .reverse()
                : this.state.listCatatan
                    .filter((item) => !item.archived)
                    .reverse()
            }
          />
          <CatatanLayout
            isCatatan
            onArsip={this.onMoveCatatan}
            title={"Arsip Saya"}
            onDeleteCatatan={this.onDeleteCatatan}
            listCatatan={
              this.state.querySearch != ""
                ? this.state.listCatatan
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(this.state.querySearch.toLocaleLowerCase())
                    )
                    .filter((item) => item.archived)
                    .reverse()
                : this.state.listCatatan
                    .filter((item) => item.archived)
                    .reverse()
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
