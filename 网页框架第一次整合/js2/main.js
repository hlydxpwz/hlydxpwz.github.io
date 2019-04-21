




function main0(){
	
}


function main1(){
	 console.log("1")
	
	   
						
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");

			var circles1 =d3.selectAll("circle")
			    .data(data)
			  circles
				.enter()
			    .append("circle")
			    .merge(circles1)
				.attr("cx", function(d) { 
					return xScale(+d.x); 
				})
				.attr("cy", function(d) {
					return yScale(+d.y);
				})
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(400) 
				.attr("fill","#e38781") 
				.attr("r","7") 
				 
        
				svg.append("text")
					.attr("id", "title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("100个点表示全部论文的100%");

			
		});
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>人民币</div>" 
				)}

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
};




function main2(){

	  
									
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");
			
			var circles2 = d3.selectAll("circle")
					         .data(data); 
					
			 circles2.enter()
					 .append("circle")
					 .merge(circles2)		
				     .attr("cx", function(d) { 
					return xScale(+d.x); 
				})
					.attr("cy", function(d) {
						return yScale(+d.y);
					})
					.attr("r","7") 
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(400) 
					.attr("fill",function(d) {
							if(d.yinyong == "1"){return "rgba(228,58,63,1)"}
							else {return "#e38781"}})
				
               circles2
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();

		});
		
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null) 
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}

function main3(){
	 
	   console.log("3")
				
						
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));

			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");

					var circles3 = d3.selectAll("circle")
					.data(data); 
					
				 circles3.enter()
					.append("circle")
					.merge(circles3)		
				   .attr("cx", function(d) { 
					return xScale(+d.x); 
				})
				.attr("cy", function(d) {
					return yScale(+d.y);
				})
				.attr("r","7") 
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(500) 
				.attr("fill",function(d) {
						if(d.yinyongbiye == "1"){return "rgba(0,0,0,0.5)"}
						else if (d.yinyong == "1" ){return "rgba(228,58,63,1)"}
						else {return "rgba(228,58,63,0.7)"}
						})  
				
               circles3
					.exit()
					.transition()
					.duration(400)
					.style("opacity", 0)
					.remove();
		
		});


   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}


 


function main4(){
	
	 console.log("4")
						
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));

			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");

				var circles4 = d3.selectAll("circle")
				                 .data(data); 
					
				 circles4.enter()
					.append("circle")
					.merge(circles4)		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				})
				    .attr("cy", function(d) {
					return yScale(+d.y);
				})
			     
					.attr("r","7") 
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(500) 
					.attr("fill",function(d) {
							if(d.biye == "1"){return "rgba(0,0,0,0.8)"}
							else {return "rgba(228,58,63,0.7)"}
							})  
				
               circles4
					.exit()
					.transition()
					.duration(400)
					.style("opacity", 0)
					.remove();
		
		});


   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}

