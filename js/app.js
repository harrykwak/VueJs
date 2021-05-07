Vue.component("todo-footer", {
  template: "<div>전역 컴포넌트</div>",
});

var local = {
  template: "<div>지역 컴포넌트</div>",
};

var app = new Vue({
  el: "#app",
  data: {
    message: "분리한 내용 적용",
  },
  components: {
    "todo-list": local,
  },
});
