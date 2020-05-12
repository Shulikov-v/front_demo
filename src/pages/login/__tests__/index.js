import React from 'react'
import { act } from 'react-dom/test-utils'
import { createStore } from 'redux'


import { render, fireEvent, screen} from '../../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Login from '../';


it('render login', () => {
    const handler = jest.fn(e => e.preventDefault())
    render(<Login onSubmit={handler}/>);
    expect(screen.getByRole('button')).toHaveTextContent('Login')
})  