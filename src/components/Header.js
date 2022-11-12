

const Header = ({ title }) => {
    return (
        <div class="container">
            <header className='header'>
                <h1> {title}</h1>
                <button className='btn'>Add</button>

            </header>

        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
