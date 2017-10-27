import axios from 'axios';
import _ from 'lodash';
import configs from '../configs';
import initialState from '../../models';
function getAppsBySrId({
    serviceId = initialState.version.serviceId
}) {
    return axios({
        method: 'GET',
        url: `${configs.domain}/api/common/getAppsBySrId/${serviceId}`
    })
    .then((response) => {
        return response.data;
    });
}
export default getAppsBySrId;
// WIKI: http://wiki.navercorp.com/display/gdc/Get+Target+Application+List