function main5(){
	  console.log("5")
	   
						
		d3.csv("juzhen.csv", function(data) {
                console.log(data)
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));

			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");

				var circles5 = d3.selectAll("circle")
				                 .data(data); 
								 
				//只剩4个有颜色
				 circles5.enter()
					.append("circle")
					.merge(circles5)		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				  })
				    .attr("cy", function(d) {
					return yScale(+d.y);
				   })
					.attr("r","7") //这三段有用的，不然在此处刷新的话就不能得到预期效果
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(500) 
					.attr("fill",function(d) {
							if(d.biye == "1"){return "rgba(0,0,0,0.8)"}
							else {return "rgb(255,255,255)"}
							})  
				
               circles5
					.exit()
					.transition()
					.duration(400)
					.style("opacity", 0)
					.remove();
					
		//	放大	
			circles5
				.transition()
				.delay(600)
		        .duration(400) 
				.attr("r","20") 
				.attr("cx", function(d) { 
					return xScale(+d.fangdax); 
				  })
			    .attr("cy", function(d) {
					return yScale(+d.fangday);
				   })
			
				
			//都归到同一个位置	
            circles5.transition()
					.delay(1000)
					.duration(1)
					.attr("cx",function(d){
						return xScale(d.fangdax2)})
		            .attr("cy",function(d){
						return yScale(d.fangday2)
						})
					.attr("fill","rgb(0,0,0)")
			
			
			//颜色消失		   			
				 circles5  
					.transition()
					.delay( 1400)
					.duration(600) 	
				    .attr("fill","rgb(255,255,255)") 
					
		 circles5  
					.transition()
					.delay(function(d) { 
					return d.f * 50+1500})
					.duration(750) 		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				  })
				    .attr("cy", function(d) {
					return yScale(+d.y);
				   })
					.attr("r","7") 
					.attr("fill","rgba(0,0,0,0.8)")  
					
					
			
		});
		
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        } 
	  
	
		
	  
	
}
function main6(){
	 console.log("1")
	   

d3.csv("zhexian.csv", function(error, data) {
            if (error) throw error; 
       
            data.forEach(function(d){
				        return d.year = parseTime(d.year);
						return d.one1 = +d.one1;
						return d.one2 = +d.one2;
						}
			);

									
			 var line1 = d3.line()
			                    .curve(d3.curveCardinal)
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.one1)});
			var line2 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.one2)});
									
		
            xScale2.domain(d3.extent(data,function(d){
				                    return d.year}
				));
			var mymax1 = d3.max(data,function(d){
				return d.one2})

            yScale.domain([0,mymax1+15]);

            // Line:
			  svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
			svg2.select(".line1")
				.transition()
				.delay(function(d, i) { //delay: just...delay,延迟
					return i * 100;
				})
				.duration(1000)	
                .attr("d", line1)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2);
				
				 svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line2")
				
			svg2.select(".line2")
				.transition()
				.duration(1000)	
                .attr("d", line2)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2);

			
			  
			  
            svg2.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
          svg2.append("g")
			   .attr("class","y axis")
			  
		 svg2.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis2);

	     svg2.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis); 
			   
           var theight = height + 40 ;
		   
           svg2.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
                .attr("y", theight)
				.attr("x", "300")
                .text("年份");
				
			svg2.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
				.attr("transform","rotate(-90)")
                .attr("x",-theight/2)
				.attr("y", "-30")
                .text("百分比")
				
			
        });
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>人民币</div>" 
				)}

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
		
		}

function main7(){
	console.log("7")
	
	 d3.csv("zhexian.csv", function(error, data) {
            if (error) throw error; 
       
            data.forEach(function(d){
				        return d.year = parseTime(d.year);
						return d.two1 = +d.two1;
						return d.two2 = +d.two2;
						}
			);
          


									
			 var line3= d3.line()
			                    .curve(d3.curveCardinal)
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.two1)});
			var line4 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.two2)});
									
		
            xScale2.domain(d3.extent(data,function(d){
				                    return d.year }
				));
			var mymax1 = d3.max(data,function(d){
				return d.two1})

            yScale.domain([0,25]);

            // Line:
			 svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
		     svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line2")
				
				
				
			var selectedline1 = d3.select(".line1")
		    var selectedline2 = d3.select(".line2")
			
           selectedline1
						   .transition()
						   
						    .duration(1000)
						   // .ease(d3.easeLinear)
						   .attr("d",line3)
						  //  .attr("class", "line1")
						   .attr("stroke","steelblue")
						   .attr("fill","none")
						   .attr("stroke-width",2)
						  

			  
			selectedline2
						   .transition()
							.duration(1000)
							//.ease(d3.easeLinear)
						   .attr("d",line4)
						   //.attr("class", "line2")
						   .attr("stroke","steelblue")
						   .attr("fill","none")
						   .attr("stroke-width",2)
           
		  
			
			   
           var theight = height + 40 ;
		   
           svg2.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
                .attr("y", theight)
				.attr("x", "300")
                .text("年份");
				
			svg2.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
				.attr("transform","rotate(-90)")
                .attr("x",-theight/2)
				.attr("y", "-30")
                .text("百分比")
			
			 svg2.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
        svg2.append("g")
			   .attr("class","y axis")
				
		svg2.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis2);

	     svg2.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis);	
			
        });
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null) 
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}

