import { Component } from 'react';
import Section from './Section/Section'
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { CSSTransition } from 'react-transition-group';
import style from './Phonebook.module.css';
import { connect } from 'react-redux';
import actions from '../redux/phonebook/phonebook-actions';

class Phonebook extends Component {

    state = {
        name: '',
        number: '',
        filter: '',
        error: ''
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = e => {
        e.preventDefault();


        if (this.props.contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase())) {
            this.setState({ error: true })
            setTimeout(() => {
                this.setState({ error: false })
            }, 2000)
            return
        }

        const { name, number } = this.state;
        this.props.onAddContact(name, number);
        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };



    render() {
        return (
            <div>
                <Section title='Phonebook'>
                    <Form name={this.state.name}
                        number={this.state.number}
                        onChangeInput={this.onInputChange}
                        onSubmitForm={this.submitForm}></Form>
                </Section>
                <Section title='Contacts'>
                    <CSSTransition timeout={250} classNames={style} >
                        <Filter />
                    </CSSTransition>
                    <CSSTransition timeout={500}>
                        <ContactsList />
                    </CSSTransition>
                    <CSSTransition in={this.state.error === true} timeout={1000} classNames={style} unmountOnExit>
                        <ErrorMessage />
                    </CSSTransition>
                </Section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts.items
});

const mapDispatchToProps = dispatch => ({
    onAddContact: (name, number) => dispatch(actions.addContact(name, number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook)