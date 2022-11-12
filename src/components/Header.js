import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <div class="container">
            <header className='header'>
                <h1> {title}</h1>
                <Button color='green' text='Add' onClick={onClick} />



            </header>

        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


export default Header
