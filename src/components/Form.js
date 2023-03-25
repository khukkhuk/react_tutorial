import { Component } from "react";
class Form extends Component{
    
    state ={
        firstname:"",
        lastname:"",
    }

    handleChange=( event)=>{
        this.setState({
            firstname : event.target.value,
        })    
    }
    handleLastnameChange=( event)=>{
        this.setState({
            lastname : event.target.value,
        })    
    }
    
    handleSubmit=(event)=>{
        event.PreventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })
    }

    render(){
        return(
            <div>
                Form
                <form
                    onSubmit={this.handleSubmit}
                >

                    <input 
                        onChange={this.handleChange} 
                        type="text" 
                        value= {this.state.firstname}
                    ></input>
                    
                    <input 
                        onChange={this.handleLastnameChange} 
                        type="text" 
                        value= {this.state.lastname}
                    ></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;