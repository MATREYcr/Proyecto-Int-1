
import React from "react";
import "./styles/stylesPagePatients.css";
import {Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter,FormGroup } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    {
      "id": 1,
      "name": "Mateo",
      "age": 12,
      "doctor": "",
      "date": ""
    },
    {
      "id": 2,
      "name": "Pedro",
      "age": 20,
      "doctor": "",
      "date": ""
    },
    {
      "id": 3,
      "name": "Juan",
      "age": 30,
      "doctor": "",
      "date": ""
    },
    {
      "id": 4,
      "name": "Salome",
      "age": 40,
      "doctor": "Junitoo",
      "date": "",
    },
  ]


class MedicosPage extends React.Component{
    state = {
      data: data,
      form:{
        id:0,
        name:"",
        age:0,
        doctor:"",
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
    
    
    render(){
      return(
        <>
          
          <Container>
            <br></br>
            <Button color="success" onClick={this.showModalInsert}>Add Patients</Button>
            <br></br> 
            <br></br>  
            <br></br> 
         
          
            <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Doctor</th>
                <th>Date</th>
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
                          <td>{obj.doctor}</td>
                          <td>{obj.date}</td>
                          <td>
                          <Button color="primary" onClick={()=>this.showModalEdit(obj)}>Editar</Button>{" "}
                          <Button color="danger" onClick={()=>this.Delete(obj)}>Eliminar</Button>
                          </td>
                      </tr>
                    ) 
                  })
              }
            </tbody>
          </Table>
          </Container>

          <Modal isOpen={this.state.modalnsert}>
          <ModalHeader>
           <div><h3>Insertar Consulta</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Name:
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Age: 
              </label>
              <input
                className="form-control"
                name="age"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Doctor: 
              </label>
              <input
                className="form-control"
                name="doctor"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Date: 
              </label>
              <input
                className="form-control"
                name="date"
                type="date"
                onChange={this.handleChange}
                // value={this.state.form.age}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insert()}
            >
              Insertar
            </Button>
            <Button
              color="danger"
              onClick={() => this.hideModalInsert()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        {/* Modal Edit--------------------------------------------------------------------------------------------------------------- */}
        <Modal isOpen={this.state.modalEdit}>
          <ModalHeader>
           <div><h3>Editar Consulta</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>Name:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
              />
            </FormGroup>
            
            <FormGroup>
              <label>Age:</label>
              <input
                className="form-control"
                name="age"
                type="number"
                onChange={this.handleChange}
                value={this.state.form.age}
              />
            </FormGroup>
            <FormGroup>
              <label>Doctor:</label>
              <input
                className="form-control"
                name="doctor"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.doctor}
              />
            </FormGroup>
            <FormGroup>
              <label>Date:</label>
              <input
                className="form-control"
                name="date"
                type="date"
                onChange={this.handleChange}
                // value={this.state.form.date}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.edit(this.state.form)}>
              Editar
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
        
export default MedicosPage;



   