import json
import boto3
import datetime

s3 = boto3.client('s3')
bucket_name = 'pedigoprojectbucketnew'
file_key = 'lambda-output.json'

def lambda_handler(event, context):
    data = {
        "users": [
            {
                "id": "1",
                "firstname": "John",
                "lastname": "Doe",
                "location": "News York, NY",
                "birthday": "January 15",
                "email": "johndoe@example.com",
                "phone_number": "123-456-7890",
                "projects_worked_on": ["Project Alpha", "Project Beta"],
                "team": "Team A",
                "length_of_service": "3 years 6 months",
                "about_me": "Passionate about technology and leadership."
            },
            {
                "id": "2",
                "firstname": "Jane",
                "lastname": "Doe",
                "location": "Los Angeles, CA",
                "birthday": "February 20",
                "email": "janesmith@example.com",
                "phone_number": "987-654-3210",
                "projects_worked_on": ["Project Gamma", "Project Delta"],
                "team": "Team B",
                "length_of_service": "2 years 1 month",
                "about_me": "Love coding and exploring new innovations."
            },
            {
                "id": "3",
                "firstname": "Alex",
                "lastname": "Smith",
                "location": "Chicago, IL",
                "birthday": "March 5",
                "email": "alicejohnson@example.com",
                "phone_number": "555-123-4567",
                "projects_worked_on": ["Project Zeta", "Project Theta"],
                "team": "Team C",
                "length_of_service": "4 years 3 months",
                "about_me": "Driven by data and problem-solving."
            },
            {
                "id": "4",
                "firstname": "Jack",
                "lastname": "Johnson",
                "location": "Dallas, TX",
                "birthday": "November 30",
                "email": "bobbrown@example.com",
                "phone_number": "444-555-6666",
                "projects_worked_on": ["Project Iota", "Project Kappa"],
                "team": "Team D",
                "length_of_service": "5 years 2 months",
                "about_me": "Focused on team building and continuous improvement."
            }
        ]
    }

    # Convert to JSON and upload to S3
    s3.put_object(
        Bucket=bucket_name,
        Key=file_key,
        Body=json.dumps(data),
        ContentType='application/json'
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Data stored in S3')
    }
