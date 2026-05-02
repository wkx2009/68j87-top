---
title: "iw-android：为 Android 准备的静态编译 iw 无线工具"
published: 2026-05-02
description: "一个轻量级 Android 无线网络调试工具项目"
image: ''
tags: [tools]
category: ''
draft: false 
lang: ''
---

## 📡 项目简介

`iw-android` 是一份为 Android 设备静态编译的 `iw` 无线配置工具，开箱即用，无需任何依赖。

## 🎯 动机

在 Android 设备上调试 Wi-Fi 时，系统自带工具极其有限。`iw` 是 Linux 下新一代无线网卡配置工具，但官方未提供 Android 可用的二进制文件。本仓库直接提供已编译好的静态二进制，支持 ARM64 与 ARM32，ADB 推送即可使用。

## ⚙️ 核心功能

- **查看无线设备**：`iw dev`
- **扫描 Wi-Fi**：`iw dev wlan0 scan`
- **查看网卡信息**：`iw dev wlan0 info`
- **高级配置**：信道、功率、模式等参数调整

## 📦 预编译二进制

| 架构 | 文件名 | 适用设备 |
|---|---|---|
| ARM64(arm64-v8a) | `iw-arm64` | 现代 Android 手机、平板 |
| ARMHF(armeabi-v7a) | `iw-armhf` | 旧款 Android 设备、树莓派 |

````bash
adb push iw-arm64 /data/local/tmp/iw
adb shell chmod +x /data/local/tmp/iw
adb shell /data/local/tmp/iw dev
````

## 🔧 自行编译

```bash
git clone https://github.com/wkx2009/iw-android.git
cd iw-android
chmod +x build.sh
./build.sh
```

## 📁 项目结构

· **build.sh** - 自动编译脚本
· **iw_arm64** - ARM64(arm64-v8a) 静态二进制（常用）
· **iw_armhf** - ARM32(armeabi-v7a) 静态二进制

## ⚖️ 许可证

· 预编译二进制：ISC License（遵循上游项目）
· 脚本和文档：MIT 协议

## 🙏 致谢

感谢 iw 原作者及 Linux 无线社区的贡献。本项目编译脚本由 AI 生成，有问题请提 Issue。

仓库地址：[iw-android](github.com/wkx2009/iw-android)
