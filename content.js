var aero = new Vue({
	el: '#aero',
	data:
	{	
		ShowItem:{
		rbyR: 0.0,
		zeroCL: -1.0,
		d_CLbyd_alpha : 0.0,
		d_CLbyd_alpha_at_stall:0.100,
		MaxCL:0.5,
		MinCL:-0.2,
		CLincrement2Stall:0.100,
		MinCD:0.005,
		CL_at_MinCL:0.0,
		d_Cdbyd_CL2:0.010,
		Re:200000},
		
		items:[
			{
				rbyR: 0.0,
				zeroCL: -1.0,
				d_CLbyd_alpha : 0.0,
				d_CLbyd_alpha_at_stall:0.100,
				MaxCL:0.5,
				MinCL:-0.2,
				CLincrement2Stall:0.100,
				MinCD:0.005,
				CL_at_MinCL:0.0,
				d_Cdbyd_CL2:0.010,
				Re:200000
			}
		],
		testitems:"test",
	},
	method:
	{
		addItem: function()
		{
			this.items.push({ShowItem});
		},
	}
});