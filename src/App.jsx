import React from "react";
import Sidebar from "./components/Sidebar";
import { getInitialData } from "./utils";
import CardCatatan from "./components/CardCatatan";
import CatatanLayout from "./layouts/CatatanLayout";

class App extends React.Component {
  constructor(props) {
    super(props);

    // inisiasi state
    this.state = {
      querySearch: "",
      judul: "",
      catatan: "",
      listCatatan: getInitialData(),
    };

    this.onChangeQuerySearch = this.onChangeQuerySearch.bind(this);
    this.onArsipCatatan = this.onArsipCatatan.bind(this);
    this.onMoveCatatan = this.onMoveCatatan.bind(this);
  }

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
        <div className="flex w-full max-w-[1200px] mx-auto flex-col pb-12">
          <Sidebar
            onChangeSearch={this.onChangeQuerySearch}
            querySearch={this.state.querySearch}
          />
          <CatatanLayout
            onArsip={this.onArsipCatatan}
            title={"Catatan Saya"}
            listCatatan={
              this.state.querySearch != ""
                ? this.state.listCatatan
                    .filter((item) =>
                      item.title
                        .toLocaleLowerCase()
                        .includes(this.state.querySearch.toLowerCase())
                    )
                    .filter((item) => !item.archived)
                : this.state.listCatatan.filter((item) => !item.archived)
            }
          />
          <CatatanLayout
            isCatatan
            onArsip={this.onMoveCatatan}
            title={"Arsip Saya"}
            listCatatan={
              this.state.querySearch != ""
                ? this.state.listCatatan
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(this.state.querySearch.toLocaleLowerCase())
                    )
                    .filter((item) => item.archived)
                : this.state.listCatatan.filter((item) => item.archived)
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
