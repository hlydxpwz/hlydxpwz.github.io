
      var screen = $(".kuang").width()
      var windows = $(window).width()


   /*  var fullWidth = 500;
		var fullHeight = 450;
		var margin = {top:90, right:60, bottom:50, left:60}; */
		
    if (windows > 800){
			    var fullWidth = screen*0.42
			    var fullHeight = screen*0.38
				var margin = {top:screen*0.06, right:screen*0.07, bottom:screen*0.05, left:screen*0.07};
		    }else{
			    var fullWidth = screen*0.8
				var fullHeight = screen*0.9
				var margin = {top:screen*0.2, right:screen*0.05, bottom:screen*0.05, left:screen*0.05};
		    }


		
		
		var width = fullWidth - margin.left - margin.right;
		var height = fullHeight - margin.top - margin.bottom;

		var svg = d3.select("#tu")
					.append("svg") 
					.attr("width", fullWidth)
					.attr("height", fullHeight)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("width", width)
					.attr("height", height);
	
	    var xScale = d3.scaleLinear().range([ 0, width]);
		var yScale = d3.scaleLinear().range([ height, 0 ]); 
		var xAxis = d3.axisBottom(xScale).ticks(5);
		var yAxis = d3.axisLeft(yScale);
	    var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");
						
		
		var svg2 = d3.select("#tu3")
					.append("svg") 
					.attr("width", fullWidth)
					.attr("height", fullHeight)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("width", width)
					.attr("height", height);
		
	    var xScale2 = d3.scaleTime().range([ 0, width]);
		var xAxis2 = d3.axisBottom(xScale2)
					  .tickFormat(function(d) {
							return  formatTime(d);
						})
					  .ticks(5);

		 var parseTime = d3.timeParse("%Y"),
            formatTime = d3.timeFormat("%Y");
		



var w,h,ratio,ratio_h,totalFronts,front1,front2,front4,front5,front6,front7,front8,front9,front10;
w = $(window).width();
h = $(window).height();
totalFronts = 10;

//set changing point
front1 = $("#front1").offset().top+40 - h;//offset() 方法返回或设置匹配元素相对于文档的偏移,top 和 left两个值
front2 = $("#front2").offset().top+40 - h;
front4 = $("#front4").offset().top+40 - h;
front5 = $("#front5").offset().top+40 - h;
front6 = $("#front6").offset().top+40 - h;
front7 = $("#front7").offset().top+90 - h;
front8 = $("#front8").offset().top+40 - h;
front9 = $("#front9").offset().top+40 - h;
front10 = $("#front10").offset().top+40 - h;


console.log("w",w)
console.log("h",h)

//建立一个都是0的array，多少个front多少个0
var section = [];
for(var i=0; i<=totalFronts-1; i++){
	section[i]=0
}
// console.log(section)

//保证当前front是1
function changeSection(n){
	for(var i=0; i<=totalFronts-1; i++){
		if(i==n) {
			section[i]=1;
		} else {
			section[i]=0
		}
	}
}


//八条折线
eightlines()
			
