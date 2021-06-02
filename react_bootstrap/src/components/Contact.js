import React from 'react'
import { Button } from 'react-bootstrap';

export default function Contact({id, name}) {
    return (
        <div>
            <h1>Contact</h1>
            <Button>This is default button</Button>
            <Button variant="secondary" size="sm" disabled>Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
        </div>
    );
}