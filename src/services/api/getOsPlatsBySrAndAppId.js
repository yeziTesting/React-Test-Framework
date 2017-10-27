import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
import initialState from '../../models';
function getOsPlatsBySrAndAppId({
    serviceId = initialState.version.serviceId,
    applicationId = initialState.version.applicationId
}) {
    return axios({
        method: 'GET',
        url: `${configs.domain}/api/common/getOsPlatsBySrAndAppId/${serviceId}/${applicationId}`
    })
    .then((response) => {
        return response.data;
    });
}
export default getOsPlatsBySrAndAppId;
// WIKI: http://wiki.navercorp.com/display/gdc/Get+Target+OS+Platform+List