import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowRightCircle, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Wallet } from 'lucide-react';

const demoClients = [
  {
    id: 'INV-1001',
    fullname: 'Amina Diop',
    country: 'Sénégal',
    phone: '+221771234567',
    email: 'amina.diop@example.com',
    status: 'Actif',
    photo: 'https://i.pravatar.cc/260?img=12',
    invested: 12500,
    profit: 1475,
  },
  {
    id: 'INV-1002',
    fullname: 'Lucien Kouassi',
    country: 'Côte d’Ivoire',
    phone: '+225074512389',
    email: 'lucien.kouassi@example.com',
    status: 'Validation',
    photo: 'https://i.pravatar.cc/260?img=11',
    invested: 6200,
    profit: 820,
  },
];

const investmentPlans = [
  { amount: 250, label: 'Starter', description: 'Signaux de base, reporting journalier.', ratio: '12%', color: 'from-sky-500 to-cyan-400' },
  { amount: 500, label: 'Essentiel', description: 'Stratégies premium et alertes quotidiennes.', ratio: '18%', color: 'from-violet-500 to-fuchsia-500' },
  { amount: 1200, label: 'Platinum', description: 'Allocation VIP et optimisation crypto.', ratio: '24%', color: 'from-amber-500 to-orange-500' },
  { amount: 2500, label: 'Diamond', description: 'Contrats institutionnels et support 24/7.', ratio: '32%', color: 'from-emerald-500 to-teal-500' },
];

const withdrawalMethods = [
  'Virement bancaire',
  'Mobile Money (Orange)',
  'Mobile Money (MTN)',
  'PayPal',
  'Bitcoin',
  'Ethereum',
];

const billLevels = [
  { id: 'standard', title: 'Validation Standard', amount: 250, subtitle: 'Débloquez la progression.', detail: 'Paiement de 250$ requis pour maintenir la cadence VIP et accéder aux signaux avancés.' },
  { id: 'premium', title: 'Validation Premium', amount: 400, subtitle: 'Protection de performance.', detail: 'Une validation de 400$ active les allocations premium et l’assistance prioritaire.' },
  { id: 'vip', title: 'Validation VIP', amount: 5000, subtitle: 'Accès institutionnel.', detail: 'Le niveau VIP donne accès aux stratégies les plus performantes et aux flux de liquidités exclusifs.' },
];

function generateCandles(count = 18) {
  const base = 42000;
  return Array.from({ length: count }, (_, index) => {
    const open = base + Math.round(Math.sin(index / 2.3) * 220 + Math.random() * 180 - 90);
    const close = open + Math.round((Math.random() - 0.5) * 430);
    const high = Math.max(open, close) + Math.round(Math.random() * 120);
    const low = Math.min(open, close) - Math.round(Math.random() * 120);
    return { open, close, high, low, label: `${index + 1}h` };
  });
}

