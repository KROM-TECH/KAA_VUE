<template>
  <div style="overflow-x:auto; overflow-y: hidden; width:65rem">
    <!-- table loader -->
    <div class="d-flex justify-content-center" v-if="loading">
      <b-spinner type="grow load" label="Loading..."></b-spinner>
    </div>

    <!-- table main section -->
    <div v-else>
      <!-- table heading -->
      <div class="pl-3 mb-2">
        <div class="d-flex d-full">
          <div
            v-for="(header, i) in headers"
            :key="i"
            class="header mr-2"
            :style="`width: ${header.width ? header.width : defaultColWidth}%;`"
          >
            <!-- <di></div> -->
            {{ header.text }}
          </div>
        </div>
      </div>

      <!--table body -->
      <div
        v-for="(data, i) in displayTable"
        :key="i"
        class="card d-flex col justify-content-center d-full pl-3 mb-3"
        :style="!tableHeight ? ' height: 55px;' : ''"
      >
        <div class="d-flex align-items-center ">
          <!-- checkbox -->

          <!-- main data -->
          <div
            v-for="(value, key) of populateTable(data)"
            :key="key"
            class="mr-2"
            :style="`width: ${getColWidth(key) || defaultColWidth}%;`"
          >
            <slot name="item" :item="{ [key]: key, data }">
              <span>{{ value }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: [
    "headers",
    "tableData",
    "tableHeight",
    "loading",
    "checkbox",
    "pageSync",
    "itemPerPage",
    "page",
  ],
  data() {
    return {
      itemLength: 0,
      checked: [],
      dot: false,
      pages: 0,
    };
  },
  watch: {
    tableData() {
      this.setPages();
    },
  },
  computed: {
    displayTable() {
      if (this.pageSync) {
        return this.paginate(this.tableData);
      } else {
        return this.tableData;
      }
    },

    getItemsWithColWidth() {
      let length = 0;

      this.headers.forEach((item) => {
        if (!item.width) {
          length++;
        }
      });
      return length;
    },
    defaultColWidth() {
      return this.roundToTwo(100 / this.getItemsWithColWidth);
    },
    checkboxed: {
      get: function() {
        this.isPresent();
        this.$emit("rowSelected", this.checked);
        return this.tableData ? this.checked.length == this.tableData.length : false;
      },
      set: function(value) {
        var checked = [];
        if (value) {
          this.tableData.forEach(function(table) {
            checked.push(table);
          });
        }
        this.checked = checked;
      },
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.tableData.length / this.itemPerPage);
      this.$emit("page-count", numberOfPages);
    },
    paginate(data) {
      let page = this.page;
      let perPage = this.itemPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return data.slice(from, to);
    },
    isPresent() {
      let result;
      this.tableData.forEach((element) => {
        result = this.checked.find((item) => item.id == element.id);
        if (result) {
          this.dot = true;
          return this.$emit("activeUser", this.dot);
        } else {
          this.dot = false;
          return this.$emit("activeUser", this.dot);
          // return (this.dot = false);
        }
      });
    },
    roundToTwo(num) {
      return +(Math.round(num + "e+2") + "e-2");
    },
    getColWidth(key) {
      for (const item of this.headers) {
        if (item.width && item.value === key) return item.width;
      }
    },
    populateTable(data) {
      let element = {};

      this.headers.forEach((item) => {
        for (const key in data) {
          if (key === item.value) {
            element[key] = data[key];
            //item.width ? (data.width = item.width) : "";
          }
        }
      });
      return element;
    },
  },
};
</script>

<style scoped>
.header {
  color: #00276f !important;
  font-weight: 600;
  font-size: 1rem;
}
.load {
  background-color: #00276f !important;
  height: 3rem !important;
  width: 3rem !important;
}
.user-action:hover {
  background: #ebe5ed;
}
.sideDot1 {
  width: 7px;
  height: 7px;
  background-color: #46aa80;
}
.sideDot2 {
  width: 7px;
  height: 7px;
  background-color: #c3c2c4;
}

.card {
  /* background: #ffffff; */
  background: #5976ac;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  /* height: 55px; */
}

.user-table-body__image {
  height: 30px;
  width: 30px;
}

.custom-radius {
  border-radius: 7px;
}
</style>
