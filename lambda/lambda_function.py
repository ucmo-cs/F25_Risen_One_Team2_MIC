import json
import boto3
import datetime

s3 = boto3.client('s3')
bucket_name = 'riseonebiopagebucket'
file_key = 'lambda-output.json'

def lambda_handler(event, context):
    data = {
        "users": [
            {
                "id": "1",
                "firstname": "Alice",
                "lastname": "Johnson",
                "photo": "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/160499-homepage-news-feature-how-to-use-avatars-in-zoom-be-a-dog-or-a-fox-in-your-next-call-image1-m29p6ajuhp.png",
                "location": "New York, NY",
                "birthday": "03-25",
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
                "photo": "https://static.vecteezy.com/system/resources/previews/013/658/971/large_2x/hipster-man-avatar-glasses-beard-facial-hair-clip-art-icon-vector.jpg",
                "location": "Los Angeles, CA",
                "birthday": "07-14",
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
                "photo": "https://as1.ftcdn.net/v2/jpg/05/64/64/52/1000_F_564645238_f7B1c3D0lq4bWF3ZckTUC64Wp01PNCLO.jpg",
                "location": "Chicago, IL",
                "birthday": "05-20",
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
                "photo": "https://studystash.com/faces/face2.png",
                "location": "San Francisco, CA",
                "birthday": "09-10",
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
                "photo": "https://cdn4.iconfinder.com/data/icons/jobs-and-occupations-3/64/Fisherman-job-avatar-profession-occupation-fishing-512.png",
                "location": "Austin, TX",
                "birthday": "01-30",
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
                "photo": "https://th.bing.com/th/id/OIP.5Nr5OtyuX9auK0QvHGly_AHaHa?rs=1&pid=ImgDetMain",
                "location": "Seattle, WA",
                "birthday": "12-15",
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
                "photo": "https://img.freepik.com/premium-photo/male-female-profile-avatar-user-avatars-gender-icons_1020867-75099.jpg",
                "location": "Boston, MA",
                "birthday": "04-22",
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
                "photo": "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162027.jpg",
                "location": "Denver, CO",
                "birthday": "06-18",
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
                "photo": "https://cdn-icons-png.flaticon.com/256/3170/3170731.png",
                "location": "San Diego, CA",
                "birthday": "11-05",
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
                "photo": "https://miro.medium.com/max/630/1*c39T2lEFbkaE6pMc0rEMkw.png",
                "location": "Miami, FL",
                "birthday": "02-28",
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
                "photo": "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/49-1024.png",
                "location": "Portland, OR",
                "birthday": "07-19",
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
                "photo": "https://cdn4.iconfinder.com/data/icons/avatar-users/512/Avatar_Users2_19-512.png",
                "location": "Atlanta, GA",
                "birthday": "08-13",
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
                "photo": "https://cdn0.iconfinder.com/data/icons/diverse-cartoon-men-avatars/300/14-512.png",
                "location": "Dallas, TX",
                "birthday": "03-17",
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
                "photo": "https://cdn.iconscout.com/icon/free/png-256/avatar-368-456320.png",
                "location": "Charlotte, NC",
                "birthday": "05-29",
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
                "photo": "https://th.bing.com/th/id/OIP.S4pi9py-O7qBpOcMIHbdogHaHa?w=695&h=695&rs=1&pid=ImgDetMain",
                "location": "Phoenix, AZ",
                "birthday": "10-11",
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
