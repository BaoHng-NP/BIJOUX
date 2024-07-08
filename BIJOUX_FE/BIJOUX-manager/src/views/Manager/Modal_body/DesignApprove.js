import React, { useContext, useEffect, useState, useRef } from "react";

import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CRow,
    CSpinner,
    CCard,
    CCardHeader,
    CCardBody,
    CPlaceholder,
    CPopover,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody
} from '@coreui/react'
import { get_account_list } from "../../../api/main/accounts/Account_api";
import AvatarUpload from "../../component_items/ImageUploader/AvatarUpload";
import { useDispatch } from "react-redux";
import { clearToast, setToast } from "../../../redux/notification/toastSlice";
import { FaUserCheck } from "react-icons/fa";
import DateTimePicker from "../../component_items/DatePicker/DateTimePicker";
import AccountCard from "../Quote widget/AccountCard";
import QuoteDetailCard from "../Quote widget/QuoteDetailCard";
import NoteCard from "../Quote widget/NoteCard";
import AssignCard from "../Quote widget/AssignCard";
import { useNavigate } from "react-router-dom";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import AvatarInput from "../../component_items/Avatar/Avatar";
import { get } from "jquery";
import MetalCard from "../../Sale_staff/Modal_body/model/widget/MetalCard";
import DiamondCard from "../../Sale_staff/Modal_body/model/widget/DiamondCard";
import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextareaAutosize } from "@mui/material";
import QuoteProductImage from "../Quote widget/QuoteProductImage";
import { ArrowFatLinesRight, CaretDoubleRight } from "phosphor-react";
import { OrderPriceContext } from "../Order_Price";
import { approve_design_process, get_design_process_detail } from "../../../api/main/orders/Order_api";
import { CurrencyFormatterLowercase } from "../../component_items/Ag-grid/money_formatter";





