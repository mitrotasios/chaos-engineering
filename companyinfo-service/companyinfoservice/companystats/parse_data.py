def get_companies(*args):
    companies_list = set()

    for data_set in args:
        for entry in data_set:
            companies_list.add(entry["company"])

    return companies_list

def get_avg_ratings(companies_list, reviews_data):
    total_ratings = {}
    ratings = {}

    for entry in reviews_data:
        company = entry["company"]
        if company in companies_list:
            if company not in total_ratings:
                total_ratings[company] = [float(entry["rating"])]
            else:
                total_ratings[company].append(float(entry["rating"]))

    for company in total_ratings:
        ratings[company] = {}
        try:
            ratings[company]["average_rating"] = (sum(total_ratings[company])/len(total_ratings[company]))
            ratings[company]["number_of_ratings"] = len(total_ratings[company])
        except:
            ratings[company]["average_rating"] = None
            ratings[company]["number_of_ratings"] = 0
    
    return ratings

def get_avg_compensations(companies_list, compensations_data):
    compensations = {}

    for entry in compensations_data:
        company = entry["company"]
        job_title = entry["job_title"]
        if company in companies_list:
            compensations[company] = {}
            if job_title not in compensations[company]:
                compensations[company][job_title] = [int(entry["total_compensation"])]
            else:
                compensations[company][job_title].append(int(entry["total_compensation"]))

    for company in compensations:
        for job_title in compensations[company]:
            num_entries = len(compensations[company][job_title])
            average_compensation = sum(compensations[company][job_title]) / num_entries
            compensations[company][job_title] = {}
            try:
                compensations[company][job_title]["average_compensation"] = average_compensation
                compensations[company][job_title]["number_of_entries"] = num_entries
            except:
                compensations[company][job_title]["average_compensation"] = None
                compensations[company][job_title]["number_of_entries"] = 0
    
    return compensations