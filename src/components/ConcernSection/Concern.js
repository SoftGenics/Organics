import React from 'react';
import { 
    ConcernSection,
    Container,
    Header,
    Title,
    Text,
    ConcernBox,
    SpecificConcern,
    ConcernInner,
    Link,
    ConcernImg,
    ConcernContent,
    ConcernText,
    Span,
    Route,
    StLine
} from './ConcernElement.js';
import ChildFood from '../../Image/concern/childFood.jpg';
import Diabetes from '../../Image/concern/diabetes.jpg';
import Digestion from '../../Image/concern/digestion.jpg';
import Gluten from '../../Image/concern/gluten.jpg';
import Vegan from '../../Image/concern/vegan.jpg';

import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const Concern = () => {
    return  (
        <ConcernSection id='concern'>
            <Container>
                <Header>
                    <Title>
                        Shop By Concern
                    </Title>
                    <Text>
                        We care about your health, Eat Bright Be Bright!
                    </Text>
                </Header> 
                <ConcernBox>
                    <SpecificConcern>
                        <ConcernInner> 
                            <Link to='/digestion'>
                                <ConcernImg src={Digestion} alt='imgone' />
                            </Link> 
                            <ConcernContent>
                                <ConcernText>
                                    <Span>Digestion-</Span>
                                    <Route to= '/digestion'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </ConcernText>      
                            </ConcernContent>
                        </ConcernInner> 
                        <ConcernInner> 
                            <Link to='/glueten-free'>
                                <ConcernImg src={Gluten} alt='imgone' />
                            </Link> 
                            <ConcernContent>
                                <ConcernText>
                                    <Span>Gluten free-</Span>
                                    <Route to= '/glueten-free'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </ConcernText>      
                            </ConcernContent>
                        </ConcernInner> 
                        <ConcernInner> 
                            <Link to='/diabetes'>
                                <ConcernImg src={Diabetes} alt='imgone' />
                            </Link> 
                            <ConcernContent>
                                <ConcernText>
                                    <Span>Diabetes-</Span>
                                    <Route to= '/diabetes'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </ConcernText>      
                            </ConcernContent>
                        </ConcernInner> 
                        <ConcernInner> 
                            <Link to='/childcare'>
                                <ConcernImg src={ChildFood} alt='imgone' />
                            </Link> 
                            <ConcernContent>
                                <ConcernText>
                                    <Span>Child Care-</Span>
                                    <Route to= '/childcare'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </ConcernText>      
                            </ConcernContent>
                        </ConcernInner> 
                        <ConcernInner> 
                            <Link to='/vegan'>
                                <ConcernImg src={Vegan} alt='imgone' />
                            </Link> 
                            <ConcernContent>
                                <ConcernText>
                                    <Span>Vegan-</Span>
                                    <Route to= '/vegan'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </ConcernText>      
                            </ConcernContent>
                        </ConcernInner> 
                       
                            
                    </SpecificConcern>
                </ConcernBox>
            </Container>
            <StLine />
        </ConcernSection>     
    );
}
export default Concern;