function eightlines() {

	 if (windows > 800){
			    var fullwidth = screen*0.54
				var fullheight = screen*0.38
				var margin = {top:70, right:80, bottom:70, left:70};
		    }else{
			    var fullwidth = screen
				var fullheight = screen*0.9
				var margin = {top:screen*0.2, right:screen*0.23, bottom:screen*0.05, left:screen*0.15};
		    }

			

			var width = fullwidth - margin.left - margin.right;
			var height = fullheight - margin.top - margin.bottom;

			var timeParse = d3.timeParse("%Y");
			var timeFormat = d3.timeFormat("%Y");

			var xScale = d3.scaleTime()
								.range([ 0, width]);

			var yScale = d3.scaleLinear()
								.range([0, height]);

			var xAxis = d3.axisBottom(xScale)
							.tickFormat(function(d) {
								return timeFormat(d);
							})
							.ticks(5);
							

			var yAxis = d3.axisLeft(yScale)
							.ticks(5);


			var line = d3.line()
				.curve(d3.curveCardinal)
				.x(function(d) {
					return xScale(timeParse(d.year));
				})
				.y(function(d) {
					return yScale(+d.amount);
				})
				


			var svg = d3.select("#chart")
						.append("svg")
						.attr("width", fullwidth)
						.attr("height", fullheight)
						.append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			//var svg2 = d3.select("#list")
			//.append("svg");

			var radius = 3;
				

			var tooltip = d3.select("body")
                        .append("div")
                        .attr("class","tooltip");


			//Load data
			d3.csv("subject.csv", function(error, data) {
                if (error) throw error; 
 
 			console.log(data)

				var years = d3.keys(data[0]).slice(0, 11-1); 
				
				var dataset = [];

			
				data.forEach(function(d){

					var myEmissions = [];

					
					years.forEach(function(y){
						if (d[y]) { 
							myEmissions.push({
								myCountry:d.subject,
								year: y,
								amount: d[y]
								
							})
						}
					})

					dataset.push({
						country: d.subject,
						emissions: myEmissions,
						no1:d.no1,
						author1:d.author1,
						school1:d.school1,
						year1:d.year1,
						citation1:d.citation1,
						degree1:d.degree1,
						no2:d.no2,
						author2:d.author2,
						school2:d.school2,
						year2:d.year2,
						citation2:d.citation2,
						degree2:d.degree2,
						no3:d.no3,
						author3:d.author3,
						school3:d.school3,
						year3:d.year3,
						citation3:d.citation3,
						degree3:d.degree3,
					})
				})

				xScale.domain(
					d3.extent(years, function(d) {
						return timeParse(d);
					}));

				yScale.domain([
					d3.max(dataset, function(d) {
						return d3.max(d.emissions, function(d) {
							return +d.amount;
						});
					}),
					d3.min(dataset, function(d) {
						return d3.min(d.emissions, function(d) {
							return +d.amount;
						});
					})
				])
				.nice()
				.ticks(3);


				
				var groups = svg.selectAll("g")
					.data(dataset)
					.enter()
					.append("g");


				 var paths = groups.selectAll("path")
					.data(function(d) { 
						return [ d.emissions ]; 
					})
					.enter()
					.append("path")
					.attr("class","line")				
					.attr("d", line);	

				paths.attr("stroke", function(d){
					if (d.country == "农业科技" || d.country == "医药卫生科技" ) { return "#f5ce93"}//
					else {return "#f5ce93"}
					})
				.attr("stroke-width", function(d){
					if (d.country == "农业科技" || d.country == "医药卫生科技") { return "5px"}
					else {return "2px"}
					})	

				// paths.sort(function(a, b) {
				// 	return d3.ascending(+a.urban, +b.urban);
				// 	})
				// 	.attr("opacity", 1); 

				// svg2.append("text")
				// 	.attr("dx", "7px")
				// 	.attr("dy", "15px")
				//     .text("<p>该学科被引量前三名的论文情况："
				// 		"<br>标题: " 
				// 		"<br>机构："  
				// 		"<br>作者："  
				// 		"<br>发表年份："  
				// 		"<br>被引量：" 
				// 		"<br>学位水平：" 
				// 		"</p>")	

				groups.append("text")
					.attr("x", function(d) {
						if (d.emissions.length != 0) {
					  	var lastYear = d.emissions[d.emissions.length-1].year;
					  	return xScale(timeParse(lastYear));
					  }
					})
					.attr("y", function(d) {
						if (d.emissions.length != 0) {
					  	var lastAmount = d.emissions[d.emissions.length-1].amount;
					  	return yScale(lastAmount);
						}
					})
					.attr("dx", "7px")
					.attr("dy", "4px")
					.text(function(d) {
						if (d.emissions.length != 0) {
							var lastAmount = d.emissions[d.emissions.length-1].amount;
							if (+lastAmount == 67.1) {
								return "农业科技";
							}
						    else if(+lastAmount == 31.1) {
								return "医药卫生科技";
						    }
					}})
					.attr("class", "linename");
	
				
				groups.on("mouseover", mouseoverGroup)
					  .on("mouseout", mouseoutGroup)
					  .on("click",clickLine)

              //4. circles on lines
				
				var circles = groups.selectAll("circle")
					.data(function(d) { 
								return d.emissions; 
					})
					.enter()
					.append("circle");

				circles.attr("cx", function(d) {
						return xScale(timeParse(d.year));
					})
					.attr("cy", function(d) {
						return yScale(d.amount);
					})
					.attr("r", radius)
					.attr("fill","#a1a3a6")
					.attr("opacity", 0)
					// .attr("fill", function(d) {
					// 	if (d.emissions.length != 0) {
					// 		var lastAmount = d.emissions[d.emissions.length-1].amount;
					// 		if (+lastAmount == 93.1) {
					// 			return "red";
					// 		}
					// 		else {
					// 			return "#a1a3a6";
					// 	    }
					// }});

				circles
					.on("mouseover", mouseoverCircle)
					.on("mousemove", mousemoveCircle)
					.on("mouseout",	mouseoutCircle)
					;

				// 轴们
				svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);

				svg.append("g")
					.attr("class", "y axis")
					.call(yAxis);

				svg.append("text")
                 	.attr("class", "yTitle")
	                .attr("transform", "translate(0,-7)")
	                .style("text-anchor", "middle")
	                .attr("dy", "-10")
	                .text("被引用概率（%）");

            	svg.append("text")
                .attr("class", "xTitle")
                .attr("transform", "translate(" + (width+30) + " ," +
								(height+25) + ")")
                .style("text-anchor", "middle")
                .attr("dy", "-10")
                .text("年份");

				      var focus = svg.append("g")
			          .attr("class", "focus")

			    //3.2. mouseover on groups:
				
				
			function clickLine(d){
				// the "this" is the g parent node.  That means we can select it, and then select
				// the child nodes and style them as we want for the hover effect!
				d3.select(this).select("path").attr("id", "focused"); // overrides the class
				
				
				d3.selectAll(".interpret").remove()
				var interpret = d3.select("#list")
									.append("div")
									.attr("class", "interpret");
									
				interpret
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
               .html("<div>"+"<span>"+"第一名："+"</br>"+
								"《"+d.no1+"》"+"</br>"+
									"作者："+d.author1+"</br>"+
									"学位："+d.degree1+"</br>"+
									"单位："+d.school1+"</br>"+
									"出版年份："+d.year1+"</br>"+
									"被引次数："+d.citation1+"</br>"+
									"</span>"+"</div>"+
									"<div>"+"<span>"+"第二名："+"</br>"+
								"《"+d.no2+"》"+"</br>"+
									"作者："+d.author2+"</br>"+
									"学位："+d.degree2+"</br>"+
									"单位："+d.school2+"</br>"+
									"出版年份："+d.year2+"</br>"+
									"被引次数："+d.citation2+"</br>"+
									"</span>"+"</div>"+
									"<div>"+"<span>"+"第三名："+"</br>"+
								"《"+d.no3+"》"+"</br>"+
									"作者："+d.author3+"</br>"+
									"学位："+d.degree3+"</br>"+
									"单位："+d.school3+"</br>"+
									"出版年份："+d.year3+"</br>"+
									"被引次数："+d.citation3+"</br>"+
									"</span>"+"</div>")
				
				.style("top",10 )
                .style("left",30)
				
				
				
				
			}

	
			function mouseoverGroup(d){
				// the "this" is the g parent node.  That means we can select it, and then select
				// the child nodes and style them as we want for the hover effect!
				d3.select(this).select("path").attr("id", "focused"); // overrides the class
				d3.select(this).select("text").classed("hidden", false);  // show it if "hidden"
				d3.select(this).select("text").classed("bolder", true);
			}

			function mouseoutGroup(d){
				d3.select(this).select("path").attr("id", null); // remove the focus style
				d3.select(this).select("text").classed("bolder", false); // remove the bolding on label
			}

//4.2. mouseover on circles:

			function mouseoverCircle(d) {

				d3.select(this)
					.transition()
					.style("opacity", 1)
					.attr("fill","#bc944f")
					.attr("r", radius * 1.5);


				tooltip
					.style("display", null) 
					.html(
						"<p>" + d.myCountry +
						"<br>年份: " + d.year +
						"<br>被引用概率：" + d.amount+ "%</p>"
						);
			}

			function mousemoveCircle(d) {
				tooltip
					.style("top", (d3.event.pageY - 10) + "px" )
					.style("left", (d3.event.pageX + 10) + "px");
				}

			function mouseoutCircle(d) {
				d3.select(this)
					.transition()
					.attr("fill","#a1a3a6")
					.style("opacity", 0)
					.attr("r",3);
					

				d3.selectAll("path.line").classed("unfocused", true).classed("focused", false);

		    	tooltip.style("display", "none");  
		    }

			});
	}


