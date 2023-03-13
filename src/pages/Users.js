
import React from "react";
import "./styles/stylesPagePatients.css";
import {Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter,FormGroup } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    "id": 1,
    "name": "Mateo",
    "age": 20,
    "mail": "usuario@gmail.com",
    "animo": true,
  },
  {
    "id": 2,
    "name": "Pedro",
    "age": 20,
    "mail": "usuario@gmail.com",
    "animo": false,
  },
  {
    "id": 3,
    "name": "Salome",
    "age": 20,
    "mail": "usuario@gmail.com",
    "animo": true,
  },
  {
    "id": 4,
    "name": "Juan ",
    "age": 20,
    "mail": "usuario@gmail.com",
    "animo": false,
  },
  ]


class Users extends React.Component{
    state = {
      data: data,
      form:{
        id:0,
        name:"",
        age:0,
        "mail": "",
        date:"",

      },
      modalnsert: false,
      modalEdit:false,

    }
    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
    
    showModalInsert =()=>{
        this.setState({modalnsert: true});
    }
    hideModalInsert =()=>{
      this.setState({modalnsert: false});
    }
    insert=()=>{
      const newValue = {...this.state.form};
      newValue.id = this.state.data.length+1;
      const list = this.state.data;
      list.push(newValue);
      this.setState({data: list, modalnsert:false})
    }
    
    edit=(dato)=>{
        var cont = 0;
        var list1 =this.state.data;
        list1.map((obj)=>{
          if(dato.id == obj.id){
            list1[cont].name = dato.name;
            list1[cont].age = dato.age;
            list1[cont].doctor = dato.doctor;
            list1[cont].date = dato.date;
          }
          cont++
        });
        this.setState({data: list1, modalEdit:false});   
    }
    Delete =(dato)=>{
      var opcion = window.confirm("Realmente desea eliminar el registro" + dato.id);
      if(opcion){
        var cont = 0;
        var list2 = this.state.data;
        list2.map((obj)=>{
          if(obj.id == dato.id){
            list2.splice(cont,1);
          }
          cont++
        });
        this.setState({data:list2});
      }
    }

    showModalEdit =(consult)=>{
      console.log(consult,"consuuuuuuuuult");
      this.setState({modalEdit: true, form:consult});
    }
    hideModalEdit =()=>{
      this.setState({modalEdit: false});
    }
    EstadoAnimo=(obj)=>{
      if(obj.animo){
            return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
            </svg>
      }else{
        return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
      </svg>
      }
    }
    
    render(){
      return(
        <>
          
          <Container>
            <br></br>
            <h1>Users disponibles</h1>
            <br></br> 
         
          
            <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mail</th>
                <th>Animo</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.data.map((obj)=>{
                    return(
                      <tr key={obj.id}>
                          <td>{obj.id}</td>
                          <td>{obj.name}</td>
                          <td>{obj.age}</td>
                          <td>{obj.mail}</td>
                          <td>{this.EstadoAnimo(obj)}</td>
                          <td>
                          <Button color="success" onClick={()=>this.showModalEdit(obj)}>Send Message</Button>
                          </td>
                      </tr>
                    ) 
                  })
              }
            </tbody>
          </Table>
          </Container>

          
        {/* Modal Edit--------------------------------------------------------------------------------------------------------------- */}
        <Modal isOpen={this.state.modalEdit}>
          <ModalHeader>
           <div><h3>Send Message</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>From:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                value={this.state.form.mail}
              />
            </FormGroup>
            
            <FormGroup>
              <label>Message:</label>
              <input
                className="form-control"
                type="text"

                // value={this.state.form.date}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.edit(this.state.form)}>
              Send
            </Button>
            <Button color="danger" onClick={this.hideModalEdit}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
            
      
        </>
    )
    }
}
        
export default Users;



   