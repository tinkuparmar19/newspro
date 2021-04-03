import React from 'react'
import { PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';

function Bookmark() {
    return (
        <PageHeader
            ghost={false}
            className="site-page-header-responsive"
            style={{
                borderBottom: '1px solid rgb(180, 224, 241)',
                overflow: 'auto',
                // height: '100px',
                position: 'fixed',
                width: '100%',
                top: 0,
                zIndex: 1,
            }}
            title="Logo"
            extra={[
                <Button key="1" type="primary">
                    <Link to='/bookmark'>
                        Bookmark
                    </Link>
                </Button>
            ]}
            >
        </PageHeader>
    )
}

export default Bookmark