// 硕博
	 if (windows > 800){
				    var fullwidth = screen*0.9
					var fullheight = screen*0.38
					var margin = {top:70, right:screen*0.22, bottom:70, left:screen*0.3};
			    }else{
				    var fullwidth = screen
					var fullheight = screen*0.9
					var margin = {top:screen*0.2, right:screen*0.15, bottom:screen*0.05, left:screen*0.15};
			    }



		


			var width = fullwidth - margin.left - margin.right;
			var height3 = fullheight - margin.top - margin.bottom;

			var timeParse = d3.timeParse("%Y");
			var timeFormat = d3.timeFormat("%Y");

			var xScale3 = d3.scaleTime()
								.range([ 0, width]);

			var yScale3 = d3.scaleLinear()
								.range([0, height3]);

			var xAxis3 = d3.axisBottom(xScale3)
							.tickFormat(function(d) {
                                if(timeFormat(d)!="2008"){
                                   
                             return timeFormat(d);}
                            })
							.ticks(15);
							

			var yAxis3 = d3.axisLeft(yScale3)
							.ticks(5);

			var svg3 = d3.select("#shuobo")
						.append("svg")
						.attr("width", fullwidth)
						.attr("height", fullheight)
						.append("g")
						.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var radius = 5;
				

			var tooltip = d3.select("body")
                        .append("div")
                        .attr("class","tooltip");

			//Load data
			d3.csv("line-shuobo.csv", function(error, data) {
                if (error) throw error; 
 
 			console.log(data)

				var years = d3.keys(data[0]).slice(0, 12-1); 
				
				var dataset = [];

			
				data.forEach(function(d){

					var myEmissions = [];

					
					years.forEach(function(y){
						if (d[y]) { 
							myEmissions.push({
								myCountry:d.degree,
								year: y,
								amount: d[y]
							})
						}
					})

					dataset.push({
						country: d.degree,
						emissions: myEmissions
					})
				})

                
				xScale3.domain(
					d3.extent(years, function(d) {
						return timeParse(d);
					}));

               xAxis3 .tickFormat(function(d) {
                                if(timeFormat(d)!="2008"){
                                   
                             return timeFormat(d);}
                            })
                            .ticks(15);

				yScale3.domain([
					d3.max(dataset, function(d) {
						return d3.max(d.emissions, function(d) {
							return +d.amount;
						});
					}),
					d3.min(dataset, function(d) {
						return d3.min(d.emissions, function(d) {
							return +d.amount;
						});
					})
				])
				.nice()
				.ticks(3);
				
				var groups = svg3.selectAll("g")
					.data(dataset)
					.enter()
					.append("g");

				groups.append("text")
					.attr("x", function(d) {
						if (d.emissions.length != 0) {
					  	var lastYear = d.emissions[d.emissions.length-1].year;
					  	return xScale3(timeParse(lastYear));
					  }
					})
					.attr("y", function(d) {
						if (d.emissions.length != 0) {
					  	var lastAmount = d.emissions[d.emissions.length-1].amount;
					  	return yScale3(lastAmount);
						}
					})
					.attr("dx", "7px")
					.attr("dy", "4px")
					.text(function(d) {
						if (d.emissions.length != 0) {
							var lastAmount = d.emissions[d.emissions.length-1].amount;
							if (+lastAmount == 93.1) {
								return "博士";
							}
							else if(+lastAmount == 40.4) {
								return "硕士";
						    }
					}})
					.attr("class", "linelabel");
	
				
				groups.on("mouseover", mouseoverGroup)
					  .on("mouseout", mouseoutGroup)

			    var rects3 = groups.selectAll("rect")
					.data(function(d) { 
								return d.emissions; 
					})
					.enter()
					.append("rect");

				rects3.attr("x", function(d) {
						return xScale3(timeParse(d.year))-2;
					})
					.attr("y", function(d) {
						if(d.myCountry =="博士"){
						return yScale3(d.amount);}
						else{
							return 0}
					})
					.attr("class","rect1")
					.attr("width", function(d) {
						if(d.myCountry =="博士"){
						return 4}
						else{
							return 0}
					})
					.attr("height",function(d){
						if(d.year=="2009"){
							return yScale3(81.7)}
							 else if(d.year=="2010"){
							return yScale3(77.5)}
							 else if(d.year=="2011"){
							return yScale3(74.1)}
							 else if(d.year=="2012"){
							return yScale3(70.5)}
							 else if(d.year=="2013"){
							return yScale3(69.1)}
							 else if(d.year=="2014"){
							return yScale3(63.3)}
							 else if(d.year=="2015"){
							return yScale3(59.2)}
							 else if(d.year=="2016"){
							return yScale3(53.9)}
							 else if(d.year=="2017"){
							return yScale3(52.2)}
							 else if(d.year=="2018"){
							return yScale3(47.3)}
						}
					)
					.attr("fill","#f5ce93")

              //4. circles on lines
				
				
				var circles3 = groups.selectAll(".circles3")
					.data(function(d) { 
								return d.emissions; 
					})
					.enter()
					.append("circle");


				circles3
					.attr("cx", function(d) {
						return xScale3(timeParse(d.year));
					})
					.attr("cy", function(d) {
						return yScale3(d.amount);
					})
					.attr("r", radius)
					.attr("fill",function(d) {
						if(d.myCountry =="博士"){
						return "#bc944f"}
						else{
							return "#685e52"}
					})
					.attr("opacity", 1)
					.attr("class","circle3");
                

				circles3
					.on("mouseover", mouseoverCircle)
					.on("mousemove", mousemoveCircle)
					.on("mouseout",	mouseoutCircle);



				// 轴们
				svg3.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height3 + ")")
					.call(xAxis3);

				svg3.append("g")
					.attr("class", "y axis")
                    // .attr("transform", "translate(-40,0)")
					.call(yAxis3);



				svg3.append("text")
                 	.attr("class", "yTitle")
	                .attr("transform", "translate(0,-5)")
	                .style("text-anchor", "middle")
	                .attr("dy", "-10")
	                .text("被引用概率（%）");

            	svg3.append("text")
	                .attr("class", "xTitle")
	                .attr("transform", "translate(" + (width+30) + " ," +
								(height+47) + ")")
	                .style("text-anchor", "middle")
	                .attr("dy", "-10")
	                .text("年份");

				      var focus = svg3.append("g")
			          .attr("class", "focus")

			    //3.2. mouseover on groups:
	
			function mouseoverGroup(d){
				// the "this" is the g parent node.  That means we can select it, and then select
				// the child nodes and style them as we want for the hover effect!
				d3.select(this).select("path").attr("id", "focused"); // overrides the class
				d3.select(this).select("text").classed("hidden", false);  // show it if "hidden"
				d3.select(this).select("text").classed("bolder", true);
			}

			function mouseoutGroup(d){
				d3.select(this).select("path").attr("id", null); // remove the focus style
				d3.select(this).select("text").classed("bolder", false); // remove the bolding on label
			}

//4.2. mouseover on circles:

			function mouseoverCircle(d) {

				d3.select(this)
					.transition()
					.style("opacity", 1)
					.attr("fill",function(d) {
						if(d.myCountry =="博士"){
						return "#bc944f"}
						else{
							return "#685e52"}
					})
					.attr("r", radius * 1.5);


				tooltip
					.style("display", null) 
					.html(
						"<p>" + d.myCountry +
						"<br>年份: " + d.year +
						"<br>被引用概率：" + d.amount+ "%</p>"
						);
			}

			function mousemoveCircle(d) {
				tooltip
					.style("top", (d3.event.pageY - 10) + "px" )
					.style("left", (d3.event.pageX + 10) + "px");
				}

			function mouseoutCircle(d) {
				d3.select(this)
					.transition()
					.attr("fill",function(d) {
						if(d.myCountry =="博士"){
						return "#bc944f"}
						else{
							return "#685e52"}
					})
					.attr("opacity", 1)
					.attr("r", 5);

				d3.selectAll("path.line").classed("unfocused", true).classed("focused", false);

		    	tooltip.style("display", "none");  
		    }

			});
