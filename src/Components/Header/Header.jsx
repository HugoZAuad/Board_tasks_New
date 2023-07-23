import "./Index.scss";

import React from "react";

const Header = () => {
    return (
        <section className="Header">
            <ul className="Header__menu-itens">
                <li><a href="">Organização</a></li>
                <li className="Header__menu-itens__foc"><a href="">Tarefas</a></li>
                
            </ul>
        </section>
    )
};

export default Header;