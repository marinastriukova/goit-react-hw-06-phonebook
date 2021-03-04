import style from './Filter.module.css';
import styles from '../Phonebook.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions'
import { CSSTransition } from 'react-transition-group';

function Filter({value, onChangeFilter, items}) {
    return(
        <CSSTransition in={items.length > 0} timeout={250} classNames={styles} unmountOnExit>
        <label className={style.label}>
            Find contacts by name
            <input 
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
            className={style.input}
            />
        </label>
        </CSSTransition>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func,
  };


const mapStateToProps = state =>({
    value: state.contacts.filter,
    items: state.contacts.items
})

const mapDispatchToProps = dispatch => ({
    onChangeFilter: (value) => dispatch(actions.filterContacts(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)