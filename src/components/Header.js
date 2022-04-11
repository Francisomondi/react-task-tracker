import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="click here" />
            <Button color="yellow" text="click click" />
            <Button color="blue" text="here click" />

        </header>
    )
}

export default Header
