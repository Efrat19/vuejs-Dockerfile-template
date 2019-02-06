/* eslint-disable */
import axios from 'axios'
import AddContainer from '../AddContainer/index.vue'
export default {
  name: 'dashboard',
  components: {
      AddContainer
  },
  props: [],
  data () {
    return {
      containers:[]
    }
  },
  computed: {

  },
  mounted () {
    axios.get('http://0.0.0.0:8181/container').then(res => {
      console.log('res.data:',res.data);
      this.containers = res.data
    })
  },
  methods: {

  }
}
