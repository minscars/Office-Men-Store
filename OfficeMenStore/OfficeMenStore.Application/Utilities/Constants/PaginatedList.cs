using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Utilities.Constants
{
    public class PaginatedList<T>
    {
        public int TotalRecord { get; set; }
        public int PageNumber { get; set; }
        public T? Data { get; set; }
        public PaginatedList(T? resultData)
        {
            Data = resultData;
        }
    }
}
