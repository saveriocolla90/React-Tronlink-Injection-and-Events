import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const BtnWalletConnect = ({loading, setConnection}) => (
    <Button 
        variant="primary" 
        disabled={loading}
        onClick={() => setConnection()}
    >
    {
        loading ?
            <Spinner
                as='span' 
                variant='light'
                size='sm'
                role='status'
                aria-hidden='true'
                animation='border'
            />
        : null
    }
    {
        loading ? `Connecting ...` : `Connect Wallet`
    }
    </Button>
)

export default BtnWalletConnect