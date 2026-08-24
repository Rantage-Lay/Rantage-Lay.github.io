---
layout: page
permalink: /publications/index.html
title: Publications
---

<style>
.pub-block { margin: 1.5em 0 2.2em; }
.pub-figs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 14px 0 4px;
}
.pub-stack .pub-fig { flex: 0 1 680px; }
.pub-pair .pub-fig { flex: 1 1 0; min-width: 280px; }
.pub-fig {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pub-fig img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}
.pub-fig figcaption {
  font-size: 0.88em;
  color: #666;
  text-align: center;
  margin-top: 6px;
}
.pub-links { margin-top: 8px; }
</style>

## Research Papers

<div class="pub-block">

### A Spatial Machine Learning Model Integrating Remote Sensing & GIS for Dynamic Monitoring of Ecological Disturbance in Mining Areas

**Venue:** 2026 4th International Conference on Remote Sensing, Mapping and Geographic Information Systems (RSMG 2026), Xi'an, China · **Authors:** Junxiong Lai (First author), Peiyuan Xu, Yixian Huang

**Status:** Peer-reviewed and accepted (Manuscript No. 226061811082791227); currently being submitted to SPIE proceedings, expected to be published online around Sep – Oct 2026, and indexed by EI Compendex &amp; Scopus.

**Summary:** Taking the Zijinshan Gold-Copper Mine in Shanghang County, Fujian Province as the case study, this paper constructs a dynamic monitoring framework for ecological disturbance in mining areas that integrates the Remote Sensing Ecological Index (RSEI), GIS spatial-constraint features, and a machine-learning classifier (GIS-LightGBM). Ecological disturbance is classified into five levels using multi-temporal Sentinel-2 and Landsat observations (2018–2024) together with terrain, distance, land-use and neighborhood texture features. Under spatial block validation, the GIS-LightGBM model achieves the best performance, with Accuracy of 0.934, Macro-F1 of 0.923, Kappa of 0.901 and Balanced Accuracy of 0.927, providing a technical reference for disturbance identification, restoration-priority delineation and remote-sensing dynamic monitoring in similar metal mining areas.

<div class="pub-links">
📄 <a href="{{ "/mypaper/Publication/Conference Certificate.pdf" | relative_url }}" target="_blank" rel="noopener">Acceptance Letter (PDF)</a> · 📄 <a href="{{ "/mypaper/Publication/A Spatial Machine Learning Model Integrating Remote Sensing GIS for Dynamic Monitoring of Ecological Disturbance in Mining Areas.pdf" | relative_url }}" target="_blank" rel="noopener">Full Paper (PDF)</a>
</div>

<div class="pub-figs pub-stack">
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/Multiple Sentinel-2 color images of the Zijinshan Gold-Copper Mine.png" | relative_url }}" alt="Multiple Sentinel-2 color images of the Zijinshan Gold-Copper Mine">
    <figcaption>Multiple Sentinel-2 color images of the Zijinshan Gold-Copper Mine</figcaption>
  </figure>
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/Spatial distribution of RSEI derived from remote sensing observations from 2018 to 2024..png" | relative_url }}" alt="Spatial distribution of RSEI derived from remote sensing observations from 2018 to 2024.">
    <figcaption>Spatial distribution of RSEI derived from remote sensing observations from 2018 to 2024.</figcaption>
  </figure>
</div>

</div>

---

## Research Projects

<div class="pub-block">

### Machine Learning-Based Discrimination of High-, Intermediate-, and Low-Sulfidation Epithermal Gold Deposits Using Pyrite Trace Element Geochemistry

**Journal:** *Journal of Geochemical Exploration* (manuscript submitted) · **Authors:** Junxiong Lai (Second author) · **Period:** Jan 2026 – Present

**Summary:** This study applies seven machine-learning models (SVM, MLP, TabPFN, HyperFast, FT-Transformer, TabR and CatBoost) to **2,269 pyrite trace-element datasets** collected from **17 representative HS–IS–LS epithermal gold deposits worldwide** to discriminate deposit subtypes. All models achieve accuracy above 93%, with TabPFN, CatBoost and FT-Transformer exceeding 95%. SHAP analysis identifies Cu, Au, Mo, Sb, Te and Ni as the core discriminant elements.

<div class="pub-figs pub-pair">
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/exsb_tsne_boundaries.png" | relative_url }}" alt="Visualization of the classification boundaries of the three HS-IS-LS deposit types based on t-SNE">
    <figcaption>Visualization of the classification boundaries of the three HS–IS–LS deposit types based on t-SNE</figcaption>
  </figure>
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/Discrimination results for unknown deposit classes under erroneous imputation.png" | relative_url }}" alt="Discrimination results for unknown deposit classes under erroneous imputation">
    <figcaption>Discrimination results for unknown deposit classes under erroneous imputation</figcaption>
  </figure>
</div>

</div>

<div class="pub-block">

### 研发投入如何塑造中国省域碳中和技术创新？——状态跃迁、空间溢出与局部时空差异

**Journal:** To be confirmed · **Authors:** Junxiong Lai (First author) · **Period:** Aug 2025 – Aug 2026

**Summary:** Based on panel data of **31 Chinese provincial regions (2014–2023)** and CPC Y02 patent applications as the measure of carbon-neutral technology innovation (CNTI), this study links spatial Markov chains, the spatial Durbin model (SDM) and geographically and temporally weighted regression (GTWR). Key findings: provincial CNTI exhibits strong path dependence and state persistence; R&D investment has a significant positive local effect and an even more prominent positive cross-regional spillover; when the innovation measure shifts from patent applications to invention grants, the local effect persists while the cross-regional effect turns negative; and the R&D–CNTI linkage is markedly spatio-temporally non-stationary.

<div class="pub-figs pub-pair">
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/Spacial Distribution of CNTI in 2014, 2017, 2020 and 2023.png" | relative_url }}" alt="Spacial Distribution of CNTI in 2014, 2017, 2020 and 2023">
    <figcaption>Spacial Distribution of CNTI in 2014, 2017, 2020 and 2023</figcaption>
  </figure>
  <figure class="pub-fig">
    <img src="{{ "/mypaper/Publication/LISA clustering of CNTI in 2014, 2017, 2020 and 2023.png" | relative_url }}" alt="LISA clustering of CNTI in 2014, 2017, 2020 and 2023">
    <figcaption>LISA clustering of CNTI in 2014, 2017, 2020 and 2023</figcaption>
  </figure>
</div>

</div>