const CustomForm = ({ designInfo, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleDataChange } = useContext(OrderPriceContext)

    const [loading, setLoading] = useState(true);
    const [handleImageChange, setHandleImageChange] = useState(false);


    const [designProcess, setDesignProcess] = useState(null)
    const [order, setOrder] = useState(null)
    const [product, setProduct] = useState(null)


    const [saleStaff, setSaleStaff] = useState(null)
    const [designStaff, setDesignStaff] = useState(null)
    const [productionStaff, setProductionStaff] = useState(null)

    //previous version
    const [previousMetalList, setPreviousMetalList] = useState([]);
    const [previousDiamondList, setPreviousDiamondList] = useState([])

    //updating version
    const [updatingMetalList, setUpdatingMetalList] = useState([]);
    const [updatingDiamondList, setUpdatingDiamondList] = useState([])
    const [note, setNote] = useState(null);


    useEffect(() => {
        const setAttribute = async () => {

            
            //console.log("quote", quoteInfo)
            // gọi api lấy design process detail từ designInfo.id

            const formData = new FormData();
            formData.append('design_process_id', designInfo.id);
            const detail_data = await get_design_process_detail(formData);


            const design_process = detail_data.data.design_process
            setDesignProcess(design_process)


            setOrder(design_process.order)
            setProduct(design_process.order.product)

            setSaleStaff(design_process.order.sale_staff);
            setDesignStaff(design_process.order.design_staff);
            setProductionStaff(design_process.order.production_staff);


            setPreviousMetalList(design_process.order.product.product_metal.filter(item => item.status == 1))
            setPreviousDiamondList(design_process.order.product.product_diamond.filter(item => item.status == 1))

            setUpdatingMetalList(design_process.order.product.product_metal.filter(item => item.status == 0))
            setUpdatingDiamondList(design_process.order.product.product_diamond.filter(item => item.status == 0))



            setNote(design_process.note)


            setLoading(false);
        }
        setAttribute()
    }, [])


    const handleNote = (new_note) => {
        setNote(new_note)
        console.log("new note", new_note)
    }

    const handleSubmit = async (approve) => {


        const approval = {
            design_process_id: designProcess.id,
            approve: approve,
            note: note

        }
        console.log('approval', approval)
        const formData = new FormData();
        formData.append('approval', JSON.stringify(approval));

        const response = await approve_design_process(formData, 'Design Process ID ' + designInfo.id);

        if (response.success) {
            handleDataChange();
            onClose();
        }
        dispatch(setToast(response.mess))
        



    }


    return (

        <CForm
            className="row g-3 needs-validation"
        >
            {loading ? <CButton className="w-100" color="secondary" disabled>
                <CSpinner as="span" size="sm" aria-hidden="true" />
                Loading...
            </CButton> :
                <>



                    <CCol lg={6} className="d-flex flex-column">
                        <CAccordion >
                            <CAccordionItem>
                                <CAccordionHeader>CUSTOMER INFORMATION</CAccordionHeader>
                                <CAccordionBody>
                                    <AccountCard account={order.account} avatarSize={100} cardHeight={'120px'} />
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                        <div className='flex-grow-1'>
                            <NoteCard title={"Designer's note"} mainNote={order.note} minRows={8} maxRows={20} isLoading={loading} note={note} handleChange={handleNote} cardHeight={'100%'} />

                        </div>
                    </CCol>
                    <CCol lg={6}>
                        <div style={{ height: 'fit-content' }}>
                            <CAccordion >
                                <CAccordionItem>
                                    <CAccordionHeader>INFORMATION OF ORDER</CAccordionHeader>
                                    <CAccordionBody>
                                        <QuoteDetailCard quote={order} title={'INFORMATION OF ORDER'} />
                                    </CAccordionBody>
                                </CAccordionItem>
                            </CAccordion>
                            {/* <QuoteDetailCard quote={order} title={'INFORMATION OF ORDER'} /> */}
                        </div>
                        <div className="mt-1" style={{ height: 'fit-content' }}  >
                            <CAccordion >
                                <CAccordionItem>
                                    <CAccordionHeader>INFORMATION OF ORDER</CAccordionHeader>
                                    <CAccordionBody>
                                        <CCard className="h-100">
                                            <CCardHeader className="text-center text-light fw-bold" >
                                                ADDITIONAL INFORMATION
                                            </CCardHeader>
                                            <CCardBody className="d-flex flex-column justify-content-between">

                                                <CRow>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center' >
                                                        <span style={{ fontSize: '15px' }}>Mounting Type: </span>
                                                    </CCol>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <CFormInput disabled className="h-75 w-100 quote-detail-card" defaultValue={designProcess.mounting_type? designProcess.mounting_type.name : 'No Specific Type' } />
                                                    </CCol>
                                                </CRow>
                                                <CRow>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <span style={{ fontSize: '15px' }}>Mounting Size: </span>
                                                    </CCol>
                                                    <CCol xs={12} sm={6} md={6} lg={6} xl={6} xxl={6} className='d-flex align-items-center'>
                                                        <CFormInput disabled className="h-75 w-100 quote-detail-card" defaultValue={designProcess.mounting_size} />
                                                    </CCol>
                                                </CRow>


                                            </CCardBody>
                                        </CCard>
                                    </CAccordionBody>
                                </CAccordionItem>
                            </CAccordion>


                        </div>
                        <div className="d-flex p-2 flex-column mt-1 rounded w-100 " style={{ height: 'fit-content' }}>
                            <CCard className=" h-100" style={{ height: 'fit-content' }}>
                                <CCardHeader className="text-center text-light fw-bold" >
                                    DESIGNED IMAGE
                                </CCardHeader>
                                <CCardBody className="d-flex flex-column justify-content-between" style={{ maxWidth: '100%', maxHeight: '100%' }}  >
                                    <Button
                                        sx={{ fontSize: '8px', fontWeight: 'bold' }}
                                        color="info"
                                        variant="outlined"
                                        className="fw-bold"
                                        onClick={() => {
                                            setHandleImageChange(!handleImageChange);
                                            console.log(!handleImageChange)
                                            console.log(product.imageUrl)
                                            console.log(designProcess.imageUrl)

                                        }}>
                                        {handleImageChange == true ? 'view current image' : 'view previous image'}
                                    </Button>
                                    <QuoteProductImage defaultImage={handleImageChange == true ? product.imageUrl : designProcess.imageUrl} disabled={true} />


                                </CCardBody>
                            </CCard>



                        </div>


                    </CCol>
                    <CCol md={12}>
                        <CRow>
                            <CCol md={4}>
                                <span ><b>Sale Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={saleStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {saleStaff.fullname}
                                </CButton>

                            </CCol>
                            <CCol md={4}>
                                <span><b>Design Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={designStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {designStaff.fullname}
                                </CButton>

                            </CCol>
                            <CCol md={4}>
                                <span><b>Production Staff: </b></span>

                                <CButton color="light w-100 d-flex align-items-center justify-content-start" >
                                    <ListItemDecorator className='px-2'>
                                        <AvatarInput size={30} src={productionStaff.imageUrl} />
                                    </ListItemDecorator>
                                    {productionStaff.fullname}
                                </CButton>

                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol md={12}>
                        <div className="my-4">
                            <CCard className="bg-light metal-card" >
                                
                                <CCardBody>
                                    <CRow>
                                        <CCol md={6}>
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous </span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {previousMetalList.length > 0 && previousMetalList.map((item, index) => {
                                                    return (
                                                        <ListItem>

                                                            <ListItemAvatar>
                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Volume: {item.volume}</div>
                                                                            <div>Weight: {item.weight}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.metal.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>

                                                            </ListItemAvatar>


                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Type'
                                                                color="secondary"
                                                                secondary={<span className="text-secondary">{item.metal.name}</span>} />

                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Caculated Price'
                                                                secondary={<span className="text-secondary"><CurrencyFormatterLowercase value={item.price}/></span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                        <CCol md={6}>
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating</span>

                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {updatingMetalList.length > 0 && updatingMetalList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>
                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Volume: {item.volume}</div>
                                                                            <div>Weight: {item.weight}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.metal.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>

                                                            </ListItemAvatar>


                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Type'
                                                                secondary={<span className="text-success">{item.metal.name}</span>} />

                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Carculated Price'
                                                                secondary={<span className="text-success"><CurrencyFormatterLowercase value={item.price}/></span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                    </CRow>


                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12} >
                                            <span className="text-danger fw-bold fs-5">Metal Sum </span>
                                        </CCol>

                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-secondary fs-6">
                                            <CurrencyFormatterLowercase value={previousMetalList.reduce((total, item) => total + item.price, 0)}/>
                                            {/* {previousMetalList.reduce((total, item) => total + item.price, 0)} vnd */}
                                            </span>

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-success fs-6">
                                            <CurrencyFormatterLowercase value={updatingMetalList.reduce((total, item) => total + item.price, 0)}/>
                                            {/* {updatingMetalList.reduce((total, item) => total + item.price, 0)} vnd */}
                                            </span>

                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                        <div className="my-4">
                            <CCard className="bg-light metal-card" >

                                <CCardBody>



                                    <CRow>
                                        <CCol md={6}>
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous</span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {previousDiamondList.length > 0 && previousDiamondList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>

                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Shape: {item.diamond_shape.name}</div>
                                                                            <div>Size: {item.diamond.size}</div>
                                                                            <div>Origin: {item.diamond.diamond_origin.name}</div>
                                                                            <div>Color: {item.diamond.diamond_color.name}</div>
                                                                            <div>Clarity: {item.diamond.diamond_clarity.name}</div>
                                                                            <div>Cut: {item.diamond.diamond_cut.name}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.diamond.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Count'
                                                                secondary={<span className="text-secondary">{item.count}</span>} />
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Total Price'
                                                                secondary={<span className="text-secondary"><CurrencyFormatterLowercase value={item.price}/></span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                        <CCol md={6}>
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating</span>
                                            <List className="rounded" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                                {updatingDiamondList.length > 0 && updatingDiamondList.map((item, index) => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemAvatar>

                                                                <CPopover
                                                                    title="Info"
                                                                    content={
                                                                        <>
                                                                            <div>Shape: {item.diamond_shape.name}</div>
                                                                            <div>Size: {item.diamond.size}</div>
                                                                            <div>Origin: {item.diamond.diamond_origin.name}</div>
                                                                            <div>Color: {item.diamond.diamond_color.name}</div>
                                                                            <div>Clarity: {item.diamond.diamond_clarity.name}</div>
                                                                            <div>Cut: {item.diamond.diamond_cut.name}</div>
                                                                        </>
                                                                    }
                                                                    placement="right"
                                                                    trigger={"hover"}
                                                                >
                                                                    <Avatar>
                                                                        <img width={'100%'} src={item.diamond.imageUrl} alt="metal" />
                                                                    </Avatar>
                                                                </CPopover>
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Count'
                                                                secondary={<span className="text-success">{item.count}</span>} />
                                                            <ListItemText
                                                                className="text-dark w-25"
                                                                primary='Total Price'
                                                                secondary={<span className="text-success"><CurrencyFormatterLowercase value={item.price}/></span>} />

                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </CCol>
                                    </CRow>
                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12}>
                                            <span className="text-danger fw-bold fs-5">Diamond Sum </span>
                                        </CCol>

                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-secondary fs-6">
                                            <CurrencyFormatterLowercase value={previousDiamondList.reduce((total, item) => total + item.price, 0)}/>
                                            {/* {previousDiamondList.reduce((total, item) => total + item.price, 0)} vnd */}
                                            </span>

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />

                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-success fs-6">
                                            <CurrencyFormatterLowercase value={updatingDiamondList.reduce((total, item) => total + item.price, 0)}/>
                                            {/* {updatingDiamondList.reduce((total, item) => total + item.price, 0)} vnd */}
                                            </span>

                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                    </CCol>
                    <CCol md={12}>

                        <div className="my-0">
                            <CCard className="bg-light metal-card" >

                                <CCardBody className="d-flex flex-column justify-content-center">
                                    <CRow className="d-flex justify-content-center">

                                        <CCol md={5} className="p-0">
                                            <span className="text-secondary fw-bold fs-5 d-flex align-items-center">Previous </span>

                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5 ">Product Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center  text-nowrap">
                                                    <span className="text-secondary fs-6">
                                                    <CurrencyFormatterLowercase value={order.product_price}/>

                                                    {/* {order.product_price} vnd */}
                                                    </span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5">Profit Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center  text-nowrap">
                                                    <span className="text-secondary fs-6">
                                                    <CurrencyFormatterLowercase value={order.product_price * (designProcess.profit_rate / 100)}/>

                                                    &nbsp;({order.profit_rate}%)
                                                     </span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center ">
                                                    <span className="text-dark  fs-5 ">Production Price: </span>
                                                </CCol>
                                                <CCol lg={5} className=" p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-secondary fs-6">
                                                    <CurrencyFormatterLowercase value={order.production_price}/>
                                                    {/* {order.production_price} vnd */}
                                                    </span>

                                                </CCol>
                                            </CRow>
                                        </CCol>
                                        {/* <CCol md={1} className="d-flex align-items-center justify-content-center p-0">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />
                                        </CCol> */}
                                        <CCol md={5} className="p-0">
                                            <span className="text-success fw-bold fs-5 d-flex align-items-center">Updating </span>

                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5 ">Product Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center text-nowrap">
                                                    <span className="text-success fs-6">
                                                    <CurrencyFormatterLowercase value={designProcess.product_price}/>
                                                    {/* {designProcess.product_price} vnd */}
                                                    </span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center">
                                                    <span className="text-dark  fs-5">Profit Price: </span>
                                                </CCol>
                                                <CCol lg={5} className="p-0 m-0 d-flex align-items-center  text-nowrap">
                                                    <span className="text-success fs-6">
                                                    <CurrencyFormatterLowercase value={designProcess.product_price * (designProcess.profit_rate / 100)}/>

                                                    &nbsp;({designProcess.profit_rate}%)</span>

                                                </CCol>
                                            </CRow>
                                            <CRow className="w-100  text-end d-flex justify-content-center">
                                                <CCol lg={5} className=" px-0 m-0 d-flex  align-items-center ">
                                                    <span className="text-dark  fs-5 ">Production Price: </span>
                                                </CCol>
                                                <CCol lg={5} className=" p-0 m-0 d-flex align-items-center  text-nowrap">
                                                    <span className="text-success fs-6">
                                                    <CurrencyFormatterLowercase value={designProcess.production_price}/>

                                                    {/* {designProcess.production_price} vnd */}
                                                    </span>

                                                </CCol>
                                            </CRow>
                                        </CCol>
                                    </CRow>
                                    <CRow className="w-100 text-center d-flex justify-content-center">
                                        <CCol md={12}>
                                            <span className="text-danger w-100 text-center fw-bold fs-5">Total</span>
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-secondary fs-6">
                                            <CurrencyFormatterLowercase value={order.total_price}/>

                                            {/* {order.total_price} vnd */}
                                            </span>
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex  align-items-center justify-content-center">
                                            <CaretDoubleRight size={30} color='gray' weight="light" />
                                        </CCol>
                                        <CCol xl={2} className="p-0 m-0 d-flex align-items-center justify-content-center  text-nowrap">
                                            <span className="text-success fs-6">
                                            <CurrencyFormatterLowercase value={designProcess.total_price}/>

                                            {/* {designProcess.total_price} vnd */}
                                            </span>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </div>
                    </CCol>
                    <CCol xs={12} className="d-flex justify-content-center align-items-center">
                        <CButton className="mx-2" color="danger" onClick={() => handleSubmit(false)}  >
                            Decline
                        </CButton>
                        |
                        <CButton className="mx-2" color="success" onClick={(e) => handleSubmit(true)}  >
                            Approve
                        </CButton>

                    </CCol>
                </>}
        </CForm>
    )
}

const DesignApprove = ({ designProcess, onClose }) => {
    return (
        <CustomForm designInfo={designProcess} onClose={onClose} />
    );
};

export default DesignApprove;