import moment from 'moment/moment';
import 'moment/locale/ja';

moment.updateLocale('ja', {
  relativeTime: {
    future: '%s後',
    past: '%s前',
    s: '数秒',
    ss: '%d秒',
    m: '1分',
    mm: '%d分',
    h: '１時間',
    hh: '%d時間',
    d: '1日',
    dd: '%d日',
    w: '1週間',
    ww: '%d週間',
    M: '1ヶ月',
    MM: '%dヶ月',
    y: '1年',
    yy: '%d年',
  },
});

moment.locale('ja');

export default moment;
