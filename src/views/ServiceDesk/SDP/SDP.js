import React from 'react';
import Loadable from 'react-loadable';
import VisibilitySensor from 'react-visibility-sensor';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import {
    enableStickyFilter,
    disableStickyFilter,
} from '../../../actions/Shared/uiActions';
import { LOADING_DELAY } from '../../../constants';
import Loading from '../../Shared/Loading';
import SectionFooter from '../../Shared/SectionFooter';
import SectionHeader from '../../Shared/SectionHeader';
import UniversalFilter from '../../Shared/UniversalFilter';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import ServiceDeskOverview from './ServiceDeskOverview';
import OpenTicketsByType from '../ServiceDesk/OpenTicketsByPartner';
import TicketsByCategory from './TicketsByCategory';


const SDP = () => {
    const branding = {
        title: 'SERVICE DELIVERY PARTNER',
        description: 'SERVICE DELIVERY PARTNER',
        overview: 'Service Delivery Partner',
    };
    const { active_tab } = useParams();
    const sdTab = active_tab;
    const dispatch = useDispatch();
    const onVisibilityChange = (isVisible) => {
        if (sdTab === 'serviceDesk') {
            if (isVisible) {
                dispatch(disableStickyFilter());
            } else {
                dispatch(enableStickyFilter());
            }
        }
    };

    return (
        <div className="animated fadeIn">
            <SectionHeader title={branding.title} />
            <VisibilitySensor onChange={onVisibilityChange}>
                <UniversalFilter />
            </VisibilitySensor>
            <ServiceDeskOverview />
            <OpenTicketsByType />
            <SectionFooter overview={branding.overview} />
            <TicketsByCategory />
            <SectionFooter overview={branding.overview} />
        </div>
    );
};

export default SDP;
