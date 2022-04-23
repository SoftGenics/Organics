import React from 'react'
import { 
    CategorySection,
    Container,
    Header,
    Title,
    Text,
    CategoriesBox,
    SpecificCategory,
    CategoryInner,
    Link,
    CategoryImg,
    CategoryContent,
    CategoryText,
    Span,
    Route
} from './CategoryElement.js';
import Breakfast from "../../Image/category/breakfast.jpg"
import Cheese from "../../Image/category/cheese.jpg"
import Coffee from "../../Image/category/coffee.jpg"
import Cooking from "../../Image/category/cooking.jpg"
import Dry from "../../Image/category/dry.jpg"
import Honey from "../../Image/category/honey.jpg"

import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const Category = () => {
    return  (
       <CategorySection id='category'>
           <Container>
               <Header>
                   <Title>
                      Shop By Category
                   </Title>
                   <Text>
                       Tastes Great and Travels well!
                   </Text>
                </Header> 
                <CategoriesBox>
                    <SpecificCategory>
                        <CategoryInner> 
                            <Link to='/cookingessentials'>
                              <CategoryImg src={Cooking} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Cooking Essentials-</Span>
                                  <Route to= '/cookingessentials'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                           </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/dryfruitsandsuperfruits'>
                              <CategoryImg src={Dry} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Dry fruits and Superfoods-</Span>
                                  <Route to= '/dryfruitsandsuperfruits'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/HoneyandSpreads'>
                              <CategoryImg src={Honey} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Honey and Spreads-</Span>
                                  <Route to= '/HoneyandSpreads'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/DairyAndCheese'>
                              <CategoryImg src={Cheese} alt='imgone' />
                            </Link>  
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Dairy and Cheese-</Span>
                                  <Route to= '/DairyAndCheese'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/BreakfastAndSnacks'>
                              <CategoryImg src={Breakfast} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Breakfast and Snacks-</Span>
                                  <Route to= '/BreakfastAndSnacks'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                        <CategoryInner> 
                            <Link to='/TheCoffeeAndBeverage'>
                              <CategoryImg src={Coffee} alt='imgone' />
                            </Link> 
                            <CategoryContent>
                                <CategoryText>
                                  <Span>Tea Coffee and Beverages-</Span>
                                  <Route to= '/TheCoffeeAndBeverage'>Explore Product <ChevronRightSharpIcon fontSize = "small" /> </Route> 
                                </CategoryText>      
                            </CategoryContent>
                        </CategoryInner> 
                    </SpecificCategory> 
                </CategoriesBox> 
            </Container>
        </CategorySection>
    );
  }
export default Category;