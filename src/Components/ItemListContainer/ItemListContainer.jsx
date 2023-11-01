const ItemListContainer = ({greeting}) => {
    const greetingStlyes = {
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center',
        padding: '3rem'
    }
    return (
        <div style={greetingStlyes}>
            {greeting}
        </div>
    )
}
export default ItemListContainer;