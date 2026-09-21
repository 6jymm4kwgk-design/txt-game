System.register("chunks:///_virtual/InkGameApp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, view, ResolutionPolicy, Node, UITransform, Sprite, Graphics, Color, Label, UIOpacity, LabelOutline, resources, SpriteFrame, sys, Tween, tween, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      Node = module.Node;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Graphics = module.Graphics;
      Color = module.Color;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      LabelOutline = module.LabelOutline;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      sys = module.sys;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "21fffUsLVNCLpRvAew5yzkd", "InkGameApp", undefined);
      var ccclass = _decorator.ccclass;
      var DESIGN_WIDTH = 1152;
      var DESIGN_HEIGHT = 2048;
      var PAGE_ASSET = {
        start: '01_启动页',
        home: '02_洞府主界面',
        training: '03_历练页',
        skills: '04_功法页',
        bag: '05_背包页',
        battle: '06_战斗页',
        result: '07_战斗结算页',
        chapters: '08_章节选择页',
        quests: '09_任务页',
        achievements: '10_成就页',
        character: '11_角色详情页',
        market: '12_坊市页',
        recharge: '13_仙缘阁_充值月卡页',
        gifts: '14_礼包_兑换码页',
        alchemy: '15_丹器阁_炼器炼丹页',
        dungeon: '16_秘境_组队副本页',
        pets: '17_灵兽阁_灵宠坐骑页',
        sect: '18_宗门页',
        mail: '19_飞鸽传书_邮件页',
        ranking: '20_风云榜_排行榜页',
        friends: '21_道友_好友页',
        events: '22_活动_签到页',
        bestiary: '23_山海图鉴_收集页',
        support: '24_问仙堂_客服反馈页',
        settings: '25_设置页',
        components: '26_弹窗组件规范页'
      };
      var PAGE_ORDER = Object.keys(PAGE_ASSET);
      var NAV = [{
        x: 0,
        y: 1840,
        width: 288,
        height: 208,
        target: 'home'
      }, {
        x: 288,
        y: 1840,
        width: 288,
        height: 208,
        target: 'training'
      }, {
        x: 576,
        y: 1840,
        width: 288,
        height: 208,
        target: 'skills'
      }, {
        x: 864,
        y: 1840,
        width: 288,
        height: 208,
        target: 'bag'
      }];
      var BACK_TO_HOME = {
        x: 0,
        y: 105,
        width: 150,
        height: 160,
        target: 'home'
      };
      var HOTSPOTS = {
        start: [{
          x: 275,
          y: 980,
          width: 600,
          height: 145,
          action: 'new-game'
        }, {
          x: 275,
          y: 1125,
          width: 600,
          height: 145,
          target: 'home'
        }, {
          x: 275,
          y: 1270,
          width: 600,
          height: 145,
          target: 'settings'
        }],
        home: [{
          x: 120,
          y: 95,
          width: 330,
          height: 145,
          target: 'character'
        }, {
          x: 450,
          y: 95,
          width: 310,
          height: 145,
          target: 'market'
        }, {
          x: 760,
          y: 95,
          width: 350,
          height: 145,
          target: 'events'
        }, {
          x: 190,
          y: 370,
          width: 750,
          height: 780,
          target: 'chapters'
        }, {
          x: 330,
          y: 1240,
          width: 460,
          height: 130,
          action: 'cultivate'
        }, {
          x: 330,
          y: 1390,
          width: 460,
          height: 130,
          target: 'training'
        }, {
          x: 330,
          y: 1540,
          width: 460,
          height: 130,
          target: 'skills'
        }].concat(NAV),
        training: [BACK_TO_HOME, {
          x: 655,
          y: 760,
          width: 245,
          height: 115,
          target: 'battle'
        }, {
          x: 655,
          y: 1120,
          width: 245,
          height: 115,
          target: 'battle'
        }, {
          x: 655,
          y: 1475,
          width: 245,
          height: 115,
          target: 'battle'
        }].concat(NAV),
        skills: [BACK_TO_HOME, {
          x: 690,
          y: 580,
          width: 230,
          height: 105,
          action: 'learn-skill'
        }, {
          x: 690,
          y: 880,
          width: 230,
          height: 105,
          action: 'learn-skill'
        }, {
          x: 690,
          y: 1180,
          width: 230,
          height: 105,
          action: 'learn-skill'
        }].concat(NAV),
        bag: [{
          x: 155,
          y: 485,
          width: 205,
          height: 250,
          action: 'use-pill'
        }].concat(NAV),
        battle: [{
          x: 55,
          y: 1710,
          width: 1040,
          height: 245,
          action: 'attack'
        }],
        result: [BACK_TO_HOME, {
          x: 150,
          y: 1530,
          width: 385,
          height: 145,
          target: 'battle'
        }, {
          x: 570,
          y: 1530,
          width: 405,
          height: 145,
          target: 'home'
        }].concat(NAV),
        chapters: [BACK_TO_HOME, {
          x: 770,
          y: 925,
          width: 220,
          height: 100,
          action: 'continue-chapter'
        }].concat(NAV),
        quests: [{
          x: 690,
          y: 805,
          width: 250,
          height: 115,
          action: 'claim-quest'
        }].concat(NAV),
        achievements: [{
          x: 735,
          y: 615,
          width: 230,
          height: 115,
          action: 'claim-achievement'
        }].concat(NAV),
        market: [BACK_TO_HOME, {
          x: 600,
          y: 770,
          width: 330,
          height: 110,
          action: 'buy-pill'
        }].concat(NAV),
        gifts: [{
          x: 790,
          y: 940,
          width: 205,
          height: 100,
          action: 'claim-gift'
        }].concat(NAV),
        alchemy: [BACK_TO_HOME, {
          x: 185,
          y: 1160,
          width: 370,
          height: 115,
          action: 'craft-pill'
        }].concat(NAV),
        dungeon: [BACK_TO_HOME, {
          x: 600,
          y: 1680,
          width: 390,
          height: 120,
          action: 'start-dungeon'
        }].concat(NAV),
        pets: [{
          x: 820,
          y: 1050,
          width: 220,
          height: 110,
          action: 'train-pet'
        }].concat(NAV),
        sect: [{
          x: 110,
          y: 1000,
          width: 450,
          height: 300,
          action: 'sect-task'
        }].concat(NAV),
        mail: [{
          x: 100,
          y: 1430,
          width: 930,
          height: 350,
          action: 'claim-mail'
        }].concat(NAV),
        events: [{
          x: 465,
          y: 995,
          width: 235,
          height: 110,
          action: 'daily-sign'
        }].concat(NAV),
        bestiary: [{
          x: 100,
          y: 515,
          width: 950,
          height: 1200,
          action: 'collect-bestiary'
        }].concat(NAV),
        settings: [{
          x: 720,
          y: 450,
          width: 230,
          height: 105,
          action: 'toggle-music'
        }, {
          x: 720,
          y: 590,
          width: 230,
          height: 105,
          action: 'toggle-sfx'
        }, {
          x: 720,
          y: 865,
          width: 230,
          height: 105,
          action: 'toggle-auto'
        }].concat(NAV)
      };
      var InkGameApp = exports('InkGameApp', (_dec = ccclass('InkGameApp'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InkGameApp, _Component);
        function InkGameApp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.background = null;
          _this.hotspotRoot = null;
          _this.toastLabel = null;
          _this.toastOpacity = null;
          _this.statusBar = null;
          _this.statusLabel = null;
          _this.requestSerial = 0;
          _this.gameState = _this.defaultState();
          _this.currentPage = 'start';
          return _this;
        }
        var _proto = InkGameApp.prototype;
        _proto.onLoad = function onLoad() {
          view.setDesignResolutionSize(DESIGN_WIDTH, DESIGN_HEIGHT, ResolutionPolicy.FIXED_HEIGHT);
          this.loadGame();
          this.createStage();
          this.showPage('start');
        };
        _proto.createStage = function createStage() {
          var backgroundNode = new Node('UIBackground');
          var transform = backgroundNode.addComponent(UITransform);
          transform.setContentSize(DESIGN_WIDTH, DESIGN_HEIGHT);
          this.background = backgroundNode.addComponent(Sprite);
          this.background.sizeMode = Sprite.SizeMode.CUSTOM;
          this.node.addChild(backgroundNode);
          backgroundNode.setPosition(0, 0, 0);
          this.statusBar = new Node('LiveStatusBar');
          this.statusBar.addComponent(UITransform).setContentSize(DESIGN_WIDTH, 94);
          var statusBackground = this.statusBar.addComponent(Graphics);
          statusBackground.fillColor = new Color(249, 244, 226, 242);
          statusBackground.rect(-DESIGN_WIDTH / 2, -47, DESIGN_WIDTH, 94);
          statusBackground.fill();
          statusBackground.strokeColor = new Color(143, 113, 58, 180);
          statusBackground.lineWidth = 2;
          statusBackground.moveTo(-DESIGN_WIDTH / 2, -46);
          statusBackground.lineTo(DESIGN_WIDTH / 2, -46);
          statusBackground.stroke();
          this.statusLabel = this.statusBar.addComponent(Label);
          this.statusLabel.fontSize = 35;
          this.statusLabel.lineHeight = 45;
          this.statusLabel.color = new Color(31, 27, 22, 255);
          this.statusLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          this.statusLabel.verticalAlign = Label.VerticalAlign.CENTER;
          this.statusLabel.overflow = Label.Overflow.SHRINK;
          this.node.addChild(this.statusBar);
          this.statusBar.setPosition(0, DESIGN_HEIGHT / 2 - 52, 0);
          this.hotspotRoot = new Node('InteractionHotspots');
          this.hotspotRoot.addComponent(UITransform).setContentSize(DESIGN_WIDTH, DESIGN_HEIGHT);
          this.node.addChild(this.hotspotRoot);
          this.hotspotRoot.setPosition(0, 0, 0);
          var toastNode = new Node('GameToast');
          toastNode.addComponent(UITransform).setContentSize(920, 110);
          this.toastOpacity = toastNode.addComponent(UIOpacity);
          this.toastOpacity.opacity = 0;
          this.toastLabel = toastNode.addComponent(Label);
          this.toastLabel.fontSize = 42;
          this.toastLabel.lineHeight = 54;
          this.toastLabel.color = new Color(255, 247, 217, 255);
          this.toastLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
          this.toastLabel.verticalAlign = Label.VerticalAlign.CENTER;
          this.toastLabel.overflow = Label.Overflow.SHRINK;
          var outline = toastNode.addComponent(LabelOutline);
          outline.color = new Color(45, 30, 22, 255);
          outline.width = 6;
          this.node.addChild(toastNode);
          toastNode.setPosition(0, -745, 0);
        };
        _proto.showPage = function showPage(page) {
          var _this2 = this;
          this.currentPage = page;
          this.updateStatusBar();
          var serial = ++this.requestSerial;
          var path = "ui/" + PAGE_ASSET[page] + "/spriteFrame";
          resources.load(path, SpriteFrame, function (error, spriteFrame) {
            if (serial !== _this2.requestSerial) return;
            if (error || !spriteFrame || !_this2.background) {
              console.error("[InkGameApp] \u65E0\u6CD5\u52A0\u8F7D\u9875\u9762 " + page + ": " + path, error);
              return;
            }
            _this2.background.spriteFrame = spriteFrame;
            _this2.rebuildHotspots(page);
          });
        };
        _proto.rebuildHotspots = function rebuildHotspots(page) {
          var _HOTSPOTS$page,
            _this3 = this;
          if (!this.hotspotRoot) return;
          this.hotspotRoot.removeAllChildren();
          var pageHotspots = [].concat((_HOTSPOTS$page = HOTSPOTS[page]) != null ? _HOTSPOTS$page : [BACK_TO_HOME].concat(NAV), [
          // 原型检查入口：点击左上角印章区域可依次查看全部 26 套界面。
          {
            x: 0,
            y: 0,
            width: 125,
            height: 115,
            action: 'next-page'
          }]);
          var _loop = function _loop() {
            var hotspot = _step.value;
            var node = new Node(hotspot.target ? "To_" + hotspot.target : "Action_" + hotspot.action);
            node.addComponent(UITransform).setContentSize(hotspot.width, hotspot.height);
            node.setPosition(hotspot.x + hotspot.width / 2 - DESIGN_WIDTH / 2, DESIGN_HEIGHT / 2 - hotspot.y - hotspot.height / 2, 0);
            node.on(Node.EventType.TOUCH_END, function (_event) {
              return _this3.activateHotspot(hotspot);
            }, _this3);
            _this3.hotspotRoot.addChild(node);
          };
          for (var _iterator = _createForOfIteratorHelperLoose(pageHotspots), _step; !(_step = _iterator()).done;) {
            _loop();
          }
        };
        _proto.activateHotspot = function activateHotspot(hotspot) {
          if (hotspot.action) {
            this.performAction(hotspot.action);
            return;
          }
          if (hotspot.target) this.showPage(hotspot.target);
        };
        _proto.performAction = function performAction(action) {
          switch (action) {
            case 'new-game':
              this.gameState = this.defaultState();
              this.saveGame();
              this.showPage('home');
              this.showToast('踏入仙途，新的修行开始了');
              break;
            case 'cultivate':
              this.gameState.cultivation += 200;
              this.saveGame();
              this.showToast("\u95ED\u5173\u5B8C\u6210\uFF1A\u4FEE\u4E3A +200\uFF08\u5F53\u524D " + this.gameState.cultivation + "\uFF09");
              break;
            case 'learn-skill':
              if (this.gameState.cultivation < 100) {
                this.showToast('修为不足，无法继续参悟');
                return;
              }
              this.gameState.cultivation -= 100;
              this.gameState.skillLevel += 1;
              this.saveGame();
              this.showToast("\u529F\u6CD5\u53C2\u609F\u6210\u529F\uFF1A\u63D0\u5347\u81F3\u7B2C " + this.gameState.skillLevel + " \u5C42");
              break;
            case 'use-pill':
              if (this.gameState.pills <= 0) {
                this.showToast('聚灵丹已经用完');
                return;
              }
              this.gameState.pills -= 1;
              this.gameState.cultivation += 500;
              this.saveGame();
              this.showToast("\u4F7F\u7528\u805A\u7075\u4E39\uFF1A\u4FEE\u4E3A +500\uFF0C\u5269\u4F59 " + this.gameState.pills + " \u679A");
              break;
            case 'attack':
              {
                var damage = 220 + this.gameState.skillLevel * 45;
                this.gameState.enemyHp = Math.max(0, this.gameState.enemyHp - damage);
                if (this.gameState.enemyHp === 0) {
                  this.gameState.cultivation += 320;
                  this.gameState.spiritStones += 45;
                  this.gameState.enemyHp = 1200;
                  this.saveGame();
                  this.showPage('result');
                  this.showToast('战斗胜利：修为 +320，灵石 +45');
                } else {
                  this.saveGame();
                  this.showToast("\u9752\u72FC\u5996\u53D7\u5230 " + damage + " \u70B9\u4F24\u5BB3\uFF0C\u5269\u4F59\u6C14\u8840 " + this.gameState.enemyHp);
                }
                break;
              }
            case 'continue-chapter':
              this.gameState.chapter += 1;
              this.gameState.cultivation += 120;
              this.saveGame();
              this.showPage('battle');
              this.showToast("\u8FDB\u5165\u7B2C " + this.gameState.chapter + " \u7AE0\uFF1A\u4FEE\u4E3A +120");
              break;
            case 'claim-quest':
              if (this.gameState.questClaimed) {
                this.showToast('这项任务奖励已经领取');
                return;
              }
              this.gameState.questClaimed = true;
              this.gameState.spiritStones += 100;
              this.gameState.cultivation += 500;
              this.saveGame();
              this.showToast('任务奖励：灵石 +100，修为 +500');
              break;
            case 'claim-achievement':
              if (this.gameState.achievementClaimed) {
                this.showToast('成就奖励已经领取');
                return;
              }
              this.gameState.achievementClaimed = true;
              this.gameState.spiritStones += 50;
              this.saveGame();
              this.showToast('成就达成：灵石 +50');
              break;
            case 'buy-pill':
              if (this.gameState.spiritStones < 80) {
                this.showToast('灵石不足，需要 80 灵石');
                return;
              }
              this.gameState.spiritStones -= 80;
              this.gameState.pills += 1;
              this.saveGame();
              this.showToast("\u8D2D\u5F97\u805A\u7075\u4E39\uFF0C\u5269\u4F59\u7075\u77F3 " + this.gameState.spiritStones);
              break;
            case 'claim-gift':
              if (this.gameState.giftClaimed) {
                this.showToast('新手礼包已经领取');
                return;
              }
              this.gameState.giftClaimed = true;
              this.gameState.spiritStones += 100;
              this.gameState.pills += 2;
              this.gameState.medicine += 5;
              this.saveGame();
              this.showToast('礼包：灵石 +100，聚灵丹 +2，疗伤药 +5');
              break;
            case 'craft-pill':
              if (this.gameState.herbs < 1) {
                this.showToast('百年灵芝不足，无法炼丹');
                return;
              }
              this.gameState.herbs -= 1;
              this.gameState.pills += 1;
              this.saveGame();
              this.showToast('炼丹成功：聚灵丹 +1');
              break;
            case 'start-dungeon':
              this.gameState.enemyHp = 1600;
              this.saveGame();
              this.showPage('battle');
              this.showToast('秘境开启：青云秘境');
              break;
            case 'train-pet':
              if (this.gameState.spiritStones < 50) {
                this.showToast('培养灵宠需要 50 灵石');
                return;
              }
              this.gameState.spiritStones -= 50;
              this.gameState.petLevel += 1;
              this.saveGame();
              this.showToast("\u9752\u4E91\u9E64\u63D0\u5347\u81F3 Lv." + this.gameState.petLevel);
              break;
            case 'sect-task':
              this.gameState.sectContribution += 50;
              this.gameState.cultivation += 100;
              this.saveGame();
              this.showToast("\u5B8C\u6210\u5B97\u95E8\u4EFB\u52A1\uFF1A\u8D21\u732E " + this.gameState.sectContribution + "\uFF0C\u4FEE\u4E3A +100");
              break;
            case 'claim-mail':
              if (this.gameState.mailClaimed) {
                this.showToast('邮件附件已经领取');
                return;
              }
              this.gameState.mailClaimed = true;
              this.gameState.spiritStones += 200;
              this.gameState.pills += 2;
              this.saveGame();
              this.showToast('维护补偿：灵石 +200，聚灵丹 +2');
              break;
            case 'daily-sign':
              if (this.gameState.lastSignDate === new Date().toDateString()) {
                this.showToast('今日已经签到，明日再来');
                return;
              }
              this.gameState.signedDays += 1;
              this.gameState.lastSignDate = new Date().toDateString();
              this.gameState.spiritStones += 50;
              this.saveGame();
              this.showToast("\u7B7E\u5230\u6210\u529F\uFF1A\u7B2C " + this.gameState.signedDays + " \u5929\uFF0C\u7075\u77F3 +50");
              break;
            case 'collect-bestiary':
              if (this.gameState.bestiaryCount >= 29) {
                this.showToast('当前可收集图鉴已经全部解锁');
                return;
              }
              this.gameState.bestiaryCount += 1;
              this.gameState.cultivation += 50;
              this.saveGame();
              this.showToast("\u56FE\u9274\u6536\u96C6 " + this.gameState.bestiaryCount + "/120\uFF0C\u4FEE\u4E3A +50");
              break;
            case 'toggle-music':
              this.gameState.musicEnabled = !this.gameState.musicEnabled;
              this.saveGame();
              this.showToast("\u80CC\u666F\u97F3\u4E50\uFF1A" + (this.gameState.musicEnabled ? '开' : '关'));
              break;
            case 'toggle-sfx':
              this.gameState.sfxEnabled = !this.gameState.sfxEnabled;
              this.saveGame();
              this.showToast("\u97F3\u6548\uFF1A" + (this.gameState.sfxEnabled ? '开' : '关'));
              break;
            case 'toggle-auto':
              this.gameState.autoCultivate = !this.gameState.autoCultivate;
              this.saveGame();
              this.showToast("\u81EA\u52A8\u4FEE\u70BC\uFF1A" + (this.gameState.autoCultivate ? '开' : '关'));
              break;
            case 'next-page':
              {
                var index = PAGE_ORDER.indexOf(this.currentPage);
                this.showPage(PAGE_ORDER[(index + 1) % PAGE_ORDER.length]);
                break;
              }
          }
        };
        _proto.defaultState = function defaultState() {
          return {
            cultivation: 1200,
            spiritStones: 328,
            lifespan: 120,
            skillLevel: 3,
            pills: 3,
            enemyHp: 1200,
            herbs: 3,
            medicine: 5,
            chapter: 2,
            petLevel: 12,
            sectContribution: 0,
            questClaimed: false,
            achievementClaimed: false,
            giftClaimed: false,
            mailClaimed: false,
            signedDays: 5,
            lastSignDate: '',
            bestiaryCount: 28,
            musicEnabled: true,
            sfxEnabled: true,
            autoCultivate: false
          };
        };
        _proto.loadGame = function loadGame() {
          try {
            var raw = sys.localStorage.getItem('ink-cultivation-save-v1');
            if (raw) this.gameState = _extends({}, this.defaultState(), JSON.parse(raw));
          } catch (error) {
            console.warn('[InkGameApp] 存档读取失败，使用默认存档', error);
            this.gameState = this.defaultState();
          }
        };
        _proto.saveGame = function saveGame() {
          sys.localStorage.setItem('ink-cultivation-save-v1', JSON.stringify(this.gameState));
          this.updateStatusBar();
        };
        _proto.updateStatusBar = function updateStatusBar() {
          if (!this.statusBar || !this.statusLabel) return;
          this.statusBar.active = this.currentPage !== 'start' && this.currentPage !== 'components';
          this.statusLabel.string = "\u5883\u754C\uFF1A\u7B51\u57FA\u521D\u671F\u3000\u4FEE\u4E3A\uFF1A" + this.gameState.cultivation + "/5000\u3000" + ("\u7075\u77F3\uFF1A" + this.gameState.spiritStones + "\u3000\u5BFF\u5143\uFF1A" + this.gameState.lifespan);
        };
        _proto.showToast = function showToast(message) {
          if (!this.toastLabel || !this.toastOpacity) return;
          this.toastLabel.string = message;
          Tween.stopAllByTarget(this.toastOpacity);
          this.toastOpacity.opacity = 255;
          tween(this.toastOpacity).delay(1.5).to(0.35, {
            opacity: 0
          }).start();
        };
        return InkGameApp;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./InkGameApp.ts', './PlayerData.ts.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PlayerData.ts.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "3da801CrlNPBo+YGLKDw+3Y", "PlayerData.ts", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NewComponent = exports('NewComponent', (_dec = ccclass('NewComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NewComponent, _Component);
        function NewComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = NewComponent.prototype;
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return NewComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});