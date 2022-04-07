import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const {totalAmount,shippingFee, clearCart} = useCartContext()
  return <Wrapper>
    <div>
      <article>
        <h5>
          Subtotal : <span>
            {formatPrice(totalAmount)}
          </span>
        </h5>
        <p>
          Shipping : <span>
             {formatPrice(shippingFee)}
          </span>
        </p>
        <hr />
        <h4>
          Order total : <span>
            {formatPrice(totalAmount+shippingFee)}
          </span>
        </h4>
      </article>
      <Link to='/checkout' className='btn' onClick={clearCart}>
        Proceed to checkout
      </Link>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
  }
  .btn {
    margin-top: 1rem;
    margin-left: 1.1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
