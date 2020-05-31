import React from "react"
import { CardWrapper} from "../elements"
import {Card , Button} from "react-bootstrap"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <div>
    <Card border="light">

        <Card.Body>

          <Card.Title><h2 textAlign="center" margin="0 0 1rem 0">{title}</h2></Card.Title>
          
          <Card.Text>
            
            <p size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
              {date}
            </p>
    
            <p size="small" color="dark2" textAlign="center" margin="0 0 1.5rem 0">
              {excerpt}
            </p>
          </Card.Text>

          <Button variant="primary" href={`${slug}`}>Go somewhere</Button>
        
        </Card.Body>

    </Card>
   
    </div>
    

  )
}
