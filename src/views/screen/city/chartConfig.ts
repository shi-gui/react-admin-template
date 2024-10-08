/*
 * @Author: zhangshigui
 * @Date: 2024-05-27 11:11:43
 * @LastEditors: zhangshigui
 * @LastEditTime: 2024-05-29 14:16:28
 * @Description: 智慧城市大屏echarts配置
 *
 */

import { type ECOption } from '@/components/chart';
import * as echarts from 'echarts/core';

export const IndustryRankOption: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0%',
    top: '20px',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1	)',
          width: 1,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      barWidth: '35%',
      itemStyle: {
        color: '#2f89cf',
        opacity: 1,
        borderRadius: 5
      }
    }
  ]
};

export const RegionalSalesOption: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: '0%',
    top: '20px',
    right: '0%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1	)',
          width: 1,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [1500, 1200, 600, 200, 300, 300, 900],
      barWidth: '35%',
      itemStyle: {
        color: '#27d08a',
        opacity: 1,
        borderRadius: 5
      }
    }
  ]
};

export const AgeDistributionOption: ECOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    position: function (p) {
      //其中p为当前鼠标的位置
      return [p[0] + 10, p[1] - 10];
    }
  },
  legend: {
    top: '80%',
    itemWidth: 10,
    itemHeight: 10,
    data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12'
    }
  },
  series: [
    {
      type: 'pie',
      name: '年龄分布',
      center: ['50%', '42%'],
      radius: ['40%', '60%'],
      color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
      label: { show: false },
      labelLine: { show: false },
      data: [
        { value: 1, name: '0岁以下' },
        { value: 4, name: '20-29岁' },
        { value: 2, name: '30-39岁' },
        { value: 2, name: '40-49岁' },
        { value: 1, name: '50岁以上' }
      ]
    }
  ]
};

export const EquipmentUseTimeOption: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#dddc6b'
      }
    }
  },
  legend: {
    top: '0%',
    data: ['安卓', 'IOS'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12'
    }
  },
  grid: {
    left: '10',
    top: '30',
    right: '10',
    bottom: '10',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      },
      data: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24'
      ]
    },
    {
      axisPointer: { show: false },
      axisLine: { show: false },
      position: 'bottom',
      offset: 20
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 12
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }
  ],
  series: [
    {
      name: '安卓',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        color: '#0184d5',
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(1, 132, 213, 0.4)'
            },
            {
              offset: 0.8,
              color: 'rgba(1, 132, 213, 0.1)'
            }
          ],
          false
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
      itemStyle: {
        color: '#0184d5',
        borderColor: 'rgba(221, 220, 107, .1)',
        borderWidth: 12
      },
      data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]
    },
    {
      name: 'IOS',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        color: '#00d887',
        width: 2
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(0, 216, 135, 0.4)'
            },
            {
              offset: 0.8,
              color: 'rgba(0, 216, 135, 0.1)'
            }
          ],
          false
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
      itemStyle: {
        color: '#00d887',
        borderColor: 'rgba(221, 220, 107, .1)',
        borderWidth: 12
      },
      data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
    }
  ]
};

export const EquipmentUseAreaOption: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0%',
    top: '20px',
    right: '0%',
    bottom: '2%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,.1	)',
          width: 1,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
      barWidth: '35%',
      itemStyle: {
        color: '#2f89cf',
        opacity: 1,
        borderRadius: 5
      }
    }
  ]
};

export const CityPeopleOption: ECOption = {
  color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
  tooltip: {
    show: true,
    formatter: '{a} : {c} '
  },
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 12,
    bottom: '3%',
    data: ['浙江', '上海', '广东', '北京', '深圳'],
    textStyle: {
      color: 'rgba(255,255,255,.6)'
    }
  },
  series: [
    {
      name: '浙江',
      clockwise: false,
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['59%', '70%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 80,
          name: '01'
        },
        {
          value: 20,
          name: 'invisible',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(255,255,255,.05)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ]
    },
    {
      name: '上海',
      clockwise: false,
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['49%', '60%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 70,
          name: '02'
        },
        {
          value: 30,
          name: 'invisible',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(255,255,255,.05)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ]
    },
    {
      name: '广东',
      clockwise: false,
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['39%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 65,
          name: '03'
        },
        {
          value: 35,
          name: 'invisible',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(255,255,255,.05)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ]
    },
    {
      name: '北京',
      clockwise: false,
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['29%', '40%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 60,
          name: '04'
        },
        {
          value: 40,
          name: 'invisible',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(255,255,255,.05)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ]
    },
    {
      name: '深圳',
      clockwise: false,
      type: 'pie',
      center: ['50%', '42%'],
      radius: ['20%', '30%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: 50,
          name: '05'
        },
        {
          value: 50,
          name: 'invisible',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            color: 'rgba(255,255,255,.05)'
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }
      ]
    }
  ]
};

export const MapOption = (): ECOption => {
  const dataList = [
    { name: '北京市', value: 69 },
    { name: '天津市', value: 12 },
    { name: '河北省', value: 101 },
    { name: '山西省', value: 86 },
    { name: '内蒙古自治区', value: 14 },
    { name: '辽宁省', value: 15 },
    { name: '吉林省', value: 24 },
    { name: '黑龙江省', value: 32 },
    { name: '上海市', value: 18 },
    { name: '江苏省', value: 18 },
    { name: '浙江省', value: 19 },
    { name: '安徽省', value: 21 },
    { name: '福建省', value: 90 },
    { name: '江西省', value: 68 },
    { name: '山东省', value: 87 },
    { name: '河南省', value: 14 },
    { name: '湖北省', value: 56 },
    { name: '湖南省', value: 54 },
    { name: '广东省', value: 132 },
    { name: '广西壮族自治区', value: 243 },
    { name: '海南省', value: 298 },
    { name: '重庆市', value: 23 },
    { name: '四川省', value: 11 },
    { name: '贵州省', value: 55 },
    { name: '云南省', value: 44 },
    { name: '西藏自治区', value: 27 },
    { name: '陕西省', value: 76 },
    { name: '甘肃省', value: 48 },
    { name: '青海省', value: 418 },
    { name: '宁夏回族自治区', value: 11 },
    { name: '新疆维吾尔自治区', value: 13 },
    { name: '台湾省', value: 131 },
    { name: '香港特别行政区', value: 34 },
    { name: '澳门特别行政区', value: 124 }
  ];

  return {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: (params: any) => {
        const { data = {} } = params;
        const { value = 0 } = data;
        return `${params.name}<br/>数量: ${value}`;
      }
    },
    series: {
      data: dataList,
      type: 'map',
      map: 'china',
      roam: true, // 地图拖动、缩放
      top: '10%', // 距离顶部距离
      zoom: 1.2, // 当前视角的缩放比例
      scaleLimit: {
        max: 2,
        min: 1 // 设置默认缩放效果
      },
      label: {
        show: true, // 默认状态下，显示省市名称
        position: [1, 100], // 相对的百分比
        fontSize: 12,
        offset: [2, 0],
        align: 'left',
        color: '#e9e7dd'
      },
      itemStyle: {
        areaColor: '#1a88b9', // 地图图形颜色 #fff
        borderColor: '#a0d4e7', // 地图边框线色
        borderWidth: 1 // 地图边框线宽
      },
      // 高亮状态下的多边形和文本样式，鼠标悬浮在地图块上的效果
      emphasis: {
        itemStyle: {
          areaColor: '#ccc',
          borderColor: '#4aacd9'
        }
      }
    }
  };
};
