import React, { Suspense } from "react";
import { Col, Spinner, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { usePostsList } from '../hooks/usePostsList';

export const ListOfPosts = () => {
    const {data} = usePostsList();

    return (
        <Suspense fallback={<Spinner animation="grow" variant="secondary" />}>
            {
                data?.posts.map((post: any) =>
                    <Card key={post.header} className="mb-4">
                        <Card.Body>
                            <Card.Title>{post.header}</Card.Title>
                            <Card.Text>{post.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </Suspense>
    )
}