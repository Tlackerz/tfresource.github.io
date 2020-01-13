(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{93:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("CategoryList",{attrs:{category:"Land Use Transport Modeling"}}),e._v(" "),a("p",[a("strong",[e._v("Summary")])]),e._v(" "),a("p",[e._v("Land use models can be integrated with travel demand models to reflect the interactions between the transportation system and land use development. Both households and businesses prefer locations with -everything else being equal- higher "),a("a",{attrs:{href:"Accessibilities"}},[e._v("accessibilities")]),e._v(", and therefore, are influenced by travel times that are an output of transportation models. The location choices of households, businesses and developers, in turn, influences the location and scale of travel demand that is calculated in the travel demand model. The integration of land use with transportation models has proven to improve the model sensitivities in scenario analyses. Common "),a("a",{attrs:{href:"Design_principles_of_land_use_models"}},[e._v("design principles")]),e._v(" show how different elements of land-use models work together.")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Traditionally, transportation models use static forecasts of "),a("a",{attrs:{href:"Spatial_Data#Land_Use/Demographic/Socio-economic_Data"}},[e._v("socio-economic data")]),e._v(". The left side of the figure below visualizes the "),a("a",{attrs:{href:"Scenario_Forecasting_for_Travel_Demand_Modeling"}},[e._v("traditional approach")]),e._v('. The forecast of socio-economic data is static and represents the "most likely" future allocation of households, jobs and other zonal data. The allocation of growth in the future year is determined exogenously and is not affected be information calculated endogenously in the demand model such as accessibility. Sometimes an alternative growth scenario is calculated exogenous to the travel modeling process to test a different allocation.')]),e._v(" "),a("p",[a("img",{attrs:{src:"LutIntegration2.jpg",alt:"",title:"LutIntegration2.jpg"}})]),e._v(" "),a("p",[e._v("''Concept of traditional transportation (left) and integrated land use/transportation modeling (right)")]),e._v(" "),a("p",[e._v("Empirical research, however, has shown that the transportation systems influences land-use decisions (compare for example Hansen 1959"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" or Kreibich 1978"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v("), and therefore, the allocation of socio-economic data. While the static land-use forecast may be appropriate in the base scenario (often called business-as-usual scenario), the forecast of population and employment may be unrealistic in a certain scenario. For example, if the model is used to test the expansion of a rail line, households may decide to relocate because the rail line may make certain neighborhoods more attractive. The right side of the figure above visualizes this concept. A land use model is used to update the allocation of socio-economic data for a given model run.")]),e._v(" "),a("p",[e._v("The integration between land use and transportation models can be rather simple as shown in the graphic below. Starting with "),a("a",{attrs:{href:"Spatial_Data#Land_Use/Demographic/Socio-economic_Data"}},[e._v("socio-economic data")]),e._v(' (SED) in the base year (here shown as 2000 data), the transportation model runs for the same year, representing an "average day" of that year. The '),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skim matrices")]),e._v(" of the transportation model, usually including travel time and travel costs, are fed into the land use model that models the land use changes from 2000 to 2001 (or whatever the time increment may be). The output of the land use model replaces the base year socio-economic data for the next model run of the transportation model.")]),e._v(" "),a("p",[a("img",{attrs:{src:"LUTdataFlow.jpg",alt:"",title:"LUTdataFlow.jpg"}})]),e._v(" "),a("p",[a("em",[e._v("Common data flow between land use and transportation models")])]),e._v(" "),a("p",[e._v("In reality, however, most integrated land use/transportation models do not run every year but rather every five or ten years. Long runtimes prohibit most integrated models to run every year. In some cases, the land use model runs every year, but the transportation model only runs every five to ten years. In other applications, both models run every five or every ten years.")]),e._v(" "),a("p",[e._v("The example in the figure above starts the model back in 2000. It is not uncommon to start land use modeling in a past year, which is also called back-casting (in contrast to forecasting). While this is less relevant to travel demand models, back-casting helps building confidence in model results of land use models. If the land use model output in 2012 is compared to census data in 2012, the model can be truly validated. Resembling census data in 2012 will increase the confidence in result of the land use model for future years.")]),e._v(" "),a("h2",{attrs:{id:"land-use-transportation-feedback-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-use-transportation-feedback-cycle"}},[e._v("#")]),e._v(" Land Use/Transportation Feedback Cycle")]),e._v(" "),a("p",[e._v("The transportation and land use systems closely interact, as illustrated by the land use/transport feedback cycle (Wegener 2004"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(").")]),e._v(" "),a("p",[a("img",{attrs:{src:"LUTfeedbackCycle.GIF",alt:"",title:"LUTfeedbackCycle.GIF"}})]),e._v(" "),a("p",[a("em",[e._v("Land Use/Transportation Feedback Cycle (Wegener 2004"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(": 130)")])]),e._v(" "),a("p",[e._v("Starting at the bottom of the cycle (Land Use), the locations of population and employment determine the origins and destinations of most trips in travel models (Activities). Modeling the Transportation System allows calculating Accessibilities, which describe how well accessible a zone is to all other zones. Accessibility shapes land use, as both households and businesses search for locations that are - among other location factors - accessible.")]),e._v(" "),a("p",[e._v("A well documented example of the significance of integrating land use with transportation has been published by "),a("a",{attrs:{href:"Alternative_Futures_for_Integrated_Transportation_and_Land_Use_Models_Contrasted_with_Trend_Delphi_Models"}},[e._v("Conder and Lawton (2002)")]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(". According to their research, a Delphi Panel initially suggested substantial demand for new housing north of the Columbia River near Portland, OR. Testing this scenario in an integrated land use/transportation model revealed that not quite as many households decided to move north of the Columbia River because congestion on the four bridges across the river made commute travel times prohibitively long. Thereby, the authors have provided a classic example of the land use/transportation feedback cycle. Increased density north of the Columbia River led to additional travel demand, but the congestion reduced the accessibility of neighborhoods north of the Columbia River, which in turn limited the attractiveness of those areas for additional development.")]),e._v(" "),a("p",[e._v("A wide variety of land use models are in operation to date. The section "),a("a",{attrs:{href:"design_principles_of_land_use_models"}},[e._v("design principles of land use models")]),e._v(" provides an overview of the most common land use model structures.")]),e._v(" "),a("h2",{attrs:{id:"enhanced-scenario-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanced-scenario-analysis"}},[e._v("#")]),e._v(" Enhanced Scenario Analysis")]),e._v(" "),a("p",[e._v("Adding a land use model to a travel demand model adds a large set of land use-related policy scenarios that can be tested. Such integrated model systems have been used extensively to model the impact of land-use policies, including the implementation of growth boundaries, development of new residential, transit-oriented development projects or tax incentives for promoting certain urban developments. If air quality or emissions in general are of interest, land use models allow adding emissions from dwellings and firms to traffic emissions. Oregon’s GreenSTEP model"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(" is an example for estimating emissions from fixed-point sources in a addition to vehicles' emissions.")]),e._v(" "),a("p",[e._v("Implementing a land use model may also improve the travel demand models by reflecting the land use/transportation feedback cycle. If changes in land use are modeled explicitly, the quality of a base forecast as well as the responsiveness of the travel demand model to alternative policies may improve significantly. Finally, demographic changes, such as a higher share of seniors traveling or the trend towards smaller household sizes, is modeled explicitly.")]),e._v(" "),a("p",[e._v("Integrating land use models with transportation models not only increases the number of scenarios that can be analyzed but also may improve the outcome of the transportation model. By explicitly simulating the land use and transport interactions, travel behavior, household relocation, job change, shopping location choice, to name a few, may be modeled more realistically. It also creates consistency between land use and transportation forecasts, and the performance measures derived from them.")]),e._v(" "),a("p",[e._v("In summary, the benefits of integrated land-use/transportation modeling include")]),e._v(" "),a("ul",[a("li",[e._v("Capture land-use/transportation feedback cycle.")]),e._v(" "),a("li",[e._v("Implement land-use policies, such as urban growth boundaries, smart growth strategies, transit-oriented development, etc.")]),e._v(" "),a("li",[e._v("Improve pricing studies, as some households and businesses may change their location choice preferences under higher transportation costs.")]),e._v(" "),a("li",[e._v("Improve analysis of Greenhouse Gas Emissions, as residential buildings and firms contribute to emissions substantially.")]),e._v(" "),a("li",[e._v("Enable fiscal impact analyses of transportation policies, as location choice might be affected, which could alter the distribution of tax revenue.")]),e._v(" "),a("li",[e._v("Facilitate equity analyses, as land use models keep track of who lives where, and therefore, allow analyzing which parts of the population benefit or suffer under a scenario the most.")])]),e._v(" "),a("h2",{attrs:{id:"a-brief-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-history"}},[e._v("#")]),e._v(" A Brief History")]),e._v(" "),a("p",[e._v("Ever since personal computers became available for academic research, land-use/transportation models have been developed. The pioneering work of Herbert and Stevens"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])]),e._v(" in cooperation with Britton Harris was fundamental in exploring how computer models may be applied for urban analysis. Though aspatial in its design, the Theory of Urban Interaction developed by Forrester"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn8",id:"fnref8"}},[e._v("[8]")])]),e._v(" was a milestone in simulating businesses, dwellings and households explicitly. Yet more popularity gained the Lowry Model"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn9",id:"fnref9"}},[e._v("[9]")])]),e._v(". Its relatively simple model structure allowed developing many applications, of which some are still in use or further developed today.")]),e._v(" "),a("p",[e._v("During the 1970s and 1980s, triggered among others byLee's Requiem of Large Scale Models"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn10",id:"fnref10"}},[e._v("[10]")])]),e._v(",a general scepticism prevailed whether integrated models were able to represent complex real-world interactions. To a large extend, integrated modeling retreated to academic projects only.")]),e._v(" "),a("p",[e._v("In the 1990s, a new interest in integrated modeling arose. New model developments at dozens of Universities, improved hardware, better data availability and need of policy makers to understand long-term effects of decision-making promoted an increased acceptance of integrated modeling for urban and regional planning. The 21st century brought a push towards microsimulation aiming at simulating the interaction between individual actors.")]),e._v(" "),a("p",[e._v("This history of integrated land use modeling is described in more detail by Wegener"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn11",id:"fnref11"}},[e._v("[11]")])]),e._v(". Some of the most influential models are shown in the table below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Early Pioneers")]),e._v(" "),a("th",[e._v("Revival in 1980's")]),e._v(" "),a("th",[e._v("21st Century")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Forrester (early 1960s) → aspatial")]),e._v(" "),a("td",[e._v("Anas 1980 (Chicago)")]),e._v(" "),a("td",[e._v("Waddell (2000) → UrbanSim")])]),e._v(" "),a("tr",[a("td",[e._v("Lowry (1964) → simple, but most popular ever")]),e._v(" "),a("td",[e._v("Kain, Apgar 1980 (Chicago, Pittburgh)")]),e._v(" "),a("td",[e._v("Miller (2001) → ILUTE")])]),e._v(" "),a("tr",[a("td",[e._v("Wilson (1967) → entropy model")]),e._v(" "),a("td",[e._v("Wegener 1981 (Dortmund)")]),e._v(" "),a("td",[e._v("Simmonds (2001) → DELTA")])]),e._v(" "),a("tr",[a("td",[e._v("Putman (1967) → DRAM/EMPAL model")]),e._v(" "),a("td",[e._v("Jägemann 1981 (Frankfurt)")]),e._v(" "),a("td",[e._v("Hunt (2003) → PECAS")])]),e._v(" "),a("tr",[a("td",[e._v("Echenique (1969) → spatial input/output")]),e._v(" "),a("td",[e._v("de la Barra 1984 → TRANUS")]),e._v(" "),a("td",[e._v("Wegener (2004) → ILUMASS")])]),e._v(" "),a("tr",[a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Brian Gregor (2007) → LUSDR")])])])]),e._v(" "),a("h2",{attrs:{id:"land-use-model-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-use-model-types"}},[e._v("#")]),e._v(" Land Use Model Types")]),e._v(" "),a("p",[e._v("As in any field of science that is developing over several decades, various different model designs have been proposed over the course of years. The predominant types are listed below, with examples of categories provided in parenthesis.")]),e._v(" "),a("ul",[a("li",[e._v("Aspatial (Forrester’s Urban Interactions)")]),e._v(" "),a("li",[e._v("Gravity (Lowry, DRAM/EMPAL)")]),e._v(" "),a("li",[e._v("Entropy (Wilson's Entropy Model)")]),e._v(" "),a("li",[e._v("Sketch planning (WhatIf, I-PLACE^3^S, U-PLAN, CommunityViz)")]),e._v(" "),a("li",[e._v("Discrete choice (DELTA, IRPUD)")]),e._v(" "),a("li",[e._v("Cellular Automata (LEAM)")]),e._v(" "),a("li",[e._v("Input/Output style (MEPLAN, TRANUS, PECAS)")]),e._v(" "),a("li",[e._v("Microsimulation (UrbanSim, SILO)")])]),e._v(" "),a("p",[e._v("Even though Forrester's aspatial has not been applied widely, it was a milestone of urban modeling that stimulated the development of further land use models. The gravity model has been popular for its simplicity over decades, and even today some regions apply derivates of gravity models. Wilson's entropy model has been further developed many times, though it remained an academic exercise for most part. Sketch planning models are used widely as planning support systems to date. They commonly do not integrate with travel demand models, but rather serve to visualize various assumptions of growth distributions. Discrete choice models simulate spatial decisions (such as household move, business relocation or the location choice for a developer) explicitly, rather than estimating the emerging outcome on the aggregate. Cellular Automata models do the opposite. Those models estimate the change of raster cells based on characteristics of neighboring raster cells. The underlaying decisions of single households that may lead to population growth is not analyzed in Cellular Automata.")]),e._v(" "),a("p",[e._v("The most prominent modeling concepts in operation today are model that follow the Input/Output model paradigm or are built as microsimulation models. It should be noted that there is some overlap between these categories. For example, many microsimulation land use models follow the discrete choice paradigm. Some Input/Output style models include microsimulations for selected aspects of the model. However, the majority of models can be grouped by these land use model types.")]),e._v(" "),a("p",[e._v("Although the basic design structure is similar for many land use models, there are at least three fundamental design features handled differently in various land use models:")]),e._v(" "),a("h3",{attrs:{id:"behavioral-or-structure-explaining-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behavioral-or-structure-explaining-approach"}},[e._v("#")]),e._v(" Behavioral or structure-explaining approach")]),e._v(" "),a("p",[e._v("Behavioral approaches aim at simulating the explicit behavior (such as marriage, birth, or re-location), whereas structure-explaining approaches attempt to simulate the outcome (such as population distribution) directly without dealing with the motivation that led population to be distributed in a certain way. Certainly, this distinction is vague and many models are somewhere between these two approaches. A common example for structure-explaining models is a "),a("a",{attrs:{href:"Cellular_Automata"}},[e._v("Cellular Automata")]),e._v(" that simulates the state of a single raster cell based on the state of the surrounding raster cells. Cellular Automata models do not explain the change of a raster cell, but rather simulate the changed outcome. Another example are household evolution models and demographic models that frequently update a "),a("a",{attrs:{href:"Population_Synthesis"}},[e._v("synthetic population")]),e._v(" to a future year without dealing explicitly with choices that lead to a future population. Structure-explaining models tend to be less sensitive to policy scenarios because behavior is not represented explicitly in the model. Behavioral models, in contrast, aim at modeling the decision-making process of households, businesses, developers, among others, that may result in structural changes.")]),e._v(" "),a("h3",{attrs:{id:"bid-rent-or-discrete-choice-approach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bid-rent-or-discrete-choice-approach"}},[e._v("#")]),e._v(" Bid-rent or discrete choice approach")]),e._v(" "),a("p",[e._v('A classic distinction in land use models is the bid-rent approach and the discrete-choice ap-proach. The bid-rent theory was first proposed by Alonso<ref name=alonso1960">Alonso, W. (1960) A theory of the urban land market. In: Papers and Proceedings of the Regional Science Association, Vol. 6, No. 1, pp. 149-157.'),e._v(". According to this theory, every actor on the land use market is making bids for a piece of land, and the bidder with the highest offer gets the land. Because of transportation costs, actors are willing to make higher bids for land in more central locations. Because most office firms value transportation costs more than most households, the office employment makes the higher bid in the city center, whereas households bid higher in the suburbs. The discrete-choice theory commonly calculates "),a("a",{attrs:{href:"Utility"}},[e._v("utilities")]),e._v(" used to model decisions. The most popular discrete-choice approach is the "),a("a",{attrs:{href:"Choice_Models"}},[e._v("Logit Model")]),e._v(", developed by Domencich and McFadden"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn12",id:"fnref12"}},[e._v("[12]")])]),e._v(". Households, firms, and developers make choic-es among a finite set of alternatives. The utility of every choice is used to select one alternative; the higher the utility of a given alternative, the greater the probability this alternative will be selected. Not everyone chooses the perfect solution, but some deviation from the optimum distribution is implemented.")]),e._v(" "),a("p",[e._v("An advantage of the bid-rent approach is that prices are simulated endogenously in the bidding process. A well-calibrated model generates realistic prices that represent well the highest bid made for every location. To reach the equilibrium price, the model needs to iterate until equilibrium prices are found and no one is willing to make a higher bid for any location. The bid-rent approach assumes market transparency and users who maximize their profit. The discrete-choice approach requires an additional land-price model, as prices are not updated automatically. Limited information is introduced explicitly in the discrete-choice approach by "),a("a",{attrs:{href:"Choice_Models"}},[e._v("logit models")]),e._v(": owing to the lack of time and money to analyze all alternatives as well as the result of personal preferences, habits, and prejudices, some users make seemingly non optimal choices in "),a("a",{attrs:{href:"Choice_Models"}},[e._v("logit models")]),e._v(", which some argue is more realistic than the equilibrium outcome of bid-rent approaches. Overall, actors in the discrete-choice approach aim to satisfy their needs and not to maximize their profits.")]),e._v(" "),a("p",[e._v("Martinez"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn13",id:"fnref13"}},[e._v("[13]")])]),e._v(") has shown that the two approaches lead to similar model results. As a rule of thumb, bid-rent approaches work best in markets that are highly competitive and transparent. Discrete-choice approaches work better in markets that react with some time lag and in which users have to make decisions at a certain level of uncertainty.")]),e._v(" "),a("h3",{attrs:{id:"aggregate-or-microscopic-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-or-microscopic-simulation"}},[e._v("#")]),e._v(" Aggregate or microscopic simulation")]),e._v(" "),a("p",[e._v("The third characteristic analyzed in this context is the distinction between aggregate and microsimulation land use models. Aggregate models cluster actors into certain groups, such as zonal households by household type or firms by industry type. All actors in each group are assumed to have homogenous preferences. With a smaller number of groups, aggregate models store data efficiently and tend to have shorter run times. If more detail is added to the model, the handling of many groups may become cumbersome, and a disaggregated approach may become more appropriate. Disaggregate models store socio-economic data in a "),a("a",{attrs:{href:"Population_Synthesis"}},[e._v("synthetic population")]),e._v(" that defines every individual separately (usually, the unit of analysis is a household). Orcutt "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn14",id:"fnref14"}},[e._v("[14]")])]),e._v(" introduced microsimulation in 1960. Ever since, land use, "),a("a",{attrs:{href:"Activity_Based_Models"}},[e._v("travel demand")]),e._v(" and network models have been developed that simulate every actor individually. The great advantage of microsimulation is the explicit simulation of the interaction between individuals. Hägerstrand "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn15",id:"fnref15"}},[e._v("[15]")])]),e._v(" proved in his theory of spatial diffusion how innovations are spread from a single actor to other actors who live in spatial proximity. Individuals who received the innovation become a sender themselves, further spreading this innovation at the microscopic level. Nobel Prize laureate Schelling "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn16",id:"fnref16"}},[e._v("[16]")])]),e._v(" showed with the self-forming neighborhood model how microscopically simulated households choose more segregated locations than the aggregate segregation desire would suggest.")]),e._v(" "),a("p",[e._v("Microsimulation models allow storing complex data sets more efficiently. Often, microscopic approaches are easier to communicate, as describing the behavior of single actors is less abstract than describing the homogenous behavior of groups. Because microscopic models simulate individual interaction explicitly, model results tend to be more coherent with urban theory.")]),e._v(" "),a("p",[e._v("However, model developments focused on adding ever more detail do not lead to the best models. By adding detail, model run times may suffer and in some cases the complexity of the model may exceed time and budget allocated to the model development. Microsimulation models require a random number generator to simulate choices. With different random numbers in each model run, the results in every run are slightly different due to the stochastic variation. This difference is insignificant if a very large number of actors are simulated (such as a location choice of 1 million households). Stochastic variation makes model output invalid if the output is analyzed at a detailed level (such as location behavior of a hundred households of household type 1 in neighborhood A), as the stochastic variation may exceed the scenario impact.")]),e._v(" "),a("h2",{attrs:{id:"further-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-materials"}},[e._v("#")]),e._v(" Further Materials")]),e._v(" "),a("p",[e._v("TMIP provides a website with further materials on land use modeling available at "),a("a",{attrs:{href:"http://tmiponline.org/Clearinghouse/Subject-Category/Land-use.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://tmiponline.org/Clearinghouse/Subject-Category/Land-use.aspx"),a("OutboundLink")],1),e._v(", including conference proceedings and published reports on this topic. An excellent introduction into land use modeling has been provided in an eight-part TMIP webinar, which is available at "),a("a",{attrs:{href:"http://tmiponline.org/Clearinghouse/Items/20110210_-_Forecasting_Land_Use_Activities_1_-_The_Evolving_State_of_the_Practice.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://tmiponline.org/Clearinghouse/Items/20110210_-_Forecasting_Land_Use_Activities_1_-_The_Evolving_State_of_the_Practice.aspx"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Hansen, Walter G. (1959) How accessibility shapes land use. In: Journal of the American Institute of Planners. Vol. 25. Pages 73-76 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("Kreibich, Volker (1978) The successful transportation system and the regional planning problem: an evaluation of the Munich rapid transit system in the context of urban and regional planning policy. In: Transportation. Vol. 7. Pages 137-145 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Wegener, Michael (2004): Overview of Land use Transport Models. In: D. A. Hensher, K. J. Button, K. E. Haynes and P. R. Stopher (Eds.) "),a("em",[e._v("Handbook of Transport Geography And Spatial Systems")]),e._v(", vol. 5, Handbooks in Transport. Edited by D. A. Hensher and K. J. Button. Amsterdam: Elsevier. 127-146. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("p",[e._v("Conder, Sonny and Keith Lawton (2002) Alternative Futures for Integrated Transportation and Land-Use Models Contrasted with Trend-Delphi Models. In: "),a("em",[e._v("Transportation Research Record: Journal of the Transportation Research Board")]),e._v(" No. 1805. Pages 99-107. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[a("p",[e._v("Gregor, Brian (2009) GreenSTEP Model Documentation. Oregon Department of Transportation, Salem. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[a("p",[e._v("Herbert, John D. and Benjamin H. Stevens (1960) A model for the distribution of residential activity in urban areas. Journal of Regional Science 2: 21-36. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[a("p",[e._v("Forrester, Jay W. (1969) Urban Dynamics. Cambridge (Massachusetts): The M.I.T. Press. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[a("p",[e._v("Lowry, Ira S. (1964) A Model of Metropolis. Memorandum RM-4035-RC. Santa Monica: Rand Corporation. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref9"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[a("p",[e._v("Lee Jr., Douglass B. (1973) Requiem for Large-Scale Models. In: Journal of the American Institute of Planners. Vol. 39 (3). 163-178 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref10"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn11"}},[a("p",[e._v("Wegener (2009): From Macro to Micro – How Much Micro is too Much? Paper presented at the International Seminar on Transport Knowledge and Planning Practice at the University of Amsterdam, 14-16 October 2009. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref11"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn12"}},[a("p",[e._v("Domencich, T.A. and D. McFadden (1975) Urban travel demand: a behavioral analysis. North-Holland Publishing, Amsterdam. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref12"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn13"}},[a("p",[e._v("Martinez, F.J. (1992) The bid-choice land-use model: an integrated economic framework. In: Environment and Planning A, Vol. 24, No. 6, pp. 871-885. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref13"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn14"}},[a("p",[e._v("Orcutt, G.H. (1960) Simulation of economic systems. In: American Economic Review, Vol. 50, No. 5, pp. 893-907. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref14"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn15"}},[a("p",[e._v("Hägerstrand, T. (1967) Innovation diffusion as a spatial process. The University of Chicago Press, Chicago. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref15"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn16"}},[a("p",[e._v("Schelling, T.C. (1978) Micromotives and macro behavior. W. W. Norton & Company, New York. Pages 147 ff. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref16"}},[e._v("↩︎")])])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);