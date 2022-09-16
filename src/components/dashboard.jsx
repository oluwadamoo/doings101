import React from 'react'
import { FaBox, FaBoxes, FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { MdOutlineHome, MdCalendarToday, MdOutlineLocationOn, MdOutlinePeople, MdOutlineList, MdOutlineTimer, MdOutlineSettings, MdSearch, MdOutlineIndeterminateCheckBox, MdDragIndicator, MdClose, MdMoreTime, MdAccessTime } from 'react-icons/md'
import styled from 'styled-components'
import Draggable from 'react-draggable'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function Dashboard() {
    const [dragStart, setDragStart] = React.useState(true)
    const [showModal, setShowModal] = React.useState(false)
    const [dragStop, setDragStop] = React.useState(false)
    const [isDragged, setIsDragged] = React.useState('')
    const [initDate, setInitDate] = React.useState(new Date())
    const [initTime, setInitTime] = React.useState(new Date().getTime())


    const WINDOW_WIDTH = window.innerWidth

    const draggableRef = React.useRef(null)
    const handleDrag = (e) => {
        if (e.clientX <= WINDOW_WIDTH * 0.5) {

            console.log("Let's open it up now")
            setShowModal(true)

        }
    }

    const handleStop = () => {
        setDragStop(true)
        draggableRef.current.state.y = 0
        draggableRef.current.state.x = 0

        console.log(draggableRef.current, "Dragged....")
        console.log("Stop......")
    }
    const handleStart = (selected) => {
        setIsDragged(selected)
        setDragStart(true)

        // console.log(isDragged, "is dragged")
    }

    const closeModal = () => {

        setShowModal(false)
    }
    const iconSize = 25

    function RenderModal() {
        return (
            <Modal>
                <ModalCard>
                    <ModalCardH
                        onClick={() => setShowModal(false)}
                    >
                        <span>close</span>
                        <MdClose />
                    </ModalCardH>
                    <ModalCardTitle>
                        <h2>Les Code</h2>
                        <p style={{
                            marginTop: '20px',
                            marginLeft: '13px',
                            fontSize: '14px',
                            fontWeight: '700',
                            color: '#d91e50',

                        }}>GROUP A</p>
                    </ModalCardTitle>

                    <ModalCardTable>
                        <MTH>
                            <MTR>
                                <p>FIRST WEEK</p>
                                <p>LOCATION A</p>
                            </MTR>
                            <MTR>
                                <p>FIRST WEEK</p>
                                <p>GROUP A</p>
                            </MTR>
                            <MTR>
                                <p>FIRST WEEK</p>
                                <p>CAT A</p>
                            </MTR>
                        </MTH>
                        <MTB>
                            <MTD>
                                <p>30%</p>
                            </MTD>
                            <MTD>
                                <p>-</p>
                            </MTD>
                            <MTD>
                                <p>Tech</p>
                            </MTD>
                        </MTB>
                    </ModalCardTable>


                    <ModalForm>
                        <ModalFormRow>
                            <ModalFormItem style={{
                                marginRight: '15px'
                            }}>
                                <Label>Date</Label>
                                <ModalFormInput
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <DatePicker
                                        wrapperClassName='datepicker'
                                        selected={initDate} onChange={(date) => setInitDate(date)}
                                    />
                                    <MdCalendarToday size={12} />
                                </ModalFormInput>
                            </ModalFormItem>
                            <ModalFormItem>
                                <Label>Time</Label>
                                <ModalFormInput
                                    style={{
                                        cursor: 'pointer'
                                    }}

                                >
                                    <DatePicker
                                        wrapperClassName='datepicker'

                                        selected={initTime} onChange={(time) => setInitTime(time)} showTimeSelectOnly={true} showTimeInput={true} showTimeSelect={true} dateFormat="h:mm aa" />
                                    <MdAccessTime size={14} />
                                </ModalFormInput>
                            </ModalFormItem>
                        </ModalFormRow>

                        {/* Class room */}
                        <ModalFormRow>
                            <ModalFormItem
                                style={{
                                    cursor: 'pointer'
                                }}


                            >
                                <Label>Date</Label>
                                <ModalFormInput>
                                    <span>choose class</span>
                                    <FaCaretDown size={12} />
                                </ModalFormInput>
                            </ModalFormItem>
                        </ModalFormRow>

                        {/* Decent */}
                        <ModalFormRow>
                            <ModalFormItem >
                                <Label>Decent</Label>
                                <ModalFormInput>
                                    <input placeholder='search' />
                                </ModalFormInput>
                            </ModalFormItem>
                        </ModalFormRow>


                        {/* Footer */}
                        <ModalFooter>
                            <MFLeftButton>
                                AnotherG
                            </MFLeftButton>
                            <MFRightButton style={{ marginLeft: '10px' }}>
                                Some Gibberish
                            </MFRightButton>
                        </ModalFooter>
                    </ModalForm>
                </ModalCard>
            </Modal>
        )
    }
    return (
        <Container>
            {showModal == true && <RenderModal />}
            <FilterContainer>

            </FilterContainer>
            <Wrapper>
                <LeftSideBar>
                    <IconButton>
                        <MdOutlineHome size={iconSize + 5} style={{
                            marginLeft: '-3px'
                        }} />
                    </IconButton>
                    <IconButton>
                        <MdCalendarToday size={iconSize} />
                    </IconButton>
                    <IconButton>
                        <MdOutlineLocationOn size={iconSize} />
                    </IconButton>
                    <IconButton>
                        <MdOutlinePeople size={iconSize} />
                    </IconButton>
                    <IconButton>
                        <MdOutlineList size={iconSize} />
                    </IconButton>
                    <IconButton>
                        <MdOutlineTimer size={iconSize} />
                    </IconButton>
                    <IconButton>
                        <MdOutlineSettings size={iconSize} />
                    </IconButton>
                </LeftSideBar>

                <Body>
                    <Header>
                        <HeaderLeft>
                            <h4>Group A</h4>
                            <p>Only Group</p>
                        </HeaderLeft>
                        <HeaderRight>
                            <FilterButton>D</FilterButton>
                            <FilterButton>J</FilterButton>
                            <FilterToggle><FaCaretUp /></FilterToggle>
                        </HeaderRight>
                    </Header>
                    <Table>
                        <Thead>
                            <Th></Th>
                            <Th><p>Monitoring</p></Th>
                            <Th><p>Dinosaurs</p></Th>
                            <Th><p>WildBoar</p></Th>
                            <Th><p>Minotaurs</p></Th>
                            <Th><p>WildDog</p></Th>

                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>02:09<br />03:09</Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                                <Td>
                                    {/* <TCard>
                                    </TCard> */}
                                </Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                                <Td>
                                    {/* <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard> */}
                                </Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>02:09<br />04:09</Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                                <Td>
                                    {/* <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard> */}
                                </Td>
                                <Td>
                                </Td>
                                <Td>
                                </Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>02:09<br />03:09</Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                                <Td>
                                    <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard>
                                </Td>
                                <Td>
                                    {/* <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard> */}
                                </Td>
                                <Td>
                                    {/* <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard> */}
                                </Td>
                                <Td>
                                    {/* <TCard>
                                        <p>Math lesson</p>
                                        <h5>AO2</h5>
                                        <p>Teacher A</p>
                                    </TCard> */}
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                </Body>
                <RightSideBar>
                    <RSHeader>
                        <h3>Lesson By Group A</h3>
                        <p>4 to planner</p>
                    </RSHeader>
                    <Search>
                        <input type="text" placeholder='Search here...' />
                        <MdSearch color='#106c71' />
                    </Search>
                    <Draggable
                        onStart={() => handleStart('english')}
                        onDrag={handleDrag}
                        onStop={handleStop}

                        ref={draggableRef}
                    >

                        <DraggableCustom style={{ display: showModal && isDragged == 'english' ? 'none' : 'flex', }}>
                            <span><MdDragIndicator className='icon' />English</span>
                            <p>Teacher A</p>
                        </DraggableCustom>

                    </Draggable>

                    {/* Replacement
                    <Draggable
                        onStart={() => handleStart('english')}
                        onDrag={handleDrag}
                        onStop={handleStop}

                    >
                        <DraggableCustom style={{ display: dragStart && isDragged == 'english' ? 'flex' : 'none', marginTop: showModal ? 0 : '-54px' }}>
                            <span><MdDragIndicator className='icon' />English</span>
                            <p>Teacher A</p>
                        </DraggableCustom>
                    </Draggable> */}


                    <DraggableCustom>
                        <span><MdDragIndicator className='icon' />Math</span>
                        <p>Teacher B</p>
                    </DraggableCustom>
                    <DraggableCustom>
                        <span><MdDragIndicator className='icon' />Tech</span>
                        <p>Teacher C</p>
                    </DraggableCustom>
                    <DraggableCustom>
                        <span> <MdDragIndicator className='icon' />Agriculture</span>
                        <p>Teacher D</p>
                    </DraggableCustom>
                </RightSideBar>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
margin-top:30px;
min-height: calc(100vh - 120px);
display: flex;
flex-direction: column;
`

const FilterContainer = styled.div``

const Wrapper = styled.div`
flex:1;
display: flex;
`
const LeftSideBar = styled.div`
width:5%;
padding:15px;
display: flex;
flex-direction: column;
align-items: center;
margin-top:40px
`

const IconButton = styled.div`
    cursor: pointer;
    width:20px;
    height:50px;
    color: #149ba2;
    margin-bottom: 15px;

    &:active{
        color: #0c6b70;
  
    }
`
const Body = styled.div`
background: #26606014;
border-radius: 5px;
flex:1;
display: flex;
flex-direction: column;
padding:14px
`

const Header = styled.div`
height: fit-content;
display: flex;
justify-content: space-between;
`

const HeaderLeft = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left:60px;
h4{
    color:#d91e50;
}

p{
    font-size: 13px;
    font-weight: bold;
    margin-left: 12px;
    color:#076a7d;
}
`
const HeaderRight = styled.div`
display: flex;
align-items: center;
`
const FilterButton = styled.div`
height:20px;
display: flex;
width: 20px;
border-radius: 20px;
background: #0a3c3e;
align-items: center;
justify-content: center;
color: #fff;
font-weight: bold;
font-size: 13px;
margin-right: 6px;
`
const FilterToggle = styled.div`
color:#149ba2;
`
const Table = styled.div`
margin-top: 15px;
`
const Thead = styled.div`
display: flex;
align-items: center;
`
const Th = styled.div`
color:#022224;
flex:1;
justify-content: center;
align-items: center;
margin-right: 10px;

p{
    text-align: center;
}
`
const Tbody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`
const Tr = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;

`
const Td = styled.div`
flex:1;
margin-right: 10px;
`
const TCard = styled.div`
flex:1;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #70497c;
border-radius: 5px;
color:#fff;

p{
    margin-top: -14px;
    margin-bottom: -14px;
}

`


const RightSideBar = styled.div`
padding:20px;
margin-top:40px

`
const RSHeader = styled.div`
display: flex;
align-items: center;

h3{
        color:#106c71;
   
       font-size: 16px;
       margin-right: 25px;

}

p{
   color:#106c71;
   font-size   :14px ;
}
`
const Search = styled.div`
background: #a3dde017;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 10px;
border-radius: 5px;
margin-bottom: 10px;

input{
    border:none;
    background: transparent;
    height:30px;
    flex:1;

    &:focus{
        outline: none;
    }
}
`

const DraggableCustom = styled.div`
cursor: pointer;

background: #a3dde029;
color:#095f63;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 25px;
padding-right: 25px;
border-radius: 5px;
margin-bottom: 10px;
height: fit-content;
font-size: 14px;
font-weight: 700;


span{
    display: flex;
    align-items: center;

}

.icon{
    margin-right: 5px;
}
`



/* Modal */
const Modal = styled.div`
padding-top:80px;
height:100vh;
position: absolute;
background: #2a2a2a25;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
justify-content: center;
`

const ModalCard = styled.div`

background: #fff;
height:550px;
width:500px;
padding:15px;
padding-right: 25px;
`

const ModalCardH = styled.div`
display: flex;
cursor: pointer;
justify-content: flex-end;
align-items: center;
color:#095f63;


span{
    margin-right: 5px;
    margin-top: -4px;
}


&:active{
 color:#0b292a;
}
`

const ModalCardTitle = styled.div`
 display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    color:#106c71;
    padding-left: 20px;
`

const ModalCardTable = styled.div`
/* padding-left: 10px; */
`
const MTH = styled.div`
display: flex;
`
const MTR = styled.div`
text-align: center;
flex:1;
font-size: 14px;

p{
    line-height: 5pt;
    font-weight: bold;
   color:#073234

}
`
const MTB = styled.div`
display: flex;


`
const MTD = styled.div`
flex:1;
text-align: center;
font-size: 14px;

p{
    line-height: 5pt;
   color:#073234

}
`

const ModalForm = styled.div`
padding:25px;
`
const ModalFormRow = styled.div`
display: flex;
align-items: center;
`
const ModalFormItem = styled.div`
display: flex;
flex:1;
flex-direction: column;
`
const Label = styled.div`
margin-bottom: 5px;
`

const ModalFormInput = styled.div`
display: flex;
flex-direction:row;
background: #447e821c;
align-items: center;
padding-left: 12px;
padding-right: 12px;
height:40px;
justify-content: space-between;
border-radius: 5px;
margin-bottom: 20px;

input{
    border:none;
    background: transparent;
    flex:1;

    &:focus{
        outline: none;
    }
}

.datepicker{
  cursor: pointer;
}
`

const ModalFooter = styled.div`
margin-top: 15px;
display: flex;
justify-content: space-between;
height: 40px;
`

const MFLeftButton = styled.div`
flex: 1;
background: transparent;
cursor: pointer;
height: 40px;
color:#076a7d;
align-self: center;
display: flex;
align-items: center;
justify-content: center;
padding-right: 25px;
padding-left: 25px;
border-radius: 5px;

&:active{
  background: #a3a3a325;
  
}
`
const MFRightButton = styled.div`
flex: 1;
background: #d91e50;
cursor: pointer;
color:#fff;
align-self: center;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
padding-right: 25px;
padding-left: 25px;
border-radius: 5px;

&:active{
  background: #981236;
  
}
`
export default Dashboard