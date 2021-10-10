using System;
using System.Globalization;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if (dob.Date > today.AddYears(-age)) age--;
            return age;
        }

        public static string ToShamsi(this DateTime Date)
        {
            PersianCalendar p = new PersianCalendar();
            return p.GetYear(Date) + "/" + p.GetMonth(Date).ToString("00") + "/" + p.GetDayOfMonth(Date).ToString("00");
        }

        public static string ToShamsiWithTime(this DateTime? Date)
        {
            if (Date.Value == null) return "_";
            PersianCalendar p = new PersianCalendar();
            return p.GetYear(Date.Value) + "/" + p.GetMonth(Date.Value).ToString("00")
            + "/" + p.GetDayOfMonth(Date.Value).ToString("00")
            + "  " + p.GetHour(Date.Value).ToString("00") + ":" + p.GetMinute(Date.Value).ToString("00")
            + ":" + p.GetSecond(Date.Value).ToString("00");
        }

        public static DateTime ToMiladi(this string SDate)
        {
            SDate = SDate.Replace("/", "");
            PersianCalendar p = new PersianCalendar();
            int Year = int.Parse(SDate.Substring(0, 4));
            int Month = int.Parse(SDate.Substring(4, 2));
            int Day = int.Parse(SDate.Substring(6, 2));
            return new DateTime(Year, Month, Day, p);
        }
        public static DateTime ToMiladiWithTime(this string SDate)
        {
            SDate = SDate.Replace("/", "").Replace("  ", "").Replace(":", "");
            PersianCalendar p = new PersianCalendar();
            int Year = int.Parse(SDate.Substring(0, 4));
            int Month = int.Parse(SDate.Substring(4, 2));
            int Day = int.Parse(SDate.Substring(6, 2));
            int Hour = int.Parse(SDate.Substring(8, 2));
            int Minute = int.Parse(SDate.Substring(10, 2));
            int Second = int.Parse(SDate.Substring(12, 2));
            return new DateTime(Year, Month, Day, Hour, Minute, Second, p);
        }
    }
}


