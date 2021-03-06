import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'
import { connect } from 'react-redux'
import * as ReactDOM from 'react-dom'
import _ from 'lodash'
import { MetaSerifProBookFont } from '../../css/Fonts'
import { setAllPlacesOfDelivery, setPlaceOfDelivery } from '../../actions'
import AppStyle from '../../css/AppStyle'

const getDeliveryByWhere = (allPlacesOfDelivery, where) => _.find(allPlacesOfDelivery, item => item.where === where)

const Style = StyleSheet.create({
    radioNative: {
        display: 'none',
        ':checked + span + span': {
            color: '#fe545b',
        },
        ':checked + span': {
            ':before': {
                content: "''",
                width: '7px',
                height: '7px',
                display: 'block',
                position: 'absolute',
                top: '6px',
                left: '6px',
                background: '#fe545b',
                borderRadius: '7px',
            },
        },
    },
    lb: {
        ':hover': {
            color: '#fe545b',
        },
        ':hover > :nth-child(2n)': {
            border: 'solid 1px #fe545b;',
        },
    },
    label: {
        cursor: 'pointer',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '17px',
        ':hover': {},
    },
    radio: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        borderRadius: '50%',
        width: '19px',
        height: '19px',
        cursor: 'pointer',
        border: ' solid 1px rgba(31, 35, 44, 0.4)',
        ':hover': {
            border: 'solid 1px #fe545b;',
        },
    },

    divTableRow: {
        display: 'table-row',
    },
    tableRowText: {
        fontFamily: [MetaSerifProBookFont, 'sans-serif'],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c',
        '@media (max-width: 320px)': {
            fontSize: '15px',
        },
    },
    divTableCell: {
        display: 'table-cell',
        lineHeight: '2.38',
    },
    requiredText: {
        ':before': {
            content: "'Выберите место доставки'",
        },
    },
    isRequiredText: {
        ':after': {
            content: "', это обязательное поле'",
        },
        color: 'red',
    },
    tableRowHeader: {
        fontFamily: [MetaSerifProBookFont, 'sans-serif'],
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.4px',
        textAlign: 'left',
        color: 'rgba(31, 35, 44, 0.4)',
    },
    divTableBody: {
        display: 'table-row-group',
    },
    divTable: {
        display: 'table',
        width: '100%',
    },
})

class PlaceOfDelivery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            required: false,
        }
        /* this.state = {
             where:0
         }; */
        /*  this.calbackFn = props.calbackFn.bind(this);  */
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    componentDidMount() {
        /* (async () => {
            try {
                const responseAllPlacesOfDelivery = await axios.get(`${config.serverAPI}/all_places_of_delivery`);
                this.props.setAllPlacesOfDelivery(responseAllPlacesOfDelivery.data.AllPlacesOfDelivery);
            } catch (e) {
                console.error(e);
            }


        })(); */
    }

    handleOptionChange(changeEvent) {
        const d = this.getPriceOfDelivery(getDeliveryByWhere(this.props.allPlacesOfDelivery, changeEvent.target.value))

        this.props.setPlaceOfDelivery(d)
    }

    validate(isScrollIntoView) {
        if (!this.props.placeOfDelivery.where) {
            this.setState({ required: true })
            if (isScrollIntoView) {
                const domNode = ReactDOM.findDOMNode(this)
                domNode.scrollIntoView({
                    block: isScrollIntoView.block,
                    behavior: isScrollIntoView.behavior,
                })
                //  domNode.scrollIntoView({block: 'end', behavior: 'smooth'})
            }

            return false
        }
        this.setState({ required: false })
        return true
    }

    getPriceOfDelivery(p) {
        const result = _.clone(p)
        result.price = (this.props.appConfig.isHiddenDeliveryPrice && result.price < 250) ? 0 : result.price
        return result
    }

    render() {
        let k = 0
        return (
            <div className={css(Style.divTable)}>
                <div className={css(Style.divTableBody)}>
                    <div style={{ height: '45px' }} className={css(Style.divTableRow, Style.tableRowHeader)}>
                        <div
                            className={` ${css(Style.divTableCell, Style.requiredText)} ${
                                this.state.required ? css(Style.isRequiredText) : null
                            }`}
                        />
                        <div className={css(Style.divTableCell, AppStyle.textAlignRigh)}>Стоимость</div>
                    </div>

                    {this.props.allPlacesOfDelivery.map((p) => {
                        k++
                        return (
                            <div key={k} className={css(Style.divTableRow, Style.tableRowText)}>
                                <div className={css(Style.divTableCell)}>
                                    <label className={css(Style.lb)}>
                                        <input
                                            className={css(Style.radioNative)}
                                            checked={this.props.placeOfDelivery.where === p.where}
                                            value={p.where}
                                            onChange={this.handleOptionChange}
                                            type="radio"
                                            name="optradio"
                                        />
                                        <span className={css(Style.radio)} />
                                        <span className={css(Style.label)}> {p.where}</span>
                                    </label>
                                </div>
                                <div className={css(Style.divTableCell, AppStyle.textAlignRigh)}>
                                    {this.getPriceOfDelivery(p).price}
                                    &nbsp;руб
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    placeOfDelivery: state.placeOfDelivery,
    allPlacesOfDelivery: state.allPlacesOfDelivery,
    appConfig: state.appConfig,
})

const matchDispatchToProps = dispatch => ({
    setPlaceOfDelivery: (placeOfDelivery) => {
        dispatch(setPlaceOfDelivery(placeOfDelivery))
    },
    setAllPlacesOfDelivery: (allPlacesOfDelivery) => {
        dispatch(setAllPlacesOfDelivery(allPlacesOfDelivery))
    },
})

export default connect(
    mapStateToProps,
    matchDispatchToProps,
    null,
    { withRef: true },
)(PlaceOfDelivery)
