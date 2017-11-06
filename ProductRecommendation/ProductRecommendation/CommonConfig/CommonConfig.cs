using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProductRecommendation.CommonConfig
{
    /// <summary>
    /// 
    /// </summary>
    public static class CommonConfig
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="config"></param>
        public static void UseCorsConfig(this HttpConfiguration config)
        {
            //ToDo: This needs to be configurable, it should not be enable for all origins
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
        }
    }
}