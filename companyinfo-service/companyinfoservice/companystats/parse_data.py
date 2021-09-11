## Collections of helper functions to parse compensation and reviews data

def get_companies(*args):
    """
    Returns a list of unique companies reviewed or containing compensation information, 
    available in either the reviews or compensation service's databases.

    Arguments:
        *args (list): a list of company information (reviews data and/or compensation data)
    """
    companies_list = set()

    # Looping through datasets to store company names in the set
    for data_set in args:
        for entry in data_set:
            companies_list.add(entry["company"])

    return companies_list

def get_avg_ratings(companies_list, reviews_data):
    """
    Returns a dictionairy containing the average rating and misc. rating information for each company.

    Arguments:
        companies_list (list): list of unique company names
        reviews_data (list): list containing stored reviews
    """
    total_ratings = {}
    ratings = {}

    for entry in reviews_data:
        company = entry["company"]
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
    """
    Returns a dictionairy containing the average compensation per position (in form of a nested dictionairy) available at each company.

    Arguments:
        companies_list (list): list of unique company names
        compensations_data (list): list containing stored salary data
    """
    compensations_dict = {}

    for entry in compensations_data:
        company = entry["company"]
        job_title = entry["job_title"]
        if company not in compensations_dict:
            compensations_dict[company] = {}
        if job_title not in compensations_dict[company]:
            compensations_dict[company][job_title] = [int(entry["total_compensation"])]
        else:
            compensations_dict[company][job_title].append(int(entry["total_compensation"]))

    for company in compensations_dict:
        avg_compensations_list = []
        for job_title in compensations_dict[company]:
            num_entries = len(compensations_dict[company][job_title])
            print(compensations_dict[company][job_title])
            average_compensation = sum(compensations_dict[company][job_title]) / num_entries
            compensation_info_per_job = {}
            compensation_info_per_job["job_title"] = job_title
            try:
                compensation_info_per_job["average_compensation"] = average_compensation
                compensation_info_per_job["number_of_entries"] = num_entries
            except:
                compensation_info_per_job["average_compensation"] = None
                compensation_info_per_job["number_of_entries"] = 0
            avg_compensations_list.append(compensation_info_per_job)
        compensations_dict[company] = avg_compensations_list
    
    return compensations_dict