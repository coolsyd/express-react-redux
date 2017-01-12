/**
 * Created by admin on 2017/1/12.
 */
const User = React.createClass({
    componentDidMount() {
        this.setState({
            // route components are rendered with useful information, like URL params
            user: findUserById(this.props.params.userId)
        })
    },

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
            </div>
        )
    }
})