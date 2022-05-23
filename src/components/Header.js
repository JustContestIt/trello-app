function Header(){
    return <header className="fixed-top">
        <nav className="navbar py-1">
            <a className="navbar-brand px-3 float-left fw-bold fs-1 align-middle" href="#">
                Trollo
            </a>
            <div className="buttons float-right px-3">
                <button className="btn btn-sm mx-1 float-right fs-6 text-primary">Войти</button>
                <button className="btn btn-sm btn-primary float-right mr-1 fs-6">Регистрация</button>
            </div>
        </nav>
    </header>
}

export default Header;