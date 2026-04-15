import { default as React } from '../node_modules/react';
import { ISimpleUserScope } from '../model/ISimpleUserScope';
interface IProps {
    hasAuthToken?: boolean;
    serviceAccountEmail?: string;
    serviceAccountPassword?: string;
    authScope?: ISimpleUserScope;
    roleId?: string;
    apiBaseUrl?: string;
    viewId?: string;
    deviceIds?: string[];
    moduleId?: string;
    hideTimeline?: boolean;
    authToken?: string;
    dataSrcUrl?: string;
    viewTags?: any;
    currentDate?: Date;
    aggregation?: string;
    aggregateStartDate?: Date;
    aggregateEndDate?: Date;
    timeRange?: string;
    themeOverride?: any;
    wrapperStyleOverride?: any;
    fontFamilyUrl?: string;
}
export declare const ViewEmbedWrapper: (props: IProps) => React.JSX.Element;
export {};
