import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from 'react-bootstrap';
import infoStyle from "./info.module.scss"
import Parcheggi from "../components/parcheggi"

const Info = () => {

  
  return (
  <Layout>
      <Row>
    <Col sm={12} lg={6}>

  
<h2 className={infoStyle.underline} >Come arrivare</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.957088075388!2d9.27282045072135!3d45.47066834093087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c62010b75247%3A0xb8b6d7712de9a23e!2sParco%20Esposizioni%20Novegro!5e0!3m2!1sit!2sit!4v1572831176997!5m2!1sit!2sit" width="100%" height="450" frameborder="0"  allowfullscreen=""></iframe>
<p>Urban Park Milano è situato in prossimità dell’ Aeroporto di Linate, adiacente alla sede fieristica del Parco Esposizioni Novegro ed è raggiungibile agevolmente con diversi mezzi di trasporto.</p>

<h4>Auto</h4>
<ul className={infoStyle.customlist}>
    <li>da Milano Tangenziale Est (uscita Linate)</li>
    <li>da Venezia Autostrada A35</li>
    <li>da Torino Autostrada A4</li>
    <li>da Bologna Autostrada A1</li>
</ul>
<p>Se provieni da Milano città, ti consigliamo di percorrere Viale Forlanini verso aeroporto Linate e quindi  seguire le indicazioni per il Parco Esposizioni Novegro</p>

<h4>Bus e Treni</h4>
<ul className={infoStyle.customlist}>
<li>
    <h5>Bus 73</h5>
    <p>da P.zza S.Babila (capolinea) per Aeroporto Linate con destinazione S.Felicino. Dopo l'Aeroporto, 5^ fermata: Novegro.
    Autobus Starfly (per aeroporto Linate) da Stazione Centrale. Quindi proseguire con Autobus 73/ destinazione S. Felicino. 5^ fermata: Novegro.</p>
 </li>
<li>
    <h5>Bus 38</h5>
    <p>da Piazzale Susa direzione Novegro </p>
</li>
<li>
    <h5>Bus 923 </h5>
    <p>permette di collegare l’Aeroporto di Linate e la stazione ferroviaria linee S5 / S6 passando per il Parco Esposizioni Novegro.</p>
</li>
<li>
    <h5>Passante ferroviario Trenord</h5>
</li>
<li>
    <h5>linee S5 / S6 fermata SEGRATE poi Bus 923.</h5>
</li>
</ul>

<h2 className={infoStyle.underline}>Parcheggi</h2>
<p>Sono previste ampie aree parcheggio a ridosso dell’area.</p> 
<Parcheggi/>
</Col>
<Col sm={12} lg={6}>
<h2 className={infoStyle.underline}>Sicurezza</h2>
<hr />
<h4>L’accesso all’interno della Struttura comporta il rispetto del presente regolamento:</h4>

<ul className={infoStyle.customlist}>
<li>L’ingresso è consentito ai soli possessori di regolare titolo d’accesso;</li>
<li>Il titolo d’accesso va conservato fino al termine della manifestazione e all’uscita della Struttura; va esibito in qualsiasi momento alla semplice richiesta del personale addetto al controllo. Il biglietto perde la sua validità una volta usciti dai cancelli della Struttura;</li>
<li>E’ consentito entrare con bevande analcoliche in bottiglie di plastica non più grandi di 0,5 lt. purché prive di tappo. Presso i bar interni le bevande saranno servite in bicchieri di materiale monouso e le bottiglie vendute senza tappo;</li>
<li>A tutela della comune incolumità sono predisposti controlli all’entrata dell’Impianto effettuati dal personale in servizio e dalle Forze di Polizia, anche con l’utilizzo di apparati metal detector;</li>
</ul>
<hr />
<h4>Comportamenti proibiti:</h4>
<ul className={infoStyle.customlist}>
<li>Stazionare e sedersi sulle scalinate, sui percorsi di accesso e di esodo e su ogni altro passaggio destinato ad uscita di sicurezza;</li>
<li>Danneggiare o manomettere in qualsiasi modo strutture, infrastrutture e servizi dell’Impianto;</li>
<li>Arrampicarsi su balaustre, parapetti, divisori e altre strutture non destinate alla presenza ed allo stazionamento del pubblico;</li>
<li>Svolgere qualsiasi genere di attività commerciale che non sia stata preventivamente autorizzata, per iscritto, dalla Direzione dell’Impianto;</li>
<li>Comportamenti capaci di creare situazioni pericolose, di mettere a repentaglio la sicurezza di qualsiasi persona o contrari all’ordine pubblico, tali da turbare in qualsiasi modo l’ordinato svolgimento di un Evento o di impedirne il pacifico godimento;</li>
<li>Accedere e trattenersi in stato di ebrezza o sotto l’effetto di sostanze stupefacenti;</li>
<li>Esporre materiale che ostacoli la visibilità agli altri spettatori o che interferisca con la segnaletica di emergenza o che, comunque, sia di ostacolo alle vie di fuga verso le uscite;</li>
<li>Porre in essere atti aggressivi nei confronti del personale addetto al controllo;</li>
</ul>
<h4>Oggetti proibiti:</h4>
<ul className={infoStyle.customlist}>
<li>Armi da fuoco, armi finte od oggetti simili ad armi, coltelli e altri oggetti con bordi affilati o acuminati. Munizioni, munizioni finte o qualsiasi oggetto somigliante a munizioni;</li>
<li>Materiale esplosivo o infiammabile, sostanze chimiche od ordigni incendiari;</li>
<li>Fuochi d’artificio, razzi e petardi;</li>
<li>Bottiglie di vetro, lattine o borracce di metallo;</li>
<li>Bevande non alcoliche in bottiglie di plastica di capacità superiore a 0,5 lt. (le bevande non alcoliche sono limitate a bottiglie di plastica non superiori a 0,5 lt. senza tappo);</li>
<li>Bevande alcoliche non acquistate all’interno della Sede;</li>
<li>Animali di qualsiasi genere e taglia (salvo i cani guida e da assistenza addestrati);</li>
<li>Sostanze illecite, comprese droghe e aghi (salvo se necessari per valide ragioni mediche);</li>
<li>Pali, aste, bastoni, ombrelli, attrezzatura fotografica di grandi dimensioni (ad es. tripodi), aste per selfie e mazze;</li>
<li>Droni o dispositivi aerei teleguidati;</li>
<li>Motocicli, biciclette, pattini, skateboard e overboard;</li>
<li>Attrezzatura di trasmissione elettronica, power bank o puntatori laser;</li>
<li>Valigie, trolley, borse e zaini più grandi di 15lt. od oggetti troppo grandi per il controllo di sicurezza;</li>
<li>Trombette da stadio, bombolette spray urticante e bombolette spray (come ad esempio antizanzare, deodoranti, creme solari, etc…)</li>
<li>Tende e sacchi a pelo;</li>
<li>Strumenti musicali;</li>
<li>Apparecchiature per la registrazione audio/video, macchine professionali e semiprofessionali, Go-Pro, Ipad e tablet;</li>
<li>Caschi, catene e tutti gli altri oggetti atti ad offendere;</li>
</ul>
<hr />
<h4>Il mancato rispetto del presente Regolamento può comportare l’immediata risoluzione del contratto di prestazione che si è perfezionato con l’acquisto e la detenzione del titolo di accesso e l’applicazione delle eventuali sanzioni previste dalla normativa vigente. Le Forze dell’Ordine presenti possono integrare il presente regolamento.</h4>
<hr />
<h2 className={infoStyle.underline}>Diversamente abili</h2>
<p>Urban Park Milano predispone all’interno dell’area dell’evento uno spazio riservato ai soggetti con disabilità (con diritto all’accompagno e che hanno bisogno di assistenza continuativa) e ai loro accompagnatori obbligatoriamente maggiorenni. Per ogni evento, l’organizzatore riserverà alle persone con disabilità e ai loro accompagnatori un numero di posti adeguato, ma necessariamente limitato. L’ingresso al luogo dello spettacolo e il posizionamento del diversamente abile in un settore diverso dall’area riservata, sarà considerato come scelta liberale dei soggetti con disabilità stessi. 
Le procedure di prenotazione dei biglietti per le persone diversamente abili sono gestite direttamente dagli organizzatori dei singoli eventi; si consiglia pertanto di contattarli direttamente (nella sezione dedicata a ciascun evento è riportato il link al sito ufficiale dell’organizzatore) per conoscere disponibilità, modalità di prenotazione e altre informazioni utili a riguardo.</p>
</Col>
</Row>
  </Layout>
  )
}

export default Info


