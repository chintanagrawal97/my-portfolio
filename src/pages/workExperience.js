import React from 'react'
import Layout from '../components/Layout'
import Resume from '../components/Resume'
import './portfolio.scss'

const ResumePage = () => (
  
    
   
	<Layout activePage="resume">
          <main className="portfolio">
		<Resume>
			
				<p>
					Here's an overview of some of the things I've worked on
					since I started building software for the web way back in
					2009. For more details, download my resume as a PDF, or
					check out some of my code on GitHub!
				</p>
				
			
			<Resume.Position
				name="Amazon Web Services"
				link="https://aws.amazon.com/"
				start="July 2019"
			>
				<Resume.Role name="Big Data Cloud Associate" />
				<Resume.Description>
					<p>
					 I help customers with technical engagements by troubleshooting their isssues and technical guidance on the applicability, limitations, and trade offs between a wide set of AWS Big Data Technologies. 
					 I coordinatre with Account managers and Solution Architects in fixing issues related to services like EMR , Glue , Athena , DynamoDb , Redshift which also include understanding bigger pictures of all of our AWS services. 
					</p>
				</Resume.Description>
			</Resume.Position>
		
			<Resume.Position
				name="Amazon Web Services"
				link="https://aws.amazon.com/"
				start="February 2019"
				end="June 2019"
			>
				<Resume.Role
					name="Cloud Solution Intern"
					start="July 2018"
					end="May 2019"
				/>
				<Resume.Description>
					<p>
					Created an ETL pipelines using AWS Glue (Spark) to load data into Postgresql database from s3.
					Wrote SQL queries to analyze data and make relevant report as per the business requirement.
					Development of ‘Availability Management’ Tool
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Brainnwave"
				link="https://www.brainnwave.com"
				start="October 2018"
				end="May 2019"
			>
				<Resume.Role name="Senior Software Engineer" />
				<Resume.Description>
					<p>
						UI engineer building a business intelligence and
						analysis platform. Part-time position alongside
						full-time job at FanDuel.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="IIT Bhubaneshwar"
				link="https://www.iitbbs.ac.in/profile.php/nbpuhan/"
				start="May 2018"
				end="June 2018"
			>
				<Resume.Role name="Research Intern" />
				<Resume.Description>
					<p>
						I worked under the mentorship of Dr. Niladri Bihari Puhan. 
						Implemented and explored the performance of various Convolutional Neural Network (CNN) architectures for Image Classification
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Midnight Sun"
				start="August 2013"
				end="April 2015"
			>
				<Resume.Description>
					<p>
						Working with my partner in our spare time—we developed a
						real-time multiplayer online game and managed the
						community which grew around it.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position name="Education" link="http://www.jiit.ac.in/" subtext="Jaypee Institute of Information Technology">
				<Resume.Role
					name="B.Tech Electronis & Communication Engineering"
					start="June 2015"
					end="June 2019"
				/>
			</Resume.Position>
		</Resume>
        </main>
	</Layout>
     
)

export default ResumePage
