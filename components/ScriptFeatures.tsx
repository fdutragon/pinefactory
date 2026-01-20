'use client'

import { motion } from 'framer-motion'
import { Code, TrendingUp, Shield, Zap, Settings, BarChart3 } from 'lucide-react'
import { useState } from 'react'

const codeSnippets = [
  {
    id: 'entry-signal',
    title: 'Extreme Reversion Entry Signal',
    description: 'Advanced entry logic combining Bollinger Bands extreme levels with RSI oversold/overbought conditions for high-probability reversal trades.',
    code: `check_entry_signal() =>
    price_below_extreme = low <= bb_lower_ex
    price_above_extreme = high >= bb_upper_ex
    
    rsi_buy_cond  = rsi_current < rsi_oversold
    rsi_sell_cond = rsi_current > rsi_overbought
    
    buy_signal  = price_below_extreme and rsi_buy_cond
    sell_signal = price_above_extreme and rsi_sell_cond
    
    buy_signal ? 1 : sell_signal ? -1 : 0`,
    icon: TrendingUp,
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'trailing-stop',
    title: 'Dynamic Trailing Stop',
    description: 'Protect your profits with an intelligent trailing stop that activates after reaching a profit threshold and follows price movement.',
    code: `use_trailing_stop = input.bool(true, "Use Trailing Stop")
ts_percent = input.float(0.4, "Trailing Stop - Distance (%)")
ts_activation_pct = input.float(0.2, "Activation Trigger (%)")

exit_trail_dist = use_trailing_stop ? 
    percent_to_ticks(entry_price, ts_percent) : na
exit_trail_act = use_trailing_stop ? 
    percent_to_ticks(entry_price, ts_activation_pct) : na

strategy.exit("BUY EXIT", "BUY", 
    profit=exit_profit, 
    loss=exit_loss, 
    trail_points=exit_trail_dist, 
    trail_offset=exit_trail_act)`,
    icon: Shield,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'risk-management',
    title: 'Advanced Risk Management',
    description: 'Dynamic position sizing based on equity, configurable risk percentage, and automatic win rate monitoring with pause functionality.',
    code: `risk_percentage = input.float(20, 
    "Allocation per Trade (% of equity)")

bank_value = compound_basis_opt == "Equity" ? 
    strategy.equity : 
    strategy.initial_capital + strategy.netprofit

calc_qty_from_base(percent, base) =>
    alloc_value = base * (percent / 100.0)
    math.max(0.0, alloc_value / close)

qty_calc = round_qty(
    calc_qty_from_base(risk_percentage, bank_value), 
    lot_step)`,
    icon: BarChart3,
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 'simulation-mode',
    title: 'Simulation Mode After Loss',
    description: 'Optional simulation mode that activates after a loss, testing signals before risking real capital again.',
    code: `enable_simulation_after_loss = input.bool(false, 
    "Enable Simulation Mode after Loss")

if last_trade_pnl < 0 and enable_simulation_after_loss
    simulation_mode := true
    log.warning("📊 SIMULATION MODE ACTIVATED")

if simulation_mode and signal != 0
    would_be_long = signal == 1
    tp_level = close + (close * take_profit_pct / 100)
    sl_level = close - (close * stop_loss_pct / 100)
    
    if would_be_long
        simulated_result := close[1] >= tp_level ? 1 : 
                           close[1] <= sl_level ? -1 : 0
    else
        simulated_result := close[1] <= tp_level ? 1 : 
                           close[1] >= sl_level ? -1 : 0
    
    if simulated_result > 0
        simulation_mode := false`,
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'daily-reset',
    title: 'Daily Reset & Win Rate Protection',
    description: 'Automatic daily reset with configurable timezone, win rate monitoring, and automatic pause when performance drops below threshold.',
    code: `reset_hour = input.int(21, "Reset Hour (UTC-3)")
reset_minute = input.int(0, "Reset Minute")

time_utc3 = time(timeframe.period, "", "Etc/GMT+3")
should_reset = is_time_to_reset and 
    current_date_only != last_reset_date

if should_reset
    trades_today := 0
    wins_today := 0
    win_rate_today := 0.0
    paused_today_winrate := false

if trades_today >= min_trades_daily and 
   win_rate_today < min_win_rate_daily
    paused_today_winrate := true`,
    icon: Settings,
    color: 'from-indigo-400 to-purple-500',
  },
  {
    id: 'binance-integration',
    title: 'Binance Integration Ready',
    description: 'Built-in Binance alert messages with proper payload formatting for seamless integration with trading bots.',
    code: `build_msg_entry(side, amount) =>
    symbol = syminfo.ticker
    amount_str = str.tostring(math.round(amount, 2))
    '{"symbol":"' + symbol + '","side":"' + side + 
     '","positionSide":"BOTH","investmentType":' +
     '"notional_value","amount":"' + amount_str + 
     '","price":"market","reduceOnly":false,...}'

strategy.entry("BUY", strategy.long, 
    qty=qty_calc, 
    alert_message=entry_payload)`,
    icon: Code,
    color: 'from-red-400 to-pink-500',
  },
]

export default function ScriptFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(codeSnippets[0].id)

  const selected = codeSnippets.find(f => f.id === selectedFeature) || codeSnippets[0]

  return (
    <section id="script-features" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-transparent">
            Advanced Features Explained
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features that make this script professional-grade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Feature List */}
          <div className="space-y-4 w-full min-w-0">
            {codeSnippets.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`w-full text-left p-5 rounded-md transition-all duration-200 ${
                    selectedFeature === feature.id
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-700 p-2.5 flex-shrink-0 ${
                      selectedFeature === feature.id ? 'bg-gray-200 dark:bg-gray-600' : ''
                    }`}>
                      <Icon className={`w-full h-full ${selectedFeature === feature.id ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${selectedFeature === feature.id ? 'text-white' : ''}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        selectedFeature === feature.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Code Preview */}
          <motion.div
            key={selectedFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-xl p-6 shadow-2xl overflow-hidden w-full min-w-0"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">Pine Script v6</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto w-full">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words">
                <code className="block w-full">{selected.code}</code>
              </pre>
            </div>
            <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 text-sm">
                <strong className="text-purple-200">💡 Tip:</strong> {selected.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

