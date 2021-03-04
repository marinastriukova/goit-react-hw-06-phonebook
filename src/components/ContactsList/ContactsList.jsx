import style from './ContactsList.module.css';
import styles from '../Phonebook.module.css';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions'


function ContactsList({ contacts, onRemove }) {

    return (
        <TransitionGroup component="ul" className={style.list}>
            {contacts.length === 0 ? <CSSTransition in={contacts.length === 0} timeout={250} classNames={styles} unmountOnExit>
            <p>Add contacts please</p>
            </CSSTransition> :
            (contacts.map(contact => {
                return (
                    <CSSTransition key={contact.id} in={true} appear={true} timeout={250} classNames={styles} unmountOnExit>
                        <li className={style.items}>
                            <p>
                                <span>{contact.name}: </span>
                                <span>{contact.number}</span>
                            </p>
                            <button className={style.button} onClick={() => onRemove(contact.id)}>Delete</button>
                        </li>
                    </CSSTransition>)
            }
            ))}
        </TransitionGroup>)
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onRemove: PropTypes.func
}


const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
};


const mapStateToProps = state => {
    return { contacts: getVisibleContacts(state.contacts.items, state.contacts.filter) }
}

const mapDispatchToProps = dispatch => ({
    onRemove: (id) => dispatch(actions.deleteContact(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

