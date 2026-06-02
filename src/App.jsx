import { useState, useMemo } from 'react';
import { SECTIONS, FX, estimateBudgetUSD, estimateImpression, totalMaxBudget } from './data';
import './App.css';

const MAX_BUDGET = totalMaxBudget() + 200;

function fmtUSD(n) { return '$' + Math.round(n).toLocaleString(); }
function fmtKRW(usd) { return '₩' + (Math.round(usd * FX / 1000) * 1000).toLocaleString(); }

const COMP_MAP = {
  high: { label: 'High', cls: 'comp-high' },
  mid:  { label: 'Mid',  cls: 'comp-mid' },
  low:  { label: 'Low',  cls: 'comp-low' },
};

export default function App() {
  const [budget, setBudget] = useState(1000);
  const [expanded, setExpanded] = useState(
    Object.fromEntries(SECTIONS.map(s => [s.id, true]))
  );

  const result = useMemo(() => {
    let remaining = budget;
    let totalKw = 0;
    let totalImp = 0;

    const computed = SECTIONS.map(section => {
      let secBudget = 0;
      let secActive = 0;
      const kwRows = section.keywords.map(kw => {
        const needed = estimateBudgetUSD(kw);
        const imp = estimateImpression(kw);
        const active = needed !== null && remaining >= needed;
        if (active) {
          remaining -= needed;
          secBudget += needed;
          secActive++;
          totalKw++;
          totalImp += imp;
        }
        return { kw, needed, active };
      });
      const dataKws = section.keywords.filter(k => estimateBudgetUSD(k) !== null).length;
      return { ...section, kwRows, secBudget, secActive, dataKws };
    });

    return { computed, totalKw, totalImp };
  }, [budget]);

  const pct = Math.min(100, (budget / MAX_BUDGET) * 100);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-tag">SEM</span>
            <span className="brand-title">Budget Simulator</span>
          </div>
          <div className="header-meta">Sempio US · Google Ads · Impression-first strategy</div>
        </div>
      </header>

      <main className="main">
        <section className="slider-section">
          <div className="slider-label-row">
            <span className="slider-label">Monthly budget</span>
            <div className="slider-value">
              <span className="val-usd">{fmtUSD(budget)}</span>
              <span className="val-krw">{fmtKRW(budget)}</span>
            </div>
          </div>
          <div className="slider-track-wrap">
            <input
              type="range"
              min={100}
              max={MAX_BUDGET}
              step={50}
              value={budget}
              onChange={e => setBudget(+e.target.value)}
              className="slider"
            />
            <div className="track-fill" style={{ width: pct + '%' }} />
          </div>
          <div className="slider-bounds">
            <span>$100</span>
            <span>{fmtUSD(MAX_BUDGET)} — full coverage</span>
          </div>
        </section>

        <section className="stat-cards">
          <div className="stat-card">
            <div className="stat-label">Monthly budget</div>
            <div className="stat-val">{fmtUSD(budget)}</div>
            <div className="stat-sub">{fmtKRW(budget)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Keywords covered</div>
            <div className="stat-val">{result.totalKw}</div>
            <div className="stat-sub">of 40 with data</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Est. impressions</div>
            <div className="stat-val">{(result.totalImp / 1000).toFixed(0)}K</div>
            <div className="stat-sub">per month</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Full coverage</div>
            <div className="stat-val">{fmtUSD(totalMaxBudget())}</div>
            <div className="stat-sub">{fmtKRW(totalMaxBudget())}</div>
          </div>
        </section>

        <section className="sections-list">
          {result.computed.map(section => {
            const isExpanded = expanded[section.id] !== false;
            const coverageAll = section.secActive === section.dataKws;
            const coverageNone = section.secActive === 0;
            const coverageLabel = coverageNone ? 'No budget' : coverageAll ? 'Full coverage' : `${section.secActive} / ${section.dataKws}`;
            const coverageCls = coverageNone ? 'cov-none' : coverageAll ? 'cov-full' : 'cov-partial';

            return (
              <div key={section.id} className={`section ${coverageNone ? 'section-dim' : ''}`}>
                <button
                  className="section-header"
                  style={{ '--sec-color': section.color, '--sec-bg': section.bgColor }}
                  onClick={() => setExpanded(e => ({ ...e, [section.id]: !isExpanded }))}
                >
                  <span className="sec-dot" style={{ background: section.color }} />
                  <span className="sec-name">{section.name}</span>
                  <span className="sec-sub">{section.sub}</span>
                  <span className="sec-budget">
                    <span>{fmtUSD(section.secBudget)}</span>
                    <span className="sec-budget-krw">{fmtKRW(section.secBudget)}</span>
                  </span>
                  <span className={`coverage ${coverageCls}`}>{coverageLabel}</span>
                  <span className={`chevron ${isExpanded ? 'open' : ''}`}>›</span>
                </button>

                {isExpanded && (
                  <div className="kw-table">
                    <div className="kw-head">
                      <span></span>
                      <span>Keyword</span>
                      <span>Monthly vol.</span>
                      <span>Competition</span>
                      <span>CPC</span>
                      <span>Monthly budget</span>
                    </div>
                    {section.kwRows.map(({ kw, needed, active }) => (
                      <div key={kw.kw} className={`kw-row ${active ? 'kw-active' : 'kw-inactive'}`}>
                        <span className="kw-dot" style={{ background: active ? section.color : '#333' }} />
                        <span className="kw-name">{kw.kw}</span>
                        <span className="kw-vol">{kw.vol ? kw.vol.toLocaleString() : '—'}</span>
                        <span className="kw-comp">
                          {kw.comp ? (
                            <span className={`comp-pill ${COMP_MAP[kw.comp].cls}`}>
                              {COMP_MAP[kw.comp].label}
                            </span>
                          ) : '—'}
                        </span>
                        <span className="kw-cpc">
                          {kw.cpcKRW ? fmtUSD(kw.cpcKRW / FX) : '—'}
                        </span>
                        <span className="kw-budget" style={{ color: active ? section.color : '#444' }}>
                          {needed !== null ? (
                            <>
                              <span>{fmtUSD(needed)}</span>
                              <span className="kw-budget-krw">{fmtKRW(needed)}</span>
                            </>
                          ) : (
                            <span className="no-data">No data</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <footer className="app-footer">
          Search volume: Google Ads Keyword Planner (range midpoint applied) · CPC: top-of-page bid low range ÷ 1,370 · Exchange rate $1 = ₩1,370 · Monthly budget = vol × CTR 2% × CPC · Broad match basis
        </footer>
      </main>
    </div>
  );
}
