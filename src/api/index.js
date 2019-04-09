import {AuthResource} from './resources'

export default {
  getIndexImage:function () {
    return AuthResource.get({id:'getIndexImage'})
  },
}