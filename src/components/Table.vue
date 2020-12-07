<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-z-50">
    <!-- table loader -->
    <div class="tw-w-full tw-flex tw-justify-center" v-if="loading">
      <v-progress-circular :size="40" :width="1" color="purple" indeterminate />
    </div>

    <!-- table main section -->
    <div v-else>
      <!-- table heading -->
      <div class="tw-pl-5 tw-mb-2">
        <div class="tw-flex w-full">
          <div
            v-for="(header, i) in headers"
            :key="i"
            class="tw-text-sm tw-text-secondary tw-font-semibold"
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
        class="card tw-flex tw-flex-col tw-justify-center tw-pl-5 tw-mb-3"
        :style="!tableHeight ? ' height: 55px;' : ''"
      >
        <div class="tw-flex tw-items-center tw-w-full">
          <!-- checkbox -->
          <div v-if="checkbox" class="tw--mt-4 tw-flex">
            <s-checkbox
              v-model="checked"
              :value="data"
              checkboxSize="height:12px; width:12px"
              labelStyle="font-size:12px; padding-top:8px; color:#525252"
            />
          </div>

          <!-- main data -->
          <div
            v-for="(value, key) of populateTable(data)"
            :key="key"
            class="tw-text-accent tw-text-sm tw-font-semibold tw-capitalize"
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
  background: #ffffff;
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
