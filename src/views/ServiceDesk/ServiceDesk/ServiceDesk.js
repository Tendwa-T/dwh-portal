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
import TicketsByCategory from './IssueStatusByMonth';
import IssueStatusByProduct from './IssueStatusByProduct';
import OpenTicketsByProduct from './OpenTicketsByProduct';
import OpenTicketsByPartner from './OpenTicketsByPartner';
import OpenTicketsByCounty from './OpenTicketsByCounty';
import OpenTicketsByMonth from './OpenTicketsByMonth';
import IssueStatusByMonth from './IssueStatusByMonth';
import PartnerLevelIssues from './PartnerLevelIssues';


const Service_Desk = () => {
    const branding = {
        title: 'SERVICE DESK',
        description: 'SERVICE DESK',
        overview: 'Service Desk',
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
            <IssueStatusByProduct />
            <SectionFooter overview={branding.overview} />
            <OpenTicketsByProduct />
            <SectionFooter overview={branding.overview} />
            <OpenTicketsByPartner />
            <SectionFooter overview={branding.overview} />
            <OpenTicketsByCounty />
            <SectionFooter overview={branding.overview} />
            <OpenTicketsByMonth />
            <SectionFooter overview={branding.overview} />
            <IssueStatusByMonth />
            <SectionFooter overview={branding.overview} />
            <PartnerLevelIssues />
            <SectionFooter overview={branding.overview} />
        </div>
    );
};

export default Service_Desk;
