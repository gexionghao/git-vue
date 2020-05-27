import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Header,
  Main,
  Container,
  Footer,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Tabs,
  TabPane,
  Radio,
  Divider,
  Timeline,
  Card,
  TimelineItem,
  Table,
  TableColumn,
  PageHeader,
  Pagination
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Container);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Timeline);
Vue.use(Card);
Vue.use(TimelineItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(PageHeader);
Vue.use(Pagination);
// Vue.use(Message)
Vue.prototype.$message = Message;
