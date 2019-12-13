<template>
  <div class="docs-demo columns">
    <div class="column col-12">
      <div class="calendar calendar-lg">
        <div class="calendar-nav navbar ">
          <button class="btn btn-action btn-link btn-lg" @click="lastMonth">
            <i class="icon icon-arrow-left"></i>
          </button>
          <div class="navbar-primary">
            {{ nowDate.year }}年{{ nowDate.month + 1 }}月
          </div>
          <button class="btn btn-action btn-link btn-lg" @click="nextMonth">
            <i class="icon icon-arrow-right"></i>
          </button>
        </div>
        <div class="calendar-container">
          <div class="calendar-header">
            <div class="calendar-date" v-for="(o, index) in 7" :key="o">
              {{ formatWeek(index) }}
            </div>
          </div>
          <div class="calendar-body">
            <div
              class="calendar-date prev-month"
              v-for="o in lastMonthDays"
              :key="o + 50"
            >
              <button class="date-item">{{ lastMonthStartDay + o - 1 }}</button>
            </div>
            <div class="calendar-date" v-for="day in nowMonthDays" :key="day">
              <button
                class="date-item"
                :data-tooltip="dayEvent(day) ? dayEvent(day).des : ''"
                :class="{
                  'date-today': dayEvent(day)
                    ? dayEvent(day).date
                    : '' === nowDate.date,
                  tooltip: dayEvent(day)
                }"
              >
                {{ day }}
              </button>
              <div class="calendar-events" v-if="dayEvent(day)">
                <div class="calendar-event bg-warning">
                  {{ dayEvent(day).event }}
                </div>
              </div>
            </div>
            <div
              class="calendar-date next-month disabled"
              v-for="day in 42 - lastMonthDays - nowMonthDays"
              :key="day + 100"
            >
              <button class="date-item">{{ day }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  components: {},
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: [],
  computed: {
    lastMonthDays() {
      return this.startWeek();
    },
    lastMonthStartDay() {
      return (
        this.calcLastMonthDays(this.nowDate.year, this.nowDate.month) -
        (this.startWeek() - 1)
      );
    },
    nowMonthDays() {
      return this.calcDays(this.nowDate.year, this.nowDate.month);
    }
  },
  watch: {},
  data() {
    return {
      selectDate: [], //选择日期列表
      nowDate: this.getDate(new Date()), //当前设置时间 默认为当前系统时间
      importEvents: [
        {
          month: 2,
          date: 9,
          event: '相识',
          des: '很高兴遇到你！'
        },
        {
          month: 8,
          date: 28,
          event: '领证',
          des: '今天我们登记了！'
        },
        {
          month: 11,
          date: 2,
          event: '结婚纪念日',
          des: '今天我们结婚了！'
        },
        {
          month: 12,
          date: 7,
          event: '老婆生日',
          des: '永远17！永远爱你！'
        }
      ]
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    getDate(date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
      };
    },
    formatWeek(day) {
      switch (day) {
        case 0:
          return '日';
        case 1:
          return '一';
        case 2:
          return '二';
        case 3:
          return '三';
        case 4:
          return '四';
        case 5:
          return '五';
        case 6:
          return '六';
      }
    },
    //判断闰年
    isLeapYear(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    },
    //根据日子计算星期
    calcWeekend(year, month, day) {
      return new Date(year, month, day).getDay();
    },
    //计算某年某月的天数
    calcDays(year, month) {
      const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.isLeapYear(year) && month === 1) return 29;
      else return monthDay[month];
    },
    //计算上个月天数
    calcLastMonthDays(year, month) {
      if (month === 0) {
        return this.calcDays(year - 1, 11);
      } else {
        return this.calcDays(year, month - 1);
      }
    },
    //上月
    lastMonth() {
      if (this.nowDate.month === 0) {
        this.nowDate.month = 11;
        this.nowDate.year--;
      } else {
        this.nowDate.month--;
      }
    },
    //下月
    nextMonth() {
      if (this.nowDate.month === 11) {
        this.nowDate.month = 0;
        this.nowDate.year++;
      } else {
        this.nowDate.month++;
      }
    },
    //去年
    lastYear() {
      this.nowDate.year--;
    },
    //下一年
    nextYear() {
      this.nowDate.year++;
    },
    //计算当月开始星期
    startWeek() {
      return this.calcWeekend(this.nowDate.year, this.nowDate.month, 1);
    },
    //
    clickEvent(e) {
      let monthNo = this.nowDate.month;
      let month = monthNo <= 11 ? monthNo + 1 : 0;
      let date = {
        year: this.nowDate.year,
        month: month,
        week: new Date(
          this.nowDate.year,
          this.nowDate.month,
          e.target.innerText
        ).getDay(),
        day: Number(e.target.innerText)
      };
      this.$emit('click-event', date);
    },
    dayEvent(day) {
      let dayEvent = this.importEvents.find(
        item => item.month === this.nowDate.month + 1 && item.date === day
      );
      return dayEvent;
    }
  }
};
</script>

<style lang="scss" scoped></style>
