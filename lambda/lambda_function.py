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
                "firstname": "Alice",
                "lastname": "Johnson",
                "photo": "https://example.com/photos/alice.jpg",
                "location": "New York, NY",
                "birthday": "1990-03-25",
                "contact": {
                    "email": "alice.johnson@example.com",
                    "phone": "555-123-4567"
                },
                "projects": ["Project Alpha", "Project Beta"],
                "team": "Team Innovators"
                },
                {
                "id": "2",
                "firstname": "Bob",
                "lastname": "Smith",
                "photo": "https://example.com/photos/bob.jpg",
                "location": "Los Angeles, CA",
                "birthday": "1987-07-14",
                "contact": {
                    "email": "bob.smith@example.com",
                    "phone": "555-987-6543"
                },
                "projects": ["Project Gamma", "Project Delta"],
                "team": "Team Visionaries"
                },
                {
                "id": "3",
                "firstname": "Carol",
                "lastname": "Lee",
                "name": "Carol Lee",
                "photo": "https://example.com/photos/carol.jpg",
                "location": "Chicago, IL",
                "birthday": "1995-05-20",
                "contact": {
                    "email": "carol.lee@example.com",
                    "phone": "555-654-3210"
                },
                "projects": ["Project Epsilon", "Project Zeta"],
                "team": "Team Innovators"
                },
                {
                "id": "4",
                "firstname": "David",
                "lastname": "Brown",
                "photo": "https://example.com/photos/david.jpg",
                "location": "San Francisco, CA",
                "birthday": "1992-09-10",
                "contact": {
                    "email": "david.brown@example.com",
                    "phone": "555-321-7654"
                },
                "projects": ["Project Theta", "Project Iota"],
                "team": "Team Pioneers"
                },
                {
                "id": "5",
                "firstname": "Ella",
                "lastname": "Green",
                "photo": "https://example.com/photos/ella.jpg",
                "location": "Austin, TX",
                "birthday": "1993-01-30",
                "contact": {
                    "email": "ella.green@example.com",
                    "phone": "555-789-1230"
                },
                "projects": ["Project Kappa", "Project Lambda"],
                "team": "Team Visionaries"
                },
                {
                "id": "6",
                "firstname": "Frank",
                "lastname": "White",
                "photo": "https://example.com/photos/frank.jpg",
                "location": "Seattle, WA",
                "birthday": "1988-12-15",
                "contact": {
                    "email": "frank.white@example.com",
                    "phone": "555-456-7890"
                },
                "projects": ["Project Mu", "Project Nu"],
                "team": "Team Innovators"
                },
                {
                "id": "7",
                "firstname": "Grace",
                "lastname": "Hall",
                "photo": "https://example.com/photos/grace.jpg",
                "location": "Boston, MA",
                "birthday": "1991-04-22",
                "contact": {
                    "email": "grace.hall@example.com",
                    "phone": "555-567-8901"
                },
                "projects": ["Project Xi", "Project Omicron"],
                "team": "Team Pioneers"
                },
                {
                "id": "8",
                "firstname": "Henry",
                "lastname": "Adams",
                "photo": "https://example.com/photos/henry.jpg",
                "location": "Denver, CO",
                "birthday": "1989-06-18",
                "contact": {
                    "email": "henry.adams@example.com",
                    "phone": "555-678-9012"
                },
                "projects": ["Project Pi", "Project Rho"],
                "team": "Team Visionaries"
                },
                {
                "id": "9",
                "firstname": "Ivy",
                "lastname": "Clark",
                "photo": "https://example.com/photos/ivy.jpg",
                "location": "San Diego, CA",
                "birthday": "1994-11-05",
                "contact": {
                    "email": "ivy.clark@example.com",
                    "phone": "555-789-0123"
                },
                "projects": ["Project Sigma", "Project Tau"],
                "team": "Team Innovators"
                },
                {
                "id": "10",
                "firstname": "Jack",
                "lastname": "King",
                "photo": "https://example.com/photos/jack.jpg",
                "location": "Miami, FL",
                "birthday": "1996-02-28",
                "contact": {
                    "email": "jack.king@example.com",
                    "phone": "555-890-1234"
                },
                "projects": ["Project Upsilon", "Project Phi"],
                "team": "Team Visionaries"
                },
                {
                "id": "11",
                "firstname": "Kelly",
                "lastname": "Martin",
                "photo": "https://example.com/photos/kelly.jpg",
                "location": "Portland, OR",
                "birthday": "1997-07-19",
                "contact": {
                    "email": "kelly.martin@example.com",
                    "phone": "555-901-2345"
                },
                "projects": ["Project Chi", "Project Psi"],
                "team": "Team Pioneers"
                },
                {
                "id": "12",
                "firstname": "Leo",
                "lastname": "Turner",
                "photo": "https://example.com/photos/leo.jpg",
                "location": "Atlanta, GA",
                "birthday": "1998-08-13",
                "contact": {
                    "email": "leo.turner@example.com",
                    "phone": "555-012-3456"
                },
                "projects": ["Project Omega", "Project Alpha"],
                "team": "Team Innovators"
                },
                {
                "id": "13",
                "firstname": "Mia",
                "lastname": "Scott",
                "photo": "https://example.com/photos/mia.jpg",
                "location": "Dallas, TX",
                "birthday": "1993-03-17",
                "contact": {
                    "email": "mia.scott@example.com",
                    "phone": "555-123-4567"
                },
                "projects": ["Project Beta", "Project Delta"],
                "team": "Team Visionaries"
                },
                {
                "id": "14",
                "firstname": "Noah",
                "lastname": "Morris",
                "photo": "https://example.com/photos/noah.jpg",
                "location": "Charlotte, NC",
                "birthday": "1991-05-29",
                "contact": {
                    "email": "noah.evans@example.com",
                    "phone": "555-987-6543"
                },
                "projects": ["Project Gamma", "Project Epsilon"],
                "team": "Team Pioneers"
                },
                {
                "id": "15",
                "firstname": "Olivia",
                "lastname": "Hughes",
                "photo": "https://example.com/photos/olivia.jpg",
                "location": "Phoenix, AZ",
                "birthday": "1992-10-11",
                "contact": {
                    "email": "olivia.hughes@example.com",
                    "phone": "555-678-9012"
                },
                "projects": ["Project Zeta", "Project Theta"],
                "team": "Team Innovators"
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
