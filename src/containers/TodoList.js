import {connect} from 'react-redux';
import Todos from '../components/Todos';


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

// const mapDispatchToProps = state =>({
    
// })

export default connect(mapStateToProps)(Todos);