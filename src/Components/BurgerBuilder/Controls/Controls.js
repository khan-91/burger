
import { Card, Button } from 'react-bootstrap'

const controlArray = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className='d-flex'>
            <div className='me-auto ms-5' style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{props.label}</div>
            <Button className='btn btn-danger btn-sm m-1' onClick={props.removed} style={{ backgroundColor: '#B22222', borderColor: '#B22222' }}>Less</Button>
            <Button className='btn btn-success btn-sm m-1' onClick={props.added}>More</Button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className='container ml-md-5' style={{ textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <Card.Header style={{
                    backgroundColor: "#B22222",
                    color: 'white',
                }}><h4>Add Ingredients</h4></Card.Header>
                <Card.Body>
                    {
                        controlArray.map(item => {
                            return <BuildControl
                                label={item.label}
                                type={item.type}
                                key={item.type}
                                added={() => props.ingredientAdded(item.type)}
                                removed={() => props.ingredientRemoved(item.type)}
                            />

                        })

                    }
                </Card.Body>
                <Card.Footer><h5>Price: <strong>{props.price}</strong> BDT</h5></Card.Footer>
                <Button variant='success' disabled={!props.purchasable} onClick={props.toggleModal}>Order Now</Button>
            </Card>
        </div>
    )
}

export default Controls