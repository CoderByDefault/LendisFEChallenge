import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <div className='product-card'>
      <div className='product-image'>
        <img src={item.image} alt={item.title} />
      </div>
      <div className='product-details'>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3 className="price">${item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </div>
    </div>
  </Wrapper>
);

export default Item;
