import MixpanelMixin from '../mixin/tracking_mixin'

export function initialize(ApplicationInstance) {
    var router = ApplicationInstance.lookup('router:main');
    router.on('didTransition', function() {
      this.trackRouteChange(this.get('url'));
    });
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
