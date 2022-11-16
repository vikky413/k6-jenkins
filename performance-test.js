import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  duration: '20s',
  vus: 10,
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95 percent of response times must be below 500ms
  },
};

export default function () {
  http.get('http://test.k6.io/contacts.php');
  sleep(3);
}
