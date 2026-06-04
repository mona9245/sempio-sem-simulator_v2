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
  const [activeSection, setActiveSection] = useState('discovery');

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
  const totalKws = SECTIONS.flatMap(s => s.keywords).length;
  const activeData = result.computed.find(s => s.id === activeSection);

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

        <section className="summary-banner">
          <p className="banner-desc">현재 키워드는 미국 Google Ads 키워드 플래너 기준으로 선정되었으며, CPC는 페이지 상단 입찰가 최저/최고의 평균값을 적용하였습니다.</p>
          {result.totalKw === 0 ? (
            <span>예산을 설정하면 커버 가능한 키워드가 표시됩니다.</span>
          ) : result.totalKw === totalKws ? (
            <span>월 <strong>{fmtUSD(budget)}</strong> <span className="krw">({fmtKRW(budget)})</span> 예산으로 전체 <strong>{totalKws}개</strong> 키워드를 모두 커버할 수 있습니다.</span>
          ) : (
            <span>월 <strong>{fmtUSD(budget)}</strong> <span className="krw">({fmtKRW(budget)})</span> 예산으로 총 {totalKws}개 키워드 중 <strong>{result.totalKw}개</strong>를 커버할 수 있습니다. 전체 커버를 위해서는 <strong>{fmtUSD(totalMaxBudget())}</strong> <span className="krw">({fmtKRW(totalMaxBudget())})</span>이 필요합니다.</span>
          )}
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
            <div className="stat-sub">of {totalKws} keywords</div>
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

        <div className="section-layout">
          <div className="section-tabs">
            {result.computed.map(section => {
              const coverageAll = section.secActive === section.dataKws;
              const coverageNone = section.secActive === 0;
              const coverageCls = coverageNone ? 'cov-none' : coverageAll ? 'cov-full' : 'cov-partial';
              const coverageLabel = coverageNone ? 'No budget' : coverageAll ? 'Full' : `${section.secActive}/${section.dataKws}`;
              return (
                <button
                  key={section.id}
                  className={`section-tab ${activeSection === section.id ? 'tab-active' : ''} ${coverageNone ? 'tab-dim' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <span className="tab-dot" style={{ background: section.color }} />
                  <span className="tab-name">{section.name}</span>
                  <span className="tab-sub">{section.sub}</span>
                  <div className="tab-footer">
                    <span className="tab-budget">{fmtUSD(section.secBudget)} <span className="tab-budget-krw">{fmtKRW(section.secBudget)}</span></span>
                    <span className={`coverage ${coverageCls}`}>{coverageLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {activeData && (
            <div className="section-detail">
              <div className="kw-table">
                <div className="kw-head">
                  <span></span>
                  <span>Keyword</span>
                  <span>Monthly vol.</span>
                  <span>Competition</span>
                  <span>CPC</span>
                  <span>Monthly budget</span>
                </div>
                {activeData.kwRows.map(({ kw, needed, active }) => (
                  <div key={kw.kw} className={`kw-row ${active ? 'kw-active' : 'kw-inactive'}`}>
                    <span className="kw-dot" style={{ background: active ? activeData.color : '#ccc' }} />
                    <span className="kw-name">{kw.kw}</span>
                    <span className="kw-vol">{kw.vol ? kw.vol.toLocaleString() : '-'}</span>
                    <span className="kw-comp">
                      {kw.comp ? (
                        <span className={`comp-pill ${COMP_MAP[kw.comp].cls}`}>
                          {COMP_MAP[kw.comp].label}
                        </span>
                      ) : '-'}
                    </span>
                    <span className="kw-cpc">
                      {kw.cpcKRW ? '$' + (kw.cpcKRW / FX).toFixed(2) : '-'}
                    </span>
                    <span className="kw-budget" style={{ color: active ? activeData.color : '#bbb' }}>
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
            </div>
          )}
        </div>

        <footer className="app-footer">
          검색량: Google Ads 키워드 플래너 (범위 중간값 적용) · CPC: 페이지 상단 입찰가 최저/최고 평균 · 환율 $1 = ₩1,370 · 월 예산 = 검색량 × CTR 2% × CPC · Broad match 기준
        </footer>
      </main>
    </div>
  );
}
