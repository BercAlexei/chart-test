<template>
  <section class="analitics">
    <Title title="Аналитиика" />
    <div class="analitics__content">
      <Title title="Аналитика по визитам" class="title-chart" />
      <div class="chart" ref="chartdiv"></div>
    </div>
  </section>
</template>

<script>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { mapGetters } from "vuex";
import Title from "../components/TitleComponet.vue";

export default {
  components: {
    Title,
  },
  computed: {
    ...mapGetters(["getDataChart"]),
  },
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: `[bold]Визиты: [/]{valueY},\n[bold]Дата: [/]{valueX.formatDate()}`,
        }),
      })
    );

    series.fills.template.setAll({
      fillOpacity: 0.1,
      visible: true,
    });

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
        }),
      });
    });

    series.data.setAll(this.getDataChart);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));
  },
};
</script>

<style lang="scss" csoped>
.analitics {
  text-align: center;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
  }
}

.chart {
  position: relative;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: 100%;
  height: 500px;
  margin-top: 20px;
}
</style>
