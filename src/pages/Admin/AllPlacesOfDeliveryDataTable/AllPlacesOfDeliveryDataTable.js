import React from 'react'
import 'primeicons/fonts/primeicons.eot'
import 'primeicons/fonts/primeicons.svg'
import 'primeicons/fonts/primeicons.ttf'
import 'primeicons/fonts/primeicons.woff'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import connect from 'react-redux/es/connect/connect'
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import { allPlacesOfDeliveryFetchData } from '../../../actions/allPlacesOfDeliveryFetchData'
import { setAllPlacesOfDelivery } from '../../../actions'
import config from '../../../config'
import Katalog from '../../../Katalog'
import { _try } from '../../../components/lib'

class AllPlacesOfDeliveryDataTable extends React.Component {
    constructor() {
        super()
        this.state = { minimumOrderAmount: 0 }
        //  this.carservice = new CarService()
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
        this.onCarSelect = this.onCarSelect.bind(this)
        this.addNew = this.addNew.bind(this)
        this.handleMinimumOrderAmountChange = this.handleMinimumOrderAmountChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllPlacesOfDelivery().then(data => this.setState({
            cars: this.props.allPlacesOfDelivery,
            minimumOrderAmount: this.props.appConfig.minimumOrderAmount,
        }))

        // this.forceUpdate()
        /* ;(async () => {

        })() */
    }

    save() {
        const cars = [...this.state.cars]
        if (this.newCar) {
            cars.push(this.state.car)
        } else {
            const selectedCarIndex = this.findSelectedCarIndex()
            if (selectedCarIndex >= 0) {
                cars[selectedCarIndex] = this.state.car
            }
        }

        this.setState({
            cars,
            selectedCar: null,
            car: null,
            displayDialog: false,
        })
        this.props.setAllPlacesOfDelivery(cars)

        this.saveToServer({
            allPlacesOfDelivery: cars,
            minimumOrderAmount: this.state.minimumOrderAmount,
        })
    }

    saveToServer = (allPlacesOfDeliveryObj) => {
        (async () => {
            try {
                await axios.post(`${config.serverAPI}/set_all_places_of_delivery`, {
                    catalog: allPlacesOfDeliveryObj,
                    auth_token: localStorage.getItem('auth_token'),
                })
                window.alert('Сохранено')
            } catch (error) {
                window.alert('Ошибка при сохранении')
            }
        })()
    }

    handleMinimumOrderAmountChange = (event) => {
        this.setState({ minimumOrderAmount: event.target.value })
    }

    delete() {
        const index = this.findSelectedCarIndex()
        const cars = this.state.cars.filter((val, i) => i !== index)
        this.setState({
            cars,
            selectedCar: null,
            car: null,
            displayDialog: false,
        })
        this.props.setAllPlacesOfDelivery(cars)

        this.saveToServer({
            allPlacesOfDelivery: cars,
            minimumOrderAmount: this.state.minimumOrderAmount,
        })
    }

    findSelectedCarIndex() {
        return this.state.cars.indexOf(this.state.selectedCar)
    }

    updateProperty(property, value) {
        const car = this.state.car
        car[property] = value
        this.setState({ car })
    }

    onCarSelect(e) {
        this.newCar = false
        this.setState({
            displayDialog: true,
            car: Object.assign({}, e.data),
        })
    }

    addNew() {
        this.newCar = true
        this.setState({
            car: {
                where: '',
                price: '',
            },
            displayDialog: true,
        })
    }

    render() {
        const header = (
            <div className="p-clearfix" style={{ lineHeight: '1.87em' }}>
                Доставка
            </div>
        )

        const footer = (
            <div className="p-clearfix" style={{ width: '100%' }}>
                <Button style={{ float: 'left' }} label="Добавить" icon="pi pi-plus" onClick={this.addNew} />
            </div>
        )

        const dialogFooter = (
            <div className="ui-dialog-buttonpane p-clearfix">
                <Button label="Удалить" icon="pi pi-times" onClick={this.delete} />
                <Button label="Сохранить" icon="pi pi-check" onClick={this.save} />
            </div>
        )

        return (
            <div className="content-section implementation">
                <DataTable
                    value={this.state.cars}
                    paginator={true}
                    rows={15}
                    header={header}
                    footer={footer}
                    selectionMode="single"
                    selection={this.state.selectedCar}
                    onSelectionChange={e => this.setState({ selectedCar: e.value })}
                    onRowSelect={this.onCarSelect}
                    reorderableRows={true}
                    onRowReorder={e => this.setState({ cars: e.value })}>
                    <Column rowReorder={true} style={{ width: '3em' }} />
                    <Column field="where" header="Место" sortable={true} />
                    <Column field="price" header="Стоимость" sortable={true} />
                </DataTable>

                <Dialog
                    visible={this.state.displayDialog}
                    width="300px"
                    header="Редактирование"
                    modal={true}
                    footer={dialogFooter}
                    onHide={() => this.setState({ displayDialog: false })}>
                    {this.state.car && (
                        <div className="p-grid p-fluid">
                            <div className="p-col-4" style={{ padding: '.75em' }}>
                                <label htmlFor="where">Место</label>
                            </div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="where"
                                    onChange={(e) => {
                                        this.updateProperty('where', e.target.value)
                                    }}
                                    value={this.state.car.where}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}>
                                <label htmlFor="price">Стоимость</label>
                            </div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="year"
                                    onChange={(e) => {
                                        this.updateProperty('price', e.target.value)
                                    }}
                                    value={this.state.car.price}
                                />
                            </div>
                        </div>
                    )}
                </Dialog>
                <h3>Минимальная сумма заказа</h3>
                <InputText
                    type="text"
                    keyfilter="pint"
                    value={this.state.minimumOrderAmount}
                    onChange={this.handleMinimumOrderAmountChange}
                />
                {'  '}
                <Button label="Сохранить все" onClick={this.save} className="p-button-success p-button-rounded" />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    allPlacesOfDelivery: state.allPlacesOfDelivery,
    appConfig: state.appConfig,
})

const matchDispatchToProps = dispatch => ({
    setAllPlacesOfDelivery: (allPlacesOfDelivery) => {
        dispatch(setAllPlacesOfDelivery(allPlacesOfDelivery))
    },
    fetchAllPlacesOfDelivery: url => dispatch(allPlacesOfDeliveryFetchData()),
})
export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(AllPlacesOfDeliveryDataTable)
