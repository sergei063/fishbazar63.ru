// ConsentPersonalData

import { css, StyleSheet } from 'aphrodite/no-important'
import React from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Dialog } from 'primereact/dialog'
import $ from 'jquery'
import { MetaSerifProBookFont } from '../../css/Fonts'


class ConsentPersonalData extends React.Component {
    constructor(props) {
        super(props)
        this.top = 0
        this.onHide = this.onHide.bind(this)

        this.state = {
            sidebarVisible: false,
        }
    }

    onHide() {
        $('html,body').animate({ scrollTop: this.top }, { duration: 10 })
        this.setState({ sidebarVisible: false })
    }


    render() {
        // props.history.push({pathname: '/shopping_cart/ok'})
        const me = this

        return (
            <div
                className={css(Style.consentPersonalDataText, Style.consentPersonalData)}>Нажимая
                на&nbsp;кнопку, вы&nbsp;даете <span className={css(Style.link)} onClick={(event) => {
                    event.preventDefault()
                    me.top = $(window).scrollTop()
                    me.setState({ sidebarVisible: true })
                }}>согласие на&nbsp;обработку своих &laquo;Персональных
            данных&raquo;</span>.

                <Sidebar visible={this.state.sidebarVisible} blockScroll={true} baseZIndex={1000000}
                    onHide={this.onHide}
                    style={{ height: '250px', overflow: 'auto' }}
                    position="bottom">
                    <div className={css(Style.text)}> Физическое лицо, отправляя форму на&nbsp;веб-странице
                        FishBazar63.ru,
                        (далее&nbsp;&mdash; Веб-страница), обязуется принять настоящее Согласие на&nbsp;обработку
                        персональных данных (далее&nbsp;&mdash; Согласие). Принятием Согласия является отправка формы
                        на&nbsp;Веб-странице. Действуя свободно, своей волей и&nbsp;в&nbsp;своем интересе,
                        а&nbsp;также подтверждая свою дееспособность, физическое лицо дает свое согласие Индивидуальному
                        предпринимателю Бухтиярова Сергею Андреевичу, которому принадлежит сайт FishBazar63.ru
                        и&nbsp;которое расположено по&nbsp;адресу г.Самара ул&nbsp;Мальцева&nbsp;22,
                        (далее&nbsp;&mdash; Оператор), которому принадлежит Веб-страница, на&nbsp;обработку своих
                        персональных данных со&nbsp;следующими условиями:
                    <ol>

                        <li>Согласие дается на&nbsp;обработку персональных данных, как без использования средств
                                автоматизации, так и&nbsp;с&nbsp;их&nbsp;использованием.
                        </li>


                        <li>Согласие дается на&nbsp;обработку следующих персональных данных:

                                а) Персональные данные, не&nbsp;являющиеся специальными или биометрическими: имя;
                                адрес электронной почты; адреса контактных телефонов; сведения о&nbsp;почтовом клиенте;
                                сведения об&nbsp;используемом браузере; сведения о&nbsp;переходах по&nbsp;ссылкам
                                в&nbsp;электронных письмах; сведения о&nbsp;месторасположении; сведения
                                об&nbsp;IP-адресах,
                                с&nbsp;которых пользователь открывает электронное письмо.
                        </li>

                        <li>Персональные данные не&nbsp;являются общедоступными.</li>

                        <li>Цель обработки персональных данных: обратная связь покупателем, осуществление
                                информирования
                                о&nbsp;рекламных акциях, услугах и&nbsp;продуктах ИП&nbsp;Бухтиярова Сергей Андреевич.
                        </li>

                        <li>В&nbsp;ходе обработки с&nbsp;персональными данными будут совершены следующие
                                действия: сбор;
                                запись; систематизация; накопление; хранение; уточнение (обновление, изменение);
                                извлечение; использование; блокирование; удаление; уничтожение.
                        </li>

                        <li>Третьи лица не&nbsp;обрабатывают персональные данные по&nbsp;поручению
                                ИП&nbsp;Бухтиярова
                                Сергей Андреевич.
                        </li>

                        <li>Персональные данные обрабатываются до&nbsp;отписки физического лица
                                от&nbsp;информации путем
                                перехода по&nbsp;специальной ссылке &laquo;Отписаться
                                от&nbsp;рассылки&raquo; в&nbsp;рассылаемых письмах
                        </li>

                        <li>Согласие может быть отозвано субъектом персональных данных или его представителем
                                путем
                                направления письменного заявления Оператору или его представителю по&nbsp;адресу
                                местонахождения
                                (см. преамбулу Согласия).
                        </li>

                        <li>В&nbsp;случае отзыва субъектом персональных данных или его представителем согласия
                                на&nbsp;обработку персональных данных Оператор вправе продолжить обработку персональных

                                данных без согласия субъекта персональных данных при наличии оснований, указанных
                                в&nbsp;пунктах 2&nbsp;&mdash; 11&nbsp;части 1&nbsp;статьи&nbsp;6, части 2&nbsp;статьи
                                10&nbsp;и&nbsp;части 2&nbsp;статьи 11&nbsp;Федерального закона
                                No152-ФЗ &laquo;О&nbsp;персональных данных&raquo; от&nbsp;27.07.2006&nbsp;г.
                        </li>
                        <li>Согласие действует все время до&nbsp;момента прекращения обработки персональных
                                данных, указанных в&nbsp;п.8 и&nbsp;п.9&nbsp;Согласия.
                        </li>
                    </ol>
                    </div>
                </Sidebar>
            </div>
        )
    }
}


const Style = StyleSheet.create({
    text: {
        lineHeight: '1.2',
        fontSize: '0.8em',
    },
    consentPersonalDataText: {
        fontFamily: [MetaSerifProBookFont, 'sans-serif'],
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.2',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c',
    },

    consentPersonalData: {
        paddingLeft: '10px',
        marginBottom: '10px',
    },
    link: {
        cursor: 'pointer',
        color: 'rgb(119, 148, 230)',
        textDecoration: 'underline',
        ':hover': {
            color: '#fe545b',
        },
    },

})

export default ConsentPersonalData
