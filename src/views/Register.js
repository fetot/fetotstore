import React, { Component } from 'react';
import { Container, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { withCookies } from "react-cookie";
import axios from "axios";


class Register extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          login: false,
          username: "",
          password: "",
          email: "",
          namadepan: "",
          namabelakang: "",
          tgl_lahir: "",
          notelp: "",
          jenkel: ""
        }
    } 

    doDaftar(){
        const {cookies} = this.props
        const {history} = this.props
        axios.post('http://localhost:3001/register', this.state)
        .then(res=>{
            cookies.set('token', res.data.token, {path : '/'})
            cookies.set('id', res.data.id, {path : '/'})
            history.push('/')
            alert("Pendaftaran Berhasil")
        })
        .catch(err=>{
            alert('Email dan password tidak valid')
        })
    }

    render(){
        return (
            <div className="content">
                <div className="my-5">
                    <Container>
                        <h4>Pendaftaran Akun FETOT Store</h4>
                        <hr />
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridNamaDepan">
                                <Form.Label>Nama Depan</Form.Label>
                                <Form.Control type="text" placeholder="John" onChange={ev=>this.setState({namadepan : ev.target.value})} required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridNamaBelakang">
                                <Form.Label>Nama Belakang</Form.Label>
                                <Form.Control type="text" placeholder="Doe" onChange={ev=>this.setState({namabelakang : ev.target.value})}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridBirth">
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control type="date" onChange={ev=>this.setState({tgl_lahir : ev.target.value})} required></Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formGridJenkel">
                                <Form.Check inline label="Pria" type="radio" value="Pria" name="jenkel" id="jkpria" onChange={ev=>this.setState({jenkel : ev.target.value})} required/>
                                <Form.Check inline label="Wanita" type="radio" value="Wanita" name="jenkel" id="jkwanita" onChange={ev=>this.setState({jenkel : ev.target.value})} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan username" onChange={ev=>this.setState({username : ev.target.value})} required maxLength="16"/>
                            </Form.Group>

                            <Form.Group controlId="formGridUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan email" onChange={ev=>this.setState({email : ev.target.value})} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Masukkan password" onChange={ev=>this.setState({password : ev.target.value})} required maxLength="16"/>
                            </Form.Group>

                            <Form.Group controlId="formGridNoTelp">
                                <Form.Label>Nomor Telepon</Form.Label>
                                <Form.Control type="text" placeholder="081213141516" value={this.state.notelp} onChange={event => this.setState({notelp: event.target.value.replace(/\D/,'')})} required maxLength="13"/>
                            </Form.Group>

                            {/* <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row> */}

                            <Form.Group id="formGridCheckbox">
                                <Form.Check required inline type="checkbox" label={<span>Saya setuju dengan <a href="/kebijakan-privasi">kebijakan privasi</a></span>} />
                            </Form.Group>

                            <Form.Group>                        
                                <Button className="btn-lg btn-block" variant="primary" type="submit" onClick={this.doDaftar.bind(this)}>
                                    Daftar Sekarang
                                </Button>
                            </Form.Group>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

export default withCookies(withRouter(Register));