export default function TradingLivePage() {
  const router = useRouter();
  const clientId = router.query.client;
  const client = useMemo(
    () => demoClients.find((item) => item.id === clientId) || demoClients[0],
    [clientId]
  );

  const [chartData, setChartData] = useState(generateCandles());
  const [price, setPrice] = useState(chartData[chartData.length - 1].close);
  const [trend, setTrend] = useState('stable');
  const [progress, setProgress] = useState(42);
  const [investing, setInvesting] = useState(false);
  const [profit, setProfit] = useState(client.profit);
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(investmentPlans[1]);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawMethod, setWithdrawMethod] = useState(withdrawalMethods[0]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    if (!investing) return undefined;
    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(100, current + Math.ceil(Math.random() * 7));
        setProfit(Math.round(client.profit + next * selectedPlan.amount * 0.003));
        if (next === 100) {
          setInvesting(false);
          return next;
        }
        return next;
      });
    }, 1400);
    return () => clearInterval(interval);
  }, [investing, client.profit, selectedPlan.amount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((current) => {
        const previous = current[current.length - 1];
        const open = previous.close;
        const close = open + Math.round((Math.random() - 0.5) * 420);
        const high = Math.max(open, close) + Math.round(Math.random() * 120);
        const low = Math.min(open, close) - Math.round(Math.random() * 120);
        return [...current.slice(-16), { open, close, high, low, label: `${Number(previous.label.replace('h', '')) + 1}h` }];
      });
      setLastUpdate(new Date());
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const latest = chartData[chartData.length - 1];
    if (latest) {
      setPrice(latest.close);
      setTrend(latest.close > latest.open ? 'up' : latest.close < latest.open ? 'down' : 'stable');
    }
  }, [chartData]);

  const handleLaunch = () => {
    if (investing) return;
    setInvesting(true);
    setProgress((prev) => Math.max(prev, 18));
  };

  const handleConfirmWithdraw = () => {
    if (!withdrawAmount || Number(withdrawAmount) <= 0) return;
    setShowWithdraw(false);
    setWithdrawAmount('');
    setWithdrawMethod(withdrawalMethods[0]);
  };

  const handleBillConfirm = () => {
    setSelectedBill(null);
    setProgress(0);
    setInvesting(false);
  };

  const totalValue = client.invested + profit;
  const availableWithdraw = Math.max(0, profit - 120);

  return (
    <div className="min-h-screen bg-[#020714] text-white">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Trading Live</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">Cockpit d’investissement premium</h1>
            <p className="mt-4 max-w-2xl text-slate-400">Pilotez le trading du client avec une vue actionnable : performance live, plans, validations et retraits.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/clients" className="inline-flex items-center justify-center rounded-3xl border border-slate-800 bg-[#060d2d] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-500/20 hover:bg-[#09103f]">
              Retour aux clients
            </Link>
            <button
              onClick={() => setShowWithdraw(true)}
              className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Retrait rapide
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[360px_1.2fr_360px]">
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <img src={client.photo} alt={client.fullname} className="h-20 w-20 rounded-[1.75rem] object-cover border border-slate-700" />
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Client actif</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{client.fullname}</h2>
                  <p className="mt-1 text-sm text-slate-400">{client.country}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Statut</p>
                  <p className="mt-3 text-lg font-semibold text-cyan-300">{client.status}</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capital investi</p>
                  <p className="mt-3 text-lg font-semibold text-white">${client.invested.toLocaleString()}</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Profits</p>
                  <p className="mt-3 text-lg font-semibold text-emerald-300">${client.profit.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-slate-800 bg-[#011123] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Résumé rapide</p>
                <div className="mt-4 space-y-3 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Total portefeuille</span>
                    <span className="font-semibold text-white">${totalValue.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Retrait disponible</span>
                    <span className="font-semibold text-emerald-300">${availableWithdraw.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Niveau de plan</span>
                    <span className="font-semibold text-sky-300">{selectedPlan.label}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Performance du plan</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedPlan.label}</h3>
                </div>
                <Sparkles size={24} className="text-cyan-400" />
              </div>
              <p className="mt-4 text-slate-400">{selectedPlan.description}</p>
              <div className="mt-6 grid gap-3">
                {investmentPlans.map((plan) => (
                  <button
                    key={plan.amount}
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full rounded-3xl border px-4 py-4 text-left transition ${selectedPlan.amount === plan.amount ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-800 bg-slate-900/80 hover:border-slate-600 hover:bg-slate-900'}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white">{plan.label}</p>
                        <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                      </div>
                      <div className={`rounded-full px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r ${plan.color}`}>
                        ${plan.amount}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Marché en direct</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Tableau de bord BTC / ETH</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: 'Mise à jour', value: lastUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), accent: 'text-slate-200', badge: 'bg-slate-900/80' },
                  { label: 'Tendance', value: trend === 'up' ? 'Hausse' : trend === 'down' ? 'Baisse' : 'Stable', accent: trend === 'up' ? 'text-emerald-300' : trend === 'down' ? 'text-rose-300' : 'text-slate-200', badge: trend === 'up' ? 'bg-emerald-500/10' : trend === 'down' ? 'bg-rose-500/10' : 'bg-slate-900/80' },
                  { label: 'Rendement', value: selectedPlan.ratio, accent: 'text-cyan-300', badge: 'bg-cyan-500/10' },
                ].map((stat) => (
                  <div key={stat.label} className={`rounded-3xl border border-slate-800 bg-slate-900/80 p-4 ${stat.badge}`}>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                    <p className={`mt-3 text-lg font-semibold ${stat.accent}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-slate-800 bg-[#06102d] p-5 shadow-inner shadow-slate-950/20">
              <div className="grid gap-4 lg:grid-cols-[1.6fr_0.9fr]">
                <div className="rounded-[2rem] border border-slate-800 bg-[#071230] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Cours actuel</p>
                      <h3 className="mt-3 text-4xl font-bold text-white">${price.toLocaleString('en-US')}</h3>
                    </div>
                    <div className={`rounded-3xl px-4 py-2 text-sm font-semibold ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-300' : trend === 'down' ? 'bg-rose-500/10 text-rose-300' : 'bg-slate-700/50 text-slate-200'}`}>
                      {trend === 'up' ? 'Hausse' : trend === 'down' ? 'Baisse' : 'Stable'}
                    </div>
                  </div>

                  <div className="mt-8 h-[360px] overflow-hidden rounded-[2rem] border border-slate-800 bg-[#03112d] p-4">
                    <div className="relative h-full">
                      {chartData.map((item, index) => {
                        const height = Math.max(20, Math.min(120, ((item.high - item.low) / 300) * 100));
                        const candleHeight = Math.max(18, Math.min(110, (Math.abs(item.close - item.open) / 300) * 100 + 18));
                        const isGreen = item.close >= item.open;
                        return (
                          <div key={index} className="absolute bottom-0" style={{ left: `${index * 5.3}%`, width: '4.5%' }}>
                            <div className="mx-auto h-full w-full flex flex-col justify-end items-center">
                              <div className="w-[2px] bg-slate-700" style={{ height: `${height}%` }} />
                              <div
                                className={`w-full rounded-xl ${isGreen ? 'bg-emerald-400' : 'bg-rose-400'}`}
                                style={{ height: `${candleHeight}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: 'Volume', value: '8.6K' },
                      { label: 'Volatilité', value: 'Modérée' },
                      { label: 'Synchro', value: 'Live' },
                    ].map((metric) => (
                      <div key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                        <p className="mt-3 text-xl font-semibold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Progrès</p>
                        <h3 className="mt-2 text-3xl font-semibold text-white">{progress}%</h3>
                      </div>
                      <div className="rounded-3xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">Cycle</div>
                    </div>
                    <div className="mt-6 rounded-full bg-slate-800/70 h-4 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 transition-all" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="mt-5 grid gap-3">
                      <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Profit estimé</p>
                        <p className="mt-2 text-2xl font-semibold text-emerald-300">${profit.toLocaleString()}</p>
                      </div>
                      <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Temps restant</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{investing ? '02:18' : '00:00'}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLaunch}
                      className={`mt-6 w-full rounded-3xl px-6 py-4 text-lg font-semibold uppercase tracking-[0.08em] transition ${investing ? 'bg-slate-700 text-slate-300 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 hover:brightness-110'}`}
                      disabled={investing}
                    >
                      {investing ? 'Investissement en cours' : 'Lancer l’investissement'}
                    </button>
                  </div>

                  <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Validation requise</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Niveaux de facturation</h3>
                      </div>
                      <ShieldCheck size={24} className="text-cyan-400" />
                    </div>
                    <p className="mt-4 text-slate-400">Choisissez une validation pour conserver les performances et les accès VIP.</p>
                    <div className="mt-5 space-y-3">
                      {billLevels.map((bill) => (
                        <button
                          key={bill.id}
                          onClick={() => setSelectedBill(bill)}
                          className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-4 text-left text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold">{bill.title}</p>
                              <p className="mt-2 text-sm text-slate-400">{bill.subtitle}</p>
                            </div>
                            <span className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200">${bill.amount}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Tableau rapide</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Synthèse portefeuille</h2>
                </div>
                <Wallet size={24} className="text-cyan-400" />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Valeur totale</p>
                  <p className="mt-3 text-2xl font-semibold text-white">${totalValue.toLocaleString()}</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Retrait possible</p>
                  <p className="mt-3 text-2xl font-semibold text-emerald-300">${availableWithdraw.toLocaleString()}</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Prochaine action</p>
                  <p className="mt-3 text-2xl font-semibold text-sky-300">Augmenter le niveau</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Actions rapides</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Guide VIP</h2>
                </div>
                <CheckCircle2 size={24} className="text-emerald-400" />
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">Validez un niveau avant le prochain cycle.</li>
                <li className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">Ajustez le plan pour dynamiser le rendement.</li>
                <li className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4">Demandez un retrait dès que le profit dépasse 12%.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {selectedBill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Paiement requis</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{selectedBill.title}</h3>
              </div>
              <button onClick={() => setSelectedBill(null)} className="rounded-full bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700">Fermer</button>
            </div>
            <p className="mt-6 text-slate-400">{selectedBill.detail}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleBillConfirm}
                className="flex-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Confirmer {selectedBill.amount}$
              </button>
              <button
                onClick={() => setSelectedBill(null)}
                className="flex-1 rounded-3xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {showWithdraw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Retrait</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Demander un retrait</h3>
              </div>
              <button onClick={() => setShowWithdraw(false)} className="rounded-full bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700">Fermer</button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-semibold text-slate-300">Montant à retirer</label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Ex: 350"
                  className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-4 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-300">Méthode</label>
                <select
                  value={withdrawMethod}
                  onChange={(e) => setWithdrawMethod(e.target.value)}
                  className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-4 text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {withdrawalMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-slate-400">
                <p className="text-sm">Frais estimés</p>
                <p className="mt-3 text-xl font-semibold text-white">${withdrawAmount ? Math.max(0, Number(withdrawAmount) * 0.98).toFixed(2) : '0.00'}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleConfirmWithdraw}
                className="flex-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-lime-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                Confirmer le retrait
              </button>
              <button
                onClick={() => setShowWithdraw(false)}
                className="flex-1 rounded-3xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
