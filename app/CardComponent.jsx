import * as React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardImage, CardActions } from '@progress/kendo-react-layout';

const CardComponent = (props) => {
    const { dir } = props;
    return (
        <Card dir={dir} style={{ width: 300, margin: 'auto' }}>
            <CardImage src={"https://demos.telerik.com/kendo-ui/content/web/cards/barcelona.jpg"} />
            <CardHeader>
                <CardTitle>
                    Barcelona
                  </CardTitle>
            </CardHeader>
            <CardBody>
                <p>Barcelona, the cosmopolitan capital of Spain's Catalonia region, is known for its art and architecture.</p>
                <p>The fantastical Sagrada FamÃ­lia church and other modernist landmarks designed by Antoni GaudÃ­ dot the city.</p>
            </CardBody>
            <CardActions>
                <span><span className="k-button k-flat k-primary">Map</span></span>
                <span><span className="k-button k-flat k-primary">Weather</span></span>
            </CardActions>
        </Card>
    )
};

export default CardComponent;
