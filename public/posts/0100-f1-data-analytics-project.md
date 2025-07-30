---
title: "I started a F1 Data Analytics Project"
metaTitle: "I started a F1 Data Analytics Project"
metaDesc: "I started a F1 Data Analytics Project"
date: "2025-07-23"
category: "Formula 1"
---

I launched a project to apply data analytics on public Formula 1 data, combining two of the passions that drive me every day.

I want to answer the question: is it possible to forecast race pace of a particular driver/team based on the data from the stints during the free practices?

---

I started from the basics: reading the data from [openf1.org](https://openf1.org) and then funnel it to the laps done by a specific driver on a specific session.

You can see my first notebook in [GitHub](https://github.com/aleaugustog/f1-analytics/blob/main/exploratory/individual_stints.ipynb).

### Listing all meetings from 2025

I used Pandas to do all the data handling. I pulled the JSON directly from openf1.org to get all the available meetings (grand prix weekends) for 2025.

![Fetching meetings from openf1.org](/images/posts/0100-f1-data-analytics-project/screenshot1.png)

### Picking a session and driver

Once I picked up the 2025 British Grand Prix's `meeting_key`, I listed all sessions for that meeting, looking to find the Practice 2.

Then, I randomly selected **Esteban Ocon** to be the driver test subject.

### Listing the stints made by the picked driver in the picked session

I fetched the stint data from OpenF1's `/stints` endpoint.

I also added a `dict` mapping the names of the compounds (soft, medium, hard) to the corresponding tyre colors. You can learn the basics of the [F1 tyre coloring scheme](https://www.formula1.com/en/latest/article/the-beginners-guide-to-formula-1-tyres.61SvF0Kfg29UR2SPhakDqd) here.

![Fetching sessions from openf1.org](/images/posts/0100-f1-data-analytics-project/screenshot2.png)

### Getting lap data

Next, I read the lap data from OpenF1's `/laps` endpoint, filtering to those made by Esteban Ocon (the picked driver) during Practice 2 (the picked session).

![Fetching lap data from openf1.org](/images/posts/0100-f1-data-analytics-project/screenshot3.png)

### Relationship between lap and stint

Drivers go out to the track on a specific configuration, fuel load and tyre compound, so the teams can gather data from those combinations and come up with the best one for the race. Those sets of laps are called stints.

Think of it as a one-to-many relationship where many laps are run during a stint.

### Matching each lap to the corresponding stint

It's not as easy as each lap having a `stint_id` but stint data does contain a `lap_start` and `lap_end`. I joined the laps and stints dataframes using `lap_start` and `lap_end` and also took the opportunity to remove non-representative data: NaN lap times and out-of-pits laps.

![Joining lap and stint data from openf1.org](/images/posts/0100-f1-data-analytics-project/screenshot4.png)

### Analyzing the lap data

All I have done so far is gathering data. Now it's time to figure out how to interpret this data.

Something worth noting is that tyre compound is related to speed and durability. The scale goes soft, medium and hard: softer compounds provide better speed at the expense of less durability, meaning that you have to change tyres sooner and the time gained by running fast is lost when you enter the pits to change them.

My premise is that on race day teams will use medium and hard tyre compounds (they're required to use 2 different compounds in the course of 1 race). They usually avoid the soft compound because it doesn't last too long and it will likely require an extra pit stop compared to the other teams. A driver losses from 18 to 24 seconds in a pit stop, depending on the circuit (the length of the pitlane).

So, I wanted to visually understand Esteban Ocon's lap times during Practice 2 and the tyre compound those laps where done in.

![Displaying lap times from openf1.org](/images/posts/0100-f1-data-analytics-project/chart1.png)

### What's next?

Now that I became familiarized with OpenF1's data, I need to replicate this same approach but focusing more on the aggregated collective scenario: sure, I know one driver's lap times on specific tyre compounds but **how does this driver's lap times compare to others?**, **who had the better race pace?**.

Keep tuned to the next chapters of this journey.
