# 自动签到定时任务
当前支持的平台有:
- 通义万相
- 文心一格

##  注意事项
1. 需要先定义好相应的环境变量, 脚本才能正常运行. 添加私有环境变量的路径在: [settings/secrets/actions/new](../../settings/secrets/actions/new).  
2. 私有环境变量的名称, 见 [.githu/workflows/sign.yml](./.github/workflows/sign.yml#L22), 私有环境变量的值, 需要自行从对应平台的签到接口抓包.  